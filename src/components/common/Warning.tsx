import { WarningIcon } from "@chakra-ui/icons";
import { Center } from "@chakra-ui/layout";
import React, { FC } from "react";

/**
 * React component used to indicate failed loading state of component
 */
export const Warning: FC = () => {
  return (
    <Center width="100%" height="100%">
      <WarningIcon boxSize="24px" />
    </Center>
  );
};
