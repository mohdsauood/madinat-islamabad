import mongoose from 'mongoose';

const AddressSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'home',
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
    default: 'sharjah',
  },
  geoCode: {
    lat: {
      type: Number,
    },
    lng: {
      type: Number,
    },
  },
});

export default AddressSchema;
