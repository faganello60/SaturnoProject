import { Router } from "express";
import { InsuranceBrokerService } from "../service/InsuranceBroker/InsureanceBrokerService";
import { EncryptPassword } from "../utils/EncryptPassword";
import  { InsuranceBrokerController }  from "./InsuranceBroker/InsuranceBrokerController";

const router: Router = Router()

const insuranceBrokerService: InsuranceBrokerService = new InsuranceBrokerService(
    new EncryptPassword(20)
);
const insuranceBrokerController: InsuranceBrokerController = new InsuranceBrokerController(insuranceBrokerService);

console.debug(
    insuranceBrokerController
);
const insuranceBrokerPath = "/insuranceBroker";
//Routes
router.get("/");
router.post(insuranceBrokerPath, insuranceBrokerController.createInsurance);
router.get(insuranceBrokerPath, insuranceBrokerController.getInsurance);



export { router }; 