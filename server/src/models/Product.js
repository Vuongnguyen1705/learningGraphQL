import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {type: String},
  price: {type: Number},
  manufacturerId: {type: String},
});

export default mongoose.model('products', ProductSchema);
