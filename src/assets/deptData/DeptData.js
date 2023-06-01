/**
 * Banner images are placed in public folder
 * Path of all the images are relative to public folder
 * ref: https://stackoverflow.com/questions/47241387/get-local-image-path-from-json-in-react
 */

import CseDeptData from "./ComputerScienceAndEngineering";
import MechDeptData from "./MechanicalEngineering";
import IseDeptData from "./InformationScienceAndEngineering";
import EeeDeptData from "./ElectricalAndElectronics";
import Physics from "./Physics";
import Chemistry from "./Chemistry";
import Mathematics from "./Maths";
import BiotechDeptData from "./Biotechnology";
import CtmDeptData from "./Ctm";
import CivilDeptData from "./CivilEngineering";
import EnvironmentalEngineering from "./Environmental";
import IndustrialDeptData from "./IndustrialProduction";
import PSTDeptData from "./PolymerScienceAndTechnology";
import Univ from "./Univ";
import EceDeptData from "./ElectronicsAndCommunication";
import ComputerScienceAndBusinessSystems from "./ComputerScienceAndBusinessSystems";
import ComputerApplications from "./ComputerApplications";
import CMS from "./Cms";
import STEP from "./Step";
import PhysicalEdu from "./PhysicalEducation";

import ElectronicsAndInstrumentationEngineering from "./ElectronicsAndInstrumentation";

import Univ from "./Univ";
import PlacementAndTrainingDeptData from "./PlacementAndTraining";


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
  CHE: Chemistry,
  PHY: Physics,
  MAT: Mathematics,
  CMS: CMS,
  CA: ComputerApplications,
  STEP: STEP,
  PE: PhysicalEdu,
  UNIV: Univ,
  PLACEMENT: PlacementAndTrainingDeptData,
};

export default DeptData;
