import Icon from "@/components/Icon"
import style from "./ActivityBar.module.css"
import { MainWindowContext } from "@/utils/contexts"
import { useContext } from "react"

export default function ActivityBar() {
	const [, setMainWindow] = useContext(MainWindowContext);
	return (
		<div className={style.main} >
			<button className={style.icon} title="Rankings" onClick={() => { setMainWindow("rankings"); }} >
				<Icon iconName="crown" />
				<h3>Rankings</h3>
			</button>
			<button className={style.icon} title="Competitions" onClick={() => { setMainWindow("competitions"); }} >
				<Icon iconName="trophy" />
				<h3>Competitions</h3>
			</button>
			<button className={style.icon} title="Scouting" onClick={() => { setMainWindow("scouting"); }} >
				<Icon iconName="visibility" />
				<h3>Scouting</h3>
			</button>
			<div></div>
			<button className={style.icon} title="Account" onClick={() => { setMainWindow("account"); }} >
				<Icon iconName="account_circle" />
				<h3>Account</h3>
			</button>
			<button className={style.icon} title="Settings" onClick={() => { setMainWindow("settings"); }} >
				<Icon iconName="settings" />
				<h3>Settings</h3>
			</button>
		</div >
	)
}