import React from 'react';
import {Text, View} from 'react-native';
import {BarChart, barDataItem, yAxisSides} from 'react-native-gifted-charts';

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

const barAxesAndLabels1 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel />
);

const barAxesAndLabels2 = () => (
  <BarChart data={mixedData} showValuesAsTopLabel />
);
const barAxesAndLabels3 = () => (
  <BarChart data={miniData} showValuesAsTopLabel />
);

const barAxesAndLabels4 = () => (
  <BarChart
    data={[{value: 90.2}, {value: 90.5}, {value: 90.3}, {value: 90.8}]}
    showValuesAsTopLabel
    yAxisOffset={90}
  />
);
const barAxesAndLabels5 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
  />
);
const barAxesAndLabels6 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
  />
);
const barAxesAndLabels7 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    frontColor={'skyblue'}
    secondaryYAxis
    showLine
    lineData={miniData}
    lineConfig={{isSecondary: true, color: 'green'}}
  />
);
const barAxesAndLabels8 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    frontColor={'skyblue'}
    secondaryYAxis
    showLine
    lineData={[{value: 0.4}, {value: 0.25}, {value: -0.6}, {value: 0.8}]}
    lineConfig={{isSecondary: true, color: 'green'}}
  />
);
const barAxesAndLabels9 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel yAxisExtraHeight={40} />
);
const barAxesAndLabels10 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    yAxisExtraHeight={40}
    height={260}
  />
);
const barAxesAndLabels11 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel yAxisLabelWidth={50} />
);
const barAxesAndLabels12 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
    yAxisLabelWidth={50}
  />
);
const barAxesAndLabels13 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel trimYAxisAtTop />
);
const barAxesAndLabels14 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    trimYAxisAtTop
    yAxisSide={yAxisSides.RIGHT}
  />
);
const barAxesAndLabels15 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    frontColor={'skyblue'}
    secondaryYAxis
    showLine
    lineData={miniData}
    lineConfig={{isSecondary: true, color: 'green'}}
    trimYAxisAtTop
  />
);
const barAxesAndLabels16 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel yAxisLabelPrefix="$" />
);
const barAxesAndLabels17 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel yAxisLabelSuffix="k" />
);
const barAxesAndLabels18 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const barAxesAndLabels19 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const barAxesAndLabels20 = () => (
  <BarChart
    data={miniData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const barAxesAndLabels21 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    formatYLabel={label => Number(label) * 2 + '/2'}
  />
);
const barAxesAndLabels22 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    formatYLabel={label => Number(label) * 2 + '/2'}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
    yAxisLabelWidth={60}
  />
);
const barAxesAndLabels23 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel rulesLength={140} />
);

const barAxesAndLabels24 = () => (
  <BarChart data={mixedData} showValuesAsTopLabel rulesLength={140} />
);

const barAxesAndLabels25 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    frontColor={'skyblue'}
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const barAxesAndLabels26 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    rulesLength={140}
    frontColor={'skyblue'}
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const barAxesAndLabels27 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    frontColor={'skyblue'}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const barAxesAndLabels28 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    rulesLength={140}
    frontColor={'skyblue'}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const barAxesAndLabels29 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    rulesLength={140}
    frontColor={'skyblue'}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
    referenceLinesOverChartContent={false}
  />
);

const barAxesAndLabels30 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel showVerticalLines />
);
const barAxesAndLabels31 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesHeight={160}
  />
);
const barAxesAndLabels32 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesShift={20}
  />
);

const barAxesAndLabels33 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    showVerticalLines
    noOfVerticalLines={3}
  />
);

const barAxesAndLabels34 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesSpacing={25}
  />
);

const barAxesAndLabels35 = () => (
  <BarChart data={labelledPositiveData} showValuesAsTopLabel rotateLabel />
);

const barAxesAndLabels36 = () => (
  <BarChart data={labelledMixedData} showValuesAsTopLabel rotateLabel />
);

const barAxesAndLabels37 = () => (
  <BarChart
    data={labelledPositiveData}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={10}
  />
);

const barAxesAndLabels38 = () => (
  <BarChart
    data={labelledMixedData}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={10}
  />
);

const barAxesAndLabels39 = () => (
  <BarChart
    data={largeLabbelledData}
    showValuesAsTopLabel
    xAxisTextNumberOfLines={2}
  />
);

const barAxesAndLabels40 = () => (
  <BarChart
    data={largeLabbelledData}
    showValuesAsTopLabel
    xAxisTextNumberOfLines={2}
    xAxisLabelsHeight={100}
  />
);

const barAxesAndLabels41 = () => (
  <BarChart
    data={labelledPositiveData}
    showValuesAsTopLabel
    xAxisLabelsVerticalShift={20}
  />
);

const barAxesAndLabels42 = () => (
  <BarChart
    data={labelledMixedData}
    showValuesAsTopLabel
    xAxisLabelsVerticalShift={20}
  />
);
const barAxesAndLabels43 = () => (
  <BarChart
    data={labelledMixedData}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={30}
    xAxisLabelsVerticalShift={20}
  />
);

const barAxesAndLabels44 = () => (
  <BarChart
    data={largeLabbelledData}
    showValuesAsTopLabel
    rotateLabel
    labelsExtraHeight={60}
  />
);

const barAxesAndLabels45 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel noOfSections={5} />
);
const barAxesAndLabels46 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    noOfSections={5}
    noOfSectionsBelowXAxis={3}
  />
);
const barAxesAndLabels47 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel maxValue={16} />
);

const barAxesAndLabels48 = () => (
  <BarChart data={positiveData} showValuesAsTopLabel stepValue={4} />
);

const barAxesAndLabels49 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    noOfSections={5}
    maxValue={25}
  />
);

const barAxesAndLabels50 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    noOfSections={5}
    stepValue={6}
  />
);
const barAxesAndLabels51 = () => (
  <BarChart
    data={positiveData}
    showValuesAsTopLabel
    stepValue={3}
    maxValue={24}
  />
);
const barAxesAndLabels52 = () => (
  <BarChart data={mixedData} showValuesAsTopLabel mostNegativeValue={-12} />
);
const barAxesAndLabels53 = () => (
  <BarChart data={mixedData} showValuesAsTopLabel negativeStepValue={-3} />
);

const barAxesAndLabels54 = () => (
  <BarChart
    data={mixedData}
    showValuesAsTopLabel
    negativeStepValue={-3}
    mostNegativeValue={-15}
  />
);

const barAxesAndLabels55 = () => (
  <BarChart
    data={mixedData}
    negativeStepValue={-3}
    noOfSectionsBelowXAxis={4}
  />
);
const barAxesAndLabels56 = () => (
  <BarChart
    data={mixedData}
    mostNegativeValue={-12}
    noOfSectionsBelowXAxis={4}
  />
);

const barAxesAndLabels57 = () => (
  <BarChart
    data={positiveData}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);

const barAxesAndLabels58 = () => (
  <BarChart
    data={mixedData}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);

const barAxesAndLabels59 = () => (
  <BarChart
    data={mixedData}
    autoCenterTooltip
    focusedBarIndex={0}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);

const barAxesAndLabels60 = () => (
  <BarChart
    data={mixedData}
    barMarginBottom={20}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);

const barAxesAndLabels61 = () => (
  <BarChart
    data={mixedData}
    barMarginBottom={20}
    autoCenterTooltip
    focusedBarIndex={0}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);


const barAxesAndLabels62 = () => (
  <BarChart
    data={positiveData}
    autoCenterTooltip
    focusedBarIndex={[1,3]}
    renderTooltip={(item: barDataItem) => (
      <View>
        <Text>{item.value}</Text>
      </View>
    )}
  />
);

const barAxesAndLabels63 = () => (
  <BarChart
      data={[
        { value: 5 },
        { value: 3 },
        {
          value:8,
          showVerticalLine:true, verticalLineThickness:30
        }
      ]}
      barWidth={15}
      frontColor={'navy'}
      roundedTop
    />
)

export const barChartTestsArray = [
  {
    component: barAxesAndLabels1,
    title:
      'BarChart: A chart with only +ve values should have y Axis labels and the Y-axis line at the proper position',
    id: 'barAxesAndLabels1',
    description: JSON.stringify(barAxesAndLabels1().props),
  },
  {
    component: barAxesAndLabels2,
    title:
      'BarChart: A chart with both +ve and -ve values should have y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'barAxesAndLabels2',
    description: JSON.stringify(barAxesAndLabels2().props),
  },
  {
    component: barAxesAndLabels3,
    title:
      'BarChart: A chart with only +ve values, all values less than 1 should show fractional labels on the y Axis',
    id: 'barAxesAndLabels3',
    description: JSON.stringify(barAxesAndLabels3().props),
  },
  {
    component: barAxesAndLabels4,
    title:
      'BarChart: A chart with only +ve values, with values range less than 1 should show fractional labels on the y Axis (given apt "yAxisOffset")',
    id: 'barAxesAndLabels4',
    description: JSON.stringify(barAxesAndLabels4().props),
  },
  {
    component: barAxesAndLabels5,
    title:
      'BarChart: A chart with only +ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'barAxesAndLabels5',
    description: JSON.stringify(barAxesAndLabels5().props),
  },
  {
    component: barAxesAndLabels6,
    title:
      'BarChart: A chart with both +ve and -ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'barAxesAndLabels6',
    description: JSON.stringify(barAxesAndLabels6().props),
  },
  {
    component: barAxesAndLabels7,
    title:
      'BarChart: A chart with "secondaryYaxis" should have the secondary y Axis labels and the Y-axis line at the proper position (given secondary data)',
    id: 'barAxesAndLabels7',
    description: JSON.stringify(barAxesAndLabels7().props),
  },
  {
    component: barAxesAndLabels8,
    title:
      'BarChart: A chart with "secondaryYaxis" and both +ve and -ve values should have the secondary y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'barAxesAndLabels8',
    description: JSON.stringify(barAxesAndLabels8().props),
  },
  {
    component: barAxesAndLabels9,
    title:
      'BarChart: "yAxisExtraHeight" should add extra height to the chart when "height" is NOT given',
    id: 'barAxesAndLabels9',
    description: JSON.stringify(barAxesAndLabels9().props),
  },
  {
    component: barAxesAndLabels10,
    title:
      'BarChart: "yAxisExtraHeight" should add extra height to the chart when "height" is given',
    id: 'barAxesAndLabels10',
    description: JSON.stringify(barAxesAndLabels10().props),
  },
  {
    component: barAxesAndLabels11,
    title:
      'BarChart: "yAxisLabelWidth" prop should change the width of the y-Axis label and should horizontally shift the chart gracefully',
    id: 'barAxesAndLabels11',
    description: JSON.stringify(barAxesAndLabels11().props),
  },
  {
    component: barAxesAndLabels12,
    title:
      'BarChart: Check alignment of the right side y-Axis line and labels when using the "yAxisLabelWidth" prop along with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'barAxesAndLabels12',
    description: JSON.stringify(barAxesAndLabels12().props),
  },
  {
    component: barAxesAndLabels13,
    title:
      'BarChart: "trimYAxisAtTop" should shorten the Y axis from top without shifting the labels, chart or rules',
    id: 'barAxesAndLabels13',
    description: JSON.stringify(barAxesAndLabels13().props),
  },
  {
    component: barAxesAndLabels14,
    title:
      'BarChart: "trimYAxisAtTop" should shorten the Y axis from top for the right side Y-axis when used with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'barAxesAndLabels14',
    description: JSON.stringify(barAxesAndLabels14().props),
  },
  {
    component: barAxesAndLabels15,
    title:
      'BarChart: "trimYAxisAtTop" should shorten both sides Y-axis when using the secondary Y axis',
    id: 'barAxesAndLabels15',
    description: JSON.stringify(barAxesAndLabels15().props),
  },
  {
    component: barAxesAndLabels16,
    title:
      'BarChart: "yAxisLabelPrefix" should add the prefix to Y-axis labels',
    id: 'barAxesAndLabels16',
    description: JSON.stringify(barAxesAndLabels16().props),
  },
  {
    component: barAxesAndLabels17,
    title:
      'BarChart: "yAxisLabelSuffix" should add the suffix to Y-axis labels',
    id: 'barAxesAndLabels17',
    description: JSON.stringify(barAxesAndLabels17().props),
  },
  {
    component: barAxesAndLabels18,
    title:
      'BarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together',
    id: 'barAxesAndLabels18',
    description: JSON.stringify(barAxesAndLabels18().props),
  },
  {
    component: barAxesAndLabels19,
    title:
      'BarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with both +ve & -ve values',
    id: 'barAxesAndLabels19',
    description: JSON.stringify(barAxesAndLabels19().props),
  },
  {
    component: barAxesAndLabels20,
    title:
      'BarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with fractional values',
    id: 'barAxesAndLabels20',
    description: JSON.stringify(barAxesAndLabels20().props),
  },
  {
    component: barAxesAndLabels21,
    title: 'BarChart: "formatYLabel" should format the Y-axis labels',
    id: 'barAxesAndLabels21',
    description: JSON.stringify(barAxesAndLabels21().props),
  },
  {
    component: barAxesAndLabels22,
    title:
      'BarChart: "formatYLabel" should work on top of "yAxisLabelPrefix" and "yAxisLabelSuffix"',
    id: 'barAxesAndLabels22',
    description: JSON.stringify(barAxesAndLabels22().props),
  },

  {
    component: barAxesAndLabels23,
    title:
      'BarChart: "rulesLength" prop should work for a chart with +ve values only',
    id: 'barAxesAndLabels23',
    description: JSON.stringify(barAxesAndLabels23().props),
  },
  {
    component: barAxesAndLabels24,
    title:
      'BarChart: "rulesLength" prop should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels24',
    description: JSON.stringify(barAxesAndLabels24().props),
  },
  {
    component: barAxesAndLabels25,
    title:
      'BarChart: Reference line 1 should work for a chart with +ve values only',
    id: 'barAxesAndLabels25',
    description: JSON.stringify(barAxesAndLabels25().props),
  },
  {
    component: barAxesAndLabels26,
    title:
      'BarChart: Reference line 1 should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels26',
    description: JSON.stringify(barAxesAndLabels26().props),
  },
  {
    component: barAxesAndLabels27,
    title:
      'BarChart: Reference line 2 should work for a chart with +ve values only',
    id: 'barAxesAndLabels27',
    description: JSON.stringify(barAxesAndLabels27().props),
  },
  {
    component: barAxesAndLabels28,
    title:
      'BarChart: Reference line 2 should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels28',
    description: JSON.stringify(barAxesAndLabels28().props),
  },
  {
    component: barAxesAndLabels29,
    title:
      'BarChart: "referenceLinesOverChartContent: false" should render reference lines beneath chart content',
    id: 'barAxesAndLabels29',
    description: JSON.stringify(barAxesAndLabels29().props),
  },
  {
    component: barAxesAndLabels30,
    title: 'BarChart: "showVerticalLines" should work',
    id: 'barAxesAndLabels30',
    description: JSON.stringify(barAxesAndLabels30().props),
  },
  {
    component: barAxesAndLabels31,
    title: 'BarChart: "verticalLinesHeight" should work',
    id: 'barAxesAndLabels31',
    description: JSON.stringify(barAxesAndLabels31().props),
  },
  {
    component: barAxesAndLabels32,
    title: 'BarChart: "verticalLinesShift" should work',
    id: 'barAxesAndLabels32',
    description: JSON.stringify(barAxesAndLabels32().props),
  },
  {
    component: barAxesAndLabels33,
    title: 'BarChart: "noOfVerticalLines" should work',
    id: 'barAxesAndLabels33',
    description: JSON.stringify(barAxesAndLabels33().props),
  },
  {
    component: barAxesAndLabels34,
    title: 'BarChart: "verticalLinesSpacing" should work',
    id: 'barAxesAndLabels34',
    description: JSON.stringify(barAxesAndLabels34().props),
  },
  {
    component: barAxesAndLabels35,
    title:
      'BarChart: "rotateLabel" should work for a chart with +ve values only',
    id: 'barAxesAndLabels35',
    description: JSON.stringify(barAxesAndLabels35().props),
  },
  {
    component: barAxesAndLabels36,
    title:
      'BarChart: "rotateLabel" should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels36',
    description: JSON.stringify(barAxesAndLabels36().props),
  },
  {
    component: barAxesAndLabels37,
    title:
      'BarChart: "labelsDistanceFromXaxis" should work for a chart with +ve values only',
    id: 'barAxesAndLabels37',
    description: JSON.stringify(barAxesAndLabels37().props),
  },
  {
    component: barAxesAndLabels38,
    title:
      'BarChart: "labelsDistanceFromXaxis" should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels38',
    description: JSON.stringify(barAxesAndLabels38().props),
  },
  {
    component: barAxesAndLabels39,
    title: 'BarChart: "xAxisTextNumberOfLines" should work',
    id: 'barAxesAndLabels39',
    description: JSON.stringify(barAxesAndLabels39().props),
  },

  {
    component: barAxesAndLabels40,
    title: 'BarChart: "xAxisLabelsHeight" should work',
    id: 'barAxesAndLabels40',
    description: JSON.stringify(barAxesAndLabels40().props),
  },
  {
    component: barAxesAndLabels41,
    title:
      'BarChart: "xAxisLabelsVerticalShift" should work should work for a chart with +ve values only',
    id: 'barAxesAndLabels41',
    description: JSON.stringify(barAxesAndLabels41().props),
  },
  {
    component: barAxesAndLabels42,
    title:
      'BarChart: "xAxisLabelsVerticalShift" should work should work for a chart with both +ve and -ve values',
    id: 'barAxesAndLabels42',
    description: JSON.stringify(barAxesAndLabels42().props),
  },
  {
    component: barAxesAndLabels43,
    title:
      'BarChart: "labelsDistanceFromXaxis" and "xAxisLabelsVerticalShift" should work together for a chart with both +ve and -ve value',
    id: 'barAxesAndLabels43',
    description: JSON.stringify(barAxesAndLabels43().props),
  },
  {
    component: barAxesAndLabels44,
    title:
      'BarChart: "labelsExtraHeight" should work for a chart with +ve values only',
    id: 'barAxesAndLabels44',
    description: JSON.stringify(barAxesAndLabels44().props),
  },
  {
    component: barAxesAndLabels45,
    title: 'BarChart: "noOfSections" should work',
    id: 'barAxesAndLabels45',
    description: JSON.stringify(barAxesAndLabels45().props),
  },
  {
    component: barAxesAndLabels46,
    title: 'BarChart: "noOfSectionsBelowXAxis" should work',
    id: 'barAxesAndLabels46',
    description: JSON.stringify(barAxesAndLabels46().props),
  },
  {
    component: barAxesAndLabels47,
    title: 'BarChart: "maxValue" should work',
    id: 'barAxesAndLabels47',
    description: JSON.stringify(barAxesAndLabels47().props),
  },
  {
    component: barAxesAndLabels48,
    title: 'BarChart: "stepValue" should work',
    id: 'barAxesAndLabels48',
    description: JSON.stringify(barAxesAndLabels48().props),
  },
  {
    component: barAxesAndLabels49,
    title: 'BarChart: "noOfSections" and "maxValue" should work together',
    id: 'barAxesAndLabels49',
    description: JSON.stringify(barAxesAndLabels49().props),
  },
  {
    component: barAxesAndLabels50,
    title: 'BarChart: "noOfSections" and "stepValue" should work together',
    id: 'barAxesAndLabels50',
    description: JSON.stringify(barAxesAndLabels50().props),
  },
  {
    component: barAxesAndLabels51,
    title: 'BarChart: "maxValue" and "stepValue" should work together',
    id: 'barAxesAndLabels51',
    description: JSON.stringify(barAxesAndLabels51().props),
  },
  {
    component: barAxesAndLabels52,
    title: 'BarChart: "mostNegativeValue" should work',
    id: 'barAxesAndLabels52',
    description: JSON.stringify(barAxesAndLabels52().props),
  },
  {
    component: barAxesAndLabels53,
    title: 'BarChart: "negativeStepValue" should work',
    id: 'barAxesAndLabels53',
    description: JSON.stringify(barAxesAndLabels53().props),
  },
  {
    component: barAxesAndLabels54,
    title:
      'BarChart: "noOfSectionsBelowXAxis" and "mostNegativeValue" should work together',
    id: 'barAxesAndLabels54',
    description: JSON.stringify(barAxesAndLabels54().props),
  },
  {
    component: barAxesAndLabels55,
    title:
      'BarChart: "negativeStepValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'barAxesAndLabels55',
    description: JSON.stringify(barAxesAndLabels55().props),
  },
  {
    component: barAxesAndLabels56,
    title:
      'BarChart: "mostNegativeValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'barAxesAndLabels56',
    description: JSON.stringify(barAxesAndLabels56().props),
  },
  {
    component: barAxesAndLabels57,
    title:
      'BarChart: Tooltip should be rendered at proper location for a Bar chart with only positive values',
    id: 'barAxesAndLabels57',
    description: JSON.stringify(barAxesAndLabels57().props),
  },
  {
    component: barAxesAndLabels58,
    title:
      'BarChart: Tooltip for a +ve Bar should be rendered at proper location for a Bar chart with both +ve and -ve values',
    id: 'barAxesAndLabels58',
    description: JSON.stringify(barAxesAndLabels58().props),
  },
  {
    component: barAxesAndLabels59,
    title:
      'BarChart: Tooltip for a -ve Bar should be rendered at proper location for a Bar chart with both +ve and -ve values',
    id: 'barAxesAndLabels59',
    description: JSON.stringify(barAxesAndLabels59().props),
  },
  {
    component: barAxesAndLabels60,
    title:
      'BarChart: Tooltip for a +ve Bar should be rendered at proper location for a Bar chart with both +ve and -ve values and a BarMarginBottom',
    id: 'barAxesAndLabels60',
    description: JSON.stringify(barAxesAndLabels60().props),
  },
  {
    component: barAxesAndLabels61,
    title:
      'BarChart: Tooltip for a -ve Bar should be rendered at proper location for a Bar chart with both +ve and -ve values and a BarMarginBottom',
    id: 'barAxesAndLabels61',
    description: JSON.stringify(barAxesAndLabels61().props),
  },
  {
    component: barAxesAndLabels62,
    title:
      'BarChart: Multi-focus should work by passing an array of numbers in focsedBarIndex (this should render tooltips for both focused bars)',
    id: 'barAxesAndLabels62',
    description: JSON.stringify(barAxesAndLabels62().props),
  },
  {
    component: barAxesAndLabels63,
    title: 'BarChart: showVerticalLine and verticalLineThickness should work on specific Bar',
    id: 'barAxesAndLabels63',
    description: JSON.stringify(barAxesAndLabels63().props),
  },
];
