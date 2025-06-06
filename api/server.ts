import { Application } from "oak";
import { logger } from "./middleware/logger.ts";
import { errorHandler } from "./middleware/errorHandler.ts";
import { router } from "./routes/index.ts";


const app = new Application();
app.use(errorHandler);
app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
