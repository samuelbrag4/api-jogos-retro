import gameModel from "../models/game.model.js";

class GameController {
  async findAll(req, res) {
    try {
      const games = await gameModel.findAll();

      return res.status(200).json({
        message: "Aqui estão os jogos:",
        games,
      });
    } catch (error) {
        console.error("Error finding all games", error);
        return res.status(500).json({ message: "Error finding all games", error});
    }
  }
}

export default new GameController();
