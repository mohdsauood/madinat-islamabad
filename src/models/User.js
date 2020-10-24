import mongoose from 'mongoose';
import OrderSchema from '../schemas/Order';
import AddressSchema from '../schemas/Address';
const findOrCreate = require('mongoose-find-or-create');

const UserSchema = new mongoose.Schema({
  mobile: {
    type: Number,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  orders: {
    type: [OrderSchema],
  },
  address: {
    type: [AddressSchema],
  },
});

UserSchema.plugin(findOrCreate);

export default mongoose.models.User || mongoose.model('User', UserSchema);
