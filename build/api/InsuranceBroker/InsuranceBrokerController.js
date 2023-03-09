"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceBrokerController = void 0;
var InsuranceBrokerController = /** @class */ (function () {
    function InsuranceBrokerController() {
    }
    // insuranceBrokerService: InsuranceBrokerService
    // constructor(insuranceBrokerService: InsuranceBrokerService) {
    //   this.insuranceBrokerService = insuranceBrokerService
    // }
    InsuranceBrokerController.prototype.createInsurance = function (req, res) {
        // const passWord = this.insuranceBrokerService.createInsurance(
        //   req.body
        // )
        return res.status(201).json({
            response: "dd"
        });
    };
    InsuranceBrokerController.prototype.getInsurance = function (req, res) {
        return res.json({
            response: 'Hello World'
        });
    };
    return InsuranceBrokerController;
}());
exports.InsuranceBrokerController = InsuranceBrokerController;
