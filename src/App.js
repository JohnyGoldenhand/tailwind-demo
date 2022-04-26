import './App.css';
import Sidebar from './components/Sidebar';
import Home from './sites/Home';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row space-x-40'>
        <Sidebar/>
        <Home>
        </Home>
      </div>
    </div>
  );
}

export default App;
