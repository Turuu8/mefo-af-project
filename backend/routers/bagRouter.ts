import { Router } from "express";
import { auth } from "../middleware/auth";
import { bagCtrl } from "../controllers/bagCtrl";

export const bagRouter = Router();

bagRouter.delete("/bag/:id", bagCtrl.removeInBag);

bagRouter.route("/bag").post(auth, bagCtrl.storeInBag).get(auth, bagCtrl.getStored);
