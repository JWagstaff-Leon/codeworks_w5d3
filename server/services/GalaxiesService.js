import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class GalaxiesService
{
    async getAll()
    {
        return await dbContext.Galaxies.find({});
    }

    async getByID(id)
    {
        const found = await dbContext.Galaxies.findById(id);
        if(!found)
        {
            throw new BadRequest(`Galaxy with id ${id} not found.`)
        }
        return found;
    }

    async create(body)
    {
        return await dbContext.Galaxies.create(body);
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.name = update.name || edited.name;
        await edited.save()
        return edited;
    }

    async remove(id)
    {
        const deleted = await this.findById(id);
        await deleted.remove();
        return deleted;
    }
}

export const galaxiesService = new GalaxiesService();