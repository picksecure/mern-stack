const mongoose = require("mongoose");

const settingsSchema = mongoose.Schema({
    tax: {
        type: String,
        required: true,
    },
    shipping: {
        type: String,
        required: true,
    },
        monHoursOp: { type: String, required: true },
        monHoursCl: { type: String, required: true },
        tusHoursOp: { type: String, required: true },
        tusHoursCl: { type: String, required: true },
        wedHoursOp: { type: String, required: true },
        wedHoursCl: { type: String, required: true },
        thuHoursOp: { type: String, required: true },
        thuHoursCl: { type: String, required: true },
        friHoursOp: { type: String, required: true },
    friHoursCl: { type: String, required: true },
    satHoursOp: { type: String, required: false },
    satHoursCl: { type: String, required: false },
    sunHoursOp: { type: String, required: false },
    sunHoursCl: { type: String, required: false },

    monHoursOpServ: { type: String, required: true },
    monHoursClServ: { type: String, required: true },
    tusHoursOpServ: { type: String, required: true },
    tusHoursClServ: { type: String, required: true },
    wedHoursOpServ: { type: String, required: true },
    wedHoursClServ: { type: String, required: true },
    thuHoursOpServ: { type: String, required: true },
    thuHoursClServ: { type: String, required: true },
    friHoursOpServ: { type: String, required: true },
    friHoursClServ: { type: String, required: true },
    satHoursOpServ: { type: String, required: false },
    satHoursClServ: { type: String, required: false },
    sunHoursOpServ: { type: String, required: false },
    sunHoursClServ: { type: String, required: false },
}, {
    timestamps: true,
});

const Setting = mongoose.model("Setting", settingsSchema);
module.exports = Setting