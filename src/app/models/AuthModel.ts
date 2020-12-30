import BaseModel from "./BaseModel";

class AuthModel extends BaseModel {
    public username?: string = "kien.nguyen";
    public password?: string = "1";
    public validated?: boolean;
}

export default AuthModel;