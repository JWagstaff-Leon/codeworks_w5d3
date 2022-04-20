import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class MoonsService
{
    async getAllByGalaxy(galaxyID)
    {
        return await dbContext.Moons.find({galaxyID: galaxyID}).populate("star planet", "name");
    }

    async getAllByStar(starID)
    {
        return await dbContext.Moons.find({starID: starID}).populate("galaxy planet", "name");
    }

    async getAllByPlanet(planetID)
    {
        return await dbContext.Moons.find({planetID: planetID}).populate("galaxy star", "name");
    }

    async getAll()
    {
        return await dbContext.Moons.find({}).populate("galaxy star planet", "name");
    }

    async getByID(id)
    {
        const found = await dbContext.Moons.findById(id).populate("galaxy star planet");
        if(!found)
        {
            throw new BadRequest(`Moon with id ${id} not found.`);
        }
        return found;
    }

    async create(body)
    {
        const created = await dbContext.Moons.create(body);
        created.populate("galaxy star planet");
        return created;
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.name = update.name || edited.name;
        edited.galaxyID = update.galaxyID || edited.galaxyID;
        edited.starID = update.starID || edited.starID;
        edited.planetID = update.planetID || edited.planetID;
        await edited.save();
        return edited;
    }

    async remove(id)
    {
        const deleted = await this.findById(id);
        await deleted.remove();
        return deleted;
    }
}

export const moonsService = new MoonsService();