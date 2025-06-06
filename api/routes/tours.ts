import { Router } from "oak";
import { performances } from "../mocks/performances.ts";
import { shows } from "../mocks/shows.ts";
import { tours } from "../mocks/tours.ts";

export const toursRouter = new Router();

toursRouter.get("/", (ctx) => {
  // Enrich tours with show information
  const enrichedTours = tours.map(tour => {
    const show = shows.find(s => s.id === tour.showId);
    return {
      ...tour,
      show
    };
  });
  ctx.response.body = enrichedTours;
});

toursRouter.get("/:id", (ctx) => {
  const id = parseInt(ctx.params?.id || "0");
  const tour = tours.find((t) => t.id === id);
  
  if (tour) {
    const show = shows.find(s => s.id === tour.showId);
    ctx.response.body = {
      ...tour,
      show
    };
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: "Tour not found" };
  }
});

toursRouter.get("/:id/performances", (ctx) => {
  const tourId = parseInt(ctx.params?.id || "0");
  const tourPerformances = performances.filter((p) => p.tourId === tourId);
  
  if (tourPerformances.length > 0) {
    const tour = tours.find(t => t.id === tourId);
    const show = shows.find(s => s.id === tour?.showId);
    
    ctx.response.body = tourPerformances.map(performance => ({
      ...performance,
      tour,
      show
    }));
  } else {
    ctx.response.status = 404;
    ctx.response.body = { error: "No performances found for this tour" };
  }
});
