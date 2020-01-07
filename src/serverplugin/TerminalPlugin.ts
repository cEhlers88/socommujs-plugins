import Serverplugin from "socommujs/dist/core/Serverplugin";
import {EServerEvent} from "socommujs/dist/lib/enums";
import {getServereventString} from "socommujs/dist/core/utils";
import Engine from "terminal-scene/dist/Engine";

export default class extends Serverplugin {
    protected TermEngine:Engine=new Engine();
    private updateHandle:any=null;
    private updateInterval:number=200;

    constructor() {
        super();
        this.setName('TerminalPlugin')
    }
    getListenEvents(): EServerEvent[] {
        return [
            EServerEvent.clientWillConnect
        ];
    }
    handleEvent(event: EServerEvent, eventProps?: unknown): void {
        switch (event) {
            case EServerEvent.serverStart:
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