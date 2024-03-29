import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sanusers: defineTable({
    userId: v.string(),
    firstName: v.optional(v.string()),
    lastName: v.optional(v.string()),
    album: v.string(),
    studentGroupNumber: v.number(),
    formType: v.string(),
    topic: v.optional(v.string()),
  })
    .index("by_user", ["userId"])
    .index("by_formtype", ["formType"])
    .index("by_topicnumber", ["topic"])
    .index("by_groupNumber", ["studentGroupNumber"]),
});
