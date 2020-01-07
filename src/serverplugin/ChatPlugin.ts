import Serverplugin from "socommujs/dist/core/Serverplugin";
import {EServerEvent} from "socommujs/dist/lib/enums";

export default class extends Serverplugin {
    constructor() {
        super();
        this.setName('ChatPlugin');
    }
    public getListenEvents(): EServerEvent[] {
        return [];
    }

    public handleEvent(event: EServerEvent, eventProps?: unknown): void {
        const doNothing=true;
    }

    public run(data?: unknown): void {
        const doNothing=true;
    }

}