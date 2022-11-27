import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { Button } from "native-base";

interface AppButtonProps {
  label : string,
  handleClick : (() => void)    
}

export default function AppButton({ label, handleClick } : AppButtonProps ) {

  return (
    <Button size='lg' onPress={handleClick}>{label}</Button>
  )        
};