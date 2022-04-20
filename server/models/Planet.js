import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { StarSchema } from "./Star.js";

export const PlanetSchema = new Schema(
    {
        name: { type: String, required: true },
        galaxyID: { type: Schema.Types.ObjectId, ref: "Galaxy", required: true },
        starID: { type: Schema.Types.ObjectId, ref: "Star", required: true },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
);

PlanetSchema.virtual("galaxy",
    {
        localField: "galaxyID",
        foreignField: "_id",
        ref: "Galaxy",
        justOne: true
    }
);

PlanetSchema.virtual("star",
    {
        localField: "starID",
        foreignField: "_id",
        ref: "Star",
        justOne: true
    }
);