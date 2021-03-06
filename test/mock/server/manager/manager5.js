"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo = require("../../../../index");
const decorators_1 = require("../../../../decorators");
const _ = require("lodash");
let Manager5 = class Manager5 {
    get name() {
        return this.constructor.name + _.sumBy(this.handlers, h => h.handle()).toString();
    }
};
tslib_1.__decorate([
    decorators_1.inject()
], Manager5.prototype, "manager3", void 0);
tslib_1.__decorate([
    appolo.injectAlias("IHandler")
], Manager5.prototype, "handlers", void 0);
Manager5 = tslib_1.__decorate([
    decorators_1.define(),
    decorators_1.singleton(),
    decorators_1.lazy()
], Manager5);
exports.Manager5 = Manager5;
//# sourceMappingURL=manager5.js.map