import { ICog, COG_HEALTH_VALUES } from './ICog';

export class Cog implements ICog {
    level: number;
    health: number;
    isLured: boolean;

    constructor(level: number) {
        if (level < 1 || level > 20) {
            throw new Error('Invalid level. Level must be between 1 and 20.');
        }

        this.level = level;
        this.health = COG_HEALTH_VALUES[level];
        this.isLured = false;
    }
}
