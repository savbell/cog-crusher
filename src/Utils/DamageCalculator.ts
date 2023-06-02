import { Gag } from '../Gag/Gag';
import { Cog } from '../Cog/Cog';
import { TrackName } from '../Gag/IGag';

export function willDestroy(gags: Gag[], cog: Cog): boolean {
    // Group gags by track
    const gagGroups: Record<string, Gag[]> = {};
    for (let gag of gags) {
        if (gag.track in gagGroups) {
            gagGroups[gag.track].push(gag);
        } else if (gag.track !== TrackName.Toonup) {
            gagGroups[gag.track] = [gag];
        }
    }

    let lureAndTrapUsed = TrackName.Lure in gagGroups && TrackName.Trap in gagGroups;
    let lureUsed = TrackName.Lure in gagGroups;

    // Check if drop should work
    let dropShouldWork = !(cog.isLured && !lureAndTrapUsed) && 
                         !(lureUsed && !(TrackName.Trap in gagGroups || TrackName.Throw in gagGroups || TrackName.Squirt in gagGroups));

    // Calculate total damage
    let totalDamage = 0;
    for (let track in gagGroups) {
        let group = gagGroups[track];
        if (track === TrackName.Drop && !dropShouldWork) {
            continue;
        }

        let groupDamage = group.reduce((sum, gag) => sum + gag.damage, 0);

        // Add track bonus if multiple gags of the same track are used
        if (group.length > 1) {
            groupDamage = Math.ceil(groupDamage * 1.2); // 20% bonus for same track gags
        }

        // Add lure bonus if the cog is lured and the gag is 'throw' or 'squirt' track, but not if lure and trap are used together
        if (!lureAndTrapUsed && cog.isLured && (track === TrackName.Throw || track === TrackName.Squirt)) {
            // If both 'throw' and 'squirt' are used, 'throw' gets the bonus
            if (track === TrackName.Squirt && TrackName.Throw in gagGroups) {
                continue;
            }

            groupDamage = Math.ceil(groupDamage * 1.5); // 50% bonus for lured cogs
        }

        totalDamage += groupDamage;
    }

    return totalDamage >= cog.health;
}
