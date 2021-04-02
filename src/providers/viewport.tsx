import { createContext, Dispatch, FC, useState, SetStateAction } from "react";

type GLviewport = {
  latitude: number;
  longitude: number;
  zoom: number;
};

const initialState: GLviewport = {
  latitude: 50.293912030940234,
  longitude: 18.665159796406364,
  zoom: 12,
};

export const ViewportState = createContext<GLviewport>(initialState);
export const ViewportDispatch = createContext<
  Dispatch<SetStateAction<GLviewport>> | undefined
>(undefined);

export const ViewportProvider: FC = ({ children }) => {
  const [viewport, setViewport] = useState(initialState);

  return (
    <ViewportState.Provider value={viewport}>
      <ViewportDispatch.Provider value={setViewport}>
        {children}
      </ViewportDispatch.Provider>
    </ViewportState.Provider>
  );
};
