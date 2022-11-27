import React from "react";
import {
  Box,    
} from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function Layout  ({
  children
}: any)  {
  
  return (    
    <>
      <SafeAreaView></SafeAreaView>
      <Box
        flex={1}
        flexBasis="0"
        px={4}
        mx="auto"
        pt={0}
        w={{ base: "100%", md: "768px", lg: "1000px", xl: "1080px" }}
      >        
        {children}
      </Box>      
    </>
  );
};
