import { body, param, query } from "express-validator";
import { GodController } from "./controller/GodController";
import { PartnersController } from "./controller/PartnersController";
import { ChildController } from "./controller/ChildController";

export const Routes = [
  {
    method: "get",
    route: "/gods",
    controller: GodController,
    action: "all",
    validation: [],
  },
  {
    method: "get",
    route: "/gods/:name",
    controller: GodController,
    action: "one",
    validation: [
      param("name").isString().withMessage("Name must be a string."),
    ],
  },
  {
    method: "post",
    route: "/gods",
    controller: GodController,
    action: "save",
    validation: [
      body("name").isString().withMessage("Name must be a string."),
      body("gender").isBoolean().withMessage("Gender must be a boolean."),
      body("description")
        .isString()
        .withMessage("Description must be a string."),
      body("greekName").isString().withMessage("Greek name must be a string."),
      body("romanName").isString().withMessage("Roman name must be a string."),
    ],
  },
  {
    method: "delete",
    route: "/gods/:name",
    controller: GodController,
    action: "remove",
    validation: [],
  },

  ////////////
  //PARTNERS//
  ///////////
  {
    method: "get",
    route: "/partners",
    controller: PartnersController,
    action: "all",
    validation: [],
  },

  {
    method: "get",
    route: "/partners",
    controller: PartnersController,
    action: "oneByNames",
    validation: [
      query("p1").isString().notEmpty(),
      query("p2").isString().notEmpty(),
    ],
  },
  {
    method: "post",
    route: "/partners",
    controller: PartnersController,
    action: "save",
    validation: [body("partner_1").isString(), body("partner_2").isString()],
  },
  {
    method: "delete",
    route: "/partners/:id",
    controller: PartnersController,
    action: "remove",
    validation: [param("id").isNumeric()],
  },

  ////////////
  //CHILDREN//
  ///////////
  {
    method: "get",
    route: "/children",
    controller: ChildController,
    action: "all",
    validation: [],
  },
  {
    method: "post",
    route: "/children",
    controller: ChildController,
    action: "save",
    validation: [body("name").isString(), body("parents_id").isNumeric()],
  },
];
