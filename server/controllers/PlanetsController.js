import { moonsService } from "../services/MoonsService.js";
import { planetsService } from "../services/PlanetsService.js";
import BaseController from "../utils/BaseController.js";

export class PlanetsController extends BaseController
{
    constructor()
    {
        super("api/planets");

        this.router
            .get("", this.getAll)
            .get("/:id", this.getByID)
            .get("/:id/moons", this.getAllMoons)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.remove);
    }

    async getAll(req, res, next)
    {
        try
        {
            return res.send(await planetsService.getAll());    
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
            return res.send(await planetsService.getByID(req.params.id));    
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
            return res.send(await moonsService.getAllByPlanet(req.params.id));    
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
            return res.send(await planetsService.create(req.body));    
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
            return res.send(await planetsService.edit(req.body));    
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
            return res.send(await planetsService.remove(req.params.id));    
        }
        catch(error)
        {
            next(error);
        }
    }

}