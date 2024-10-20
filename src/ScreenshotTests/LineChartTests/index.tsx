import React from 'react';
import {View, Text} from 'react-native';
import {LineChart, yAxisSides} from 'react-native-gifted-charts';

const positiveData = [{value: 10}, {value: 15}, {value: 6}, {value: 8}];
const mixedData = [
  {value: 10},
  {value: 15},
  {value: -6},
  {value: 8},
  {value: -4},
];
const miniData = [{value: 0.4}, {value: 0.25}, {value: 0.6}, {value: 0.8}];
const labelledPositiveData = [
  {value: 10, label: 'Jan'},
  {value: 15, label: 'Feb'},
  {value: 6, label: 'Mar'},
  {value: 8, label: 'Apr'},
];
const labelledMixedData = [
  {value: 10, label: 'Jan'},
  {value: 15, label: 'Feb'},
  {value: -6, label: 'Mar'},
  {value: 8, label: 'Apr'},
  {value: -4, label: 'May'},
];
const largeLabbelledData = [
  {value: 10, label: 'January 2024'},
  {value: 15, label: 'February 2024'},
  {value: 6, label: 'March 2024'},
  {value: 8, label: 'April 2024'},
];

const lineAxesAndLabels1 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
  />
);
const lineAxesAndLabels2 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
  />
);
const lineAxesAndLabels3 = () => (
  <LineChart
    data={miniData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
  />
);

const lineAxesAndLabels4 = () => (
  <LineChart
    data={[{value: 90.2}, {value: 90.5}, {value: 90.3}, {value: 90.8}]}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisOffset={90}
  />
);
const lineAxesAndLabels5 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisSide={yAxisSides.RIGHT}
  />
);
const lineAxesAndLabels6 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisSide={yAxisSides.RIGHT}
  />
);
const lineAxesAndLabels7 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    secondaryYAxis={{}}
    secondaryData={miniData}
  />
);
const lineAxesAndLabels8 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    secondaryYAxis={{}}
    secondaryData={[{value: 0.4}, {value: 0.25}, {value: -0.6}, {value: 0.8}]}
  />
);
const lineAxesAndLabels9 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisExtraHeight={40}
  />
);
const lineAxesAndLabels10 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisExtraHeight={40}
    height={260}
  />
);
const lineAxesAndLabels11 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelWidth={50}
  />
);
const lineAxesAndLabels12 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisSide={yAxisSides.RIGHT}
    yAxisLabelWidth={50}
  />
);
const lineAxesAndLabels13 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    trimYAxisAtTop
  />
);
const lineAxesAndLabels14 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    trimYAxisAtTop
    yAxisSide={yAxisSides.RIGHT}
  />
);
const lineAxesAndLabels15 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    secondaryYAxis={{}}
    secondaryData={miniData}
    trimYAxisAtTop
  />
);
const lineAxesAndLabels16 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelPrefix="$"
  />
);
const lineAxesAndLabels17 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelSuffix="k"
  />
);
const lineAxesAndLabels18 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const lineAxesAndLabels19 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const lineAxesAndLabels20 = () => (
  <LineChart
    data={miniData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const lineAxesAndLabels21 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    formatYLabel={label => Number(label) * 2 + '/2'}
  />
);
const lineAxesAndLabels22 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    textFontSize={14}
    textColor={'blue'}
    textShiftY={-10}
    formatYLabel={label => Number(label) * 2 + '/2'}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
    yAxisLabelWidth={60}
  />
);

const lineAxesAndLabels23 = () => (
  <LineChart data={positiveData} showValuesAsDataPointsText rulesLength={140} />
);

const lineAxesAndLabels24 = () => (
  <LineChart data={mixedData} showValuesAsDataPointsText rulesLength={140} />
);

const lineAxesAndLabels25 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const lineAxesAndLabels26 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const lineAxesAndLabels27 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const lineAxesAndLabels28 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const lineAxesAndLabels29 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
    referenceLinesOverChartContent={false}
  />
);

const lineAxesAndLabels30 = () => (
  <LineChart data={positiveData} showValuesAsDataPointsText showVerticalLines />
);
const lineAxesAndLabels31 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showVerticalLines
    verticalLinesHeight={160}
  />
);
const lineAxesAndLabels32 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showVerticalLines
    verticalLinesShift={20}
  />
);

const lineAxesAndLabels33 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showVerticalLines
    noOfVerticalLines={3}
  />
);

const lineAxesAndLabels34 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    showVerticalLines
    verticalLinesSpacing={25}
  />
);

const lineAxesAndLabels35 = () => (
  <LineChart
    data={labelledPositiveData}
    showValuesAsDataPointsText
    rotateLabel
  />
);

const lineAxesAndLabels36 = () => (
  <LineChart data={labelledMixedData} showValuesAsDataPointsText rotateLabel />
);

const lineAxesAndLabels37 = () => (
  <LineChart
    data={largeLabbelledData}
    showValuesAsDataPointsText
    xAxisTextNumberOfLines={2}
  />
);

const lineAxesAndLabels38 = () => (
  <LineChart
    data={largeLabbelledData}
    showValuesAsDataPointsText
    xAxisTextNumberOfLines={2}
    xAxisLabelsHeight={100}
  />
);

const lineAxesAndLabels39 = () => (
  <LineChart
    data={labelledPositiveData}
    showValuesAsDataPointsText
    xAxisLabelsVerticalShift={20}
  />
);

const lineAxesAndLabels40 = () => (
  <LineChart
    data={labelledMixedData}
    showValuesAsDataPointsText
    xAxisLabelsVerticalShift={20}
  />
);

const lineAxesAndLabels41 = () => (
  <LineChart
    data={largeLabbelledData}
    showValuesAsDataPointsText
    rotateLabel
    labelsExtraHeight={60}
  />
);

const lineAxesAndLabels42 = () => (
  <LineChart data={positiveData} showValuesAsDataPointsText noOfSections={5} />
);
const lineAxesAndLabels43 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    noOfSections={5}
    noOfSectionsBelowXAxis={3}
  />
);
const lineAxesAndLabels44 = () => (
  <LineChart data={positiveData} showValuesAsDataPointsText maxValue={16} />
);

const lineAxesAndLabels45 = () => (
  <LineChart data={positiveData} showValuesAsDataPointsText stepValue={4} />
);

const lineAxesAndLabels46 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    noOfSections={5}
    maxValue={25}
  />
);

const lineAxesAndLabels47 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    noOfSections={5}
    stepValue={6}
  />
);
const lineAxesAndLabels48 = () => (
  <LineChart
    data={positiveData}
    showValuesAsDataPointsText
    stepValue={3}
    maxValue={24}
  />
);
const lineAxesAndLabels49 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    mostNegativeValue={-12}
  />
);
const lineAxesAndLabels50 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    negativeStepValue={-3}
  />
);

const lineAxesAndLabels51 = () => (
  <LineChart
    data={mixedData}
    showValuesAsDataPointsText
    negativeStepValue={-3}
    mostNegativeValue={-15}
  />
);

const lineAxesAndLabels52 = () => (
  <LineChart
    data={mixedData}
    negativeStepValue={-3}
    noOfSectionsBelowXAxis={4}
  />
);
const lineAxesAndLabels53 = () => (
  <LineChart
    data={mixedData}
    mostNegativeValue={-12}
    noOfSectionsBelowXAxis={4}
  />
);

const lineAxesAndLabels54 = () => (
  <LineChart
    data={mixedData}
    data2={positiveData}
    areaChart
    startFillColor1="red"
    startFillColor2="green"
    zIndex1={1}
  />
);

const lineAxesAndLabels55 = () => (
  <LineChart
    dataSet={[
      {data: mixedData, zIndex: 1, startFillColor: 'red'},
      {data: positiveData, startFillColor: 'green'},
    ]}
    areaChart
  />
);

export const lineAxesAndLabels56 = () => (
  <LineChart
    data={positiveData}
    pointerConfig={{
      pointerStripHeight: 180,
      pointerLabelWidth: 30,
      initialPointerIndex: 1,
      pointerLabelComponent: (items: any) => (
        <View style={{borderWidth: 1, borderRadius: 4}}>
          <Text style={{textAlign: 'center'}}>{items[0].value}</Text>
        </View>
      ),
    }}
  />
);

export const lineAxesAndLabels57 = () => (
  <LineChart
    data={labelledPositiveData}
    pointerConfig={{
      pointerStripHeight: 180,
      pointerLabelWidth: 30,
      initialPointerIndex: 1,
      pointerLabelComponent: (items: any) => (
        <View style={{borderWidth: 1, borderRadius: 4}}>
          <Text style={{textAlign: 'center'}}>{items[0].label}</Text>
        </View>
      ),
      horizontalStripConfig: {
        labelComponentHeight: 20,
        labelComponent: (items: any) => (
          <View
            style={{borderWidth: 1, borderRadius: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center'}}>{items[0].value}</Text>
          </View>
        ),
      },
    }}
  />
);

export const lineAxesAndLabels58 = () => (
  <LineChart
    data={labelledPositiveData}
    width={200}
    pointerConfig={{
      pointerStripHeight: 180,
      pointerLabelWidth: 30,
      initialPointerIndex: 1,
      pointerLabelComponent: (items: any) => (
        <View style={{borderWidth: 1, borderRadius: 4}}>
          <Text style={{textAlign: 'center'}}>{items[0].label}</Text>
        </View>
      ),
      horizontalStripConfig: {
        labelComponentHeight: 20,
        labelComponent: (items: any) => (
          <View
            style={{borderWidth: 1, borderRadius: 4, backgroundColor: 'white'}}>
            <Text style={{textAlign: 'center'}}>{items[0].value}</Text>
          </View>
        ),
      },
    }}
  />
);

export const lineChartTestsArray = [
  {
    component: lineAxesAndLabels1,
    title:
      'LineChart: A chart with only +ve values should have y Axis labels and the Y-axis line at the proper position',
    id: 'lineAxesAndLabels1',
    description: JSON.stringify(lineAxesAndLabels1().props),
  },
  {
    component: lineAxesAndLabels2,
    title:
      'LineChart: A chart with both +ve and -ve values should have y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'lineAxesAndLabels2',
    description: JSON.stringify(lineAxesAndLabels2().props),
  },
  {
    component: lineAxesAndLabels3,
    title:
      'LineChart: A chart with only +ve values, all values less than 1 should show fractional labels on the y Axis',
    id: 'lineAxesAndLabels3',
    description: JSON.stringify(lineAxesAndLabels3().props),
  },
  {
    component: lineAxesAndLabels4,
    title:
      'LineChart: A chart with only +ve values, with values range less than 1 should show fractional labels on the y Axis (given apt "yAxisOffset")',
    id: 'lineAxesAndLabels4',
    description: JSON.stringify(lineAxesAndLabels4().props),
  },
  {
    component: lineAxesAndLabels5,
    title:
      'LineChart: A chart with only +ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'lineAxesAndLabels5',
    description: JSON.stringify(lineAxesAndLabels5().props),
  },
  {
    component: lineAxesAndLabels6,
    title:
      'LineChart: A chart with both +ve and -ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'lineAxesAndLabels6',
    description: JSON.stringify(lineAxesAndLabels6().props),
  },
  {
    component: lineAxesAndLabels7,
    title:
      'LineChart: A chart with "secondaryYaxis" should have the secondary y Axis labels and the Y-axis line at the proper position (given secondary data)',
    id: 'lineAxesAndLabels7',
    description: JSON.stringify(lineAxesAndLabels7().props),
  },
  {
    component: lineAxesAndLabels8,
    title:
      'LineChart: A chart with "secondaryYaxis" and both +ve and -ve values should have the secondary y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'lineAxesAndLabels8',
    description: JSON.stringify(lineAxesAndLabels8().props),
  },
  {
    component: lineAxesAndLabels9,
    title:
      'LineChart: "yAxisExtraHeight" should add extra height to the chart when height is NOT given',
    id: 'lineAxesAndLabels9',
    description: JSON.stringify(lineAxesAndLabels9().props),
  },
  {
    component: lineAxesAndLabels10,
    title:
      'LineChart: "yAxisExtraHeight" should add extra height to the chart when height is given',
    id: 'lineAxesAndLabels10',
    description: JSON.stringify(lineAxesAndLabels10().props),
  },
  {
    component: lineAxesAndLabels11,
    title:
      'LineChart: "yAxisLabelWidth" prop should change the width of the y-Axis label and should horizontally shift the chart gracefully',
    id: 'lineAxesAndLabels11',
    description: JSON.stringify(lineAxesAndLabels11().props),
  },
  {
    component: lineAxesAndLabels12,
    title:
      'LineChart: Check alignment of the right side y-Axis line and labels when using the "yAxisLabelWidth" prop along with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'lineAxesAndLabels12',
    description: JSON.stringify(lineAxesAndLabels12().props),
  },
  {
    component: lineAxesAndLabels13,
    title:
      'LineChart: "trimYAxisAtTop" should shorten the Y axis from top without shifting the labels, chart or rules',
    id: 'lineAxesAndLabels13',
    description: JSON.stringify(lineAxesAndLabels13().props),
  },
  {
    component: lineAxesAndLabels14,
    title:
      'LineChart: "trimYAxisAtTop" should shorten the Y axis from top for the right side Y-axis when used with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'lineAxesAndLabels14',
    description: JSON.stringify(lineAxesAndLabels14().props),
  },
  {
    component: lineAxesAndLabels15,
    title:
      'LineChart: "trimYAxisAtTop" should shorten both sides Y-axis when using the secondary Y axis',
    id: 'lineAxesAndLabels15',
    description: JSON.stringify(lineAxesAndLabels15().props),
  },
  {
    component: lineAxesAndLabels16,
    title:
      'LineChart: "yAxisLabelPrefix" should add the prefix to Y-axis labels',
    id: 'lineAxesAndLabels16',
    description: JSON.stringify(lineAxesAndLabels16().props),
  },
  {
    component: lineAxesAndLabels17,
    title:
      'LineChart: "yAxisLabelSuffix" should add the suffix to Y-axis labels',
    id: 'lineAxesAndLabels17',
    description: JSON.stringify(lineAxesAndLabels17().props),
  },
  {
    component: lineAxesAndLabels18,
    title:
      'LineChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together',
    id: 'lineAxesAndLabels18',
    description: JSON.stringify(lineAxesAndLabels18().props),
  },
  {
    component: lineAxesAndLabels19,
    title:
      'LineChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with both +ve & -ve values',
    id: 'lineAxesAndLabels19',
    description: JSON.stringify(lineAxesAndLabels19().props),
  },
  {
    component: lineAxesAndLabels20,
    title:
      'LineChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with fractional values',
    id: 'lineAxesAndLabels20',
    description: JSON.stringify(lineAxesAndLabels20().props),
  },
  {
    component: lineAxesAndLabels21,
    title: 'LineChart: "formatYLabel" should format the Y-axis labels',
    id: 'lineAxesAndLabels21',
    description: JSON.stringify(lineAxesAndLabels21().props),
  },
  {
    component: lineAxesAndLabels22,
    title:
      'LineChart: "formatYLabel" should work on top of "yAxisLabelPrefix" and "yAxisLabelSuffix"',
    id: 'lineAxesAndLabels22',
    description: JSON.stringify(lineAxesAndLabels22().props),
  },

  {
    component: lineAxesAndLabels23,
    title:
      'LineChart: "rulesLength" prop should work for a chart with +ve values only',
    id: 'lineAxesAndLabels23',
    description: JSON.stringify(lineAxesAndLabels23().props),
  },
  {
    component: lineAxesAndLabels24,
    title:
      'LineChart: "rulesLength" prop should work for a chart with both +ve and -ve values',
    id: 'lineAxesAndLabels24',
    description: JSON.stringify(lineAxesAndLabels24().props),
  },
  {
    component: lineAxesAndLabels25,
    title:
      'LineChart: Reference line 1 should work for a chart with +ve values only',
    id: 'lineAxesAndLabels25',
    description: JSON.stringify(lineAxesAndLabels25().props),
  },
  {
    component: lineAxesAndLabels26,
    title:
      'LineChart: Reference line 1 should work for a chart with both +ve and -ve values',
    id: 'lineAxesAndLabels26',
    description: JSON.stringify(lineAxesAndLabels26().props),
  },
  {
    component: lineAxesAndLabels27,
    title:
      'LineChart: Reference line 2 should work for a chart with +ve values only',
    id: 'lineAxesAndLabels27',
    description: JSON.stringify(lineAxesAndLabels27().props),
  },
  {
    component: lineAxesAndLabels28,
    title:
      'LineChart: Reference line 2 should work for a chart with both +ve and -ve values',
    id: 'lineAxesAndLabels28',
    description: JSON.stringify(lineAxesAndLabels28().props),
  },
  {
    component: lineAxesAndLabels29,
    title:
      'LineChart: "referenceLinesOverChartContent: false" should render reference lines beneath chart content',
    id: 'lineAxesAndLabels29',
    description: JSON.stringify(lineAxesAndLabels29().props),
  },
  {
    component: lineAxesAndLabels30,
    title: 'LineChart: "showVerticalLines" should work',
    id: 'lineAxesAndLabels30',
    description: JSON.stringify(lineAxesAndLabels30().props),
  },
  {
    component: lineAxesAndLabels31,
    title: 'LineChart: "verticalLinesHeight" should work',
    id: 'lineAxesAndLabels31',
    description: JSON.stringify(lineAxesAndLabels31().props),
  },
  {
    component: lineAxesAndLabels32,
    title: 'LineChart: "verticalLinesShift" should work',
    id: 'lineAxesAndLabels32',
    description: JSON.stringify(lineAxesAndLabels32().props),
  },
  {
    component: lineAxesAndLabels33,
    title: 'LineChart: "noOfVerticalLines" should work',
    id: 'lineAxesAndLabels33',
    description: JSON.stringify(lineAxesAndLabels33().props),
  },
  {
    component: lineAxesAndLabels34,
    title: 'LineChart: "verticalLinesSpacing" should work',
    id: 'lineAxesAndLabels34',
    description: JSON.stringify(lineAxesAndLabels34().props),
  },
  {
    component: lineAxesAndLabels35,
    title:
      'LineChart: "rotateLabel" should work for a chart with +ve values only',
    id: 'lineAxesAndLabels35',
    description: JSON.stringify(lineAxesAndLabels35().props),
  },
  {
    component: lineAxesAndLabels36,
    title:
      'LineChart: "rotateLabel" should work for a chart with both +ve and -ve values',
    id: 'lineAxesAndLabels36',
    description: JSON.stringify(lineAxesAndLabels36().props),
  },
  {
    component: lineAxesAndLabels37,
    title: 'LineChart: "xAxisTextNumberOfLines" should work',
    id: 'lineAxesAndLabels37',
    description: JSON.stringify(lineAxesAndLabels37().props),
  },

  {
    component: lineAxesAndLabels38,
    title: 'LineChart: "xAxisLabelsHeight" should work',
    id: 'lineAxesAndLabels38',
    description: JSON.stringify(lineAxesAndLabels38().props),
  },
  {
    component: lineAxesAndLabels39,
    title:
      'LineChart: "xAxisLabelsVerticalShift" should work should work for a chart with +ve values only',
    id: 'lineAxesAndLabels39',
    description: JSON.stringify(lineAxesAndLabels39().props),
  },
  {
    component: lineAxesAndLabels40,
    title:
      'LineChart: "xAxisLabelsVerticalShift" should work should work for a chart with both +ve and -ve values',
    id: 'lineAxesAndLabels40',
    description: JSON.stringify(lineAxesAndLabels40().props),
  },
  {
    component: lineAxesAndLabels41,
    title:
      'LineChart: "labelsExtraHeight" should work for a chart with +ve values only',
    id: 'lineAxesAndLabels41',
    description: JSON.stringify(lineAxesAndLabels41().props),
  },
  {
    component: lineAxesAndLabels42,
    title: 'LineChart: "noOfSections" should work',
    id: 'lineAxesAndLabels42',
    description: JSON.stringify(lineAxesAndLabels42().props),
  },
  {
    component: lineAxesAndLabels43,
    title: 'LineChart: "noOfSectionsBelowXAxis" should work',
    id: 'lineAxesAndLabels43',
    description: JSON.stringify(lineAxesAndLabels43().props),
  },
  {
    component: lineAxesAndLabels44,
    title: 'LineChart: "maxValue" should work',
    id: 'lineAxesAndLabels44',
    description: JSON.stringify(lineAxesAndLabels44().props),
  },
  {
    component: lineAxesAndLabels45,
    title: 'LineChart: "stepValue" should work',
    id: 'lineAxesAndLabels45',
    description: JSON.stringify(lineAxesAndLabels45().props),
  },
  {
    component: lineAxesAndLabels46,
    title: 'LineChart: "noOfSections" and "maxValue" should work together',
    id: 'lineAxesAndLabels46',
    description: JSON.stringify(lineAxesAndLabels46().props),
  },
  {
    component: lineAxesAndLabels47,
    title: 'LineChart: "noOfSections" and "stepValue" should work together',
    id: 'lineAxesAndLabels47',
    description: JSON.stringify(lineAxesAndLabels47().props),
  },
  {
    component: lineAxesAndLabels48,
    title: 'LineChart: "maxValue" and "stepValue" should work together',
    id: 'lineAxesAndLabels48',
    description: JSON.stringify(lineAxesAndLabels48().props),
  },
  {
    component: lineAxesAndLabels49,
    title: 'LineChart: "mostNegativeValue" should work',
    id: 'lineAxesAndLabels49',
    description: JSON.stringify(lineAxesAndLabels49().props),
  },
  {
    component: lineAxesAndLabels50,
    title: 'LineChart: "negativeStepValue" should work',
    id: 'lineAxesAndLabels50',
    description: JSON.stringify(lineAxesAndLabels50().props),
  },
  {
    component: lineAxesAndLabels51,
    title:
      'LineChart: "noOfSectionsBelowXAxis" and "mostNegativeValue" should work together',
    id: 'lineAxesAndLabels51',
    description: JSON.stringify(lineAxesAndLabels51().props),
  },
  {
    component: lineAxesAndLabels52,
    title:
      'LineChart: "negativeStepValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'lineAxesAndLabels52',
    description: JSON.stringify(lineAxesAndLabels52().props),
  },
  {
    component: lineAxesAndLabels53,
    title:
      'LineChart: "mostNegativeValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'lineAxesAndLabels53',
    description: JSON.stringify(lineAxesAndLabels53().props),
  },
  {
    component: lineAxesAndLabels54,
    title: 'LineChart: "zIndex" should work',
    id: 'lineAxesAndLabels54',
    description: JSON.stringify(lineAxesAndLabels54().props),
  },

  {
    component: lineAxesAndLabels55,
    title: 'LineChart: "zIndex" should work with dataSet',
    id: 'lineAxesAndLabels55',
    description: JSON.stringify(lineAxesAndLabels55().props),
  },
  {
    component: lineAxesAndLabels56,
    title: 'LineChart: pointer should work',
    id: 'lineAxesAndLabels56',
    description: JSON.stringify(lineAxesAndLabels56().props),
  },
  {
    component: lineAxesAndLabels57,
    title: 'LineChart: pointer with horizontal strip should work',
    id: 'lineAxesAndLabels57',
    description: JSON.stringify(lineAxesAndLabels57().props),
  },

  {
    component: lineAxesAndLabels58,
    title:
      'LineChart: pointer with horizontal strip should work when width of chart is given',
    id: 'lineAxesAndLabels58',
    description: JSON.stringify(lineAxesAndLabels58().props),
  },
];
