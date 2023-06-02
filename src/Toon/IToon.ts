import { Gag } from "../Gag/Gag";
import { TrackName } from "../Gag/IGag";

export interface IToon {
    gags: Gag[];
    priority: TrackName;
}