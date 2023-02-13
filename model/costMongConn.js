const mongoose = require('../model/costManager');

// This code defines a Mongoose schema for a "Cost" object and creates a Mongoose model
// named "Cost" from the schema.
// The schema defines the fields that each Cost object must have and their data types.
// The fields include "user_id", "year", "month", "day", "id", "description", "category", and "sum".
// The "required" property for each field is set to "true" indicating that these fields
// are required to be present when creating a new Cost object.
// The Mongoose model "Cost" is created from the costSchema and can be used to perform
// CRUD operations on the "cost" collection in the MongoDB database.
const costSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    id: {
        type: Number,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    sum: {
        type: Number,
        required: true
    }
});
const Cost = mongoose.model('cost', costSchema);
module.exports = Cost;
