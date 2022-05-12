import { Meta } from "./components/Meta";
import { Channels } from "./components/Channels";

export interface ContactMePage {
  id: number;
  attributes: {
    mainTitle: string;
    content: string;
    channels: Channels[];
    metadata: Meta;
  };
}
