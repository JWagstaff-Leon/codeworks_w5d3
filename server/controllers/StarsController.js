import { moonsService } from "../services/MoonsService.js";
import { planetsService } from "../services/PlanetsService.js";
import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";

export class StarsController extends BaseController
{
    constructor()
    {
        super("api/stars");

        this.router
            .get("", this.getAll)
            .get("/:id", this.getByID)
            .get("/:id/planets", this.getAllPlanets)
            .get("/:id/moons", this.getAllMoons)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.remove);
    }

    async getAll(req, res, next)
    {
        try
        {
            return res.send(await starsService.getAll());    
        }
        catch(error)
        {
            next(error);
        }
    }

    async getByID(req, res, next)
    {
        try
        {
            return res.send(await starsService.getByID(req.params.id));    
        }
        catch(error)
        {
            next(error);
        }
    }

    async getAllPlanets(req, res, next)
    {
        try
        {
            return res.send(await planetsService.getAllByStar(req.params.id));    
        }
        catch(error)
        {
            next(error);
        }
    }

    async getAllMoons(req, res, next)
    {
        try
        {
            return res.send(await moonsService.getAllByStar(req.params.id));    
        }
        catch(error)
        {
            next(error);
        }
    }

    async create(req, res, next)
    {
        try
        {
            return res.send(await starsService.create(req.body));    
        }
        catch(error)
        {
            next(error);
        }
    }

    async edit(req, res, next)
    {
        try
        {
            req.body.id = req.params.id;
            return res.send(await starsService.edit(req.body));    
        }
        catch(error)
        {
            next(error);
        }
    }

    async remove(req, res, next)
    {
        try
        {
            return res.send(await starsService.remove(req.params.id));    
        }
        catch(error)
        {
            next(error);
        }
    }

}