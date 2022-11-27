import React from 'react';
import {
  Spinner  
} from 'native-base';

export default function Loading() {
  return (  
    <Spinner color="warning.500" size="lg" accessibilityLabel="Loading posts" style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}/>    
  );
}
