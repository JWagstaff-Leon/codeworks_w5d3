import { dbContext } from "../db/DbContext.js";
import { BadRequest } from "../utils/Errors.js";

class HabitationsService
{
    async getByID(id)
    {
        const found = await dbContext.Habitations.findById(id);
        if(!found)
        {
            throw new BadRequest(`Habitation with id ${id} not found.`);
        }
        return found;
    }

    async getByPlanetID(planetID)
    {
        const found = await dbContext.Habitations.findOne({planetID: planetID}).populate("species");
        if(!found)
        {
            throw new BadRequest(`Habitation with planetID ${planetID} not found.`);
        }
        return found;
    }

    async getBySpeciesID(speciesID)
    {
        const found = await dbContext.Habitations.findOne({speciesID: speciesID}).populate("planets");
        if(!found)
        {
            throw new BadRequest(`Habitation with speciesID ${speciesID} not found.`);
        }
        return found;
    }

    async create(body)
    {
        return await dbContext.Habitations.create(body);
    }

    async edit(update)
    {
        const edited = await this.getByID(update.id);
        edited.speciesID = update.speciesID || edited.speciesID;
        edited.planetID = update.planetID || edited.planetID;
        await edited.save()
        return edited;
    }

    async removeByPlanetID(planetID)
    {
        const deleted = await dbContext.find({planetID: planetID})
        await deleted.remove();
        return deleted;
    }

    async removeBySpeciesID(speciesID)
    {
        const deleted = await dbContext.find({speciesID: speciesID})
        await deleted.remove();
        return deleted;
    }
}

export const habitationsService = new HabitationsService();