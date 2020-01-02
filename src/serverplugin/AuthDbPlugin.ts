import Serverplugin from "socommujs/dist/core/Serverplugin";
import {EServerEvent} from "socommujs/dist/core/enums";

export default class extends Serverplugin {
    constructor() {
        super();
        this.setName('AuthDbPlugin');
    }
    getListenEvents(): EServerEvent[] {
        return [];
    }

    handleEvent(event: EServerEvent, eventProps?: unknown): void {
    }

    run(data?: unknown): void {
    }

}