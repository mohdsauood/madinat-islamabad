import mongoose, { Schema } from 'mongoose';
import ItemSchema from './Item';
import AddressSchema from './Address';
import BillSchema from './Bill';

const AutoIncrement = require('mongoose-sequence')(mongoose);

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

OrderSchema.plugin(AutoIncrement, { inc_field: 'id' });

export default OrderSchema;
