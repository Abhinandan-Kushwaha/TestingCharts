import { withScreenShotTest } from "react-native-screenshot-test";
import { barChartTestsArray } from "./BarChartTests"
import { lineChartTestsArray } from "./LineChartTests"

const AllScreenshotTests = () => {
    const allTestsArray = [...barChartTestsArray, ...lineChartTestsArray];

    return withScreenShotTest(allTestsArray)
}

export default AllScreenshotTests