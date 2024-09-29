import React from 'react';
import {PieChart} from 'react-native-gifted-charts';
import {Text as SvgText} from 'react-native-svg';

const data = [{value: 10}, {value: 15}, {value: 6}, {value: 8}];

const pie1 = () => <PieChart data={[{value: 5}]} />;
const pie2 = () => <PieChart data={[{value: 5}]} donut />;
const pie3 = () => <PieChart data={data} radius={160} />;
const pie4 = () => <PieChart data={data} radius={160} donut />;
const pie5 = () => <PieChart data={data} initialAngle={Math.PI / 2} />;
const pie6 = () => <PieChart data={data} initialAngle={Math.PI / 2} donut />;
const pie7 = () => <PieChart data={data} sectionAutoFocus />;
const pie8 = () => <PieChart data={data} sectionAutoFocus donut />;
const pie9 = () => <PieChart data={data} sectionAutoFocus extraRadius={70} />;

const pie10 = () => (
  <PieChart data={data} sectionAutoFocus donut extraRadius={70} />
);

const pie11 = () => (
  <PieChart
    data={data}
    sectionAutoFocus
    donut
    inwardExtraLengthForFocused={50}
  />
);

const pie12 = () => (
  <PieChart
    data={data}
    sectionAutoFocus
    donut
    inwardExtraLengthForFocused={50}
    extraRadius={70}
  />
);

const pie13 = () => <PieChart data={data} semiCircle />;
const pie14 = () => <PieChart data={data} semiCircle donut />;

const pie15 = () => (
  <PieChart
    data={data.map(item => ({
      ...item,
      pieInnerComponent: () => <SvgText>{item.value + 'k'}</SvgText>,
    }))}
  />
);

const pie16 = () => (
  <PieChart data={data} showText showValuesAsLabels labelsPosition={'inward'} />
);
const pie17 = () => (
  <PieChart data={data} showText showValuesAsLabels labelsPosition={'mid'} />
);
const pie18 = () => (
  <PieChart
    data={data}
    showText
    showValuesAsLabels
    labelsPosition={'onBorder'}
  />
);
const pie19 = () => (
  <PieChart
    data={data}
    showText
    showValuesAsLabels
    labelsPosition={'outward'}
  />
);
const pie20 = () => (
  <PieChart
    data={data}
    showExternalLabels
    externalLabelComponent={item => <SvgText>{item?.value}</SvgText>}
  />
);

export const pieChartsTestArray = [
  {
    component: pie1,
    title: 'PieChart: A Pie chart with only 1 item in data array should work',
    id: 'pie1',
    description: JSON.stringify(pie1().props),
  },
  {
    component: pie2,
    title: 'PieChart: A Pie chart with only 1 item in data array should work',
    id: 'pie2',
    description: JSON.stringify(pie2().props),
  },
  {
    component: pie3,
    title: 'PieChart: "radius" should work for Pie chart',
    id: 'pie3',
    description: JSON.stringify(pie3().props),
  },
  {
    component: pie4,
    title: 'PieChart: "radius" should work for Donut chart',
    id: 'pie4',
    description: JSON.stringify(pie4().props),
  },
  {
    component: pie5,
    title: 'PieChart: "initialAngle" should work for Pie chart',
    id: 'pie5',
    description: JSON.stringify(pie5().props),
  },
  {
    component: pie6,
    title: 'PieChart: "initialAngle" should work for Donut chart',
    id: 'pie6',
    description: JSON.stringify(pie6().props),
  },
  {
    component: pie7,
    title: 'PieChart: "sectionAutoFocus" should work for Pie chart',
    id: 'pie7',
    description: JSON.stringify(pie7().props),
  },
  {
    component: pie8,
    title: 'PieChart:"sectionAutoFocus" should work for Donut chart',
    id: 'pie8',
    description: JSON.stringify(pie8().props),
  },
  {
    component: pie9,
    title:
      'PieChart: "extraRadius" should work with "sectionAutoFocus" for Pie chart',
    id: 'pie9',
    description: JSON.stringify(pie9().props),
  },
  {
    component: pie10,
    title:
      'PieChart: "extraRadius" should work with "sectionAutoFocus" for Donut chart',
    id: 'pie10',
    description: JSON.stringify(pie10().props),
  },
  {
    component: pie11,
    title:
      'PieChart: "inwardExtraLengthForFocused" should work for Donut chart',
    id: 'pie11',
    description: JSON.stringify(pie11().props),
  },
  {
    component: pie12,
    title:
      'PieChart: "inwardExtraLengthForFocused" and "extraRadius" should work together for Donut chart',
    id: 'pie12',
    description: JSON.stringify(pie12().props),
  },
  {
    component: pie13,
    title: 'PieChart: "semiCircle" should work for Pie chart',
    id: 'pie13',
    description: JSON.stringify(pie13().props),
  },
  {
    component: pie14,
    title: 'PieChart: "semiCircle" should work for Donut chart',
    id: 'pie14',
    description: JSON.stringify(pie14().props),
  },
  {
    component: pie15,
    title: 'PieChart: "pieInnerComponent" should work',
    id: 'pie15',
    description: JSON.stringify(pie15().props),
  },
  {
    component: pie16,
    title: 'PieChart: "labelsPosition: inward" should work',
    id: 'pie16',
    description: JSON.stringify(pie16().props),
  },
  {
    component: pie17,
    title: 'PieChart: "labelsPosition: mid" should work',
    id: 'pie17',
    description: JSON.stringify(pie17().props),
  },
  {
    component: pie18,
    title: 'PieChart: "labelsPosition: onBorder" should work',
    id: 'pie18',
    description: JSON.stringify(pie18().props),
  },
  {
    component: pie19,
    title: 'PieChart: "labelsPosition: outward" should work',
    id: 'pie19',
    description: JSON.stringify(pie19().props),
  },
  {
    component: pie20,
    title: 'PieChart: "showExternalLabels" should work',
    id: 'pie20',
    description: JSON.stringify(pie20().props),
  },
];
