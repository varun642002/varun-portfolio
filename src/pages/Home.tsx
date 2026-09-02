import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "@/components/hero/Hero";
import { Readout } from "@/components/sections/Readout";
import { Work } from "@/components/sections/Work";
import { Journey } from "@/components/sections/Journey";
import { Capabilities } from "@/components/sections/Capabilities";
import { Proof } from "@/components/sections/Proof";
import { Contact } from "@/components/sections/Contact";

export function Home() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [location.hash]);

  return (
    <main id="main-content">
      <Hero />
      <Readout />
      <Work />
      <Journey />
      <Capabilities />
      <Proof />
      <Contact />
    </main>
  );
}
