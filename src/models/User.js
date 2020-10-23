import mongoose from 'mongoose';

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
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
