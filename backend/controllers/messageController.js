const Message = require("../models/MessageModel");

const getMessages = async (req, res, next) => {
    try {
        const messages = await Message.find({}).orFail();
        res.send(messages);
    } catch (error) {
        next(error)
    }
}
const newMessage = async (req, res, next) => {
    try {
        const messages = new Message();
        const { name, contact, phone, email, comment } =
            req.body;
        messages.name = name;
        messages.contact = contact;
        messages.phone = phone;
        messages.email = email;
        messages.comment = comment;
        
        await messages.save();

        res.json({
            message: "messages created",
            messagesId: messages._id,
        });
    } catch (err) {
        next(err);
    }
};
const getMessagesById = async (req, res, next) => {
    try {
        const messages = await Message.findById(req.params.id)
            .orFail();
        return res.json(messages);
    } catch (err) {
        next(err);
    }
};

module.exports = { getMessages, newMessage, getMessagesById }