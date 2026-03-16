import CircularGallery from "@/components/CircularGallery";

export default function Gallery() {
  <div style={{ height: "600px", position: "relative" }}>
    <CircularGallery
      bend={3}
      textColor="#ffffff"
      borderRadius={0.05}
      scrollEase={0.02}
      //   bend={1}
      //   borderRadius={0.05}
      scrollSpeed={2}
      //   scrollEase={0.05}
    />
  </div>;
}
