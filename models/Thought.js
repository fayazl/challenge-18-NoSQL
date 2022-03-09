const { Schema, model } = require ('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = newSchema (

    {
        thoughtText:{
            type: String,
            require: true,
            trim: true,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }


    }
)