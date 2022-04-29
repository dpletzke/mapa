import React from "react";
import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

const About = () => {
  const map = new EsriMap({
    basemap: "topo-vector",
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
  });

  return <div id="viewDiv"></div>;
};

export default About;
