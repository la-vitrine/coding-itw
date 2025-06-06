import { Context } from "oak";

export const errorHandler = async (ctx: Context, next: () => Promise<unknown>) => {
    try {
      await next();
    } catch (err) {
      ctx.response.status = 500;
      ctx.response.body = { error: "Internal server error" };
      console.error(err);
    }
};
