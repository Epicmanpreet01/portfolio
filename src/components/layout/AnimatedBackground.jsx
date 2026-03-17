const AnimatedBackground = ({ theme, isDarkMode }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div
        className={`absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full filter blur-[100px] opacity-40 animate-blob ${
          theme.blob1
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />
      <div
        className={`absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full filter blur-[100px] opacity-40 animate-blob animation-delay-2000 ${
          theme.blob2
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />
      <div
        className={`absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full filter blur-[100px] opacity-40 animate-blob animation-delay-4000 ${
          theme.blob3
        } ${isDarkMode ? "mix-blend-screen" : "mix-blend-multiply"}`}
      />
      <div className="absolute inset-0 opacity-[0.03]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
    </div>
  );
};

export default AnimatedBackground;
