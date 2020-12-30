import React from "react";
import {
    Route,
    Redirect,
    RouteProps,
} from "react-router-dom";
import { Helpers } from "../commons/utils";
import { Screens, Constants } from "../constants";
import { GlobalState } from "../stores/GlobalState";
interface IProps extends RouteProps {
    component: any;
}
function AuthenticatedGuard(props: IProps) {
    const { component: Component, ...rest } = props;
    const accessToken = sessionStorage.getItem(Constants.StorageKeys.ACCESS_TOKEN) || "";
    const isAuthenticated = GlobalState.isAuthenticated;
    return (
        <Route
            {...rest}
            render={(p) => {
                if (!isAuthenticated && Helpers.isNullOrEmpty(accessToken)) {
                    return <Redirect to={Screens.AUTH_LOGIN} />;
                }
                return <Component {...p} />;
            }}
        />
    );
}

export default AuthenticatedGuard;
