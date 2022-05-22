import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home, About, MapOne, MapTwo } from "./pages";
import { FaHome, FaQuestion, FaMapMarkedAlt } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";

import { extendTheme } from "@chakra-ui/react";

const App = () => {
  const navigate = useNavigate();

  const theme = extendTheme({
    colors: {
      blue: {
        "50": "#E5EFFF",
        "100": "#B8D3FF",
        "200": "#8AB6FF",
        "300": "#5C9AFF",
        "400": "#2E7EFF",
        "500": "#0061FF",
        "600": "#004ECC",
        "700": "#003A99",
        "800": "#002766",
        "900": "#001333",
      },
      yellow: {
        "50": "#FFFAE6",
        "100": "#FEF1B9",
        "200": "#FEE88B",
        "300": "#FDDF5E",
        "400": "#FCD631",
        "500": "#FCCD03",
        "600": "#C9A403",
        "700": "#977B02",
        "800": "#655201",
        "900": "#322901",
      },
      red: {
        "50": "#FDE7EA",
        "100": "#FABDC4",
        "200": "#F6939E",
        "300": "#F36878",
        "400": "#EF3E52",
        "500": "#EC132B",
        "600": "#BC1023",
        "700": "#8D0C1A",
        "800": "#5E0811",
        "900": "#2F0409",
      },
    },
  });

  const navBarDetails = {
    buttons: {
      first: [
        {
          icon: <FaHome />,
          title: "Home",
          action: () => {
            navigate("/");
          },
        },
        {
          icon: <FaMapMarkedAlt />,
          title: "Map One",
          action: () => {
            navigate("/map-one");
          },
        },
        {
          icon: <FaMapMarkedAlt />,
          title: "Map Two",
          action: () => {
            navigate("/map-two");
          },
        },
      ],
      last: [
        {
          icon: <FaQuestion />,
          title: "About",
          action: () => {
            navigate("/");
          },
        },
        {
          icon: <BsGearFill />,
          title: "Settings",
          action: () => {
            navigate("/settings");
          },
        },
      ],
    },
  };

  return (
    <ChakraProvider {...{ theme }}>
      <NavBar position="left" details={navBarDetails}>
        <Routes>
          <Route path="about" element={<About />} />
          <Route path="settings" element={<Home />} />
          <Route path="map-one" element={<MapOne />} />
          <Route path="map-two" element={<MapTwo />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </NavBar>
    </ChakraProvider>
  );
};

export default App;
