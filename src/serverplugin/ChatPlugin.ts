import Serverplugin from "socommujs/dist/core/Serverplugin";
import {EServerEvent} from "socommujs/dist/lib/enums";

export default class extends Serverplugin {
    constructor() {
        super();
        this.setName('ChatPlugin');
    }
    getListenEvents(): EServerEvent[] {
        return [];
    }

    handleEvent(event: EServerEvent, eventProps?: unknown): void {
    }

    run(data?: unknown): void {
    }

}