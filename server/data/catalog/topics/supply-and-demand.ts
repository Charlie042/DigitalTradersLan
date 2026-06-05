import { SeedTopic } from "../../catalogSeed";
import { demandZonesSubTopic } from "./supply-and-demand/demand-zones.js";
import { supplyZonesSubTopic } from "./supply-and-demand/supply-zones.js";

export const supplyAndDemandTopic: SeedTopic = {
    id: 'supply-and-demand',
  title: 'Supply and Demand',
  icon: '🕯️',
  subTopics: [
    demandZonesSubTopic,
    supplyZonesSubTopic,
  ],
}