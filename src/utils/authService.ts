import { jwtDecode } from "jwt-decode";
import { getFromLocalStorage, removeUserFromLocalStorage } from "./localStorage"
import { DecodedData } from "@/types/common";

export const getUserInfo = () => {
    const accessToken = getFromLocalStorage('accessToken');

    if (accessToken) {
        const decodedUser: DecodedData | null = jwtDecode(accessToken);

        return {
            ...decodedUser,
            role: decodedUser?.role?.toLowerCase(),
        };
    }

};

export const isLoggedIn = () => {
    const authToken = getFromLocalStorage('accessToken');
    if (authToken) {
        return !!authToken;
    }
}

export const removeUser = () => {
    return removeUserFromLocalStorage('accessToken');
}

