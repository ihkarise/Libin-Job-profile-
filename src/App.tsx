/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Workshops from './components/Workshops';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-ink selection:text-paper overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Workshops />
        <Skills />
        <Achievements />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
