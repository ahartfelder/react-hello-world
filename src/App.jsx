import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCount';

function App() {
  return (
    <div className="App">
      <ClickCounter action='Clicked' />
      <HoverCounter action='Hovered' />
    </div>
  );
}

export default App;
