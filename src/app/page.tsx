"use client";

import { useState } from "react";
import { MainWindowContext, UserContext } from "@/utils/contexts";
import ActivityBar from "./components/ActivityBar"
import style from "./page.module.css"
import Rankings from "./components/Rankings";
import Competitions from "./components/Competitions";
import Account from "./components/Account";
import Settings from "./components/Settings";
import Scouting from "./components/Scouting";
import { User } from "@/utils/types";

export default function Home() {
    const [mainWindow, setMainWindow] = useState("account");
    const [user, setUser] = useState<User | null>(null);

    return (
        <div className={style.page}>
            <MainWindowContext.Provider value={[mainWindow, setMainWindow]}>
                <ActivityBar />
                <UserContext.Provider value={[user, setUser]}>
                    <main className={style.main}>
                        <h1>{mainWindow.charAt(0).toUpperCase() + mainWindow.slice(1)}</h1>
                        <div className={style.divider} />
                        {
                            mainWindow == "rankings" ? <Rankings /> :
                                mainWindow == "competitions" ? <Competitions /> :
                                    mainWindow == "scouting" ? <Scouting /> :
                                        mainWindow == "account" ? <Account /> :
                                            mainWindow == "settings" ? <Settings /> : <></>
                        }
                    </main>
                </UserContext.Provider>
            </MainWindowContext.Provider>
        </div>
    )
}