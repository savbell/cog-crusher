import { IGag, GagName, TrackName, GagTracks, MaxGagDamage } from "./IGag";


export class Gag implements IGag {
    public name: GagName;
    public track: TrackName;
    public damage: number;
    public inventory: number;
    public isOrganic: boolean;

    constructor(name: GagName) {
        this.name = name;
        this.track = GagTracks[name];
        this.damage = MaxGagDamage[name];
        this.inventory = 99;
        this.isOrganic = false;
    }
}
