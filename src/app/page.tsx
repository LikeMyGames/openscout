'use client'
import { useState } from "react";
import { SideBarCollapsedContext } from "@/utils/contexts";
import ActivityBar from "./components/ActivityBar"
import style from "./page.module.css"

export default function Home() {

    const [sideBarCollapsed, setSideBarCollapsed] = useState(true);

    return (
        <div className={style.page}>
            <main className={style.main}>
                <SideBarCollapsedContext.Provider value={[sideBarCollapsed, setSideBarCollapsed]}>
                    <ActivityBar />
                </SideBarCollapsedContext.Provider>
            </main>
        </div>
    )
}