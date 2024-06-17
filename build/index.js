"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_data_source_1 = require("./app-data-source");
const routes_1 = require("./routes");
const morgan_1 = __importDefault(require("morgan"));
const express_validator_1 = require("express-validator");
const PORT = 3000;
app_data_source_1.AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    // create express app
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use((0, morgan_1.default)("tiny"));
    // register express routes from defined application routes
    routes_1.Routes.forEach((route) => {
        app[route.method](route.route, ...route.validation, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const errors = (0, express_validator_1.validationResult)(req);
                if (!errors.isEmpty())
                    res.status(400).json({ errors: errors.array() });
                const result = yield new route.controller()[route.action](req, res, next);
                if (result !== null && result !== undefined) {
                    res.send(result);
                }
            }
            catch (error) {
                next(error);
            }
        }));
    });
    // error-handling middleware
    app.use((err, _req, res, _next) => {
        console.error(err.stack);
        res.status(500).json({ error: err.message });
    });
    // start express server
    app.listen(3000, () => {
        console.log(`Express server has started on port ${PORT}`);
    });
}))
    .catch((error) => console.log(error));
