import mongoose, { Schema } from 'mongoose';
import ItemSchema from './Item';
import AddressSchema from './Address';
import BillSchema from './Bill';
import { customAlphabet } from 'nanoid';
const nanoid = customAlphabet('1234567890', 9);
const OrderSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: () => nanoid(),
  },
  orderedAt: {
    type: Date,
    default: Date.now,
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
