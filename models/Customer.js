const { Schema, models, model } = require("mongoose");

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    minLength: 1,
  },
  phone: String,
  address: String,
  postalcode: String,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
});

const Customer = models.customer || model("customer", customerSchema);

export default Customer;
