import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
`;

type MapPageProps = {
  mapProps?: __esri.MapProperties;
  mapViewProps?: __esri.MapViewProperties;
  featureLayerDetails?: __esri.FeatureLayerProperties[]
};

const MapPage = ({ mapProps, mapViewProps, featureLayerDetails }: MapPageProps) => {
  esriConfig.apiKey =
    "AAPK0ebbbe1224484cf182f775cae6b4aaf7mEIgQE8QTQeRV1PazTY3fsI-TzoQ5gAmYPQ7_Xiptz1Oq8UNHOEAxDRwyHlBwnNr";

  const viewDiv = useRef(null);

  useEffect(() => {
    if (viewDiv.current) {
      const map = new Map(mapProps);

      featureLayerDetails?.forEach((featureLayerDetail, i) => {
        const featureLayer = new FeatureLayer(featureLayerDetail);
        map.add(featureLayer, i);
      });
      
      new MapView({
        map,
        container: viewDiv.current,
        ...mapViewProps,
      });
    }
  }, [featureLayerDetails, mapProps, mapViewProps]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <MapContainer ref={viewDiv}></MapContainer>
    </div>
  );
};

export { MapPage };
