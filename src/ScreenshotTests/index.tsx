import {Platform} from 'react-native';
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

  const screenshotConfig = {
    // Android emulator maps 10.0.2.2 to the host machine; 127.0.0.1 is the emulator itself.
    serverUrl:
      Platform.OS === 'android'
        ? 'http://10.0.2.2:8080'
        : 'http://127.0.0.1:8080',
  };

  return withScreenShotTest(allTestsArray, false, screenshotConfig);
};

export default AllScreenshotTests;
