import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class StarsService
{
    async getAllByGalaxy(galaxyID)
    {
        return await dbContext.Stars.find({galaxyID: galaxyID});
    }

    async getAll()
    {
        return await dbContext.Stars.find({}).populate("galaxy", "name");
    }

    async getByID(id)
    {
        const found = await dbContext.Stars.findById(id).populate("galaxy", "name");
        if(!found)
        {
            throw new BadRequest(`Star with id ${id} not found.`)
        }
        return found;
    }

    async create(body)
    {
        const created = await dbContext.Stars.create(body);
        created.populate("galaxy", "name");
        return created;
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.name = update.name || edited.name;
        edited.galaxyID = update.galaxyID || edited.galaxyID;
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

export const starsService = new StarsService();