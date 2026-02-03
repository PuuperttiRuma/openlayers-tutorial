import "./App.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";

function App() {
  const map = new Map({
    view: new View({
      center: [15080385, 13567433],
      zoom: 5,
    }),
    layers: [
      new TileLayer({
        source: new OSM(),
      }),
    ],
    target: "map",
  });
  return (
    <>
      <div id="map"></div>
    </>
  );
}

export default App;
