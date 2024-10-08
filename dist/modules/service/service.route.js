"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = require("express");
const authenticateRoute_1 = __importDefault(require("../../middlewares/authenticateRoute"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const slot_validation_1 = require("../slot/slot.validation");
const user_constant_1 = require("../user/user.constant");
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const router = (0, express_1.Router)();
router.post("/", (0, authenticateRoute_1.default)(user_constant_1.User_roles.admin), (0, validateRequest_1.default)(service_validation_1.ServiceValidations.createServiceValidationSchema), service_controller_1.ServiceControllers.createService);
router.get("/:id", service_controller_1.ServiceControllers.getSingleService);
router.put("/:id", (0, authenticateRoute_1.default)(user_constant_1.User_roles.admin), service_controller_1.ServiceControllers.updateService);
router.get("/", service_controller_1.ServiceControllers.getAllServices);
router.delete("/:id", (0, authenticateRoute_1.default)(user_constant_1.User_roles.admin), service_controller_1.ServiceControllers.deleteService);
router.post("/slots", (0, authenticateRoute_1.default)(user_constant_1.User_roles.admin), (0, validateRequest_1.default)(slot_validation_1.SlotValidations.createSlotValidationSchema), service_controller_1.ServiceControllers.createSlot);
exports.ServiceRoutes = router;
