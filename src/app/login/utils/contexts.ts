import { Context, createContext } from "react";


export const LogInSignUpContext: Context<[boolean, (value: boolean) => void]> = createContext<[boolean, (value: boolean) => void]>([false, () => { }]);
export const EmailContext: Context<[string, (value: string) => void]> = createContext<[string, (value: string) => void]>(["", () => { }]);
export const PasswordContext: Context<[string, (value: string) => void]> = createContext<[string, (value: string) => void]>(["", () => { }]);