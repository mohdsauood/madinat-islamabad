import mongoose, { Schema } from 'mongoose';

import ItemSchema from './Item';
import AddressSchema from './Address';
import BillSchema from './Bill';
const OrderSchema = new mongoose.Schema({
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
