import mongoose from 'mongoose';

const BillSchema = new mongoose.Schema({
  request: {
    type: String,
  },
  total: {
    type: Number,
  },
  deliveryFee: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  toPay: {
    type: Number,
  },
  coupon: {
    type: String,
  },
});

export default BillSchema;
