import mysql from "mysql";
import repository from "../repository/repository";

export default class {
    private connection: mysql.Connection | undefined;
    private database: string = "";
    private hostname: string = "";
    private password: string = "";
    private username: string = "";

    public createRepository(type:repository):repository{

        return type;
    }
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
                   }
    ) {
        const self = this;
        const doConnect = () => {
            self.connection = mysql.createConnection({
                database: this.database,
                host: this.hostname,
                user: this.username,
                password: this.password
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