const mongoose = require("mongoose")
const User = require("./UserModel")

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: User,
    },
    orderTotal: {
        itemsCount: {type: Number, required: true},
        cartSubtotal: { type: Number, required: true },
        cartPrice: { type: String, required: true },
        cartTax: { type: String, required: true },
        cartShipping: { type: String, required: true }
    },
    cartItems: [
        {
            name: {type: String, required: true},
            price: { type: Number, required: true },
            tax: { type: String, required: true },
            shipping: { type: String, required: true },
            image: {path: {type: String, required: true}},
            quantity: {type: Number, required: true},
            count: {type: Number, required: true}
        }
    ],
    paymentMethod: {
      type: String,
      required: true,
    },
    transactionResult: {
        status: {type: String},
        createTime: {type: String},
        amount: {type: Number}
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
    },
    paidAt: {
        type: Date,
    },
    refund: {
        type: Boolean,
        required: true,
        default: false,
    },
    refundAt: {
        type: Date,
    },
    cancelled: {
        type: Boolean,
        required: true,
        default: false,
    },
    cancelledAt: {
        type: Date,
    },

    isDelivered: {
        type: Boolean,
        required: true,
        default: false,
    },
    deliveredAt: {
        type: Date,
    }
}, {
    timestamps: true,
})

const Order = mongoose.model("Order", orderSchema)
Order.watch().on("change", (data) => {
    
    if (data.operationType === "insert") {
        io.emit("newOrder", data.fullDocument);
    }
})
module.exports = Order