import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ManufacturerSchema = new Schema({
  name: {type: String},
});

export default mongoose.model('manufacturers', ManufacturerSchema);
