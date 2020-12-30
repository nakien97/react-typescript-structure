import { HomeModel } from "../models";
import { HomeService } from "../services";
import BaseController from "./BaseController";

class HomeController extends BaseController<HomeModel, HomeService> {

    constructor(props: any) {
        super(props, HomeModel, HomeService);
    }

}
export default HomeController;