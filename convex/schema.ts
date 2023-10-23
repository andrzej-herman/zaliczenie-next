import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sanusers: defineTable({
    userId: v.string(),
    firstName: v.string(),
    lastName: v.string(),
    album: v.string(),
    studentGroupNumber: v.number(),
    formType: v.number(),
    topicNumber: v.optional(v.number()),
  })
    .index("by_user", ["userId"])
    .index("by_formtype", ["formType"])
    .index("by_topicnumber", ["topicNumber"]),
});
