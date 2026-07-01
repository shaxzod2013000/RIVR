/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Hero />
      <Stats />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}
