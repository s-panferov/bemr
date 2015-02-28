declare module "bem-classes" {
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
    export class Block implements ClassManager, ToString {
        constructor(block: string);
        mod(...mod: string[]): Block;
        cmod(condition: boolean, ...mod: string[]): Block;
        toString(): string;
        el(el: string): Block;
        after(...other: ToString[]): Block;
        before(...other: ToString[]): Block;
    }
    export function block(name: string): Block;
}