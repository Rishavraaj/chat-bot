import { mutation, query } from "./_generated/server";

export const getUsers = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const addUser = mutation({
  args: {},
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Unauthorized");
    }

    const orgId = identity.orgId as string;

    if (!orgId) {
      throw new Error("No organization found");
    }

    throw new Error("Not implemented");

    return await ctx.db.insert("users", {
      name: "John Doe",
    });
  },
});
