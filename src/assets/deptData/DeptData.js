/**
 * Banner images are placed in public folder
 * Path of all the images are relative to public folder
 * ref: https://stackoverflow.com/questions/47241387/get-local-image-path-from-json-in-react
 */

import MechDeptData from "./MechanicalEngineering";
import CseDeptData from "./ComputerScienceAndEngineering";
import EceDeptData from "./ElectronicsAndCommunication";
import EeeDeptData from "./ElectricalAndElectronics";
import CivilDeptData from "./CivilEngineering";
import IseDeptData from "./InformationScienceAndEngineering";
import CtmDeptData from "./Ctm";
import BiotechDeptData from "./Biotechnology";
import IndustrialDeptData from "./IndustrialProduction";
import PSTDeptData from "./PolymerScienceAndTechnology";
import ComputerScienceAndBusinessSystems from "./ComputerScienceAndBusinessSystems";
import ElectronicsAndInstrumentationEngineering from "./ElectronicsAndInstrumentation";
import EnvironmentalEngineering from "./Environmental";

const DeptData = {
  ME: MechDeptData,
  CSE: CseDeptData,
  ECE: EceDeptData,
  EEE: EeeDeptData,
  CIVIL: CivilDeptData,
  ISE: IseDeptData,
  CTM: CtmDeptData,
  BIOTECH: BiotechDeptData,
  IPE: IndustrialDeptData,
  PST: PSTDeptData,
  CSBS: ComputerScienceAndBusinessSystems,
  EIE: ElectronicsAndInstrumentationEngineering,
  ENV: EnvironmentalEngineering,
};

export default DeptData;
