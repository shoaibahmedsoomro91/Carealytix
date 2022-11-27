import React from "react";
import { Input, Text } from "native-base";


interface TextFieldProps {
  value : string,
  variant : string,
  placeholder : string,
  onChange : ((text: string) => void),
  error : any,
  keyboardType : any
}

export default function TextField ({ value , onChange, variant, placeholder, error, keyboardType } : TextFieldProps) {
  const handleChange = ( text : string ) => {
    onChange(text)
  }

  return (
    <>
      <Input value={value} variant={variant}  placeholder={placeholder} onChangeText={handleChange} keyboardType = {keyboardType}/>
      {
        error?.message && <Text color='red.400'>{error?.message}</Text>
      }
    </>
  );
};