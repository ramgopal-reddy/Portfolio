import { useState, useRef, useEffect } from "react";
import { X, ZoomIn, Grid, Circle, Maximize2 } from "lucide-react";
import { DualHighlight } from "@/components/DualHighlight";

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("circular"); // circular, grid, hybrid
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [imageDimensions, setImageDimensions] = useState({});

  // Gallery images from public folder
  const galleryImages = [
    { id: 1, src: "./Ram.jpg", title: "Profile Photo", category: "personal" },
    { id: 2, src: "./SSMB29.jpg", title: "Professional", category: "personal" },
    { id: 3, src: "./SSMB.jpg", title: "Casual", category: "personal" },
    { id: 4, src: "./Ram1.jpg", title: "Profile Photo", category: "personal" },
    { id: 5, src: "./Ram2.jpg", title: "Professional", category: "personal" },
    { id: 6, src: "./Ram3.jpg", title: "Casual", category: "personal" },
    { id: 7, src: "./Ram4.jpg", title: "Profile Photo", category: "personal" },
    { id: 8, src: "./Ram5.jpg", title: "Professional", category: "personal" },
    // { id: 4, src: "./SSMBCut.png", title: "Creative", category: "personal" },
    // {
    //   id: 5,
    //   src: "./Oracle AI Vector Search Certified Professional.png",
    //   title: "Oracle AI Vector Search",
    //   category: "certification",
    // },
    // {
    //   id: 6,
    //   src: "./Oracle Cloud Infrastructure 2025 Certified Generative AI Professional.png",
    //   title: "Oracle Cloud Infrastructure",
    //   category: "certification",
    // },
    // {
    //   id: 7,
    //   src: "./Oracle Fusion AI Agent Studio Certified Foundations Associate - Rel 1.png",
    //   title: "Oracle Fusion AI Agent",
    //   category: "certification",
    // },
    // {
    //   id: 8,
    //   src: "./Build Generative AI Apps and Solutions with No-Code Tools.png",
    //   title: "Generative AI Apps",
    //   category: "course",
    // },
    // {
    //   id: 9,
    //   src: "./ChatGPT-4 Prompt Engineering ChatGPT Generative AI & LLM.png",
    //   title: "ChatGPT Prompt Engineering",
    //   category: "course",
    // },
    // {
    //   id: 10,
    //   src: "./Computational_Theory_Language_Principle_Finite_Automata_Theory.png",
    //   title: "Computational Theory",
    //   category: "course",
    // },
    // {
    //   id: 11,
    //   src: "./Fundamentals of Network Communication.png",
    //   title: "Network Communication",
    //   category: "course",
    // },
    // {
    //   id: 12,
    //   src: "./Introduction to Git and GitHub by Google.png",
    //   title: "Git & GitHub",
    //   category: "course",
    // },
  ];

  // Load image dimensions
  useEffect(() => {
    const loadDimensions = async () => {
      const dimensions = {};

      for (const image of galleryImages) {
        try {
          const img = new Image();
          img.src = image.src;

          await new Promise((resolve) => {
            img.onload = () => {
              dimensions[image.id] = {
                width: img.naturalWidth,
                height: img.naturalHeight,
                aspectRatio: img.naturalWidth / img.naturalHeight,
              };
              resolve();
            };
            img.onerror = () => {
              dimensions[image.id] = {
                width: 300,
                height: 200,
                aspectRatio: 1.5,
              };
              resolve();
            };
          });
        } catch (error) {
          dimensions[image.id] = { width: 300, height: 200, aspectRatio: 1.5 };
        }
      }

      setImageDimensions(dimensions);
    };

    loadDimensions();
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += scrollDirection * 1;

        // Reset scroll when reaching end
        if (
          scrollContainerRef.current.scrollLeft >=
          scrollContainerRef.current.scrollWidth -
            scrollContainerRef.current.clientWidth
        ) {
          setScrollDirection(-1);
        } else if (scrollContainerRef.current.scrollLeft <= 0) {
          setScrollDirection(1);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused, scrollDirection]);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsPaused(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsPaused(false);
  };

  // Circular View Component
  const CircularView = () => (
    <div className="relative h-96 overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {galleryImages.map((image, index) => {
            const angle = (index * 360) / galleryImages.length;
            const radius = 140;
            const x = Math.cos((angle * Math.PI) / 180) * radius;
            const y = Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={image.id}
                className="absolute w-20 h-20 rounded-full overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:z-10 shadow-lg"
                style={{
                  left: `${x + 160 - 40}px`,
                  top: `${y + 160 - 40}px`,
                  transform: `rotate(${angle}deg) translateX(60px) rotate(-${angle}deg)`,
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                }}
                onClick={() => openModal(image)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "./title.png";
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs text-center p-1">
                    {image.title}
                  </span>
                </div>
              </div>
            );
          })}

          {/* Center image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full overflow-hidden shadow-xl ring-4 ring-white/20">
            <img
              src="./Ram.jpg"
              alt="Center"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // Grid View Component
  const GridView = () => (
    <div
      ref={scrollContainerRef}
      className="overflow-x-auto scrollbar-hide"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-4 pb-4"
        style={{ width: `${galleryImages.length * 320}px` }}
      >
        {galleryImages.map((image, index) => {
          const dims = imageDimensions[image.id] || {
            width: 300,
            height: 200,
            aspectRatio: 1.5,
          };
          const maxHeight = 200; // Base height
          const calculatedHeight = Math.max(
            maxHeight,
            dims.height > maxHeight ? maxHeight : dims.height,
          );
          const containerHeight = calculatedHeight;

          return (
            <div
              key={image.id}
              className="flex-shrink-0 rounded-xl overflow-hidden group"
              style={{
                width: "288px", // Fixed width for consistency
                height: `${containerHeight}px`, // Dynamic height based on image
                animation: `slideIn ${0.5 + index * 0.1}s ease-out`,
              }}
              onClick={() => openModal(image)}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain transition-transform duration-700"
                  style={{
                    objectFit: dims.aspectRatio > 1.5 ? "contain" : "cover",
                  }}
                  onError={(e) => {
                    e.target.src = "./title.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {image.title}
                    </h3>
                    <span className="text-white/70 text-xs capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Hybrid View Component
  const HybridView = () => {
    const featuredDims = imageDimensions[galleryImages[0]?.id] || {
      width: 600,
      height: 400,
      aspectRatio: 1.5,
    };
    const featuredHeight = Math.max(
      320,
      featuredDims.height > 320 ? 320 : featuredDims.height,
    );

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Featured large image */}
        <div
          className="md:col-span-2 lg:col-span-2 relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 hover:scale-102 hover:shadow-2xl"
          onClick={() => openModal(galleryImages[0])}
        >
          <div className="relative w-full h-full">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].title}
              className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
              style={{
                objectFit: featuredDims.aspectRatio > 1 ? "contain" : "cover",
              }}
              onError={(e) => {
                e.target.src = "./title.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  {galleryImages[0].title}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    Featured
                  </span>
                  <span className="text-white/70 text-sm capitalize">
                    {galleryImages[0].category}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Circular mini gallery */}
        <div className="relative rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-48 h-48">
              {galleryImages.slice(1, 7).map((image, index) => {
                const angle = (index * 360) / 6;
                const radius = 70;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={image.id}
                    className="absolute w-12 h-12 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-125 hover:z-10"
                    style={{
                      left: `${96 + x - 24}px`, // Center the circular arrangement
                      top: `${96 + y - 24}px`, // Center the circular arrangement
                      animation: `pulse ${2 + index * 0.3}s ease-in-out infinite`,
                    }}
                    onClick={() => openModal(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "./title.png";
                      }}
                    />
                  </div>
                );
              })}

              {/* Center mini image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/30">
                <img
                  src="./Ram.jpg"
                  alt="Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Grid of remaining images */}
        {galleryImages.slice(7).map((image, index) => {
          const dims = imageDimensions[image.id] || {
            width: 300,
            height: 200,
            aspectRatio: 1.5,
          };
          const gridHeight = Math.max(
            192,
            dims.height > 192 ? 192 : dims.height,
          );

          return (
            <div
              key={image.id}
              className="group cursor-pointer rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{ height: `${gridHeight}px` }}
              onClick={() => openModal(image)}
            >
              <div className="relative w-full h-full">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                  style={{
                    objectFit: dims.aspectRatio > 1.5 ? "contain" : "cover",
                  }}
                  onError={(e) => {
                    e.target.src = "./title.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 left-3 right-3">
                    <h4 className="text-white font-medium text-sm">
                      {image.title}
                    </h4>
                    <span className="text-white/60 text-xs capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      id="gallery"
      className="py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900"
    >
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text">
            <DualHighlight first="Gallery" second="Data Exploration" />
          </h2>
          <div className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400"></div>
          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            Explore my collection of certifications, achievements, and moments
            through an interactive gallery experience
          </p>
        </div>

        {/* View Mode Controls */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setViewMode("hybrid")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              viewMode === "hybrid"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Maximize2 className="w-4 h-4" />
            Hybrid
          </button>
          <button
            onClick={() => setViewMode("circular")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              viewMode === "circular"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Circle className="w-4 h-4" />
            Circular
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium duration-300 ${
              viewMode === "grid"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <Grid className="w-4 h-4" />
            Grid
          </button>
        </div>

        {/* Gallery Content */}
        <div className="mb-12">
          {viewMode === "circular" && <CircularView />}
          {viewMode === "grid" && <GridView />}
          {viewMode === "hybrid" && <HybridView />}
        </div>

        {/* Pause/Play Indicator */}
        <div className="text-center">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-all duration-300"
          >
            {isPaused ? (
              <>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                Paused
              </>
            ) : (
              <>
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                Auto-scrolling
              </>
            )}
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[70vh] object-contain"
                  onError={(e) => {
                    e.target.src = "./title.png";
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 capitalize">
                    {selectedImage.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
