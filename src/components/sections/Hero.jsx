import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight, Grip } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Reveal from "../ui/Reveal";
import MagneticButton from "../ui/MagneticButton";

const cores = [
  { id: 'core-ml', label: 'Machine Learning', x: 700, y: 100, color: '#f59e0b' }, // Amber (Yellow-Orange)
  { id: 'core-cv', label: 'Computer Vision', x: 1400, y: 150, color: '#ef4444' }, // Red
  { id: 'core-data', label: 'Data Engineering', x: 200, y: 500, color: '#facc15' }, // Bright Yellow
  { id: 'core-backend', label: 'Backend Systems', x: 900, y: 700, color: '#ea580c' }, // Deep Orange
  { id: 'core-db', label: 'Database Architecture', x: 1600, y: 600, color: '#eab308' }, // Gold
  { id: 'core-cloud', label: 'Cloud & DevOps', x: 300, y: 1100, color: '#e11d48' }, // Deep Rose/Red
  { id: 'core-frontend', label: 'Web Frontend', x: 1000, y: 1300, color: '#fb923c' }, // Light Orange
  { id: 'core-mobile', label: 'Mobile App Dev', x: 1700, y: 1200, color: '#dc2626' }, // Dark Red
];

const interCoreEdges = [
  { source: 'core-ml', target: 'core-cv' },
  { source: 'core-ml', target: 'core-data' },
  { source: 'core-data', target: 'core-backend' },
  { source: 'core-backend', target: 'core-db' },
  { source: 'core-backend', target: 'core-cloud' },
  { source: 'core-backend', target: 'core-frontend' },
  { source: 'core-frontend', target: 'core-mobile' },
  { source: 'core-db', target: 'core-data' },
  { source: 'core-cv', target: 'core-backend' },
];

const satellitesData = [
  // ML
  { parent: 'core-ml', label: 'PyTorch', radius: 100, speed: 20 },
  { parent: 'core-ml', label: 'TensorFlow', radius: 150, speed: 28 },
  { parent: 'core-ml', label: 'Scikit-Learn', radius: 200, speed: 15 },
  { parent: 'core-ml', label: 'NLP', radius: 250, speed: 35 },
  // CV
  { parent: 'core-cv', label: 'OpenCV', radius: 110, speed: 22 },
  { parent: 'core-cv', label: 'YOLO', radius: 160, speed: 30 },
  { parent: 'core-cv', label: 'Hugging Face', radius: 210, speed: 18 },
  // Data
  { parent: 'core-data', label: 'Python', radius: 100, speed: 24 },
  { parent: 'core-data', label: 'Pandas', radius: 150, speed: 32 },
  { parent: 'core-data', label: 'XGBoost', radius: 200, speed: 19 },
  // Backend
  { parent: 'core-backend', label: 'Node.js', radius: 120, speed: 20 },
  { parent: 'core-backend', label: 'Express', radius: 170, speed: 28 },
  { parent: 'core-backend', label: 'REST APIs', radius: 220, speed: 17 },
  { parent: 'core-backend', label: 'Microservices', radius: 270, speed: 36 },
  // DB
  { parent: 'core-db', label: 'MongoDB', radius: 110, speed: 22 },
  { parent: 'core-db', label: 'PostgreSQL', radius: 160, speed: 30 },
  { parent: 'core-db', label: 'Redis', radius: 210, speed: 18 },
  { parent: 'core-db', label: 'SQL', radius: 260, speed: 38 },
  // Cloud
  { parent: 'core-cloud', label: 'Docker', radius: 100, speed: 25 },
  { parent: 'core-cloud', label: 'AWS', radius: 150, speed: 33 },
  { parent: 'core-cloud', label: 'CI/CD', radius: 200, speed: 20 },
  // Frontend
  { parent: 'core-frontend', label: 'React', radius: 120, speed: 22 },
  { parent: 'core-frontend', label: 'JavaScript', radius: 170, speed: 30 },
  { parent: 'core-frontend', label: 'Tailwind', radius: 220, speed: 18 },
  // Mobile
  { parent: 'core-mobile', label: 'React Native', radius: 110, speed: 24 },
  { parent: 'core-mobile', label: 'Expo', radius: 160, speed: 32 },
];

const CoreNode = ({ core, satellitesData, theme, isDarkMode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleSystemEnter = () => {
    setIsHovered(true);
  };

  const handleSystemLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="absolute flex flex-col items-center justify-center pointer-events-auto" 
      style={{ left: core.x, top: core.y, transform: 'translate(-50%, -50%)', zIndex: isHovered ? 50 : 10 }}
      onMouseEnter={handleSystemEnter}
      onMouseLeave={handleSystemLeave}
    >
      <div 
        className="relative transition-transform duration-500 ease-out flex flex-col items-center justify-center group"
        style={{ transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
      >
        {/* Invisible hit area for full solar system */}
        <div className="absolute w-[360px] h-[360px] rounded-full z-0"></div>

        {/* Sun-like Core */}
        <div 
          className="relative rounded-full flex items-center justify-center z-10 cursor-pointer transition-all duration-500"
          style={{ 
            width: isHovered ? '28px' : '16px',
            height: isHovered ? '28px' : '16px'
          }}
        >
          {/* Toned-down white center */}
          <div className="absolute inset-[3px] bg-white/50 rounded-full z-20 shadow-none"></div>
          
          {/* Base Color Glow (Chromosphere) */}
          <div 
            className="absolute inset-[-4px] rounded-full z-10 opacity-40 transition-all duration-500" 
            style={{ backgroundColor: core.color, filter: 'blur(4px)', transform: isHovered ? 'scale(1.2)' : 'scale(1)' }}
          ></div>
          
          {/* Outer Corona Pulse */}
          <div 
            className="absolute inset-[-10px] rounded-full z-0 opacity-20 animate-pulse transition-all duration-500" 
            style={{ backgroundColor: core.color, filter: 'blur(8px)', transform: isHovered ? 'scale(1.3)' : 'scale(1)' }}
          ></div>
        </div>
        
        {/* Minimal Core Label */}
        <div className="mt-4 text-center z-10 pointer-events-none">
            <h3 className={`${theme.text} font-bold text-xs tracking-widest uppercase transition-all drop-shadow-md`}>
              {core.label}
            </h3>
        </div>

        {/* Orbital Rings (Visual Guide) */}
        {satellitesData.filter(s => s.parent === core.id).map((sat, idx) => (
          <div 
            key={`${core.id}-ring-${idx}`}
            className={`absolute top-1/2 left-1/2 rounded-full border transition-colors duration-500 ${isDarkMode ? 'border-white/10' : 'border-black/10'} ${isHovered ? (isDarkMode ? 'border-white/20' : 'border-black/20') : ''} -translate-x-1/2 -translate-y-1/2 pointer-events-none`}
            style={{ 
              width: `${sat.radius * 2.4}px`, 
              height: `${sat.radius * 2.4}px` 
            }}
          ></div>
        ))}

        {/* Orbiting Satellites (Skills) */}
        {satellitesData.filter(s => s.parent === core.id).map((sat, idx) => (
          <div key={`${core.id}-sat-${idx}`} className="absolute top-1/2 left-1/2 w-0 h-0 pointer-events-none z-20" style={{ animation: `orbit-spin ${sat.speed * 1.5}s linear infinite` }}>
            <div className="absolute" style={{ transform: `translateX(${sat.radius * 1.2}px) translateY(-50%)` }}>
              <div 
                className={`px-4 py-2 rounded-xl border ${theme.cardBorder} ${theme.cardBg} text-xs font-bold whitespace-nowrap transition-all shadow-md ${isHovered ? `${theme.text} shadow-xl ring-1 ring-orange-500/30` : theme.textMuted}`}
                style={{ animation: `anti-spin ${sat.speed * 1.5}s linear infinite` }}
              >
                {sat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = ({ theme }) => {
  const isDarkMode = theme.bg === "bg-[#0A0A0A]";
  const navigate = useNavigate();
  
  // Dragging & Panning State
  const [userPan, setUserPan] = useState({ x: -300, y: -100 }); // Center the graph initially
  const [userZoom, setUserZoom] = useState(0.8); // Zoom level
  const [idleOffset, setIdleOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  const dragStart = useRef({ x: 0, y: 0 });
  const requestRef = useRef();

  // Generate background nodes once
  const { bgNodes, bgEdges } = useMemo(() => {
    // Determine deterministic "randomness" so it doesn't change on re-render
    const pseudoRandom = (seed) => {
      let x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };

    const nodes = Array.from({ length: 50 }).map((_, i) => ({
      id: `bg-${i}`,
      x: pseudoRandom(i) * 2500 - 200, // wider spread to match expanded cores
      y: pseudoRandom(i + 100) * 2500 - 200,
      size: 1 + pseudoRandom(i + 200) * 2, // 1px to 3px
      pulseDur: 2 + pseudoRandom(i + 300) * 4, // 2s to 6s
    }));

    const edges = [];
    nodes.forEach((node, i) => {
      // Connect to next node to form a sparse web
      if (i < nodes.length - 1) edges.push({ source: node.id, target: nodes[i+1].id });
      // Randomly connect a few to the cores to anchor the web
      if (i % 6 === 0) edges.push({ source: node.id, target: cores[i % cores.length].id });
    });

    return { bgNodes: nodes, bgEdges: edges };
  }, []);

  const allNodes = [...cores, ...bgNodes];

  // Handle Dragging
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX - userPan.x, y: e.clientY - userPan.y };
    document.body.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    setUserPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    document.body.style.cursor = 'default';
  };

  const clickTimeoutRef = useRef(null);

  const handlePointerClick = (e) => {
    if (e.detail === 3) {
      // Triple click: Show full component (zoom out more)
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
        clickTimeoutRef.current = null;
      }
      setUserZoom(0.4);
      setUserPan({ x: -300, y: -100 }); // Recenter to the new default
    } else if (e.detail === 2) {
      // Double click: Toggle Zoom In from the new default
      clickTimeoutRef.current = setTimeout(() => {
        setUserZoom(prev => (prev <= 0.8 ? 1.3 : 0.8));
        clickTimeoutRef.current = null;
      }, 250);
    }
  };

  // Idle Animation
  useEffect(() => {
    if (isDragging) return;
    const animate = (time) => {
      setIdleOffset({
        x: Math.sin(time * 0.0002) * 50,
        y: Math.cos(time * 0.0003) * 40,
      });
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging]);

  const currentPan = { x: userPan.x + idleOffset.x, y: userPan.y + idleOffset.y };

  return (
    <section className="min-h-screen flex items-center px-6 relative py-20 overflow-hidden">
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes orbit-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes anti-spin {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
        .cursor-grab { cursor: grab; }
        .cursor-grabbing { cursor: grabbing; }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="order-2 lg:order-1 relative z-20 pointer-events-none">
          <div className="pointer-events-auto">
            <Reveal>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${theme.cardBorder} bg-black/50 backdrop-blur-md mb-6`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${theme.accentBg} animate-pulse`}
                ></span>
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${theme.textMuted}`}
                >
                  Available for Work
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] mb-8 ${theme.text} drop-shadow-2xl`}
              >
                Full-Stack <br />
                <span className={`${theme.accent} italic`}>AI Engineer.</span>
              </h1>
            </Reveal>

            <Reveal delay={400}>
              <p
                className={`max-w-lg text-lg md:text-xl leading-relaxed mb-10 ${theme.textMuted} drop-shadow-lg`}
              >
                I build full-stack systems and AI-driven applications — from
                scalable web platforms to machine-learning powered analytics and
                desktop tools.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="flex flex-wrap gap-4">
                <MagneticButton
                  onClick={() => navigate("/about")}
                  className={`px-8 py-4 rounded-full ${theme.btnPrimary} font-bold shadow-sm hover:shadow-xl transition-all flex items-center gap-2 group border`}
                >
                  More About Me{" "}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MagneticButton>
                <MagneticButton
                  onClick={() => navigate("/work")}
                  className={`px-8 py-4 rounded-full ${theme.btnSecondary} font-medium transition-all flex items-center gap-2 group border bg-black/50 backdrop-blur-sm`}
                >
                  View Projects
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
        {/* The Right Column: Interactive Canvas */}
        <div className="order-1 lg:order-2 flex justify-center items-center relative min-h-[400px] lg:min-h-[700px] w-full z-0">
          
          {/* Mobile Hint */}
          <div className="lg:hidden absolute top-0 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-neutral-400 z-50">
            <Grip size={14} /> Drag to explore
          </div>

          <div 
            className={`absolute top-1/2 left-1/2 w-[1200px] h-[1200px] -translate-x-1/2 -translate-y-1/2 z-0 select-none touch-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              maskImage: 'radial-gradient(circle at center, black 25%, transparent 60%)',
              WebkitMaskImage: 'radial-gradient(circle at center, black 25%, transparent 60%)',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClick={handlePointerClick}
          >
        <div className="absolute top-6 right-6 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-md text-[10px] uppercase font-bold tracking-widest text-neutral-400 pointer-events-none z-50">
          <Grip size={14} /> Drag to pan map | Double-click to zoom
        </div>

        {/* Panned Container */}
        <div 
          className="absolute inset-0 w-full h-full transition-transform duration-75 ease-out"
          style={{ transform: `translate(${currentPan.x}px, ${currentPan.y}px)` }}
        >
          {/* Zoomed Container */}
          <div 
            className="absolute inset-0 w-full h-full transition-transform duration-500 ease-out origin-center"
            style={{ transform: `scale(${userZoom})` }}
          >
          {/* SVG Connections & Packets Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            
            {/* Background Edges */}
            {bgEdges.map((edge, i) => {
              const sourceNode = allNodes.find(n => n.id === edge.source);
              const targetNode = allNodes.find(n => n.id === edge.target);
              if(!sourceNode || !targetNode) return null;
              return (
                <path 
                  key={`bge-${i}`} 
                  d={`M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`} 
                  stroke={isDarkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.12)"} 
                  strokeWidth="1"
                  fill="none" 
                />
              )
            })}

            {/* Core Edges & Packets */}
            {interCoreEdges.map((edge, i) => {
              const sourceNode = cores.find(n => n.id === edge.source);
              const targetNode = cores.find(n => n.id === edge.target);
              const pathId = `corePath-${i}`;
              const pathData = `M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`;
              return (
                <g key={`ce-${i}`}>
                  {/* Glow effect line */}
                  <path d={pathData} stroke={`${sourceNode.color}33`} strokeWidth="4" fill="none" />
                  {/* Main solid line */}
                  <path id={pathId} d={pathData} stroke={isDarkMode ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)"} strokeWidth="1" fill="none" />
                  
                  {/* Traveling Data Packets */}
                  <circle r="2" fill={isDarkMode ? "#fff" : "#333"} filter={`drop-shadow(0 0 4px ${isDarkMode ? '#fff' : '#000'})`}>
                     <animateMotion dur={`${6 + (i % 4)}s`} repeatCount="indefinite" path={pathData} />
                  </circle>
                  <circle r="1.5" fill={targetNode.color} filter="drop-shadow(0 0 3px currentColor)">
                     <animateMotion dur={`${4 + (i % 3)}s`} repeatCount="indefinite" path={`M ${targetNode.x} ${targetNode.y} L ${sourceNode.x} ${sourceNode.y}`} />
                  </circle>
                </g>
              )
            })}
          </svg>

          {/* HTML Nodes Layer */}
          
          {/* Deep Starfield Background Nodes */}
          {bgNodes.map(node => (
            <div 
              key={node.id} 
              className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`} 
              style={{ 
                left: node.x, 
                top: node.y, 
                width: `${node.size}px`,
                height: `${node.size}px`,
                transform: 'translate(-50%, -50%)',
                animation: `twinkle ${node.pulseDur}s infinite ease-in-out`
              }}
            ></div>
          ))}

          {/* Core Nodes & Satellites */}
          {cores.map(core => (
            <CoreNode key={core.id} core={core} satellitesData={satellitesData} theme={theme} isDarkMode={isDarkMode} />
          ))}

          </div>
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;
