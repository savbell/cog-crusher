import { GagName, IGag } from "../Gag/IGag";

export enum TrackName {
    Toonup = "Toon-up",
    Trap = "Trap",
    Lure = "Lure",
    Sound = "Sound",
    Throw = "Throw",
    Squirt = "Squirt",
    Drop = "Drop"
}

export const TrackMap = new Map<string, string[]>();
TrackMap.set(TrackName.Toonup, [GagName.Feather, GagName.Megaphone, GagName.Lipstick, GagName.BambooCane, GagName.PixieDust, GagName.JugglingBalls, GagName.HighDive]);
TrackMap.set(TrackName.Trap, [GagName.BananaPeel, GagName.Rake, GagName.Marbles, GagName.Quicksand, GagName.Trapdoor, GagName.TNT, GagName.Railroad]);
TrackMap.set(TrackName.Lure, [GagName.OneDollarBill, GagName.SmallMagnet, GagName.FiveDollarBill, GagName.BigMagnet, GagName.TenDollarBill, GagName.HypnoGoggles, GagName.Presentation]);
TrackMap.set(TrackName.Sound, [GagName.BikeHorn, GagName.Whistle, GagName.Bugle, GagName.AoogahHorn, GagName.ElephantTrunk, GagName.Foghorn, GagName.OperaSinger]);
TrackMap.set(TrackName.Throw, [GagName.Cupcake, GagName.FruitPieSlice, GagName.CreamPieSlice, GagName.WholeFruitPie, GagName.WholeCreamPie, GagName.BirthdayCake, GagName.WeddingCake]);
TrackMap.set(TrackName.Squirt, [GagName.SquirtingFlower, GagName.GlassOfWater, GagName.SquirtGun, GagName.SeltzerBottle, GagName.FireHose, GagName.StormClouds, GagName.Geyser]);
TrackMap.set(TrackName.Drop, [GagName.FlowerPot, GagName.Sandbag, GagName.Anvil, GagName.BigWeight, GagName.Safe, GagName.GrandPiano, GagName.Toontanic]);

export interface ITrack {
    type: TrackName;
    gags: IGag[];
    isOrganic: boolean;
}