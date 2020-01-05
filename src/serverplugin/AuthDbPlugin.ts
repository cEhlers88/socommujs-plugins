import AuthPlugin from "socommujs/dist/serverplugin/AuthPlugin";

export default class extends AuthPlugin {
    constructor() {
        super();
        this.setName('AuthDbPlugin');
    }
    public checkLogin(username: string, password: string): boolean {
        return false;
    }
}