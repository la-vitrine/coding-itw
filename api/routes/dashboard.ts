import { Router } from "oak";
import { performances } from "../mocks/performances.ts";

export const dashboardRouter = new Router();

dashboardRouter.get("/", (ctx) => {
  const totalPerformances = performances.length;
  const totalRevenue = performances.reduce((sum, p) => sum + (p.ticketsSold * p.ticketPrice), 0);
  const averageFillRate = performances.reduce((sum, p) => sum + (p.ticketsSold / p.capacity * 100), 0) / performances.length;

  ctx.response.body = {
    totalPerformances,
    totalRevenue,
    averageFillRate: Math.round(averageFillRate)
  };
});
