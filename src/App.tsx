import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ServiceArea } from './components/ServiceArea';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StickyCtaBar } from './components/StickyCtaBar';

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Projects />
        <About />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCtaBar />
    </Layout>
  );
}

export default App;
