import { moonsService } from "../services/MoonsService.js";
import BaseController from "../utils/BaseController.js";

export class MoonsController extends BaseController
{
    constructor()
    {
        super("api/moons");

        this.router
            .get("", this.getAll)
            .get("/:id", this.getByID)
            .post("", this.create)
            .put("/:id", this.edit)
            .delete("/:id", this.remove);
    }

    async getAll(req, res, next)
    {
        try
        {
            return res.send(await moonsService.getAll());
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
            return res.send(await moonsService.getByID(req.params.id));
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
            return res.send(await moonsService.create(req.body));
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
            return res.send(await moonsService.edit(req.body));
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
            return res.send(await moonsService.remove(req.params.id));
        }
        catch(error)
        {
            next(error);
        }
    }

}