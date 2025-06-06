import { Router } from "oak";
import { performances } from "../mocks/performances.ts";
import { shows } from "../mocks/shows.ts";
import { tours } from "../mocks/tours.ts";

export const performancesRouter = new Router();

performancesRouter.get("/", (ctx) => {
  ctx.response.body = performances;
});

performancesRouter.get("/:id", (ctx) => {
  const id = parseInt(ctx.params?.id || "0");
  const performance = performances.find((p) => p.id === id);
  
  if (performance) {
    const tour = tours.find(t => t.id === performance.tourId);
    const show = shows.find(s => s.id === tour?.showId);
    
    ctx.response.body = {
      ...performance,
      tour,
      show
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: "Performance not found" };
  }
});
