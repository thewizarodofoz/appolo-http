"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const decorators_1 = require("../../../../decorators");
const baseManager_1 = require("./baseManager");
let initCount = 0;
let Manager7 = class Manager7 extends baseManager_1.BaseManager {
    initialize() {
        initCount++;
    }
    get name() {
        return this.constructor.name;
    }
    get initCout() {
        return initCount;
    }
};
tslib_1.__decorate([
    decorators_1.inject()
], Manager7.prototype, "manager4", void 0);
tslib_1.__decorate([
    decorators_1.initMethod()
], Manager7.prototype, "initialize", null);
Manager7 = tslib_1.__decorate([
    decorators_1.define(),
    decorators_1.singleton()
], Manager7);
exports.Manager7 = Manager7;
//# sourceMappingURL=manager7.js.map