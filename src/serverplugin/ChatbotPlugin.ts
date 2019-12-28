import Serverplugin from "socommujs/dist/core/Serverplugin";
import {serverevent} from "socommujs/dist/core/enums";

export default class extends Serverplugin {
    constructor() {
        super();
        this.setName('ChatbotPlugin');
    }
    getListenEvents(): serverevent[] {
        return [];
    }

    handleEvent(event: serverevent, eventProps?: unknown): void {
    }

    run(data?: unknown): void {
    }

}