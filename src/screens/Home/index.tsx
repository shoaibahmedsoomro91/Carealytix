import React from "react";
import type { RootState } from '../../../store';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from "@react-navigation/stack";
import { Layout, Card } from "../../components";
import { HStack, VStack } from 'native-base';

export default function Home({
  navigation,
}: {
  navigation: StackNavigationProp<any>;
}) {
  const logbook_types = useSelector((state: RootState) => state.logbook.types);
  console.log('logbook_types============>',logbook_types)
  const handleClick = (dt : any) => {
    navigation.navigate('Entries', {
      name: dt.name,
      type : dt.type,
      heading : dt.heading
    })
  }
  return (
    <Layout>      
      <VStack space={3}>
        {
          logbook_types.map((dt,index) => {
            return <HStack key={index}>
              <Card heading={dt.heading} handleClick={ ()=> { handleClick(dt)}}></Card>
            </HStack>    
          })
        }        
      </VStack>
    </Layout>
  );
}
