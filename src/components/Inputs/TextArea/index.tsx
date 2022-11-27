import React from "react";
import { TextArea } from "native-base";

interface TextAreaFieldProps {
  value : string,
  placeholder : string,
  onChange : ((val: string) => void)
}

export default function TextAreaField ( {value, placeholder, onChange} : TextAreaFieldProps ) {
  return (
    <TextArea 
      h={20} 
      defaultValue={value}
      placeholder={placeholder}
      onChangeText={(val) => onChange(val)}
      maxW="400"
    />
  );
};