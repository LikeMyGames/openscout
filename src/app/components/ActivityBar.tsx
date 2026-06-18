import Icon from "@/components/Icon"
import style from "./ActivityBar.module.css"
import { SideBarCollapsedContext } from "@/utils/contexts"
import { useContext } from "react";

export default function ActivityBar() {
	const [collasped, setCollapsed] = useContext(SideBarCollapsedContext);

	return (
		<div className={`${style.main} ${collasped ? style.collapsed : ""}`}>
			<button className={style.icon} onClick={() => { setCollapsed(!collasped); }}>
				<Icon iconName={collasped ? "chevron_right" : "chevron_left"} />
				<h3>Collapse</h3>
			</button>
			{/* <button className={style.icon} onClick={() => { setCollapsed(!collasped); }}>
                <Icon iconName={collasped ? "left_panel_open" : "left_panel_close"} className={style.icon} />
            </button> */}
			<button className={style.icon} title="Rankings">
				<Icon iconName="crown" />
				<h3>Rankings</h3>
			</button>
			<button className={style.icon} title="Competitions">
				<Icon iconName="trophy" />
				<h3>Competitions</h3>
			</button>
			<button className={style.icon} title="Scouting">
				<Icon iconName="crowdsource" />
				<h3>Scouting</h3>
			</button>
			<div></div>
			<button className={style.icon}>
				<Icon iconName="account_circle" />
				<h3>Account</h3>
			</button>
			<button className={style.icon}>
				<Icon iconName="settings" />
				<h3>Settings</h3>
			</button>
		</div>
	)
}