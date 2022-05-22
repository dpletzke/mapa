import { useEffect, useRef } from "react";
import esriConfig from "@arcgis/core/config";
import styled from "@emotion/styled";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
`;

const Home = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
        }}
      >
        Hello!
      </div>
    </>
  );
};

export { Home };
