import React from 'react';
import {Text, View} from 'react-native';
import {BarChart, stackDataItem, yAxisSides} from 'react-native-gifted-charts';

const positiveStackData = [
  {
    stacks: [
      {value: 4, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 2, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 7, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 2, color: 'skyblue'},
      {value: 4, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 3, color: 'skyblue'},
      {value: 5, color: 'purple'},
    ],
  },
];

const mixedStackData = [
  {
    stacks: [
      {value: 4, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 2, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 7, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: -2, color: 'skyblue'},
      {value: -4, color: 'gray'},
    ],
  },
  {
    stacks: [
      {value: 3, color: 'skyblue'},
      {value: 5, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 6, color: 'skyblue'},
      {value: -5, color: 'gray'},
    ],
  },
];

const miniStack = [
  {
    stacks: [
      {value: 0.15, color: 'purple'},
      {value: 0.25, color: 'orange'},
    ],
  },
  {
    stacks: [
      {value: 0.1, color: 'purple'},
      {value: 0.15, color: 'orange'},
    ],
  },
  {
    stacks: [
      {value: 0.2, color: 'purple'},
      {value: 0.15, color: 'skyblue'},
      {value: 0.25, color: 'orange'},
    ],
  },
  {
    stacks: [
      {value: 0.3, color: 'purple'},
      {value: 0.15, color: 'skyblue'},
      {value: 0.35, color: 'orange'},
    ],
  },
];

const largeValuesPositiveStack = [
  {
    stacks: [
      {value: 90.4, color: 'skyblue'},
      {value: 90.3, color: 'orange'},
      // {value: 90.2, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 90.25, color: 'skyblue'},
      {value: 90.13, color: 'orange'},
      // {value: 90.27, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 90.2, color: 'skyblue'},
      {value: 90.4, color: 'purple'},
    ],
  },
  {
    stacks: [
      {value: 90.3, color: 'skyblue'},
      {value: 90.5, color: 'purple'},
    ],
  },
];

const labelledPositiveStack = [
  {
    stacks: [
      {value: 4, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 2, color: 'purple'},
    ],
    label: 'Jan',
  },
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 7, color: 'purple'},
    ],
    label: 'Feb',
  },
  {
    stacks: [
      {value: 2, color: 'skyblue'},
      {value: 4, color: 'purple'},
    ],
    label: 'Mar',
  },
  {
    stacks: [
      {value: 3, color: 'skyblue'},
      {value: 5, color: 'purple'},
    ],
    label: 'Apr',
  },
];

const largeLabelledPositiveStack = [
  {
    stacks: [
      {value: 4, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 2, color: 'purple'},
    ],
    label: 'January',
  },
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 7, color: 'purple'},
    ],
    label: 'February',
  },
  {
    stacks: [
      {value: 2, color: 'skyblue'},
      {value: 4, color: 'purple'},
    ],
    label: 'March',
  },
  {
    stacks: [
      {value: 3, color: 'skyblue'},
      {value: 5, color: 'purple'},
    ],
    label: 'April',
  },
];

const labelledMixedStack = [
  {
    stacks: [
      {value: 4, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 2, color: 'purple'},
    ],
    label: 'Jan',
  },
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 7, color: 'purple'},
    ],
    label: 'Feb',
  },
  {
    stacks: [
      {value: -2, color: 'skyblue'},
      {value: -4, color: 'gray'},
    ],
    label: 'Mar',
  },
  {
    stacks: [
      {value: 3, color: 'skyblue'},
      {value: 5, color: 'purple'},
    ],
    label: 'Apr',
  },
  {
    stacks: [
      {value: 6, color: 'skyblue'},
      {value: -5, color: 'gray'},
    ],
    label: 'May',
  },
];

const stackDataWithVerticalLine: stackDataItem[] = [
  {
    stacks: [
      {value: 5, color: 'skyblue'},
      {value: 3, color: 'orange'},
      {value: 8, color: 'green'},
    ],
  },
  {
    stacks: [
      {value: 2, color: 'skyblue'},
      {value: 4, color: 'orange'},
      {value: 1, color: 'green'},
    ],
  },
  {
    stacks: [
      {value: 1, color: 'skyblue'},
      {value: 2, color: 'orange'},
      {value: 1, color: 'green'},
    ],
    showVerticalLine: true,
    verticalLineThickness: 30,
    verticalLineColor: '#dde',
  },
];

const stackedBarAxesAndLabels1 = () => (
  <BarChart stackData={positiveStackData} showValuesAsTopLabel />
);

const stackedBarAxesAndLabels2 = () => (
  <BarChart stackData={mixedStackData} showValuesAsTopLabel />
);
const stackedBarAxesAndLabels3 = () => (
  <BarChart stackData={miniStack} showValuesAsTopLabel />
);

const stackedBarAxesAndLabels4 = () => (
  <BarChart
    stackData={largeValuesPositiveStack}
    showValuesAsTopLabel
    yAxisOffset={50}
  />
);
const stackedBarAxesAndLabels5 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
  />
);
const stackedBarAxesAndLabels6 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
  />
);
const stackedBarAxesAndLabels7 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    frontColor={'rgba(0,0,0,0.3)'}
    secondaryYAxis
    showLine
    lineData={[{value: 0.4}, {value: 0.25}, {value: 0.6}, {value: 0.8}]}
    lineConfig={{isSecondary: true, color: 'green'}}
  />
);
const stackedBarAxesAndLabels8 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    frontColor={'rgba(0,0,0,0.3)'}
    secondaryYAxis
    showLine
    lineData={[{value: 0.4}, {value: 0.25}, {value: -0.6}, {value: 0.8}]}
    lineConfig={{isSecondary: true, color: 'green'}}
  />
);
const stackedBarAxesAndLabels9 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisExtraHeight={40}
  />
);
const stackedBarAxesAndLabels10 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisExtraHeight={40}
    height={260}
  />
);
const stackedBarAxesAndLabels11 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisLabelWidth={50}
  />
);
const stackedBarAxesAndLabels12 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisSide={yAxisSides.RIGHT}
    yAxisLabelWidth={50}
  />
);
const stackedBarAxesAndLabels13 = () => (
  <BarChart stackData={positiveStackData} showValuesAsTopLabel trimYAxisAtTop />
);
const stackedBarAxesAndLabels14 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    trimYAxisAtTop
    yAxisSide={yAxisSides.RIGHT}
  />
);
const stackedBarAxesAndLabels15 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    frontColor={'rgba(0,0,0,0.3)'}
    secondaryYAxis
    showLine
    lineData={[{value: 0.4}, {value: 0.25}, {value: 0.6}, {value: 0.8}]}
    lineConfig={{isSecondary: true, color: 'green'}}
    trimYAxisAtTop
  />
);
const stackedBarAxesAndLabels16 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
  />
);
const stackedBarAxesAndLabels17 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisLabelSuffix="k"
  />
);
const stackedBarAxesAndLabels18 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const stackedBarAxesAndLabels19 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const stackedBarAxesAndLabels20 = () => (
  <BarChart
    stackData={miniStack}
    showValuesAsTopLabel
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
  />
);
const stackedBarAxesAndLabels21 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    formatYLabel={label => Number(label) * 2 + '/2'}
  />
);
const stackedBarAxesAndLabels22 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    formatYLabel={label => Number(label) * 2 + '/2'}
    yAxisLabelPrefix="$"
    yAxisLabelSuffix="k"
    yAxisLabelWidth={60}
  />
);
const stackedBarAxesAndLabels23 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    rulesLength={140}
  />
);

const stackedBarAxesAndLabels24 = () => (
  <BarChart stackData={mixedStackData} showValuesAsTopLabel rulesLength={140} />
);

const stackedBarAxesAndLabels25 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const stackedBarAxesAndLabels26 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
  />
);

const stackedBarAxesAndLabels27 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const stackedBarAxesAndLabels28 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
  />
);

const stackedBarAxesAndLabels29 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    rulesLength={140}
    showReferenceLine1
    referenceLine1Position={12}
    showReferenceLine2
    referenceLine2Position={7}
    referenceLinesOverChartContent={false}
  />
);

const stackedBarAxesAndLabels30 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showVerticalLines
  />
);
const stackedBarAxesAndLabels31 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesHeight={160}
  />
);
const stackedBarAxesAndLabels32 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesShift={20}
  />
);

const stackedBarAxesAndLabels33 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showVerticalLines
    noOfVerticalLines={3}
  />
);

const stackedBarAxesAndLabels34 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    showVerticalLines
    verticalLinesSpacing={25}
  />
);

const stackedBarAxesAndLabels35 = () => (
  <BarChart
    stackData={labelledPositiveStack}
    showValuesAsTopLabel
    rotateLabel
  />
);

const stackedBarAxesAndLabels36 = () => (
  <BarChart stackData={labelledMixedStack} showValuesAsTopLabel rotateLabel />
);

const stackedBarAxesAndLabels37 = () => (
  <BarChart
    stackData={labelledPositiveStack}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={20}
  />
);

const stackedBarAxesAndLabels38 = () => (
  <BarChart
    stackData={labelledMixedStack}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={20}
  />
);

const stackedBarAxesAndLabels39 = () => (
  <BarChart
    stackData={largeLabelledPositiveStack}
    showValuesAsTopLabel
    xAxisTextNumberOfLines={2}
  />
);

const stackedBarAxesAndLabels40 = () => (
  <BarChart
    stackData={largeLabelledPositiveStack}
    showValuesAsTopLabel
    xAxisTextNumberOfLines={2}
    xAxisLabelsHeight={100}
  />
);

const stackedBarAxesAndLabels41 = () => (
  <BarChart
    stackData={labelledPositiveStack}
    showValuesAsTopLabel
    xAxisLabelsVerticalShift={20}
  />
);

const stackedBarAxesAndLabels42 = () => (
  <BarChart
    stackData={labelledMixedStack}
    showValuesAsTopLabel
    xAxisLabelsVerticalShift={20}
  />
);
const stackedBarAxesAndLabels43 = () => (
  <BarChart
    stackData={labelledMixedStack}
    showValuesAsTopLabel
    labelsDistanceFromXaxis={30}
    xAxisLabelsVerticalShift={20}
  />
);

const stackedBarAxesAndLabels44 = () => (
  <BarChart
    stackData={largeLabelledPositiveStack}
    showValuesAsTopLabel
    rotateLabel
    labelsExtraHeight={60}
  />
);

const stackedBarAxesAndLabels45 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    noOfSections={5}
  />
);
const stackedBarAxesAndLabels46 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    noOfSections={5}
    noOfSectionsBelowXAxis={3}
  />
);
const stackedBarAxesAndLabels47 = () => (
  <BarChart stackData={positiveStackData} showValuesAsTopLabel maxValue={16} />
);

const stackedBarAxesAndLabels48 = () => (
  <BarChart stackData={positiveStackData} showValuesAsTopLabel stepValue={4} />
);

const stackedBarAxesAndLabels49 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    noOfSections={5}
    maxValue={25}
  />
);

const stackedBarAxesAndLabels50 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    noOfSections={5}
    stepValue={6}
  />
);
const stackedBarAxesAndLabels51 = () => (
  <BarChart
    stackData={positiveStackData}
    showValuesAsTopLabel
    stepValue={3}
    maxValue={24}
  />
);
const stackedBarAxesAndLabels52 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    mostNegativeValue={-12}
  />
);
const stackedBarAxesAndLabels53 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    negativeStepValue={-3}
  />
);

const stackedBarAxesAndLabels54 = () => (
  <BarChart
    stackData={mixedStackData}
    showValuesAsTopLabel
    negativeStepValue={-3}
    mostNegativeValue={-15}
  />
);

const stackedBarAxesAndLabels55 = () => (
  <BarChart
    stackData={mixedStackData}
    negativeStepValue={-3}
    noOfSectionsBelowXAxis={4}
  />
);
const stackedBarAxesAndLabels56 = () => (
  <BarChart
    stackData={mixedStackData}
    mostNegativeValue={-12}
    noOfSectionsBelowXAxis={4}
  />
);

const stackedBarAxesAndLabels57 = () => (
  <BarChart
    stackData={positiveStackData}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: stackDataItem) => (
      <View>
        <Text>{item.stacks[0].value}</Text>
      </View>
    )}
  />
);

const stackedBarAxesAndLabels58 = () => (
  <BarChart
    stackData={mixedStackData}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: stackDataItem) => (
      <View>
        <Text>{item.stacks[0].value}</Text>
      </View>
    )}
  />
);

const stackedBarAxesAndLabels59 = () => (
  <BarChart
    stackData={mixedStackData}
    autoCenterTooltip
    focusedBarIndex={0}
    renderTooltip={(item: stackDataItem) => (
      <View>
        <Text>{item.stacks[0].value}</Text>
      </View>
    )}
  />
);

const stackedBarAxesAndLabels60 = () => (
  <BarChart
    stackData={mixedStackData}
    barMarginBottom={20}
    autoCenterTooltip
    focusedBarIndex={2}
    renderTooltip={(item: stackDataItem) => (
      <View>
        <Text>{item.stacks[0].value}</Text>
      </View>
    )}
  />
);

const stackedBarAxesAndLabels61 = () => (
  <BarChart
    stackData={mixedStackData}
    barMarginBottom={20}
    autoCenterTooltip
    focusedBarIndex={0}
    renderTooltip={(item: stackDataItem) => (
      <View>
        <Text>{item.stacks[0].value}</Text>
      </View>
    )}
  />
);

const stackedBarAxesAndLabels62 = () => (
  <BarChart
    stackData={stackDataWithVerticalLine}
    barWidth={15}
    frontColor={'navy'}
    roundedTop
  />
);

export const stackedBarChartTestsArray = [
  {
    component: stackedBarAxesAndLabels1,
    title:
      'StackedBarChart: A chart with only +ve values should have y Axis labels and the Y-axis line at the proper position',
    id: 'stackedBarAxesAndLabels1',
    description: JSON.stringify(stackedBarAxesAndLabels1().props),
  },
  {
    component: stackedBarAxesAndLabels2,
    title:
      'StackedBarChart: A chart with both +ve and -ve values should have y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'stackedBarAxesAndLabels2',
    description: JSON.stringify(stackedBarAxesAndLabels2().props),
  },
  {
    component: stackedBarAxesAndLabels3,
    title:
      'StackedBarChart: A chart with only +ve values, all values less than 1 should show fractional labels on the y Axis',
    id: 'stackedBarAxesAndLabels3',
    description: JSON.stringify(stackedBarAxesAndLabels3().props),
  },
  {
    component: stackedBarAxesAndLabels4,
    title:
      'StackedBarChart: A chart with only +ve values and yAxisOffset shouls render correctly',
    id: 'stackedBarAxesAndLabels4',
    description: JSON.stringify(stackedBarAxesAndLabels4().props),
  },
  {
    component: stackedBarAxesAndLabels5,
    title:
      'StackedBarChart: A chart with only +ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'stackedBarAxesAndLabels5',
    description: JSON.stringify(stackedBarAxesAndLabels5().props),
  },
  {
    component: stackedBarAxesAndLabels6,
    title:
      'StackedBarChart: A chart with both +ve and -ve values and "yAxisSide = {yAxisSides.RIGHT}" should have y Axis labels and the Y-axis line at the proper position',
    id: 'stackedBarAxesAndLabels6',
    description: JSON.stringify(stackedBarAxesAndLabels6().props),
  },
  {
    component: stackedBarAxesAndLabels7,
    title:
      'StackedBarChart: A chart with "secondaryYaxis" should have the secondary y Axis labels and the Y-axis line at the proper position (given secondary data)',
    id: 'stackedBarAxesAndLabels7',
    description: JSON.stringify(stackedBarAxesAndLabels7().props),
  },
  {
    component: stackedBarAxesAndLabels8,
    title:
      'StackedBarChart: A chart with "secondaryYaxis" and both +ve and -ve values should have the secondary y Axis labels and the Y-axis line at the proper positions both in the 1st and the 4th quadrant',
    id: 'stackedBarAxesAndLabels8',
    description: JSON.stringify(stackedBarAxesAndLabels8().props),
  },
  {
    component: stackedBarAxesAndLabels9,
    title:
      'StackedBarChart: "yAxisExtraHeight" should add extra height to the chart when "height" is NOT given',
    id: 'stackedBarAxesAndLabels9',
    description: JSON.stringify(stackedBarAxesAndLabels9().props),
  },
  {
    component: stackedBarAxesAndLabels10,
    title:
      'StackedBarChart: "yAxisExtraHeight" should add extra height to the chart when "height" is given',
    id: 'stackedBarAxesAndLabels10',
    description: JSON.stringify(stackedBarAxesAndLabels10().props),
  },
  {
    component: stackedBarAxesAndLabels11,
    title:
      'StackedBarChart: "yAxisLabelWidth" prop should change the width of the y-Axis label and should horizontally shift the chart gracefully',
    id: 'stackedBarAxesAndLabels11',
    description: JSON.stringify(stackedBarAxesAndLabels11().props),
  },
  {
    component: stackedBarAxesAndLabels12,
    title:
      'StackedBarChart: Check alignment of the right side y-Axis line and labels when using the "yAxisLabelWidth" prop along with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'stackedBarAxesAndLabels12',
    description: JSON.stringify(stackedBarAxesAndLabels12().props),
  },
  {
    component: stackedBarAxesAndLabels13,
    title:
      'StackedBarChart: "trimYAxisAtTop" should shorten the Y axis from top without shifting the labels, chart or rules',
    id: 'stackedBarAxesAndLabels13',
    description: JSON.stringify(stackedBarAxesAndLabels13().props),
  },
  {
    component: stackedBarAxesAndLabels14,
    title:
      'StackedBarChart: "trimYAxisAtTop" should shorten the Y axis from top for the right side Y-axis when used with "yAxisSide = {yAxisSides.RIGHT}"',
    id: 'stackedBarAxesAndLabels14',
    description: JSON.stringify(stackedBarAxesAndLabels14().props),
  },
  {
    component: stackedBarAxesAndLabels15,
    title:
      'StackedBarChart: "trimYAxisAtTop" should shorten both sides Y-axis when using the secondary Y axis',
    id: 'stackedBarAxesAndLabels15',
    description: JSON.stringify(stackedBarAxesAndLabels15().props),
  },
  {
    component: stackedBarAxesAndLabels16,
    title:
      'StackedBarChart: "yAxisLabelPrefix" should add the prefix to Y-axis labels',
    id: 'stackedBarAxesAndLabels16',
    description: JSON.stringify(stackedBarAxesAndLabels16().props),
  },
  {
    component: stackedBarAxesAndLabels17,
    title:
      'StackedBarChart: "yAxisLabelSuffix" should add the suffix to Y-axis labels',
    id: 'stackedBarAxesAndLabels17',
    description: JSON.stringify(stackedBarAxesAndLabels17().props),
  },
  {
    component: stackedBarAxesAndLabels18,
    title:
      'StackedBarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together',
    id: 'stackedBarAxesAndLabels18',
    description: JSON.stringify(stackedBarAxesAndLabels18().props),
  },
  {
    component: stackedBarAxesAndLabels19,
    title:
      'StackedBarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with both +ve & -ve values',
    id: 'stackedBarAxesAndLabels19',
    description: JSON.stringify(stackedBarAxesAndLabels19().props),
  },
  {
    component: stackedBarAxesAndLabels20,
    title:
      'StackedBarChart: Both "yAxisLabelPrefix" and "yAxisLabelSuffix" should work together for chart with fractional values',
    id: 'stackedBarAxesAndLabels20',
    description: JSON.stringify(stackedBarAxesAndLabels20().props),
  },
  {
    component: stackedBarAxesAndLabels21,
    title: 'StackedBarChart: "formatYLabel" should format the Y-axis labels',
    id: 'stackedBarAxesAndLabels21',
    description: JSON.stringify(stackedBarAxesAndLabels21().props),
  },
  {
    component: stackedBarAxesAndLabels22,
    title:
      'StackedBarChart: "formatYLabel" should work on top of "yAxisLabelPrefix" and "yAxisLabelSuffix"',
    id: 'stackedBarAxesAndLabels22',
    description: JSON.stringify(stackedBarAxesAndLabels22().props),
  },

  {
    component: stackedBarAxesAndLabels23,
    title:
      'StackedBarChart: "rulesLength" prop should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels23',
    description: JSON.stringify(stackedBarAxesAndLabels23().props),
  },
  {
    component: stackedBarAxesAndLabels24,
    title:
      'StackedBarChart: "rulesLength" prop should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels24',
    description: JSON.stringify(stackedBarAxesAndLabels24().props),
  },
  {
    component: stackedBarAxesAndLabels25,
    title:
      'StackedBarChart: Reference line 1 should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels25',
    description: JSON.stringify(stackedBarAxesAndLabels25().props),
  },
  {
    component: stackedBarAxesAndLabels26,
    title:
      'StackedBarChart: Reference line 1 should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels26',
    description: JSON.stringify(stackedBarAxesAndLabels26().props),
  },
  {
    component: stackedBarAxesAndLabels27,
    title:
      'StackedBarChart: Reference line 2 should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels27',
    description: JSON.stringify(stackedBarAxesAndLabels27().props),
  },
  {
    component: stackedBarAxesAndLabels28,
    title:
      'StackedBarChart: Reference line 2 should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels28',
    description: JSON.stringify(stackedBarAxesAndLabels28().props),
  },
  {
    component: stackedBarAxesAndLabels29,
    title:
      'StackedBarChart: "referenceLinesOverChartContent: false" should render reference lines beneath chart content',
    id: 'stackedBarAxesAndLabels29',
    description: JSON.stringify(stackedBarAxesAndLabels29().props),
  },
  {
    component: stackedBarAxesAndLabels30,
    title: 'StackedBarChart: "showVerticalLines" should work',
    id: 'stackedBarAxesAndLabels30',
    description: JSON.stringify(stackedBarAxesAndLabels30().props),
  },
  {
    component: stackedBarAxesAndLabels31,
    title: 'StackedBarChart: "verticalLinesHeight" should work',
    id: 'stackedBarAxesAndLabels31',
    description: JSON.stringify(stackedBarAxesAndLabels31().props),
  },
  {
    component: stackedBarAxesAndLabels32,
    title: 'StackedBarChart: "verticalLinesShift" should work',
    id: 'stackedBarAxesAndLabels32',
    description: JSON.stringify(stackedBarAxesAndLabels32().props),
  },
  {
    component: stackedBarAxesAndLabels33,
    title: 'StackedBarChart: "noOfVerticalLines" should work',
    id: 'stackedBarAxesAndLabels33',
    description: JSON.stringify(stackedBarAxesAndLabels33().props),
  },
  {
    component: stackedBarAxesAndLabels34,
    title: 'StackedBarChart: "verticalLinesSpacing" should work',
    id: 'stackedBarAxesAndLabels34',
    description: JSON.stringify(stackedBarAxesAndLabels34().props),
  },
  {
    component: stackedBarAxesAndLabels35,
    title:
      'StackedBarChart: "rotateLabel" should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels35',
    description: JSON.stringify(stackedBarAxesAndLabels35().props),
  },
  {
    component: stackedBarAxesAndLabels36,
    title:
      'StackedBarChart: "rotateLabel" should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels36',
    description: JSON.stringify(stackedBarAxesAndLabels36().props),
  },
  {
    component: stackedBarAxesAndLabels37,
    title:
      'StackedBarChart: "labelsDistanceFromXaxis" should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels37',
    description: JSON.stringify(stackedBarAxesAndLabels37().props),
  },
  {
    component: stackedBarAxesAndLabels38,
    title:
      'StackedBarChart: "labelsDistanceFromXaxis" should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels38',
    description: JSON.stringify(stackedBarAxesAndLabels38().props),
  },
  {
    component: stackedBarAxesAndLabels39,
    title: 'StackedBarChart: "xAxisTextNumberOfLines" should work',
    id: 'stackedBarAxesAndLabels39',
    description: JSON.stringify(stackedBarAxesAndLabels39().props),
  },

  {
    component: stackedBarAxesAndLabels40,
    title: 'StackedBarChart: "xAxisLabelsHeight" should work',
    id: 'stackedBarAxesAndLabels40',
    description: JSON.stringify(stackedBarAxesAndLabels40().props),
  },
  {
    component: stackedBarAxesAndLabels41,
    title:
      'StackedBarChart: "xAxisLabelsVerticalShift" should work should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels41',
    description: JSON.stringify(stackedBarAxesAndLabels41().props),
  },
  {
    component: stackedBarAxesAndLabels42,
    title:
      'StackedBarChart: "xAxisLabelsVerticalShift" should work should work for a chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels42',
    description: JSON.stringify(stackedBarAxesAndLabels42().props),
  },
  {
    component: stackedBarAxesAndLabels43,
    title:
      'StackedBarChart: "labelsDistanceFromXaxis" and "xAxisLabelsVerticalShift" should work together for a chart with both +ve and -ve value',
    id: 'stackedBarAxesAndLabels43',
    description: JSON.stringify(stackedBarAxesAndLabels43().props),
  },
  {
    component: stackedBarAxesAndLabels44,
    title:
      'StackedBarChart: "labelsExtraHeight" should work for a chart with +ve values only',
    id: 'stackedBarAxesAndLabels44',
    description: JSON.stringify(stackedBarAxesAndLabels44().props),
  },
  {
    component: stackedBarAxesAndLabels45,
    title: 'StackedBarChart: "noOfSections" should work',
    id: 'stackedBarAxesAndLabels45',
    description: JSON.stringify(stackedBarAxesAndLabels45().props),
  },
  {
    component: stackedBarAxesAndLabels46,
    title: 'StackedBarChart: "noOfSectionsBelowXAxis" should work',
    id: 'stackedBarAxesAndLabels46',
    description: JSON.stringify(stackedBarAxesAndLabels46().props),
  },
  {
    component: stackedBarAxesAndLabels47,
    title: 'StackedBarChart: "maxValue" should work',
    id: 'stackedBarAxesAndLabels47',
    description: JSON.stringify(stackedBarAxesAndLabels47().props),
  },
  {
    component: stackedBarAxesAndLabels48,
    title: 'StackedBarChart: "stepValue" should work',
    id: 'stackedBarAxesAndLabels48',
    description: JSON.stringify(stackedBarAxesAndLabels48().props),
  },
  {
    component: stackedBarAxesAndLabels49,
    title:
      'StackedBarChart: "noOfSections" and "maxValue" should work together',
    id: 'stackedBarAxesAndLabels49',
    description: JSON.stringify(stackedBarAxesAndLabels49().props),
  },
  {
    component: stackedBarAxesAndLabels50,
    title:
      'StackedBarChart: "noOfSections" and "stepValue" should work together',
    id: 'stackedBarAxesAndLabels50',
    description: JSON.stringify(stackedBarAxesAndLabels50().props),
  },
  {
    component: stackedBarAxesAndLabels51,
    title: 'StackedBarChart: "maxValue" and "stepValue" should work together',
    id: 'stackedBarAxesAndLabels51',
    description: JSON.stringify(stackedBarAxesAndLabels51().props),
  },
  {
    component: stackedBarAxesAndLabels52,
    title: 'StackedBarChart: "mostNegativeValue" should work',
    id: 'stackedBarAxesAndLabels52',
    description: JSON.stringify(stackedBarAxesAndLabels52().props),
  },
  {
    component: stackedBarAxesAndLabels53,
    title: 'StackedBarChart: "negativeStepValue" should work',
    id: 'stackedBarAxesAndLabels53',
    description: JSON.stringify(stackedBarAxesAndLabels53().props),
  },
  {
    component: stackedBarAxesAndLabels54,
    title:
      'StackedBarChart: "noOfSectionsBelowXAxis" and "mostNegativeValue" should work together',
    id: 'stackedBarAxesAndLabels54',
    description: JSON.stringify(stackedBarAxesAndLabels54().props),
  },
  {
    component: stackedBarAxesAndLabels55,
    title:
      'StackedBarChart: "negativeStepValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'stackedBarAxesAndLabels55',
    description: JSON.stringify(stackedBarAxesAndLabels55().props),
  },
  {
    component: stackedBarAxesAndLabels56,
    title:
      'StackedBarChart: "mostNegativeValue" and "noOfSectionsBelowXAxis" should work together',
    id: 'stackedBarAxesAndLabels56',
    description: JSON.stringify(stackedBarAxesAndLabels56().props),
  },
  {
    component: stackedBarAxesAndLabels57,
    title:
      'StackedBarChart: Tooltip should be rendered at proper location for a Stacked Bar chart with only positive values',
    id: 'stackedBarAxesAndLabels57',
    description: JSON.stringify(stackedBarAxesAndLabels57().props),
  },
  {
    component: stackedBarAxesAndLabels58,
    title:
      'StackedBarChart: Tooltip for a +ve Bar should be rendered at proper location for a Stacked Bar chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels58',
    description: JSON.stringify(stackedBarAxesAndLabels58().props),
  },
  {
    component: stackedBarAxesAndLabels59,
    title:
      'StackedBarChart: Tooltip for a -ve Bar should be rendered at proper location for a Stacked Bar chart with both +ve and -ve values',
    id: 'stackedBarAxesAndLabels59',
    description: JSON.stringify(stackedBarAxesAndLabels59().props),
  },
  {
    component: stackedBarAxesAndLabels60,
    title:
      'StackedBarChart: Tooltip for a +ve Bar should be rendered at proper location for a Stacked Bar chart with both +ve and -ve values and a BarMarginBottom',
    id: 'stackedBarAxesAndLabels60',
    description: JSON.stringify(stackedBarAxesAndLabels60().props),
  },
  {
    component: stackedBarAxesAndLabels61,
    title:
      'StackedBarChart: Tooltip for a -ve Bar should be rendered at proper location for a Stacked Bar chart with both +ve and -ve values and a BarMarginBottom',
    id: 'stackedBarAxesAndLabels61',
    description: JSON.stringify(stackedBarAxesAndLabels61().props),
  },
  {
    component: stackedBarAxesAndLabels62,
    title:
      'StackedBarChart: showVerticalLine and verticalLineThickness should work on specific Bar',
    id: 'stackedBarAxesAndLabels62',
    description: JSON.stringify(stackedBarAxesAndLabels62().props),
  },
];
