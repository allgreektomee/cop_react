import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";

export default function Root() {
  return (
    <Box>
      <Header />
      <Menu />
      <Outlet />
    </Box>
  );
}