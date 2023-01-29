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
            sunHoursClServ
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