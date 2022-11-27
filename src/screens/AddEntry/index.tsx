import React from "react";
import { Layout, Loading, Dialog } from "../../components";
import { TextField, TextAreaField, SelectField } from "../../components/Inputs";
import { Stack, FormControl } from 'native-base';
import { useForm, Controller } from 'react-hook-form';
import { StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup';
import { addValue } from '../../../logbook-state'
import { createEntrySchema } from '../../utils/createSchema';

type FormData = { 
  minValue?: string,
  maxValue?: string,
  dialysis_type : string,
  notes : string
};

export default function AddEntry({ route, navigation } : any) {
  const type = route.params.type;
  const schema = createEntrySchema(type);
  const dispatch = useDispatch();
  const [ isSubmit, setIsSubmit ] = React.useState(false);
  const [ loading, setLoading ] = React.useState(false);
  const [ showDialog, setShowDialog ] = React.useState(false);

  const { handleSubmit, control , formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: FormData) => {
    setIsSubmit(true);
    setLoading(true);
    const { dialysis_type, maxValue, minValue, notes } = data;    
    const form_data  = {
     id : Math.random(),
     value : {
      type : 'NUMERIC',
      name : 'POTASSIUM',
      metadataFields : [ notes, dialysis_type ],
      minValue : minValue,
      maxValue : maxValue
     }
    }
    dispatch(addValue(form_data));        
    setLoading(false);
    setShowDialog(true);
  };
  
  const handleDialogButton = () => {
    navigation.navigate('Home')
  }

  return (
    <Layout>
      {
        showDialog && <Dialog handleButtonClick={handleDialogButton}></Dialog>
      }      
      { 
        loading && <Loading></Loading> 
      }
      <Stack space={5}>
        <Stack>
          <FormControl.Label>Min Value</FormControl.Label>
          <Controller
            control={control}
            render={({field: { onChange, value }}) => (
              <TextField 
                value = {value} 
                variant = "underlined"
                placeholder = "Min Value"
                onChange={( value : string )=>{onChange(value)}}
                error = {errors?.minValue}
                keyboardType= 'numeric'
              ></TextField>                          
            )}
            name="minValue"
            rules={{ required: true }}
          />            
        </Stack> 
        <Stack>
          <FormControl.Label>Max Value</FormControl.Label>
          <Controller
            control={control}
            render={({field: { onChange, value }}) => (
              <TextField
                value = {value} 
                variant = "underlined"
                placeholder = "Max Value"
                onChange={( value : string )=>{onChange(value)}}
                error = {errors?.maxValue}
                keyboardType= 'numeric'
              ></TextField>
            )}
            name="maxValue"
            rules={{ required: true }}
          />
        </Stack>
        <Stack>
          <FormControl.Label>Dialysis type</FormControl.Label>
          <Controller
            control={control}
            render={({field: { onChange, value }}) => (
              <SelectField value={value} placeholder="Choose dialysis type" items={[{label : 'Before Dialysis', value : 'Before Dialysis'},{label : 'Before Dialysis', value : 'Before Dialysis'},{label : 'Arbitrary', value : 'Arbitrary'}]}onChange={( value : string )=>{onChange(value)}} error = {errors?.dialysis_type}></SelectField>)}
            name="dialysis_type"
            rules={{ required: true }}
          /> 
        </Stack>
        <Stack>
          <FormControl.Label>Notes</FormControl.Label>            
          <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
              <TextAreaField value = {value} placeholder = "Enter Notes of you dialysis" onChange={( value : string )=>{onChange(value)}}></TextAreaField>
            )}
            name="notes"
            rules={{ required: true }}
          />
        </Stack>
        <Stack>          
          <Button disabled = {isSubmit} title="Button" onPress={handleSubmit(onSubmit)}/>
        </Stack>
      </Stack>
    </Layout>
  );
}
const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});