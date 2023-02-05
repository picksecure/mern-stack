const Setting = require("../models/SettingModel");

const getSettings = async (req, res, next) => {
    try {
        const settings = await Setting.find({}).orFail();
        res.send(settings);
    } catch (error) {
        next(error)
    }
}
const adminUpdateSettings = async (req, res, next) => {
    try {
        const settings = await Setting.findById(req.params.id).orFail();
        const {
            tax,
            shipping,
            monHoursOp,
            monHoursCl,
            tusHoursOp,
            tusHoursCl,
            wedHoursOp,
            wedHoursCl,
            thuHoursOp,
            thuHoursCl,
            friHoursOp,
            friHoursCl,
            satHoursOp,
            satHoursCl,
            sunHoursOp,
            sunHoursCl,
            monHoursOpServ,
            monHoursClServ,
            tusHoursOpServ,
            tusHoursClServ,
            wedHoursOpServ,
            wedHoursClServ,
            thuHoursOpServ,
            thuHoursClServ,
            friHoursOpServ,
            friHoursClServ,
            satHoursOpServ,
            satHoursClServ,
            sunHoursOpServ,
            sunHoursClServ,
            seoHelmentName,
            seoHelmentTitle,
            seoHelmentDescription,
            seoHelmentType,
            seoHelmentTitleProduct,
            seoHelmentDescriptionProduct,
            seoHelmentTypeProduct,
            seoHelmentTitleGallery,
            seoHelmentDescriptionGallery,
            seoHelmentTypeGallery,
            seoHelmentTitleLogin,
            seoHelmentDescriptionLogin,
            seoHelmentTypeLogin,
            seoHelmentTitleRegister,
            seoHelmentDescriptionRegister,
            seoHelmentTypeRegister,
            seoHelmentTitleCart,
            seoHelmentDescriptionCart,
            seoHelmentTypeCart,
            seoHelmentTitleFound,
            seoHelmentDescriptionFound,
            seoHelmentTypeFound,
     
        } =
            req.body;
        settings.tax = tax || settings.tax;
        settings.shipping = shipping || settings.shipping;
        settings.monHoursOp = monHoursOp || settings.monHoursOp;
        settings.monHoursCl = monHoursCl || settings.monHoursCl;
        settings.tusHoursOp = tusHoursOp || settings.tusHoursOp;
        settings.tusHoursCl = tusHoursCl || settings.tusHoursCl;
        settings.wedHoursOp = wedHoursOp || settings.wedHoursOp;
        settings.wedHoursCl = wedHoursCl || settings.wedHoursOp;
        settings.thuHoursOp = thuHoursOp || settings.thuHoursOp;
        settings.thuHoursCl = thuHoursCl || settings.thuHoursCl;
        settings.friHoursOp = friHoursOp || settings.friHoursOp;
        settings.friHoursCl = friHoursCl || settings.friHoursCl;
        settings.satHoursOp = satHoursOp || settings.satHoursOp;
        settings.satHoursCl = satHoursCl || settings.satHoursCl;
        settings.sunHoursOp = sunHoursOp || settings.sunHoursOp;
        settings.sunHoursCl = sunHoursCl || settings.sunHoursCl;

        settings.monHoursOpServ = monHoursOpServ || settings.monHoursOpServ;
        settings.monHoursClServ = monHoursClServ || settings.monHoursClServ;
        settings.tusHoursOpServ = tusHoursOpServ || settings.tusHoursOpServ;
        settings.tusHoursClServ = tusHoursClServ || settings.tusHoursClServ;
        settings.wedHoursOpServ = wedHoursOpServ || settings.wedHoursOpServ;
        settings.wedHoursClServ = wedHoursClServ || settings.wedHoursOpServ;
        settings.thuHoursOpServ = thuHoursOpServ || settings.thuHoursOpServ;
        settings.thuHoursClServ = thuHoursClServ || settings.thuHoursClServ;
        settings.friHoursOpServ = friHoursOpServ || settings.friHoursOpServ;
        settings.friHoursClServ = friHoursClServ || settings.friHoursClServ;
        settings.satHoursOpServ = satHoursOpServ || settings.satHoursOpServ;
        settings.satHoursClServ = satHoursClServ || settings.satHoursClServ;
        settings.sunHoursOpServ = sunHoursOpServ || settings.sunHoursOpServ;
        settings.sunHoursClServ = sunHoursClServ || settings.sunHoursClServ;
        settings.seoHelmentName = seoHelmentName || settings.seoHelmentName;

        settings.seoHelmentTitle = seoHelmentTitle || settings.seoHelmentTitle;
        settings.seoHelmentDescription = seoHelmentDescription || settings.seoHelmentDescription;
        settings.seoHelmentType = seoHelmentType || settings.seoHelmentType;

        settings.seoHelmentTitleProduct = seoHelmentTitleProduct || settings.seoHelmentTitleProduct;
        settings.seoHelmentDescriptionProduct = seoHelmentDescriptionProduct || settings.seoHelmentDescriptionProduct;
        settings.seoHelmentTypeProduct = seoHelmentTypeProduct || settings.seoHelmentTypeProduct;

        settings.seoHelmentTitleGallery = seoHelmentTitleGallery || settings.seoHelmentTitleGallery;
        settings.seoHelmentDescriptionGallery = seoHelmentDescriptionGallery || settings.seoHelmentDescriptionGallery;
        settings.seoHelmentTypeGallery = seoHelmentTypeGallery || settings.seoHelmentTypeGallery;

        settings.seoHelmentTitleLogin = seoHelmentTitleLogin || settings.seoHelmentTitleLogin;
        settings.seoHelmentDescriptionLogin = seoHelmentDescriptionLogin || settings.seoHelmentDescriptionLogin;
        settings.seoHelmentTypeLogin = seoHelmentTypeLogin || settings.seoHelmentTypeLogin;

        settings.seoHelmentTitleRegister = seoHelmentTitleRegister || settings.seoHelmentTitleRegister;
        settings.seoHelmentDescriptionRegister = seoHelmentDescriptionRegister || settings.seoHelmentDescriptionRegister;
        settings.seoHelmentTypeRegister = seoHelmentTypeRegister || settings.seoHelmentTypeRegister;

        settings.seoHelmentTitleCart = seoHelmentTitleCart || settings.seoHelmentTitleCart;
        settings.seoHelmentDescriptionCart = seoHelmentDescriptionCart || settings.seoHelmentDescriptionCart;
        settings.seoHelmentTypeCart = seoHelmentTypeCart || settings.seoHelmentTypeCart;

        settings.seoHelmentTitleFound = seoHelmentTitleFound || settings.seoHelmentTitleFound;
        settings.seoHelmentDescriptionFound = seoHelmentDescriptionFound || settings.seoHelmentDescriptionFound;
        settings.seoHelmentTypeFound = seoHelmentTypeFound || settings.seoHelmentTypeFound;

        await settings.save();
        res.json({
            message: "setting updated",
        });
    } catch (err) {
        next(err);
    }
};
const getSettingsById = async (req, res, next) => {
    try {
        const settings = await Setting.findById(req.params.id)
            .orFail();
       return res.json(settings);
    } catch (err) {
        next(err);
    }
};

module.exports = { getSettings, adminUpdateSettings, getSettingsById }