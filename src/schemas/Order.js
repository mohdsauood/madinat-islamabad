import mongoose, { Schema } from 'mongoose';

import ItemSchema from './Item';
import AddressSchema from './Address';
import BillSchema from './Bill';
const OrderSchema = new mongoose.Schema({
  _id: {
    type: Number,
  },
  date: {
    type: Date,
  },
  time: {
    type: String,
  },
  items: {
    type: [ItemSchema],
  },
  bill: {
    type: BillSchema,
  },
  address: {
    type: AddressSchema,
  },
});

export default OrderSchema;
