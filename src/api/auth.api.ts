import {httpClient} from "./http.ts";
import type {SignupProps} from "../pages/Signup.tsx";

export const signup = async (userData: SignupProps) => {
    const response = await httpClient.post('users/join', userData)

    return response.data
}