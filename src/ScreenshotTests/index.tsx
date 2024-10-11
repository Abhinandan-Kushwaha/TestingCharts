import {withScreenShotTest} from 'react-native-screenshot-test';
import {barChartTestsArray} from './BarChartTests';
import {lineChartTestsArray} from './LineChartTests';
import {stackedBarChartTestsArray} from './BarChartTests/stacked';
import {pieChartsTestArray} from './PieChartTests';
import {specialBarChartTestsArray} from './SpecialScreenShots/SpecialBarTests';
import {specialLineChartTestArray} from './SpecialScreenShots/SpecialLineTests';
import {specialPieChartTestsArray} from './SpecialScreenShots/SpecialPieTests';

const AllScreenshotTests = () => {
  const allTestsArray = [
    ...barChartTestsArray,
    ...stackedBarChartTestsArray,
    ...lineChartTestsArray,
    ...pieChartsTestArray,
    ...specialBarChartTestsArray,
    ...specialLineChartTestArray,
    ...specialPieChartTestsArray,
  ];

  return withScreenShotTest(allTestsArray);
};

export default AllScreenshotTests;
