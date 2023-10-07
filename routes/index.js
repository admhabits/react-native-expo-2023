import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

const Routes = ({children}) => {
  return (
    <NavigationContainer>
       {children}
    </NavigationContainer>
  );
};

export default Routes;