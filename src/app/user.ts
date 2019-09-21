export interface User {
    userName ?: string;
    firstName?: string;
    lastName ?: string;
    email: string;
    password: string;
    birthday ?: Date;
    schoolFee ?: Float32Array;
    marks ?: Object;
    courses ?: ArrayBuffer;
    completed ?: ArrayBuffer;
}