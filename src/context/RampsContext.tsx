import React, { useState, createContext, useEffect, ReactElement } from "react";
import getRampAlgorithms from "../services/getRampAlgorithms";

// Type defination for Ramps data.
export interface Ramps {
  id: string;
  algorithm: string;
}

// Default state of Ramps data.
const RampInitialState: Ramps[] = [
  {
    id: "",
    algorithm: ""
  }
];

// Ramps Context.
export const RampsContext = createContext<Ramps[]>(RampInitialState);

// Context Provider for Ramp data.
export const RampsProvider = (props: { children: React.ReactNode }): ReactElement => {
  const [rampDetails, setRampDetails] = useState(RampInitialState);

  // Memoized ramp data.
  const value = React.useMemo(() => rampDetails, [rampDetails]);

  useEffect(() => {
    getRampAlgorithms((ramps: Ramps[]) => {
      setRampDetails(ramps);
    });
  }, []);

  return <RampsContext.Provider value={value}>{props.children}</RampsContext.Provider>;
};
