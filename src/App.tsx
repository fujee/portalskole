import BaseLayout from './layout';
import HeroSection from './sections/heroSection';
import AboutSection from './sections/aboutSection';
import FunctionSection from './sections/functionSection';
import ExamplesSection from './sections/examplesSection';
// import DemoSection from './sections/demoSection';
// import ToldSection from './sections/toldSection';
import FaqSection from './sections/faqSection';

function App() {
  return (
    <BaseLayout>
      <HeroSection />
      <AboutSection />
      <FunctionSection />
      <ExamplesSection />
      {/* <DemoSection /> */}
      {/* <ToldSection /> */}
      <FaqSection />
    </BaseLayout>
  );
}

export default App;
