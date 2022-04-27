import React from 'react';
import {View, Text} from 'react-native';
import {BarChart, PieChart} from 'react-native-gifted-charts';

const MyComp = () => {
  const data = [
    {value: 20, label: 'M'},
    {value: 30, label: 'T'},
    {
      value: 50,
      label: 'W',
      topLabelComponent: () => (
        <Text style={{color: 'blue', fontSize: 18, marginBottom: 6}}>50</Text>
      ),
    },
    {value: 40, label: 'T'},
    {value: 30, label: 'F'},
  ];
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PieChart showText showValuesAsLabels width={300} data={data} frontColor="#177AD5" />
    </View>
  );
};

export default MyComp;
