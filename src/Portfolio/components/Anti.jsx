import Antigravity from "@/components/Antigravity";

<div style={{ width: "100%", height: "400px", position: "relative" }}>
  <Antigravity
    count={300}
    magnetRadius={36}
    ringRadius={9}
    waveSpeed={1.6}
    waveAmplitude={1}
    particleSize={1.5}
    lerpSpeed={0.05}
    color="#ffffff"
    autoAnimate
    particleVariance={1}
    rotationSpeed={0}
    depthFactor={1}
    pulseSpeed={3}
    particleShape="capsule"
    fieldStrength={10}
  />
</div>;
