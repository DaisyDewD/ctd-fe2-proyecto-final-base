import { rest } from "msw";
import { setupServer } from "msw/node";
import handlers from "./handlers";
//2.1 Defino el servidor de MSW y exporto el objeto "server" y "rest" de MSW.
const server = setupServer(...handlers);
export { server, rest };
