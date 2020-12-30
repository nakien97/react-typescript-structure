import React from "react";
import { Route, Switch } from "react-router-dom";
import { Screens } from "../constants";
import { LoginView } from "../app/views/auth";

export default function LoginRoutes() {
    return (
        <Switch>
            <Route path={Screens.AUTH_LOGIN} component={LoginView} />
        </Switch>
    );
}
