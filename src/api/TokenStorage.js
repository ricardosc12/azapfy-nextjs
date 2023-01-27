class TokenStorage {

    static setToken({access_token, refresh_token}){
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("refresh_token", refresh_token);
        document.cookie = "_logged=1; max-age=315360000"
    }

    static getAccessToken() {
        return localStorage.getItem("access_token");
    }

    static getRefreshToken() {
        return localStorage.getItem("refresh_token");
    }

    static clearToken() {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        document.cookie = "_logged=; max-age=0"
    }

}

export default TokenStorage