import React from "react";
import { Switch } from "react-router-dom";
import { Screens } from "../constants";
import AuthenticatedGuard from "../guards/AuthenticatedGuard";
import { HomeView } from "../app/views/home";

export default function HomeRoutes() {
    return (
        <Switch>
            <AuthenticatedGuard exact path={Screens.HOME} component={HomeView} />
        </Switch>
    );
}
