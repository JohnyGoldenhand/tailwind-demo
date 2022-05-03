import './App.css';
import Sidebar from './components/Sidebar';
import Home from './sites/Home';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row flex-nowrap col-auto'>
        <Sidebar/>
        <Home>
        </Home>
      </div>
    </div>
  );
}

export default App;
