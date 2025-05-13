import prisma from "../../prisma/prisma.js";

class RecordModel {
  // Obter todos os recordes
  async findAll () {
    const records = await prisma.record.findMany();

    return {
        total: records.length,
        records,
    };
  }

  // Criar um novo recorde
  async create(data) {
    const record = await prisma.record.create({
      data
    });

    return record;
  }

  // Atualizar um registro
  async update(
    id,
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId
  ) {
    const record = await this.findById(id);

    if (!record) {
      return null;
    }

    // Atualize o registro existente com os novos dados
    const recordAtualizado = await prisma.record.update({
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

export default new RecordModel();