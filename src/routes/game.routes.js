import express from "express";
import gameController from "../controllers/game.controller.js";

const gameRouter = express.Router();

// Obter todos os games
gameRouter.get("/", gameController.findAll);
gameRouter.post("/", gameController.create);

export default gameRouter;