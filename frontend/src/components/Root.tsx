import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function Root() {
  return (
    <Box>
      <Header />
      <Menu />
      <Outlet />
      <Footer/>
      
      
      <ReactQueryDevtools />

    </Box>
  );
}