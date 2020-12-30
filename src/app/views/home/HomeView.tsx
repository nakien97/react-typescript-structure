import React from "react";
import { observer } from "mobx-react";
import "../../../commons/styles/Styles.css";
import BaseView from "../base/BaseView";
import { HomeController } from "../../controllers";
import { HomeModel } from "../../models";
import { HomeService } from "../../services";

@observer
export default class HomeView extends BaseView<HomeController, HomeModel, HomeService> {

    constructor(props: any) {
        super(props, HomeController, HomeModel, HomeService);
    }

    public render() {
        return (
            <div>
                This is Home
            </div>
        );
    }

}
