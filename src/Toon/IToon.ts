import { ITrack, TrackName } from "../Track/ITrack";

export interface IToon {
    tracks: ITrack[];
    priority: TrackName;
}