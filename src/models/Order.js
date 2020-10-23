import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  quantity: {
    type: Number,
  },
});
const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
  },

  items: {
    type: [ItemSchema],
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
});

export default OrderSchema;
