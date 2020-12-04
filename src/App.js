import "./App.css";
import Header from "./components/Header";
import KegControl from "./components/KegControl";

function App() {
  return (
    <div className="App">
      <div className="flex h-screen">
        <div className="m-auto content-center">
          <Header />
          <br></br>
          <KegControl />
        </div>
      </div>
    </div>
  );
}

export default App;
