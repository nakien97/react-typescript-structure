import React from "react";
import {
    Strings, Screens, Constants
} from "../../../constants";

import "../../../commons/styles/Styles.css";
import { Button, Form } from "react-bootstrap";
import BaseView from "../base/BaseView";
import { AuthModel } from "../../models";
import { observer } from "mobx-react";
import { AuthService } from "../../services";
import { LoginController } from "../../controllers";
import { Redirect } from "react-router-dom";
import { Helpers } from "../../../commons/utils";
import { GlobalState } from "../../../stores/GlobalState";

@observer
export default class LoginView extends BaseView<LoginController, AuthModel, AuthService> {

    constructor(props: any) {
        super(props, LoginController, AuthModel, AuthService);
    }

    public renderPage() {
        const accessToken = sessionStorage.getItem(Constants.StorageKeys.ACCESS_TOKEN) || "";
        const isAuthenticated = GlobalState.isAuthenticated;
        if (isAuthenticated || accessToken) {
            if (!isAuthenticated) {
                GlobalState.setAuthenticateStatus(true);
            }
            return <Redirect to={Screens.HOME} />;
        }
        return (
            <div>
                <Form noValidate
                    validated={this.model.validated}
                    className="d-flex min-vh-100 align-items-center justify-content-center"
                    onSubmit={this.controller.onLoginClick}>
                    <div className="sm-card-body">
                        <Form.Control
                            autoFocus
                            required
                            value={this.model.username}
                            placeholder={"Username"}
                            onChange={(event) => {
                                const username = event.target.value;
                                this.setModel({
                                    username
                                })
                            }}
                        />
                        <Form.Control
                            autoFocus
                            required
                            value={this.model.password}
                            placeholder={"Password"}
                            onChange={(event) => {
                                const password = event.target.value;
                                this.setModel({
                                    password
                                })
                            }}
                        />
                        <Button variant="primary" onClick={this.controller.onLoginClick}>
                            {Strings.Login.LOGIN}
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }

}
