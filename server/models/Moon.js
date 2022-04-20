import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { StarSchema } from "./Star.js";

export const MoonSchema = new Schema(
    {
        name: { type: String, required: true },
        galaxyID: { type: Schema.Types.ObjectId, ref: "Galaxy", required: true },
        starID: { type: Schema.Types.ObjectId, ref: "Star", required: true },
        planetID: { type: Schema.Types.ObjectId, ref: "Planet", required: true }
    }
);

MoonSchema.virtual("galaxy",
    {
        localField: "galaxyID",
        foreignField: "_id",
        ref: "Galaxy",
        justOne: true
    }
);

MoonSchema.virtual("star",
    {
        localField: "starID",
        foreignField: "_id",
        ref: "Star",
        justOne: true
    }
);

MoonSchema.virtual("planet",
    {
        localField: "planetID",
        foreignField: "_id",
        ref: "Planet",
        justOne: true
    }
);