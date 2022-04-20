import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GalaxySchema } from '../models/Galaxy.js';
import { StarSchema } from '../models/Star.js';
import { PlanetSchema } from '../models/Planet.js';
import { MoonSchema } from '../models/Moon.js';
import { SpeciesSchema } from "../models/Species.js";
import { HabitationSchema } from "../models/Habitation.js";

class DbContext {
  Account = mongoose.model('Account', AccountSchema);
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Stars = mongoose.model("Star", StarSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Species = mongoose.model("Species", SpeciesSchema);
  Habitations = mongoose.model("Habitation", HabitationSchema);
}

export const dbContext = new DbContext()
