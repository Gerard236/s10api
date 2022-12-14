const mongoose = require(`mongoose`);

const filmSchema = mongoose.Schema({
    name: String,
});

module.exports = mongoose.model(`films`, filmSchema);