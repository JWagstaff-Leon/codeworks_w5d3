import { habitationsService } from "../services/HabitationsService.js";
import BaseController from "../utils/BaseController.js";

export class HabitationsController extends BaseController
{
    constructor()
    {
        super("api/habitations");

        this.router
            .post("", this.create)
            .put("/:id", this.edit)
    }

    async create(req, res, next)
    {
       try
       {
           return res.send(await habitationsService.create(req.body));
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
           return res.send(await habitationsService.edit(req.body));
       }
       catch(error)
       {
           next(error);
       }
    }
}