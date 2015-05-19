declare module "bemr" {
    export interface ClassManager {
        valMod(...name: string[]): ClassManager;
        mod(...name: string[]): ClassManager;
        modIf(condition: boolean, ...name: string[]): ClassManager;
        toString(): string;
        before(...other: ToString[]): ClassManager;
        after(...other: ToString[]): ClassManager;
    }
    export interface ToString {
        toString(): string;
    }
    export class Block implements ClassManager, ToString {
        constructor(block: string);
        valMod(...name: string[]): Block;
        mod(...mod: string[]): Block;
        modIf(condition: boolean, ...mod: string[]): Block;
        toString(): string;
        el(el: string): Block;
        after(...other: ToString[]): Block;
        before(...other: ToString[]): Block;
    }
    export function block(name: string): Block;
}