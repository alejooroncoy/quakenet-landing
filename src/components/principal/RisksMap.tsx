import { API_KEY, GOOGLE_ID_MAP } from "@/constants";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useCallback, useState } from "react";

interface RiskPoint {
  id: number;
  lat: number;
  lng: number;
  risk: "Alto" | "Moderado" | "Bajo";
  city: string;
  population: number;
}

const samplePointsPeru: RiskPoint[] = [
  {
    id: 1,
    lat: -12.0464,
    lng: -77.0428,
    risk: "Alto",
    city: "Lima",
    population: 9674755,
  },
  {
    id: 2,
    lat: -16.3988,
    lng: -71.535,
    risk: "Alto",
    city: "Arequipa",
    population: 1008290,
  },
  {
    id: 3,
    lat: -6.7711,
    lng: -79.8441,
    risk: "Moderado",
    city: "Chiclayo",
    population: 552508,
  },
  {
    id: 4,
    lat: -9.19,
    lng: -75.9988,
    risk: "Bajo",
    city: "Huánuco",
    population: 120000,
  },
  {
    id: 5,
    lat: -3.7437,
    lng: -73.2516,
    risk: "Bajo",
    city: "Iquitos",
    population: 437376,
  },
];

const MarkerWithInfo = ({ point }: { point: RiskPoint }) => {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (
    <>
      <AdvancedMarker
        position={{
          lat: point.lat,
          lng: point.lng,
        }}
        onClick={handleMarkerClick}
        ref={markerRef}
      >
        <Pin
          background={
            point.risk === "Alto"
              ? "#ef4444"
              : point.risk === "Moderado"
              ? "#f97316"
              : "#22c55e"
          }
          glyphColor={
            point.risk === "Alto"
              ? "#fecaca"
              : point.risk === "Moderado"
              ? "#fed7aa"
              : "#bbf7d0"
          }
          borderColor={
            point.risk === "Alto"
              ? "#f87171"
              : point.risk === "Moderado"
              ? "#f59e0b"
              : "#10b981"
          }
        ></Pin>
      </AdvancedMarker>

      {infoWindowShown && (
        <InfoWindow
          headerContent={<strong>{point.city}</strong>}
          anchor={marker}
          onClose={handleClose}
        >
          Riesgo Sísmico: {point.risk}
          <br />
          Población: {point.population.toLocaleString()}
        </InfoWindow>
      )}
    </>
  );
};

const RisksMap = () => {
  const [points] = useState<RiskPoint[]>(samplePointsPeru);

  return (
    <APIProvider apiKey={API_KEY}>
      <Map
        defaultCenter={{
          lat: -9.19,
          lng: -75.0152,
        }}
        style={{
          width: "80%",
          height: "30rem",
          borderRadius: "0.25rem",
          overflow: "hidden",
          marginTop: "1rem",
        }}
        defaultZoom={5}
        mapId={GOOGLE_ID_MAP}
      >
        {points.map((point) => (
          <MarkerWithInfo key={point.id} point={point} />
        ))}
      </Map>
    </APIProvider>
  );
};

export default RisksMap;
