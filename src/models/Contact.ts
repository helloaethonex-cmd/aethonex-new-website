import mongoose, { Schema, Model } from "mongoose";
import type { IContactDocument } from "@/types";

const ContactSchema = new Schema<IContactDocument>(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxlength: [100, "Name cannot exceed 100 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true,
            lowercase: true,
            maxlength: [150, "Email cannot exceed 150 characters"],
            match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email address"],
        },
        service: {
            type: String,
            required: [true, "Service is required"],
            trim: true,
            maxlength: [100, "Service cannot exceed 100 characters"],
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true,
        },
        ipAddress: { type: String, default: null },
        userAgent: { type: String, default: null },
        status: {
            type: String,
            enum: ["new", "read", "replied", "closed"],
            default: "new",
        },
    },
    { timestamps: true }
);

ContactSchema.index({ email: 1 });
ContactSchema.index({ status: 1 });
ContactSchema.index({ createdAt: -1 });

const Contact: Model<IContactDocument> =
    mongoose.models.Contact ||
    mongoose.model<IContactDocument>("Contact", ContactSchema);

export default Contact;
