import { useEffect, useRef, useState } from "react";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Nav from "./components/sections/Nav";
import Stack from "./components/sections/Stack";
import Work from "./components/sections/Work";
import "./index.css";
import type { FadeVolumeParams } from "./types";


function fadeVolume({ audio, target, duration }: FadeVolumeParams): void {
  if (!audio) return;

  const start = audio.volume;
  const change = target - start;
  const steps = 30;
  const stepTime = duration / steps;
  let currentStep = 0;

  const fade = setInterval(() => {
    currentStep++;
    audio.volume = Math.min(
      1,
      Math.max(0, start + (change * currentStep) / steps)
    );

    if (currentStep >= steps) {
      clearInterval(fade);
      audio.volume = target;
    }
  }, stepTime);
}

function App() {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);


  useEffect(() => {
    const audio = new Audio("/amitTrack.mp3");
    audio.preload = "auto";
    audioRef.current = audio;

    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.pause();
      audio.removeEventListener("ended", onEnded);
      audioRef.current = null;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        audio.volume = 0;
        await audio.play();
        setIsPlaying(true);
        fadeVolume({audio, target: 0.8, duration: 1000});
      } else {
        fadeVolume({audio, target: 0, duration: 1000});
        setIsPlaying(false);
        setTimeout(() => {
          audio.pause();
        }, 1000);
      }
    } catch (err) {
      console.error("Audio play failed:", err);
    }
  };

  return (
    <>
      <Nav />
      <Hero />
      <Work />
      <About togglePlay={togglePlay} isPlaying={isPlaying}/>
      <Experience />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
