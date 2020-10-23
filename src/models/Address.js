import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  area: {
    type: String,
  },
  street: {
    type: String,
  },
  doorNo: {
    type: String,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
});

export default AddressSchema;
