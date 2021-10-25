db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lte: 600 } },
      {
        $or: [
          { 'empresa.nome': { $ne: 'GOL' } },
          { 'empresa.nome': { $ne: 'AZUL' } },
        ],
      },
    ],
  },
  {
    _id: 0,
    vooId: 1,
    'empresa.nome': 1,
    litrosCombustivel: 1,
  },
);
