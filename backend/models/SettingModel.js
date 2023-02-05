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
    seoHelmentName: { type: String, required: true },
    seoHelmentTitle: { type: String, required: true },
    seoHelmentDescription: { type: String, required: true },
    seoHelmentType: { type: String, required: true },

    seoHelmentTitleProduct: { type: String, required: true },
    seoHelmentDescriptionProduct: { type: String, required: true },
    seoHelmentTypeProduct: { type: String, required: true },

    seoHelmentTitleGallery: { type: String, required: true },
    seoHelmentDescriptionGallery: { type: String, required: true },
    seoHelmentTypeGallery: { type: String, required: true },

    seoHelmentTitleLogin: { type: String, required: true },
    seoHelmentDescriptionLogin: { type: String, required: true },
    seoHelmentTypeLogin: { type: String, required: true },

    seoHelmentTitleRegister: { type: String, required: true },
    seoHelmentDescriptionRegister: { type: String, required: true },
    seoHelmentTypeRegister: { type: String, required: true },

    seoHelmentTitleCart: { type: String, required: true },
    seoHelmentDescriptionCart: { type: String, required: true },
    seoHelmentTypeCart: { type: String, required: true },

    seoHelmentTitleFound: { type: String, required: true },
    seoHelmentDescriptionFound: { type: String, required: true },
    seoHelmentTypeFound: { type: String, required: true },

    seoHelmentTitleUserProfile: { type: String, required: true },
    seoHelmentDescriptionUserProfile: { type: String, required: true },
    seoHelmentTypeUserProfile: { type: String, required: true },

    seoHelmentTitleUserOrders: { type: String, required: true },
    seoHelmentDescriptionUserOrders: { type: String, required: true },
    seoHelmentTypeUserOrders: { type: String, required: true },
}, {
    timestamps: true,
});

const Setting = mongoose.model("Setting", settingsSchema);
module.exports = Setting