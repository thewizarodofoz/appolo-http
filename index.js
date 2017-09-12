"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const launcher_1 = require("./lib/launcher/launcher");
var appolo_1 = require("appolo");
exports.EventDispatcher = appolo_1.EventDispatcher;
exports.Util = appolo_1.Util;
exports.module = appolo_1.module;
exports.injector = appolo_1.inject;
exports.container = appolo_1.inject;
exports.loader = appolo_1.loader;
exports.environment = appolo_1.environment;
exports.use = appolo_1.use;
exports.Injector = appolo_1.Injector;
var register_1 = require("./lib/register/register");
exports.Register = register_1.Register;
exports.register = register_1.register;
var route_1 = require("./lib/routes/route");
exports.route = route_1.default;
exports.Route = route_1.Route;
var controller_1 = require("./lib/controller/controller");
exports.Controller = controller_1.Controller;
var staticController_1 = require("./lib/controller/staticController");
exports.StaticController = staticController_1.StaticController;
tslib_1.__exportStar(require("./lib/decorators/decorators"), exports);
var middleware_1 = require("./lib/middleware/middleware");
exports.Middleware = middleware_1.Middleware;
var staticMiddleware_1 = require("./lib/middleware/staticMiddleware");
exports.StaticMiddleware = staticMiddleware_1.StaticMiddleware;
var router_1 = require("./lib/routes/router");
exports.router = router_1.default;
exports.Router = router_1.Router;
var methods_1 = require("./lib/common/enums/methods");
exports.Methods = methods_1.Methods;
var httpError_1 = require("./lib/common/error/httpError");
exports.HttpError = httpError_1.HttpError;
var launcher_2 = require("./lib/launcher/launcher");
exports.launcher = launcher_2.default;
var app_1 = require("./lib/app/app");
exports.app = app_1.default;
exports.validator = require("joi");
var app_2 = require("./lib/app/app");
exports.App = app_2.App;
exports.launch = function (config, callback) {
    return launcher_1.default.launch(config, callback);
};
//# sourceMappingURL=index.js.map