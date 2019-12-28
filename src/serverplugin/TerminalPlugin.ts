import Serverplugin from "socommujs/src/core/Serverplugin";
import {serverevent} from "socommujs/src/core/enums";
import {getServereventString} from "socommujs/src/core/utils";
import Engine from "terminal-scene/src/Engine";
import Eventhandler from "socommujs/src/Eventhandler";
import DebugScene from "terminal-scene/src/Scenes/DebugScene";
import PluginlistScene from "terminal-scene/src/Scenes/PluginlistScene";

export default class extends Serverplugin {
    protected TermEngine:Engine=new Engine();
    private updateHandle:any=null;
    private updateInterval:number=500;

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

    }/*
    init(props: { EventHandler:Eventhandler }): Promise<unknown> {
        this.TermEngine.addScene(new DebugScene(10,20,50,10));
        this.TermEngine.addScene(new PluginlistScene(1,1,23,10));
        return super.init(props);
    }*/
}