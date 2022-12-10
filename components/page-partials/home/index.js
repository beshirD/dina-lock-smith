import React from "react";
import SharedLayout from "../../layout/SharedLayout";
import Services from "./Services";
import CtaSection from "./CtaSection";
import Hero from "./Hero";
import Support from "./Support";
import Workcation from "./Workcation";

export default function HomeMain() {
  return (
    <SharedLayout className="max-w-7xl mx-auto" title="Home">
      <Hero />
      <Services />
      <Support />
      <Workcation />
      <CtaSection />
    </SharedLayout>
  );
}
