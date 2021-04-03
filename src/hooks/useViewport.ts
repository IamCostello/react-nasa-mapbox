import { useContext } from "react";
import { ViewportDispatch, ViewportState } from "../providers/viewport";

/**
 * React hook that provides viewport state context
 * @returns the viewport state context
 */
export const useViewportState = () => {
  const context = useContext(ViewportState);
  return context;
};

/**
 * React hook that provides viewport dispatch context
 * @returns the viewport dispatch context
 */
export const useViewportDispatch = () => {
  const context = useContext(ViewportDispatch);
  if (context === undefined) {
    throw new Error("Dispatch used outside of provider");
  }
  return context;
};
