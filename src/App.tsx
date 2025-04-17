import Navigation from './components/Navigation';
import Voicebot from './components/Voicebot';
import Features from './components/Features';
import Showcase from './components/Showcase';
import UseCases from './components/UseCases';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="voicebot">
        <Voicebot />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="showcase">
        <Showcase />
      </section>
      <section id="use-cases">
        <UseCases />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="stats">
        <Stats />
      </section>
      <Footer />
    </div>
  );
}

export default App;