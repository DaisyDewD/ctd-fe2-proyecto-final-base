import { rest } from "msw";
import { API_URL } from "../../app/constants";
import { quote, quoteLisa } from "./quotes.mocks";


//1.2. Defino handlers de solicitud de MSW y y debe exportar una función que reciba el objeto "rest" de MSW.
const handlers = [
  rest.get(`${API_URL}`, (req, res, ctx) => {
    if (req.url.searchParams.get("character") === "lisa") {
      return res(ctx.status(200), ctx.json(quoteLisa));
    }
    return res(ctx.status(200), ctx.json(quote));
  }),
];

export default handlers;

