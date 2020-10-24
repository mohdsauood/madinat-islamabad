import mongoose from 'mongoose';
import OrderSchema from '../schemas/Order';
import AddressSchema from '../schemas/Address';
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

export default mongoose.models.User || mongoose.model('User', UserSchema);
