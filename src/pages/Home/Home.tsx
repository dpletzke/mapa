import React from "react";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = () => {
  console.log("loaded");
  const map = new EsriMap({
    basemap: "topo-vector",
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
  });

  return <MapContainer id="viewDiv"></MapContainer>;
};

export default Home;
