import { Meta } from "./components/Meta";
import { Third } from "./components/Third";
import { SecondType } from "./components/SecondType";
import { FirstResumeType } from "./components/FirstResumeType";

export interface ResumePage {
  id: number;
  attributes: {
    mainTitle: string;
    academicSection?: FirstResumeType[];
    proffesionalSection?: FirstResumeType[];
    activitiesSection?: FirstResumeType[];
    achievementSection?: SecondType[];
    certificatesSection?: Third[];
    metadata: Meta[];
  };
}
