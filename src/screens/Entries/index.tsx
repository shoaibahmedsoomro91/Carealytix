import React from "react";
import type { RootState } from '../../../store';
import { useSelector } from 'react-redux'
import { Layout, Loading, AppButton, NotificationLabel } from "../../components";
import { HStack, VStack, Text, FlatList, Box, Pressable, Center } from 'native-base';
import ILogBook from "../../types/LogBook";
import { useFocusEffect } from "@react-navigation/native";

interface EntriesProps {
  route : any,
  navigation: any
}

export default function Entries({ route, navigation } : EntriesProps ) {  
  const logbook_values = useSelector((state: RootState) => state.logbook.value)
  const [ values, setValues ] = React.useState<Array<ILogBook>>([]);
  const [ loading, setLoading ] = React.useState(true);
  const name : string = route.params.name;
  const type : string = route.params.type;
  const heading : string = route.params.heading;
  
  const handleBtnClick = () => {
    navigation.navigate('AddEntry',{
      type : type
    })
  }
  React.useEffect(() => {
    const filter_by_name = logbook_values.filter((item) => {
      return item.value.name === name
    });
    setValues(filter_by_name);
    setLoading(false)    
  },[])

  React.useEffect(() => {
    navigation.setOptions({
      title: heading === '' ? 'No title' : heading,
    });
  }, [navigation, heading]);

  return (
    <Layout>
      <AppButton label ='Add new entry' handleClick={handleBtnClick}></AppButton>
      { 
        loading && <Loading></Loading> 
      }      
      {
        !loading && values.length > 0 && <VStack>
          <FlatList data={values} renderItem={({item}) => 
            {
              return (
                <Box borderBottomWidth="1" pl={["0", "4"]} pr={["0", "5"]} py="2">
                  {
                    item.value?.minValue && item.value?.minValue && 
                    <HStack>
                      <Text flex={1} _dark={{
                        color: "warmGray.50"
                      }} color="coolGray.800" bold>
                        {`Min Value : ${item.value?.minValue}`}
                      </Text>                
                      <Text _dark={{
                          color: "warmGray.50"
                        }} color="coolGray.800" bold>                    
                        {`Max Value : ${item.value?.maxValue}`}
                      </Text>
                    </HStack>                
                  } 
                  {
                    item.value?.metadataFields[0] &&
                      <VStack>    
                      <Text _dark={{
                        color: "warmGray.50"
                      }} color="coolGray.800" bold>
                        {item.value?.metadataFields[0]}
                      </Text>
                    </VStack>
                                                  
                  }
                  {
                    item.value?.metadataFields[1] && 
                    <VStack>                 
                      <Text fontSize="xs" _dark={{
                          color: "warmGray.50"
                        }} color="coolGray.800">
                        {item.value?.metadataFields[1]}
                      </Text>                
                    </VStack>
                  
                  }
                </Box>
              )

            }
                    
          }>
          </FlatList>
        </VStack>
      }
      {
        !loading && values.length === 0 && <NotificationLabel/>
      }        
    </Layout>
  );
}
