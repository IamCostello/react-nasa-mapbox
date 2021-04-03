import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { FC } from "react";

/**
 * React component used to indicate loading state of component
 */
export const Loader: FC = () => {
  return (
    <Center width="100%" height="100%">
      <Spinner />
    </Center>
  );
};
