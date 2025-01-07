import React, { useEffect } from "react";
import CircularLoader from "../components/CircularLoader";

import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

function RootLayout() {
  const { state } = useNavigation();

  return (
    <div>
      {state === "loading" ? (
        <CircularLoader />
      ) : (
        <div>
          <h1>
            <MainNavigation />
          </h1>
          <Outlet />
        </div>
      )}
    </div>
  );
}

export default RootLayout;
