import './App.css';
import ErrorBoundary from './components/Boundary';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroName={'Batman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Superman'} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={'Joker'} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
