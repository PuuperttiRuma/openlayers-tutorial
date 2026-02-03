import { Map as OLMap, Overlay, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { OSM } from "ol/source";
import { useEffect, useRef } from "react";

function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const coordOverlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (!coordOverlayRef.current) return;

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

    const popup = new Overlay({ element: coordOverlayRef.current });

    map.addOverlay(popup);
    map.on("singleclick", function (e) {
      const clickedCoordinate = e.coordinate;
      console.log("Clicked", clickedCoordinate);
      popup.setPosition(clickedCoordinate);
      const popupTextElement = coordOverlayRef.current?.querySelector("p");
      if (popupTextElement) {
        popupTextElement.innerHTML = clickedCoordinate.join(", ");
      }
    });

    return () => {
      map.setTarget(undefined);
    };
  }, []);

  return (
    <>
      <div ref={coordOverlayRef} className="popup-container">
        <p id="popup-coordinates"></p>
      </div>
      <div ref={mapRef} className="map-container"></div>
    </>
  );
}

export default Map;
