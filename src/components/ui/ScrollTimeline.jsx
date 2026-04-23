import { useEffect, useState, useRef, useCallback } from "react";

const SECTIONS_MAP = {
  Hero: "Overview",
  About: "About",
  Skills: "Skills",
  Projects: "Projects",
  Contact: "Contact",
};
const SECTIONS = Object.keys(SECTIONS_MAP);

const ScrollTimeline = ({ isDarkMode, showBlob = false }) => {
  const [activeSection, setActiveSection] = useState("Hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollFraction, setScrollFraction] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [docHeight, setDocHeight] = useState(document.documentElement.scrollHeight);

  // New states for interaction
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const activeSectionRef = useRef("Hero");
  const hideTimerRef = useRef(null);

  // Refs for drag calculation
  const dragStartY = useRef(0);
  const dragStartScrollY = useRef(0);

  // Keep window height up to date
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setDocHeight(document.documentElement.scrollHeight);
    };
    window.addEventListener("resize", handleResize);

    // Observe body size changes for instant page-switch detection
    const ro = new ResizeObserver(() => {
      setDocHeight(document.documentElement.scrollHeight);
    });
    ro.observe(document.body);

    return () => {
      window.removeEventListener("resize", handleResize);
      ro.disconnect();
    };
  }, []);

  // Detect section from scroll position reliably at any speed
  const detectSection = useCallback(() => {
    const mid = windowHeight * 0.4;
    let found = SECTIONS[0];
    for (const name of SECTIONS) {
      const el = document.querySelector(`[data-section="${name}"]`);
      if (!el) continue;
      if (el.getBoundingClientRect().top <= mid) found = name;
    }
    return found;
  }, [windowHeight]);

  // Main scroll handler
  useEffect(() => {
    const onScroll = () => {
      const scrollH = document.documentElement.scrollHeight;
      const docH = Math.max(1, scrollH - window.innerHeight);
      setScrollFraction(window.scrollY / docH);
      setDocHeight(scrollH);

      if (!showBlob) return;

      const section = detectSection();
      
      // Update active section
      if (section !== activeSectionRef.current) {
        activeSectionRef.current = section;
        setActiveSection(section);
      }

      // Show blobs
      setIsScrolling(true);

      // Auto-hide after 1 second of no scrolling
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        if (!isDragging) { // Don't hide if currently dragging
          setIsScrolling(false);
        }
      }, 1000); 
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initial sync on mount without triggering the 'scrolling' visible state
    const docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    setScrollFraction(window.scrollY / docH);
    if (showBlob) {
      const section = detectSection();
      activeSectionRef.current = section;
      setActiveSection(section);
    }
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, [showBlob, detectSection, isDragging]);

  // Handle Drag Start
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollY.current = window.scrollY;
    
    setIsScrolling(true);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);

    // Prevent text selection while dragging
    document.body.style.userSelect = "none";
  };

  // Handle Drag Move & End
  useEffect(() => {
    if (!isDragging) return;

    const handlePointerMove = (e) => {
      e.preventDefault();
      const deltaY = e.clientY - dragStartY.current;
      
      const docH = Math.max(1, document.documentElement.scrollHeight - windowHeight);
      const THUMB_HEIGHT = Math.max(160, windowHeight * 0.3);
      const TRACK_PADDING = 12;
      const maxTravel = Math.max(0, windowHeight - (TRACK_PADDING * 2) - THUMB_HEIGHT);
      
      // Convert physical screen movement to logical scroll distance
      const scrollRatio = maxTravel > 0 ? docH / maxTravel : 0;
      const newScrollY = dragStartScrollY.current + deltaY * scrollRatio;
      
      // Set the scroll directly; the onScroll listener will pick it up and update UI
      window.scrollTo(0, Math.max(0, Math.min(docH, newScrollY)));
      
      // Keep blob active
      setIsScrolling(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };

    const handlePointerUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = "";
      
      // Start auto-hide timer once user lets go
      hideTimerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging, windowHeight]);

  // Thumb metrics — dynamic height based on viewport/page ratio
  const thumbRatio = docHeight > 0 ? windowHeight / docHeight : 1;
  const TRACK_PADDING = 12;
  const trackHeight = windowHeight - (TRACK_PADDING * 2);
  const THUMB_HEIGHT = Math.max(40, Math.min(trackHeight * 0.5, trackHeight * thumbRatio));
  const maxTravel = Math.max(0, trackHeight - THUMB_HEIGHT);
  
  const thumbY = TRACK_PADDING + (scrollFraction * maxTravel);
  const thumbCenterY = thumbY + (THUMB_HEIGHT / 2);

  // Interactivity flags
  const isThumbActive = isHovered || isDragging;
  const needsScroll = docHeight > windowHeight + 20;

  return (
    <>
      {/* Custom Scrollbar Element */}
      {needsScroll && (
        <div
          className="fixed z-[60]"
          onPointerDown={handlePointerDown}
          onPointerEnter={() => setIsHovered(true)}
          onPointerLeave={() => setIsHovered(false)}
          style={{
            right: 6,
            top: thumbY,
            width: isThumbActive ? 10 : 6,
            height: THUMB_HEIGHT,
            backgroundColor: "#ea580c",
            borderRadius: 999,
            willChange: "top, width, box-shadow",
            boxShadow: isThumbActive ? "0 0 16px 2px rgba(234, 88, 12, 0.65)" : "none",
            transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.2s ease, box-shadow 0.2s ease",
            cursor: isDragging ? "grabbing" : "grab",
          }}
        />
      )}

      {/* Dynamic Section Blobs */}
      {showBlob && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            right: 22,
            top: thumbCenterY,
            willChange: "top"
          }}
        >
          {SECTIONS.map((sectionId) => {
            const isActive = isScrolling && activeSection === sectionId;
            
            return (
              <div
                key={sectionId}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "50%",
                  transform: `translateY(-50%) scale(${isActive ? 1 : 0.6})`,
                  padding: "10px 22px",
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#ea580c",
                  backgroundColor: isDarkMode
                    ? "rgba(20, 20, 20, 0.95)"
                    : "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(16px)",
                  boxShadow: isDarkMode
                    ? "0 4px 24px rgba(0,0,0,0.45)"
                    : "0 4px 24px rgba(0,0,0,0.07)",
                  opacity: isActive ? 1 : 0,
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease",
                  transformOrigin: "right center",
                  whiteSpace: "nowrap",
                }}
              >
                {SECTIONS_MAP[sectionId]}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default ScrollTimeline;
