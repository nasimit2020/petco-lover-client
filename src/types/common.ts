import { USER_ROLE } from "@/constant";


export type UserRole = keyof typeof USER_ROLE;


export type DecodedData = {
    email: string;
    name: string;
    role: string;
    iat: number;
    exp: number;
}