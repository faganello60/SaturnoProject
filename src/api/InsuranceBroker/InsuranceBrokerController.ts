import { Request, Response } from "express";
import { CustomRequest, InsuranceBrokerModel } from "../../models/insuranceBrokerModel";
import { InsuranceBrokerService } from "../../service/InsuranceBroker/InsureanceBrokerService";

export class InsuranceBrokerController{
  insuranceBrokerService: InsuranceBrokerService

  constructor(insuranceBrokerService: InsuranceBrokerService) {
    this.insuranceBrokerService = insuranceBrokerService
  }

  public createInsurance(req:CustomRequest<InsuranceBrokerModel>, res:Response) {
    const passWord = this.insuranceBrokerService.createInsurance(
      req.body
    )
    return res.status(201).json({
      response: passWord
    });
  }

  public getInsurance(req:Request, res:Response) {
    return res.json({
      response: 'Hello World'
    });
  }
}