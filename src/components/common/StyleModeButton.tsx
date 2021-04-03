import { Button } from "@chakra-ui/button";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import React, { FC } from "react";

/**
 * React component used to toggle Chakra Ui color mode
 */
export const StyleModeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const backgroundColor = useColorModeValue("white", "gray.800");

  return (
    <Button
      onClick={toggleColorMode}
      backgroundColor={backgroundColor}
      m={2}
      position="fixed"
      right="0"
      top="0"
      zIndex="10"
    >
      {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
