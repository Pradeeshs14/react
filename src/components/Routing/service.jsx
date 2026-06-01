import React from "react";

import {
  NavLink,
  Outlet,
} from "react-router-dom";

function Services() {

  return (

    <div className="page">

      <h1>Services</h1>

      <div className="service-links">

        <NavLink to="web-development">
          Web Development
        </NavLink>

        <NavLink to="app-development">
          App Development
        </NavLink>

        <NavLink to="ui-ux-design">
          UI/UX Design
        </NavLink>

      </div>

      <Outlet />

    </div>

  );
}

export default Services;