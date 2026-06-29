import { Context, createContext } from 'react';
import { User } from './types';

export const SideBarCollapsedContext: Context<[boolean, (value: boolean) => void]> = createContext<[boolean, (value: boolean) => void]>([true, () => { }]);
export const MainWindowContext: Context<[string, (value: string) => void]> = createContext<[string, (value: string) => void]>(["", () => { }])
export const UserContext: Context<[User | null, (value: User) => void]> = createContext<[User | null, (value: User) => void]>([{} as User, () => { }])