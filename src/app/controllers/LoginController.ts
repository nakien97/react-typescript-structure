import { Screens, Constants } from "../../constants";
import { GlobalState } from "../../stores/GlobalState";
import { AuthModel } from "../models";
import { AuthService } from "../services";
import BaseController from "./BaseController";

class LoginController extends BaseController<AuthModel, AuthService> {

    constructor(props: any) {
        super(props, AuthModel, AuthService);
    }

    public onLoginClick = async (event: any) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        this.setModel({
            validated: true,
        });
        if (form.checkValidity() === true) {
            const username = this.model.username || "";
            const password = this.model.password || "";
            const result = await this.service.login(username, password);
            if (result.access_token) {
                sessionStorage.setItem(Constants.StorageKeys.ACCESS_TOKEN, result.access_token);
                GlobalState.setAuthenticateStatus(true);
                this.pushToScreen(Screens.HOME);
            }
        }
    }
}

export default LoginController;