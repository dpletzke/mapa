import { MapPage } from "../../templates/MapPage";

const MapTwo = () => {
  const featureLayerDetails = [
    {
      url: "https://www.medellin.gov.co/mapas/rest/services/ServiciosCatastro/OPENDATA_Catastro/MapServer/6",
    },
  ];

  return (
    <MapPage
      mapProps={{
        basemap: "topo-vector",
      }}
      mapViewProps={{
        center: [-75.5722, 6.2459],
        zoom: 12,
        constraints: {
          snapToZoom: false,
        },
      }}
      featureLayerDetails={featureLayerDetails}
    />
  );
};

export { MapTwo };
