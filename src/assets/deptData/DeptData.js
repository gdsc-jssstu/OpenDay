/**
 * Banner images are placed in public folder
 * Path of all the images are relative to public folder
 * ref: https://stackoverflow.com/questions/47241387/get-local-image-path-from-json-in-react
 */

import MechDeptData from "./MechanicalEngineering";
import CseDeptData from "./ComputerScienceAndEngineering";
const DeptData = {
  ME: MechDeptData,
  CSE: CseDeptData,
};

export default DeptData;
