import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const StarSchema = new Schema(
    {
        name: { type: String, required: true },
        galaxyID: { type: Schema.Types.ObjectId, ref: "Galaxy", required: true }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

StarSchema.virtual("galaxy",
    {
        localField: "galaxyID",
        foreignField: "_id",
        ref: "Galaxy",
        justOne: true
    }
);