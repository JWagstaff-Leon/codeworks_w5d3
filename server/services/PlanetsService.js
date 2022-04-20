import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class PlanetsService
{
    async getAllByGalaxy(galaxyID)
    {
        return await dbContext.Planets.find({galaxyID: galaxyID}).populate("star");
    }

    async getAllByStar(starID)
    {
        return await dbContext.Planets.find({starID: starID}).populate("galaxy");
    }

    async getAll()
    {
        return await dbContext.Planets.find({}).populate("galaxy star");
    }

    async getByID(id)
    {
        const found = await dbContext.Planets.findById(id).populate("galaxy star");
        if(!found)
        {
            throw new BadRequest(`Planet with id ${id} not found.`)
        }
        return found;
    }

    async create(body)
    {
        const created = await dbContext.Planets.create(body);
        created.populate("galaxy star");
        return created;
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.name = update.name || edited.name;
        edited.galaxyID = update.galaxyID || edited.galaxyID;
        edited.starID = update.starID || edited.starID;
        await edited.save();
        return edited;
    }

    async remove(id)
    {
        const deleted = await this.getByID(id);
        await deleted.remove();
        return deleted;
    }
}

export const planetsService = new PlanetsService();