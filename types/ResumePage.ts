import { Meta } from "./components/Meta";
import { Third } from "./components/Third";
import { SecondType } from "./components/SecondType";
import { FirstResumeType } from "./components/FirstResumeType";

export interface ResumePage {
  id: number;
  attributes: {
    mainTitle: string;
    academicSection: { data: FirstResumeType[] } | number[];
    proffesionalSection: { data: FirstResumeType[] } | number[];
    activitiesSection: { data: FirstResumeType[] } | number[];
    achievementSection: { data: SecondType[] } | number[];
    certificatesSection: { data: Third[] } | number[];
    metadata: { data: Meta[] } | number[];
  };
}
