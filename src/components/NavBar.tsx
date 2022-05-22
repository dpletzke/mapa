import { Box, Button } from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

type NavButtonType = {
  icon: ReactJSXElement;
  title: string;
  action: () => void;
};

type NavBarProps = {
  children: ReactJSXElement;
  position: "top" | "right" | "left" | "bottom";
  details: {
    buttons: { first: NavButtonType[]; last: NavButtonType[] };
  };
};

const LEFT = "left";
const RIGHT = "right";
const TOP = "top";
const BOTTOM = "bottom";

const NavBar = (props: NavBarProps) => {
  const { position, children, details } = props;

  return (
    <Box
      display="flex"
      flexDirection={[LEFT, RIGHT].includes(position) ? "row" : "column"}
    >
      {[RIGHT, BOTTOM].includes(position) && children}
      <Box
        bgColor="blue.400"
        display="flex"
        flexDirection={[LEFT, RIGHT].includes(position) ? "column" : "row"}
      >
        <Box
          height="100%"
          width="100%"
          display="flex"
          flexDirection={[LEFT, RIGHT].includes(position) ? "column" : "row"}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          {details.buttons.first.map(({ title, action, icon }) => (
            <Button
              key={title}
              onClick={action}
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant="link"
              color="white"
              p={2}
              m={2}
              borderRadius={4}
            >
              {icon}
              <Box ml={2}>{title}</Box>
            </Button>
          ))}
        </Box>
        <Box
          display="flex"
          flexDirection={[LEFT, RIGHT].includes(position) ? "column" : "row"}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          {details.buttons.last.map(({ title, action, icon }) => (
            <Button
              key={title}
              onClick={action}
              display="flex"
              alignItems="center"
              justifyContent="center"
              variant="link"
              color="white"
              p={2}
              m={2}
              borderRadius={4}
            >
              {icon}
              <Box ml={2}>{title}</Box>
            </Button>
          ))}
        </Box>
      </Box>
      {[LEFT, TOP].includes(position) && children}
    </Box>
  );
};

export { NavBar };
