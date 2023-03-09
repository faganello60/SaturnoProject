import express from "express";
import { router } from "./api/router";

export class App{
  public server: express.Application;
    route: any;

  constructor(){
    this.server = express();
    this.middleware();
    this.router();
  }

  private middleware(){
    this.server.use(express.json());
  }

  private router(){
    this.server.use(router);
  }
}