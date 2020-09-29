const mongoose = require('mongoose');

const { Schema } = mongoose;

const RiskDataSchema = Schema({
    severity: { type: mongoose.Schema.Types.String, trim: true, index: true, required: 'required severity' },
    type: { type: mongoose.Schema.Types.String, trim: true, index: true, required: 'required type' },
    sourceType: { type: mongoose.Schema.Types.String, trim: true, index: true, required: 'required source type' },
    networkType: { type: mongoose.Schema.Types.String, trim: true, index: true, required: 'required network type' },
    date: { type: mongoose.Schema.Types.Date, required: 'required date' },
});

const RiskData = mongoose.model('Data', RiskDataSchema);

module.exports = {
    RiskData
};
