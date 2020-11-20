import './App.css';
import Header from './components/Header';
import Keg from './components/Keg';
import KegList from './components/KegList';

function App() {
  return (
    <div className="App">        
      <div class="flex h-screen">
        <div class="m-auto">
          <Header />
          <br></br>
          <KegList />
        </div>
      </div>
    </div>
  );
}

export default App;
