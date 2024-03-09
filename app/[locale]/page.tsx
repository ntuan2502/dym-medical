"use client";

import FAQ from "./components/Home/FAQ";
import FreeTrial from "./components/Home/FreeTrial";
import Hero from "./components/Home/Hero";
import OurCustomer from "./components/Home/OurCustomer";
import ContentA from "./components/Home/ContentA";
import ContentB from "./components/Home/ContentB";
import Quote from "./components/Home/Quote";
import Price from "./components/Home/Price";
import Application from "./components/Home/Application";

export default function App() {
  return (
    <div>
      <Hero />
      <OurCustomer />
      <ContentA />
      <ContentB />
      <Quote />
      <Price />
      <FAQ />
      <Application />
      <FreeTrial />
    </div>
  );
}
