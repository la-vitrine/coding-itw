import { Router } from "oak";
import { shows } from "../mocks/shows.ts";


export const showsRouter = new Router();

showsRouter.get("/", (ctx) => {
  ctx.response.body = shows;
});

showsRouter.get("/:id", (ctx) => {
  const id = parseInt(ctx.params?.id || "0");
  const show = shows.find((s) => s.id === id);
  
  if (show) {
    ctx.response.body = show;
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: "Show not found" };
  }
});
