import Icon from "@/components/Icon"
import style from "./ActivityBar.module.css"

export default function ActivityBar() {
    return (
        <div className={style.main}>
            <Icon iconName="settings" className={style.icon} />
        </div>
    )
}