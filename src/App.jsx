import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick'
// import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet name={'Andreas'}>
        <p>Administrator</p>
      </Greet> */}
      {/* <Greet name={'Mônika'} surname={'Hegler'} /> */}
      {/* <Welcome name={'Dani'}>
        <p>Client</p>
      </Welcome> */}
      {/* <Welcome name={'Sami'} surname={'Koivu'} /> */}
      {/* <Message /> */}
      {/* <Hello /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
