import { useContext } from "react";
import { ViewportDispatch, ViewportState } from "../providers/viewport";

export const useViewportState = () => {
  const context = useContext(ViewportState);
  return context;
};

export const useViewportDispatch = () => {
  const context = useContext(ViewportDispatch);
  if (context === undefined) {
    throw new Error("Dispatch used outside of provider");
  }
  return context;
};
