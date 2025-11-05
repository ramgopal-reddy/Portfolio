import React from "react";
import { useRef, useState } from "react";
import Image1 from "../assets/1.png";
import Image2 from "../assets/2.png";
import Image3 from "../assets/3.png";
import Image4 from "../assets/4.png";
import Image5 from "../assets/5.png";
import Image6 from "../assets/6.png";
import Image7 from "../assets/7.png";
import Image8 from "../assets/8.png";
import Image9 from "../assets/9.png";
import Image10 from "../assets/10.png";
import Image11 from "../assets/11.png";
import Image12 from "../assets/12.png";
import Prabhas from "../assets/Prabhas_SuperStar.mp4";
import { GoMute, GoUnmute } from "react-icons/go";
import { AnimatedGrainyBg } from "@/components/ui/animated-grainy-bg";

const Salaar = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      if (!newMuted) videoRef.current.play(); // ensure it plays when unmuted
      setMuted(newMuted);
    }
  };

  return (
    // <div className="bg-gradient-to-b from-black to-neutral-400 flex flex-col justify-start items-center text-white">
    <div className="flex flex-col justify-start items-center text-white relative overflow-hidden bg-transparent">
      {/* <div className="fixed inset-0 -z-10">
        <BubbleBackground
          bgColorA="rgba(0, 0, 0, 1)"
          bgColorB="rgba(196, 15, 15, 1)"
          blendMode="lighten"
        />
      </div> */}
      {/* <div className="fixed inset-0 -z-10">
        <AnimatedGrainyBg
          position="absolute"
          size="full"
          colors={["#000000", "#1a1a1a", "#2e2e2e", "#ffffff"]}
          speed={0.8}
          grainType="noise"
          grainIntensity={45}
          grainSize={90}
          animationType="flow"
          grainBlendMode="soft-light"
          darkMode={true}
          animate={true}
          zIndex={-1}
        />
      </div> */}

      <div className="fixed inset-0 -z-10">
        <AnimatedGrainyBg
          position="absolute"
          size="full"
          colors={["#000000", "#1a1a1a", "#2e2e2e", "#444444"]}
          speed={0.8}
          grainType="noise"
          grainIntensity={45}
          grainSize={90}
          animationType="flow"
          grainBlendMode="soft-light"
          darkMode={true}
          animate={true}
          zIndex={-1}
        />
      </div>

      {/* Header */}
      <header className="w-full border-b border-red-600 py-2 lg:px-40 md:px-4 flex flex-wrap justify-between items-center sticky top-0 z-50 backdrop-blur bg-black/30 shadow-md">
        <h1 className="text-5xl font-['Italianno'] text-white">Salaar</h1>
        <nav className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
          {[
            { name: "Home", href: "#" },
            { name: "About", href: "#about" },
            { name: "Works", href: "#works" },
            { name: "Fights", href: "#fights" },
            { name: "Contact", href: "#contact" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="text-white text-2xl md:text-3xl font-['Italianno'] hover:text-red-600 transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full border-b border-white flex flex-col md:flex-row items-center justify-center text-center gap-10 py-32 px-6">
        <div>
          <h2 className="text-red-600 text-7xl md:text-9xl font-['Italianno'] leading-tight">
            Salaar
          </h2>
          <h3 className="text-red-600 text-5xl md:text-8xl font-['Italianno']">
            Devaratha Raisar
          </h3>
        </div>
        <img
          className="w-64 h-64 md:w-96 md:h-96 rounded-[64px] object-cover fade-card"
          src={Image1}
          alt="Main"
        />
      </section>

      {/* Video Section */}
      <section className="w-full border-b border-white flex flex-col items-center justify-center py-32 px-6 relative">
        <h2 className="text-center text-5xl md:text-6xl font-['Italianno'] mb-10 text-white">
          India's Biggest Superstar
        </h2>
        <h1 className="text-center text-4xl md:text-5xl font-['Italianno'] mb-10 text-red-600">
          Prabhas
        </h1>
        <video
          ref={videoRef}
          src={Prabhas}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="rounded-[16px] fade-card w-full lg:h-[50vh] h-auto object-cover max-w-4xl shadow-lg"
        ></video>

        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black hover:bg-black text-white px-4 py-2 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2"
        >
          {muted ? <GoMute /> : <GoUnmute />}
        </button>
      </section>

      {/* About Section */}
      <section
        className="w-full border-b border-black flex flex-col items-center justify-center gap-6 py-16 px-6 text-center"
        id="about"
      >
        <div>
          <h2 className="text-5xl md:text-6xl font-['Italianno']">About Me</h2>
          <p className="text-red-600 text-xl md:text-2xl font-['Italianno']">
            Get to know me
          </p>
        </div>
        <p className="max-w-5xl text-xl md:text-2xl font-['Italianno'] text-white leading-relaxed">
          What you see is a mechanic. A simple man. I fix things. Engines. Life.
          Whatever needs it. I live with my mother, far from the noise, far from
          the dust of forgotten places. And for a long time, that was enough.
          <br />
          <br />
          But before this calm... there was a different man. People in Khansaar
          knew him. Some called him Deva. Some whispered other names, names born
          of fear and bloodshed. To my friend Vardha, I was something else
          entirely. His 'Salaar'—his commander, his muscle, his weapon.
          <br />
          <br />
          There's not much to know about me, really. I honor a promise. That is
          all. I live for one friend, and I fear one woman—my mother. She is the
          only one who can humble this monster they speak of. She is the reason
          I buried the beast.
          <br />
          <br />
          When I am provoked, you will not see anger. You will not see rage. You
          will just see the outcome. My hands... they still remember the old
          ways. They remember the promises made in blood and the debts collected
          in violence.
          <br />
        </p>
      </section>

      {/* Works Section */}
      <section
        className="w-full border-b border-black py-16 px-6 flex flex-col items-center"
        id="works"
      >
        <h2 className="text-center text-5xl md:text-6xl font-['Italianno'] mb-10 text-white">
          Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center lg:w-[1040px]">
          {[
            { title: "Mechanic", src: Image2 },
            { title: "King", src: Image3 },
            { title: "Leader", src: Image4 },
            { title: "Fighter", src: Image5 },
            { title: "Mine", src: Image6 },
            { title: "Empire", src: Image7 },
          ].map((item, i) => (
            <div
              key={i}
              className="relative w-full max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-lg fade-card"
            >
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt={item.title}
              />
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-4xl md:text-5xl font-['Italianno']">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fights Section */}
      <section
        className="w-full border-b border-black py-16 px-6 flex flex-col items-center"
        id="fights"
      >
        <h2 className="text-center text-5xl md:text-6xl font-['Italianno'] mb-10">
          Fights
        </h2>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center mb-10 lg:w-[1040px]">
          {[
            { title: "Coal Mine", src: Image8 },
            { title: "Burma Border", src: Image10 },
            { title: "Kateramma", src: Image9 },
          ].map((item, i) => (
            <div
              key={i}
              className="relative w-full max-w-sm aspect-[4/3] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt={item.title}
              />
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-4xl md:text-5xl font-['Italianno']">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: 2 wider cards (centered) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full ">
          {[
            { title: "Velamgadi", src: Image11 },
            { title: "Tattoo", src: Image12 },
          ].map((item, i) => (
            <div
              key={i}
              className="relative w-full sm:w-[500px] aspect-[7/4] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-full object-cover"
                src={item.src}
                alt={item.title}
              />
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-4xl md:text-5xl font-['Italianno']">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="w-full border-b border-black py-16 px-6 flex flex-col items-center"
        id="contact"
      >
        <h2 className="text-4xl md:text-5xl font-['Javanese_Text'] text-black mb-10">
          Contact Me
        </h2>
        <form className="w-full max-w-lg bg-white rounded-lg shadow-md p-8 flex flex-col gap-6">
          {["Name", "Surname", "Email", "Message"].map((label, i) => (
            <div key={i} className="flex flex-col gap-2">
              <label className="text-gray-800 text-lg font-['Inter']">
                {label}
              </label>
              <input
                type="text"
                placeholder={label}
                className="px-4 py-3 bg-gray-100 rounded-lg outline-none border border-gray-300 focus:ring-2 focus:ring-red-500 text-gray-700"
              />
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full text-black py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <div>
            <div className="w-6 h-9 border-4 border-white mb-6"></div>
            <div className="flex gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-black rounded"></div>
              ))}
            </div>
          </div> */}

          {["Use cases", "Explore", "Resources"].map((title, i) => (
            <div key={i}>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <ul className="space-y-2 text-base">
                <li>UI design</li>
                <li>UX design</li>
                <li>Wireframing</li>
                <li>Diagramming</li>
                <li>Brainstorming</li>
                <li>Online whiteboard</li>
                <li>Team collaboration</li>
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Salaar;
