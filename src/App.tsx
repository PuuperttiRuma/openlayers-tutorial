import "./App.css";
import Map from "./components/Map.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {
  return (
    <div className="grid-container">
      <div className="grid-1">
        <Sidebar />
      </div>
      <div className="grid-2">
        <Map />
      </div>
    </div>
  );
}

export default App;
