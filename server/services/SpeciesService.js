import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class SpeciesService
{
    async getAll()
    {
        return await dbContext.Species.find({});
    }

    async getByID(id)
    {
        const found = await dbContext.Species.findById(id);
        if(!found)
        {
            throw new BadRequest(`Species with id ${id} not found.`);
        }
        return found;
    }

    async create(body)
    {
        return await dbContext.Species.create(body);
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.name = update.name || edited.name;
        await edited.save();
        return edited;
    }

    async remove(id)
    {
        let deleted = await this.getByID(id);
        deleted.remove();
        return deleted;
    }
}

export const speciesService = new SpeciesService();