import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Message {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllMessages(): Promise<Array<Message>>;
    getMessage(timestamp: Time, email: string): Promise<Message | null>;
    getMessagesByEmail(email: string): Promise<Array<Message>>;
    submitMessage(name: string, email: string, subject: string, message: string): Promise<void>;
}
