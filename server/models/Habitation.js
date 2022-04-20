import mongoose from "mongoose";
const Schema = mongoose.Schema;

export const HabitationSchema = new Schema(
    {
        speciesID: { type: Schema.Types.ObjectId, ref: "Species", required: true },
        planetID: { type: Schema.Types.ObjectId, ref: "Planet", required: true }
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);