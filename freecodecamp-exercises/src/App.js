import './App.css';
import SimpleElement from './components/SimpleElement';
import SideNavigation from './components/SideNavigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Front End Development - React</h1>
        <p>freeCodeCamp.org</p>
      </header>
      <SimpleElement/>
      {/* <SideNavigation/> */}
    </div>
  );
}

export default App;
