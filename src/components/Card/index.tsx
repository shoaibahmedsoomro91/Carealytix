import React from 'react';
import {
  Center,
  Heading,
  Pressable,  
} from 'native-base';

interface CardProps {
  heading : string,
  handleClick : (() => void)
}

export default function Card({  
  heading,
  handleClick
}: CardProps) {
    
  return (  
    <Pressable
      flex={1}
      onPress={() => {
        handleClick();
      }}
    >
    <Center h="50" w="100%" bg="primary.300" rounded="md" shadow={3}>
      <Heading size="xs">
        {heading}
      </Heading>
    </Center>
    </Pressable>    
  );
}
