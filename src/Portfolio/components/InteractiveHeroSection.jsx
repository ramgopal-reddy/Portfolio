import LaserFlow from "@/components/LaserFlow";
import ProfileCard from "@/components/ProfileCard";
import { profileData } from "../data/profileData";

export default function InteractiveHeroSection() {
  const profile = profileData[0];

  return (
    <div
      style={{
        height: "150vh",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
    >
      <LaserFlow
        horizontalBeamOffset={0.1}
        verticalBeamOffset={0.2}
        color="#CF9EFF"
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%),translateY(-35%)",
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
        <div style={{ transform: "scale(0.9)" }}>
          <ProfileCard
            avatarUrl="./Ram.jpg"
            name={profile.name}
            title={profile.role}
            handle={profile.github?.split('/').pop() || profile.name.toLowerCase()}
            status="Available for hire"
            contactText="Contact Me"
            showUserInfo={true}
            // behindGlowColor="rgba(207, 158, 255, 0.67)"
            // innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
          />
        </div>
      </div>
    </div>
  );
}
