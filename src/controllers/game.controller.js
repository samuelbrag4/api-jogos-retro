import gameModel from "../models/game.model.js";

class GameController {
  async findAll(req, res) {
    try {
      const games = await gameModel.findAll();

      return res.status(200).json({
        message: "Games found successfully!",
        games,
      });
    } catch (error) {
      console.error("Error finding all games", error);
      return res
        .status(500)
        .json({ message: "Error finding all games", error });
    }
  }

  async create(req, res) {
    try {
      const { name, platform } = req.body;

      if (!name || !platform) {
        return res
          .status(400)
          .json({ error: "Name and platform are required fields." });
      }

      const data = {
        name,
        platform,
      };

      const newGame = await gameModel.create(data);

      return res.status(201).json({
        message: "Game created successfully!",
        newGame,
      });
    
    } catch (error) {
      console.error("Error creating game", error);
      return res.status(500).json({ message: "Error creating game", error });
    }
  }
}

export default new GameController();
