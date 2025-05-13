import recordModel from "../models/record.model.js";

class RecordController {
  async findAll(req, res) {
    try {
      const records = await recordModel.findAll();

      return res.status(200).json({
        message: "Records found successfully!",
        records,
      });
    } catch (error) {
      console.error("Error finding all records", error);
      return res
        .status(500)
        .json({ message: "Error finding all records", error });
    }
  }

  async create(req, res) {
    try {
      const { score, screenshot, userId, gameId } = req.body;

      if (!score || !screenshot || !userId || !gameId) {
        return res
          .status(400)
          .json({ error: "Score, screenshot, userId and gameId are required fields." });
      }

      const data = {
        score,
        screenshot,
        userId,
        gameId,
      };

      const newRecord = await recordModel.create(data);

      return res.status(201).json({
        message: "Record created successfully!",
        newRecord,
      });
    
    } catch (error) {
      console.error("Error creating record", error);
      return res.status(500).json({ message: "Error creating record", error });
    }
  }
}

export default new RecordController();