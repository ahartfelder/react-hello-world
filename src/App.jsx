import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './userContext';

function App() {
  return (
    <div className="App">
      <UserProvider value='World'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
