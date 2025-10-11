const { model } = require('mongoose');

const {HoldingSchema} = require("../schemas/HoldingSchema.js");

const HoldingsModel = new model("holding", HoldingSchema);

module.exports = HoldingsModel;