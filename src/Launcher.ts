import { Server } from './Server/Server';
class Launcher {
    server: Server
    
    constructor() {
        this.server = new Server()
    }

    launchApp() {
        console.log('started app')
        this.server.createServer()
    }
}
new Launcher().launchApp()