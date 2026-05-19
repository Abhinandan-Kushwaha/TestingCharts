import {Text, View} from 'react-native';
import {BarChart, lineDataItem} from 'react-native-gifted-charts';

const BarLineWithCustomDataAndYOffset = () => {
  const data = [
    {value: 134},
    {value: 138},
    {value: 136},
    {value: 140},
    {value: 141},
  ];
  const data2 = [
    {value: 134 - 0},
    {value: 138 - 0},
    {value: 136 - 0},
    {value: 140 - 0},
    {value: 141 - 0},
  ];

  const customDataPoint = (item: lineDataItem) => {
    return (
      <View
        style={{
          width: 24,
          height: 24,
          borderRadius: 12,
          backgroundColor: 'white',
          borderWidth: 2,
          borderColor: 'blue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 9, color: 'green'}}>{item.value}</Text>
      </View>
    );
  };

  return (
    <View style={{}}>
      <BarChart
        data={data2}
        lineData={data}
        showLine
        width={270}
        stepValue={50}
        secondaryYAxis={{
          yAxisLabelContainerStyle: {
            width: 38,
            marginLeft: 10,
          },
          yAxisLabelWidth: 60,
          yAxisThickness: 0,
          yAxisOffset: 50,
        }}
        lineConfig={{
          isSecondary: true,
          customDataPoint: customDataPoint,
          dataPointsHeight: 2,
          dataPointsWidth: 12,
        }}
      />
    </View>
  );
};

export default BarLineWithCustomDataAndYOffset;
