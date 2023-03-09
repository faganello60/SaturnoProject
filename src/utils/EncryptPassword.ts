import bcrypt from "bcrypt";

export class EncryptPassword {
    saltNumber: number

    constructor(saltNumber: number) {
        this.saltNumber = saltNumber;
    }

    public hashPassword(password: string): string {
        const hashPass = bcrypt.hashSync(
            password,
            10
        );
        return hashPass;
    }
}