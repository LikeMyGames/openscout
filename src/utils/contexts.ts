import { Context, createContext } from 'react';

export const SideBarCollapsedContext: Context<[boolean, (value: boolean) => void]> = createContext<[boolean, (value: boolean) => void]>([true, () => { }]);