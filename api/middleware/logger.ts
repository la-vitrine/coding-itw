import { Context } from "oak";

export const logger = async (ctx: Context, next: () => Promise<unknown>) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.request.method} ${ctx.request.url.pathname} - ${ms}ms`);
};
