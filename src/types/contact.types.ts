export type ContactStatus = "new" | "read" | "replied" | "closed";

export interface IContact {
    _id: string;
    name: string;
    email: string;
    service: string;
    message: string;
    ipAddress?: string;
    userAgent?: string;
    status: ContactStatus;
    createdAt: Date;
    updatedAt: Date;
}

export interface IContactDocument extends Omit<IContact, "_id"> {
    _id: unknown;
}

export interface ContactStats {
    total: number;
    new: number;
    read: number;
    replied: number;
    closed: number;
}

export interface PaginatedContactsResponse {
    success: boolean;
    data: IContact[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    stats: ContactStats;
}
