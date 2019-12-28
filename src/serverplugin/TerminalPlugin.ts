import Serverplugin from "socommujs/dist/core/Serverplugin";
import {serverevent} from "socommujs/dist/core/enums";
import {getServereventString} from "socommujs/dist/core/utils";
import Engine from "terminal-scene/dist/Engine";

export default class extends Serverplugin {
    protected TermEngine:Engine=new Engine();
    private updateHandle:any=null;
    private updateInterval:number=500;

    constructor() {
        super();
        this.setName('TerminalPlugin')
    }
    getListenEvents(): serverevent[] {
        return [
            serverevent.clientWillConnect
        ];
    }
    handleEvent(event: serverevent, eventProps?: unknown): void {
        switch (event) {
            case serverevent.serverStart:
                    if(this.updateHandle){clearInterval(this.updateHandle);}
                    this.updateHandle = setInterval(()=>{
                        this.TermEngine.update();
                    },this.updateInterval);
                break;
        }
    }
    run(data?: unknown): void {

    }
}