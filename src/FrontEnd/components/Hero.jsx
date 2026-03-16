import LaserFlow from "@/components/LaserFlow";
import SplashCursor from "@/components/SplashCursor";
import { useRef } from "react";
import { profileData } from "@/Portfolio/data/profileData";

// NOTE: You can also adjust the variables in the shader for super detailed customization

// Basic Usage
<div style={{ height: "500px", position: "relative", overflow: "hidden" }}>
  <LaserFlow />
</div>;

// Image Example Interactive Reveal Effect
export default function LaserFlowBoxExample() {
  const revealImgRef = useRef(null);
  const profile = profileData[0];

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", `${x}px`);
          el.style.setProperty("--my", `${y + rect.height * 0.5}px`);
        }
      }}
      onMouseLeave={() => {
        const el = revealImgRef.current;
        if (el) {
          el.style.setProperty("--mx", "-9999px");
          el.style.setProperty("--my", "-9999px");
        }
      }}
    >
      {/* <SplashCursor /> */}
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.0}
        color="#CF9EFF"
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "86%",
          height: "60%",
          backgroundColor: "#060010",
          borderRadius: "20px",
          border: "2px solid #FF79C6",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "2rem",
          zIndex: 6,
          padding: "40px",
          backdropFilter: "blur(10px)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
        }}
      >
        {/* Your content here */}
        <div style={{ textAlign: "center", padding: "30px", width: "100%" }}>
          {/* <img
            src={profile.profileImg}
            alt={profile.name}
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "15px",
              border: "3px solid #FF79C6",
            }}
          /> */}

          <h2 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "700", 
            marginBottom: "16px",
            background: "linear-gradient(135deg, #FF79C6, #CF9EFF)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            lineHeight: "1.2"
          }}>
            {profile.name}
          </h2>

          <p style={{ 
            color: "#CF9EFF", 
            marginBottom: "20px",
            fontSize: "1.25rem",
            fontWeight: "500",
            letterSpacing: "0.5px"
          }}>
            {profile.role}
          </p>

          <p style={{ 
            fontSize: "1rem", 
            maxWidth: "600px", 
            margin: "0 auto 24px auto",
            lineHeight: "1.6",
            color: "rgba(255, 255, 255, 0.85)",
            letterSpacing: "0.3px"
          }}>
            {profile.bio}
          </p>

          <p style={{ 
            marginTop: "20px",
            fontSize: "0.95rem",
            color: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}>
            📍 {profile.location}
          </p>

          <div
            style={{
              marginTop: "32px",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a 
              href={profile.github} 
              target="_blank"
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(207, 158, 255, 0.1)",
                border: "1px solid #CF9EFF",
                borderRadius: "8px",
                color: "#CF9EFF",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
                fontSize: "0.9rem"
              }}
            >
              GitHub
            </a>
            <a 
              href={profile.linkedIn} 
              target="_blank"
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(207, 158, 255, 0.1)",
                border: "1px solid #CF9EFF",
                borderRadius: "8px",
                color: "#CF9EFF",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
                fontSize: "0.9rem"
              }}
            >
              LinkedIn
            </a>
            <a 
              href={`mailto:${profile.email}`}
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(255, 121, 198, 0.1)",
                border: "1px solid #FF79C6",
                borderRadius: "8px",
                color: "#FF79C6",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
                fontSize: "0.9rem"
              }}
            >
              Email
            </a>
            <a 
              href={profile.website} 
              target="_blank"
              style={{
                padding: "12px 24px",
                backgroundColor: "rgba(207, 158, 255, 0.1)",
                border: "1px solid #CF9EFF",
                borderRadius: "8px",
                color: "#CF9EFF",
                textDecoration: "none",
                fontWeight: "500",
                transition: "all 0.3s ease",
                fontSize: "0.9rem"
              }}
            >
              Website
            </a>
          </div>
        </div>
      </div>

      <img
        ref={revealImgRef}
        src="/path/to/image.jpg"
        alt="Reveal effect"
        style={{
          position: "absolute",
          width: "100%",
          top: "-50%",
          zIndex: 5,
          mixBlendMode: "lighten",
          opacity: 0.3,
          pointerEvents: "none",
          "--mx": "-9999px",
          "--my": "-9999px",
          WebkitMaskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          maskImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
        horizontalSizing={0.5}
        verticalSizing={2}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.35}
        flowStrength={0.25}
        fogIntensity={0.45}
        fogScale={0.3}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      />
    </div>
  );
}
