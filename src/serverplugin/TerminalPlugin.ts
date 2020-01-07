import Serverplugin from "socommujs/dist/core/Serverplugin";
import {getServereventString} from "socommujs/dist/core/utils";
import {EServerEvent} from "socommujs/dist/lib/enums";
import Engine from "terminal-scene/dist/Engine";

export default class extends Serverplugin {
    protected TermEngine:Engine=new Engine();
    private updateHandle:any=null;
    private updateInterval:number=200;

    constructor() {
        super();
        this.setName('TerminalPlugin')
    }
    public getListenEvents(): EServerEvent[] {
        return [
            EServerEvent.clientWillConnect
        ];
    }
    public handleEvent(event: EServerEvent, eventProps?: unknown): void {
        switch (event) {
            case EServerEvent.serverStart:
                    if(this.updateHandle){clearInterval(this.updateHandle);}
                    this.updateHandle = setInterval(()=>{
                        this.TermEngine.update();
                    },this.updateInterval);
                break;
        }
    }
    public run(data?: unknown): void {
        const doNothing=true;
    }
}