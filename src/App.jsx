import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { 
  Navbar,
  Hero,
  StarsCanvas
} from './components';

// Lazy load non-critical components
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const Tech = lazy(() => import('./components/Tech'));
const Works = lazy(() => import('./components/Works'));
const Contact = lazy(() => import('./components/Contact'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-[#915EFF]/20 rounded-full"></div>
        <div 
          className="absolute inset-0 border-4 border-transparent border-t-[#915EFF] rounded-full animate-spin"
        ></div>
      </div>
      <p className="text-secondary text-sm">Loading...</p>
    </div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<LoadingFallback />}>
            <Contact />
          </Suspense>
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
