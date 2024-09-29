import {withScreenShotTest} from 'react-native-screenshot-test';
import {barChartTestsArray} from './BarChartTests';
import {lineChartTestsArray} from './LineChartTests';
import {stackedBarChartTestsArray} from './BarChartTests/stacked';
import { pieChartsTestArray } from './PieChartTests';

const AllScreenshotTests = () => {
  const allTestsArray = [
    ...barChartTestsArray,
    ...stackedBarChartTestsArray,
    ...lineChartTestsArray,
    ...pieChartsTestArray
  ];

  return withScreenShotTest(allTestsArray);
};

export default AllScreenshotTests;
