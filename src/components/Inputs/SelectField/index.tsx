import React from "react";
import { Select, CheckIcon, Text } from "native-base";


interface EnumDropDownItem {
  label: string; value: string
}

interface SelectFieldProps {
  value : string,
  placeholder : string,
  items : Array<EnumDropDownItem>
  onChange : ((itemValue: string) => void)
  error : any
}

export default function SelectField ({ value, placeholder, items, onChange, error} : SelectFieldProps) {
  
  const [service, setService] = React.useState("");

  return (
    <>
      <Select selectedValue={value} minWidth="200" accessibilityLabel="Choose Item" placeholder={placeholder} _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1} onValueChange={itemValue => onChange(itemValue)}>
          <Select.Item label='lol' value='lol' />
      </Select>
      {
        error?.message && <Text color='red.400'>{error?.message}</Text>
      }
    </>
  );
};