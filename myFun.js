import React from 'react';
import {Alert, TouchableOpacity} from 'react-native';
import {SpotLightModalVisibleContext} from './openClose';

export const myFun = () => {
  return (
    <SpotLightModalVisibleContext.Consumer>
      {({visible, setVisible}) => {
        return null;
      }}
    </SpotLightModalVisibleContext.Consumer>
  );
};
