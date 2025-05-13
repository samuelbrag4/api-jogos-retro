import prisma from "../../prisma/prisma.js";

class GameModel {
  // Obter todos os games
  async findAll () {
    const games = await prisma.game.findMany();

    return {
        total: games.length,
        games,
    };
  }

  // Obter um game pelo ID
  async findById(id) {
    const game = await prisma.game.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        collection: true,
      },
    });

    return game;
  }

  // Criar um novo game
  async create(data) {
    const game = await prisma.game.create({
      data
    });

    return game;
  }

  // Atualizar uma carta
  async update(
    id,
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId
  ) {
    const carta = await this.findById(id);

    if (!carta) {
      return null;
    }

    // Atualize a carta existente com os novos dados
    const cartaAtualizada = await prisma.card.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId: Number(collectionId),
      },
    });

    return cartaAtualizada;
  }

  // Remover uma carta
  async delete(id) {
    const carta = await this.findById(id);

    if (!carta) {
      return null;
    }

    await prisma.card.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new GameModel();