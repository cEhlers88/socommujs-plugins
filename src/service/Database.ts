import mysql from "mysql";

export default class {
    private connection: mysql.Connection | undefined;
    private database: string = "";
    private hostname: string = "";
    private password: string = "";
    private username: string = "";

    public close(){
        if(this.connection){
            this.connection.destroy();
        }
    }
    public connect(props: {
                       database?: string,
                       hostname?: string,
                       password?: string,
                       username?: string
                   } = {}, resultCallback: ((err?: mysql.MysqlError) => void) = () => {
                        return null;
                   }
    ) {
        const self = this;
        const doConnect = () => {
            self.connection = mysql.createConnection({
                database: this.database,
                host: this.hostname,
                password: this.password,
                user: this.username
            });
        }
        doConnect();
        if (this.connection) {
            this.connection.on("connect", () => {
                resultCallback();
            });
            this.connection.on("error", resultCallback);
        }
    }
}