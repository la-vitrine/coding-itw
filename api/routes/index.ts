import { Router } from "oak";
import { showsRouter } from "./shows.ts";
import { toursRouter } from "./tours.ts";
import { performancesRouter } from "./performances.ts";
import { dashboardRouter } from "./dashboard.ts";

const router = new Router();

// Health check endpoint
router.get("/health", (ctx) => {
  ctx.response.body = { status: "ok", timestamp: new Date().toISOString() };
});

// List all available endpoints
router.get("/", (ctx) => {
  const endpoints = [
    {
      path: "/health",
      method: "GET",
      description: "Health check endpoint"
    },
    {
      path: "/shows",
      method: "GET",
      description: "List all shows"
    },
    {
      path: "/shows/:id",
      method: "GET",
      description: "Get show details"
    },
    {
      path: "/tours",
      method: "GET",
      description: "List all tours with show information"
    },
    {
      path: "/tours/:id",
      method: "GET",
      description: "Get tour details"
    },
    {
      path: "/tours/:id/performances",
      method: "GET",
      description: "List all performances for a tour"
    },
    {
      path: "/performances",
      method: "GET",
      description: "List all performances"
    },
    {
      path: "/performances/:id",
      method: "GET",
      description: "Get performance details"
    },
    {
      path: "/dashboard",
      method: "GET",
      description: "Get dashboard metrics"
    }
  ];

  ctx.response.body = {
    endpoints,
    documentation: "Theater Tour Management API"
  };
});

// Mount routers
router.use("/shows", showsRouter.routes());
router.use("/tours", toursRouter.routes());
router.use("/performances", performancesRouter.routes());
router.use("/dashboard", dashboardRouter.routes());

export { router };