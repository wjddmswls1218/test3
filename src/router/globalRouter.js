import express from "express";
import { routers } from "../routres";
import { globalController } from "../controller/globalController";

const globalRouter = express.Router();

globalRouter.get(routers.HOME, globalController.homeController);
globalRouter.get(routers.CONTACT, globalController.contactController);
globalRouter.get(routers.JAVASCRIPT, globalController.javascriptController);

globalROuter.get(routers.BOAPD_WEITE, globalController.boardweiteController);

export default globalRouter;
