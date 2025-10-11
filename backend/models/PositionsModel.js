const { model } = require("mongoose");
const PositionsSchema = require("../schemas/PositionsSchema.js");

const PositionsModel = model("positions", PositionsSchema);

module.exports = PositionsModel;
