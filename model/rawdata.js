const mongoose = require("mongoose");

const kairawSchema = new mongoose.Schema({},{strict:false,timestamps:true});

module.exports = mongoose.model("Raw", kairawSchema);
