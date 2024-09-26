import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as backend_idl, canisterId as backend_id } from "declarations/backend";

async function init() {
    const agent = new HttpAgent();
    const backend = Actor.createActor(backend_idl, { agent, canisterId: backend_id });

    // Example interaction with the backend
    const greeting = await backend.greet("World");
    document.getElementById("app").innerText = greeting;
}

init();
