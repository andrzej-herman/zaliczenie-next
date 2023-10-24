import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getKolokwium = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const sanusers = await ctx.db
      .query("sanusers")
      .withIndex("by_formtype", (q) => q.eq("formType", "Kolokwium"))
      .order("asc")
      .collect();

    return sanusers;
  },
});

export const getAplikacja = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const sanusers = await ctx.db
      .query("sanusers")
      .withIndex("by_formtype", (q) => q.eq("formType", "Aplikacja"))
      .order("asc")
      .collect();

    return sanusers;
  },
});

export const create = mutation({
  args: {
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    album: v.string(),
    studentGroupNumber: v.number(),
    formType: v.string(),
    topic: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const peopleWithTopicsInTheGroup = await ctx.db
      .query("sanusers")
      .withIndex("by_groupNumber", (q) =>
        q.eq("studentGroupNumber", args.studentGroupNumber)
      )
      .filter((q) => q.eq(q.field("topic"), args.topic))
      .collect();

    if (peopleWithTopicsInTheGroup.length === 3) {
      return {
        success: false,
        error:
          "Temat jest niedostępny. W Twojej grupie studenckiej już 3 osoby go wybrały.",
      };
    }

    const userId = identity.subject;
    const sanUser = await ctx.db.insert("sanusers", {
      userId: userId,
      firstName: args.firstName,
      lastName: args.lastName,
      album: args.album,
      studentGroupNumber: args.studentGroupNumber,
      formType: args.formType,
      topic: args.topic,
    });
    return {
      success: true,
      error: "",
    };
  },
});

export const canUserApply = query({
  args: {
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    if (args.userId === undefined) return false;
    const uid = args.userId;
    const sanusers = await ctx.db
      .query("sanusers")
      .withIndex("by_user", (q) => q.eq("userId", uid))
      .collect();

    return sanusers.length === 0;
  },
});
