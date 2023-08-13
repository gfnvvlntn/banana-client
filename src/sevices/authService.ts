import api from "../hooks/use-api";


export default class AuthService {
    static async login(email: string, password: string) {
        return api.post("/login", { email, password });
    }

    static async logout() {
        return api.post("/logout");
    }

    static async registration(email: string, password: string) {
        return api.post("/registration", { email, password });
    }
}
