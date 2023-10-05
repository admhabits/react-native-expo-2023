import React, { useState } from 'react';
import Routes from 'routes';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useState(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
};

export default App;