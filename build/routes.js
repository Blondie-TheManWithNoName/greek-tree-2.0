"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const express_validator_1 = require("express-validator");
const GodController_1 = require("./controller/GodController");
const PartnersController_1 = require("./controller/PartnersController");
const ChildController_1 = require("./controller/ChildController");
exports.Routes = [
    {
        method: "get",
        route: "/gods",
        controller: GodController_1.GodController,
        action: "all",
        validation: [],
    },
    {
        method: "get",
        route: "/gods/:name",
        controller: GodController_1.GodController,
        action: "one",
        validation: [
            (0, express_validator_1.param)("name").isString().withMessage("Name must be a string."),
        ],
    },
    {
        method: "post",
        route: "/gods",
        controller: GodController_1.GodController,
        action: "save",
        validation: [
            (0, express_validator_1.body)("name").isString().withMessage("Name must be a string."),
            (0, express_validator_1.body)("gender").isBoolean().withMessage("Gender must be a boolean."),
            (0, express_validator_1.body)("description")
                .isString()
                .withMessage("Description must be a string."),
            (0, express_validator_1.body)("greekName").isString().withMessage("Greek name must be a string."),
            (0, express_validator_1.body)("romanName").isString().withMessage("Roman name must be a string."),
        ],
    },
    {
        method: "delete",
        route: "/gods/:name",
        controller: GodController_1.GodController,
        action: "remove",
        validation: [],
    },
    ////////////
    //PARTNERS//
    ///////////
    {
        method: "get",
        route: "/partners",
        controller: PartnersController_1.PartnersController,
        action: "all",
        validation: [],
    },
    {
        method: "get",
        route: "/partners/:id",
        controller: PartnersController_1.PartnersController,
        action: "oneById",
        validation: [(0, express_validator_1.param)("id").isNumeric()],
    },
    //   {
    //     method: "get",
    //     route: "/partners",
    //     controller: PartnersController,
    //     action: "oneByNames",
    //   },
    {
        method: "post",
        route: "/partners",
        controller: PartnersController_1.PartnersController,
        action: "save",
        validation: [(0, express_validator_1.body)("partner_1").isString(), (0, express_validator_1.body)("partner_2").isString()],
    },
    {
        method: "delete",
        route: "/partners/:id",
        controller: PartnersController_1.PartnersController,
        action: "remove",
        validation: [(0, express_validator_1.param)("id").isNumeric()],
    },
    ////////////
    //CHILDREN//
    ///////////
    {
        method: "get",
        route: "/children",
        controller: ChildController_1.ChildController,
        action: "all",
        validation: [],
    },
    {
        method: "post",
        route: "/children",
        controller: ChildController_1.ChildController,
        action: "save",
        validation: [(0, express_validator_1.body)("name").isString(), (0, express_validator_1.body)("parents_id").isNumeric()],
    },
];
