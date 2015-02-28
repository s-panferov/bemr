export interface ClassManager {
    mod(...name: string[]): ClassManager;
    cmod(condition: boolean, ...name: string[]): ClassManager;
    toString(): string;
    before(...other: ToString[]): ClassManager;
    after(...other: ToString[]): ClassManager;
}
export interface ToString {
    toString(): string;
}
export declare class Block implements ClassManager, ToString {
    private name;
    private modifiers;
    private befores;
    private afters;
    constructor(block: string);
    mod(...mod: string[]): Block;
    cmod(condition: boolean, ...mod: string[]): Block;
    toString(): string;
    el(el: string): Block;
    after(...other: ToString[]): Block;
    before(...other: ToString[]): Block;
}
export declare function block(name: string): Block;
