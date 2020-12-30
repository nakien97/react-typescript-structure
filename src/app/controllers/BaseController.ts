import { Helpers } from "../../commons/utils";
import { GlobalState, ModelStorage } from "../../stores/GlobalState";
class BaseController<TModel, TService> {
    public model: TModel;
    public readonly service: TService;

    constructor(props: any, model: any, service: any) {
        this.model = new model();
        this.service = new service();
        Helpers.copyProperties(props, this.model);
    }

    public onDidFocus() { }

    public onBefore() { }

    public onStarted() { }

    public onStop() { }

    /**
     * Update only a property to model object.
     * If model object contains more than one property, a runtime error will occur.
     *
     * @param {object} model Model data
     */
    public setModel = (model: TModel) => {
        // call setModel for set model to global
        this.updateModel(model);
        ModelStorage.setModel(model);
    }

    public updateModel = (model: TModel) => {
        for (const key in model) {
            if (this.model[key] !== model[key]) {
                this.model[key] = model[key];
            }
        }
    }

    public eventListener = () => {
    }

    public evenRemovetListener = () => {
    }

    public pushToScreen = (screenName: string) => {
        GlobalState.setCurrentScreen(screenName);
    }
}

export default BaseController;
