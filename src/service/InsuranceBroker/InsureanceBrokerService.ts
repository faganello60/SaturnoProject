import { InsuranceBrokerModel } from "../../models/insuranceBrokerModel";
import {  EncryptPassword } from "../../utils/EncryptPassword"

export class InsuranceBrokerService{
  private passwordUtil: EncryptPassword
  
  constructor(passwordUtil: EncryptPassword) {
    this.passwordUtil = passwordUtil
  }

  public createInsurance(model: InsuranceBrokerModel): string {
    const password = model.password;
    const hashPassword = this.passwordUtil.hashPassword(password)
    return hashPassword
  }
}