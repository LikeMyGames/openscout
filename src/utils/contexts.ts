import { create } from 'domain';
import { Context, createContext } from 'react';

export const SideBarCollapsedContext: Context<[boolean, (value: boolean) => void]> = createContext<[boolean, (value: boolean) => void]>([true, () => { }]);
export const MainWindowContext: Context<[string, (value: string) => void]> = createContext<[string, (value: string) => void]>(["home", () => { }])