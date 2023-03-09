"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceBrokerService = void 0;
var InsuranceBrokerService = /** @class */ (function () {
    function InsuranceBrokerService(passwordUtil) {
        this.passwordUtil = passwordUtil;
    }
    InsuranceBrokerService.prototype.createInsurance = function (model) {
        var password = model.password;
        var hashPassword = this.passwordUtil.hashPassword(password);
        return hashPassword;
    };
    return InsuranceBrokerService;
}());
exports.InsuranceBrokerService = InsuranceBrokerService;
