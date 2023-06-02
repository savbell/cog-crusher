export interface ICog {
    level: number;
    health: number;
    isLured: boolean;
}

export const COG_HEALTH_VALUES: number[] = [
    0,   // Placeholder for Level 0 (no such level exists)
    6,   // Level 1
    12,  // Level 2
    20,  // Level 3
    30,  // Level 4
    42,  // Level 5
    56,  // Level 6
    72,  // Level 7
    90,  // Level 8
    110, // Level 9
    132, // Level 10
    156, // Level 11
    196, // Level 12
    224, // Level 13
    254, // Level 14
    286, // Level 15
    320, // Level 16
    356, // Level 17
    394, // Level 18
    434, // Level 19
    476  // Level 20
];
