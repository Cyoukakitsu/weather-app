// import { useState } from 'react';
import { Link, Breadcrumbs } from "@mui/material";

function AppNav({ setIsHome }) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        underline="hover"
        color="inherit"
        href="#"
        onClick={() => setIsHome(true)}
      >
        Home
      </Link>
      <Link underline="hover" color="inherit" href="#">
        Forecast
      </Link>
    </Breadcrumbs>
  );
}
export default AppNav;
