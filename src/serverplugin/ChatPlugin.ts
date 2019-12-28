import Serverplugin from "socommujs/dist/core/Serverplugin";
import {serverevent} from "socommujs/dist/core/enums";

export default class extends Serverplugin {
    constructor() {
        super();
        this.setName('ChatPlugin');
    }
    getListenEvents(): serverevent[] {
        return [];
    }

    handleEvent(event: serverevent, eventProps?: unknown): void {
    }

    run(data?: unknown): void {
    }

}