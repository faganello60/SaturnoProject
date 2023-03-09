import { Request, Response } from 'express';

export interface InsuranceBrokerModel {
    name: string,
    email: string,
    password: string,
}

export interface CustomRequest<T> extends Request {
    body: T
}