import { Map as OLMap, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = new OLMap({
      view: new View({
        center: [15080385, 13567433],
        zoom: 5,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      target: mapRef.current,
    });
  }, []);

  return (
    <>
      <div ref={mapRef} className="map-container"></div>
    </>
  );
}

export default Map;
