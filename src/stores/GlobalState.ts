import { types } from "mobx-state-tree";
import { Screens } from "../constants";

// Don"t remove !!!
const Model = types
    .model("model", {
        model: types.frozen()
    })
    .actions((self) => ({
        setModel(model: any) {
            self.model = model;
        }
    }));

// Don"t remove !!!
const Global = types
    .model("session", {
        currentScreen: Screens.AUTH_LOGIN,
        setting: types.frozen(),
        isAuthenticated: false,
    })
    .actions((self) => ({
        setCurrentScreen(currentScreen: string) {
            self.currentScreen = currentScreen;
        },
        setSetting(setting: any) {
            self.setting = setting;
        },
        setAuthenticateStatus(isAuthenticated: boolean) {
            self.isAuthenticated = isAuthenticated;
        },
    }));

// Don"t remove !!!
const ModelStorage = Model.create();
const GlobalState = Global.create();

export {
    // Don"t remove !!!
    ModelStorage,
    GlobalState,
};
