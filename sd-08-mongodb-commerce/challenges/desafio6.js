db.produtos.updateMany(
  { $or: [{ nome: "Big Mac" }, { nome: "Quarteirão com Queijo" }] },
  { $addToSet: { ingredientes: "bacon" } },
  { upsert: true },
);

db.produtos.find({}, { _id: 0, nome: 1, ingredientes: 1 });
