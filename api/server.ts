import { Application } from 'oak';
// Importer le middleware oak_cors
import { oakCors } from 'https://deno.land/x/cors/mod.ts';
import { logger } from './middleware/logger.ts';
import { errorHandler } from './middleware/errorHandler.ts';
import { router } from './routes/index.ts';

const app = new Application();

// Utiliser le middleware oak_cors avant les routes
// Il est configuré pour n'autoriser que votre application React
app.use(
  oakCors({
    origin: 'http://127.0.0.1:5173',
  })
);

app.use(errorHandler);
app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8000;
console.log(`Server running on http://localhost:${port}`);
await app.listen({ port });
