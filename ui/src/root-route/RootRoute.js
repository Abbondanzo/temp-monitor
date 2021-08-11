import React from "react";

import { useMotorData } from "./useMotorData";
import { ChartPanel } from "../common/ChartPanel";

export const RootRoute = ({ editable, windowWidth }) => {
  const { motorData, longMotorData, dataSpec } = useMotorData();

  return (
    <>
      <ChartPanel
        motorData={motorData}
        longMotorData={longMotorData}
        dataSpec={dataSpec}
        width={editable ? windowWidth - 200 : windowWidth}
      />
    </>
  );
};
