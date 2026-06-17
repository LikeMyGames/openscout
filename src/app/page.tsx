import ActivityBar from "./components/ActivityBar"
import style from "./page.module.css"

export default function Home() {
    return (
        <div className={style.page}>
            <main className={style.main}>
                <ActivityBar />
            </main>
        </div>
    )
}