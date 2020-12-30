import React, { ComponentProps } from "react";
import BaseController from "../../controllers/BaseController";
import { onSnapshot } from "mobx-state-tree";
import { Helpers } from "../../../commons/utils";
import { GlobalState, ModelStorage } from "../../../stores/GlobalState";
import { History } from "history";
import { Container } from "react-bootstrap";

interface IProps {
    history?: History;
}
class BaseView<TController extends BaseController<{}, {}>, TModel, TService> extends React.Component<IProps> {

    public readonly className: string;
    public readonly controller: TController;
    public readonly model: TModel;
    public readonly service: TService;
    public readonly history: History;

    private mounted?: boolean;

    constructor(props: any, controllerClass: any, modelClass: any, serviceClass: any) {
        super(props);
        this.className = this.constructor.name;
        this.model = new modelClass();
        this.service = new serviceClass(this.model);
        this.controller = new controllerClass(props, this.model, this.service);
        this.history = this.props.history as History;

        // Copy passProps to model
        Helpers.copyProperties(props, this.model);

        this.state = this.model;
        this.mounted = true;

        onSnapshot(ModelStorage, () => {
            this.mounted && this.setModel(ModelStorage.model);
            if (!Helpers.isNullOrEmpty(GlobalState.currentScreen)) {
                this.mounted && this.push(GlobalState.currentScreen);
            }
        });
    }

    public componentWillMount() {
        this.controller.onBefore();
    }

    public componentDidMount() {
        this.controller.onStarted();
    }

    public componentWillUnmount() {
        this.mounted = false;
        this.controller.onStop();
    }

    /**
     * Update new data to model object
     *
     * @param {object} model Model data
     * @param {function} callback Updated callback function
     */
    public setModel = (model: TModel, callback?: (changed: boolean) => void) => {
        let isUpdate: boolean = false;
        if (!Helpers.isNullOrEmpty(model)) {
            for (const key in model) {
                if (this.model[key] !== model[key]) {
                    this.model[key] = model[key];
                    isUpdate = true;
                }
            }
            if (isUpdate) {
                this.controller.updateModel(model);
                this.setState(this.model, () => {
                    if (Helpers.isFunction(callback)) {
                        callback(isUpdate);
                    }
                });
                return;
            }
        }
        if (!isUpdate && Helpers.isFunction(callback)) {
            callback(isUpdate);
        }
    }

    public push = (screenName: string) => {
        this.history.push(screenName);
    }

    public renderPage() {
        return <div></div>;
    }

    public render() {
        return (
            <Container fluid className="min-vh-100">
                {this.renderPage()}
            </Container>
        );
    }
}

export default BaseView;
