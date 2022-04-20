import { galaxiesService } from "../services/GalaxiesService.js";
import { moonsService } from "../services/MoonsService.js";
import { planetsService } from "../services/PlanetsService.js";
import { starsService } from "../services/StarsService.js";
import BaseController from "../utils/BaseController.js";

export class GalaxiesController extends BaseController
{
    constructor()
    {
        super("api/galaxies");

        this.router
            .get("", this.getAll)
            .get("/:id", this.getByID)
            .get("/:id/stars", this.getAllStars)
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
            return res.send(await galaxiesService.getAll());
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
            return res.send(await galaxiesService.getByID(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

    async getAllStars(req, res, next)
    {
        try
        {
            return res.send(await starsService.getAllByGalaxy(req.params.id));

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
            return res.send(await planetsService.getAllByGalaxy(req.params.id));
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
            return res.send(await moonsService.getAllByGalaxy(req.params.id));
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
            return res.send(await galaxiesService.create(req.body));
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
            return res.send(await galaxiesService.edit(req.body));
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
            return res.send(await galaxiesService.remove(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

}