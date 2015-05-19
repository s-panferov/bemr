var Block = (function () {
    function Block(block) {
        this.modifiers = [];
        this.befores = [];
        this.afters = [];
        this.name = block;
    }
    Block.prototype.valMod = function (mod, value) {
        this.modifiers.push(mod + "_" + value);
        return this;
    };
    Block.prototype.mod = function () {
        var mod = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            mod[_i - 0] = arguments[_i];
        }
        this.modifiers.push.apply(this.modifiers, mod);
        return this;
    };
    Block.prototype.modIf = function (condition) {
        var mod = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            mod[_i - 1] = arguments[_i];
        }
        if (condition) {
            this.mod.apply(this, mod);
        }
        return this;
    };
    Block.prototype.toString = function () {
        var block_name = this.name;
        var result = "";
        if (this.befores.length) {
            result += this.befores.join(" ") + " ";
        }
        result += block_name;
        if (this.modifiers.length) {
            result += " ";
            result += this.modifiers.map(function (mod) { return block_name + "_" + mod; }).join(" ");
        }
        if (this.afters.length) {
            result += " ";
            result += this.afters.join(" ");
        }
        return result;
    };
    Block.prototype.el = function (el) {
        return new Block(this.name + "__" + el);
    };
    Block.prototype.after = function () {
        var other = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            other[_i - 0] = arguments[_i];
        }
        for (var i = 0; i < other.length; i++) {
            var o = other[i];
            if (o) {
                this.afters.push(o.toString());
            }
        }
        return this;
    };
    Block.prototype.before = function () {
        var other = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            other[_i - 0] = arguments[_i];
        }
        for (var i = 0; i < other.length; i++) {
            var o = other[i];
            if (o) {
                this.befores.push(o.toString());
            }
        }
        return this;
    };
    return Block;
})();
exports.Block = Block;
function block(name) {
    return new Block(name);
}
exports.block = block;
//# sourceMappingURL=index.js.map