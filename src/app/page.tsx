'use client'
import { useState } from "react";
import { MainWindowContext, SideBarCollapsedContext } from "@/utils/contexts";
import ActivityBar from "./components/ActivityBar"
import style from "./page.module.css"
import Rankings from "./components/Rankings";
import Competitions from "./components/Competitions";
import Account from "./components/Account";
import Settings from "./components/Settings";
import Scouting from "./components/Scouting";

export default function Home() {
    const [mainWindow, setMainWindow] = useState("home");

    return (
        <div className={style.page}>
            <main className={style.main}>
                <MainWindowContext.Provider value={[mainWindow, setMainWindow]}>
                    <ActivityBar />
                    {
                        mainWindow == "rankings" ? <Rankings /> :
                            mainWindow == "competitions" ? <Competitions /> :
                                mainWindow == "scouting" ? <Scouting /> :
                                    mainWindow == "account" ? <Account /> :
                                        mainWindow == "settings" ? <Settings /> : <><h1>Home</h1></>
                    }
                </MainWindowContext.Provider>
            </main>
        </div>
    )
}