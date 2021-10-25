db.voos
  .find({ vooId: { $exists: true } }, { vooId: 1, _id: 0 })
  .skip(9)
  .limit(3);
