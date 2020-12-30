import BaseSevice from "./BaseService";

class AuthService extends BaseSevice {
    public login = async (username: string, password: string) => {
        if (username === "kien.nguyen" && password === "1") {
            return {
                access_token: "123456789"
            };
        }
        return {};
    }
}

export default AuthService;