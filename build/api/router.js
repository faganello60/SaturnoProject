"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var InsuranceBrokerController_1 = require("./InsuranceBroker/InsuranceBrokerController");
var router = (0, express_1.Router)();
exports.router = router;
// const insuranceBrokerService: InsuranceBrokerService = new InsuranceBrokerService(
//     new EncryptPassword(20)
// );
var insuranceBrokerController = new InsuranceBrokerController_1.InsuranceBrokerController();
var insuranceBrokerPath = "/insuranceBroker";
//Routes
router.post(insuranceBrokerPath, insuranceBrokerController.createInsurance);
router.get(insuranceBrokerPath, insuranceBrokerController.getInsurance);
