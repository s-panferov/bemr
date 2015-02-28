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
    private name: string;
    private modifiers: string[] = [];
    private befores: string[] = [];
    private afters: string[] = [];

    constructor(block: string) {
        this.name = block;
    }

    mod(...mod: string[]): Block {
        this.modifiers.push.apply(this.modifiers, mod);
        return this;
    }

    cmod(condition: boolean, ...mod: string[]): Block {
        if (condition) {
            this.mod.apply(this, mod);
        }
        return this;
    }

    toString(): string {
        var block_name = this.name;

        var result = "";

        if (this.befores.length) {
            result += this.befores.join(" ") +  " ";
        }

        result += block_name;

        if (this.modifiers.length) {
            result += " ";
            result += this.modifiers.map(mod => block_name + "_" + mod).join(" ");
        }

        if (this.afters.length) {
            result += " ";
            result += this.afters.join(" ");
        }

        return result;
    }

    el(el: string): Block {
        return new Block(this.name + "__" + el);
    }

    after(...other: ToString[]): Block {
        for(var i = 0; i < other.length; i++) {
            var o = other[i];
            if (o) {
                this.afters.push(o.toString());
            }
        }
        return this;
    }

    before(...other: ToString[]): Block {
        for(var i = 0; i < other.length; i++) {
            var o = other[i];
            if (o) {
                this.befores.push(o.toString());
            }
        }
        return this;
    }
}

export function block(name: string): Block {
    return new Block(name)
}