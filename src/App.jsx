import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import CounterTwo from './components/CounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';

function App() {
  return (
    <div className="App">
      <CounterTwo>
        {(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
      <CounterTwo>
        {(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />}
      </CounterTwo>
    </div>
  );
}

export default App;
