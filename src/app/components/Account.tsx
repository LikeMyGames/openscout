import Image from "next/image"
import style from "./Account.module.css"
import { useContext } from "react"
import { UserContext } from "@/utils/contexts"
import Icon from "@/components/Icon";

export default function Account() {
    const [user,] = useContext(UserContext);

    return (
        <div className={style.container}>
            <div className={`${style.main}`}>
                <div className={`${style.vertical} ${style.card} glass`} >
                    <h1>Account Info</h1>
                    <div className={style.horizontal} >
                        {
                            user ? <Image className={style.account_image} src={""} alt={"account_image"} /> :
                                <Icon className={`${style.account_image} ${style.default_image}`} iconName="person" />
                        }
                        <div className={`${style.vertical} ${style.account_detail}`} >
                            <h2>{user ? user.name : "Dominic Camill"}</h2>
                            <h3>{user ? user.email : "camilldominic@gmail.com"}</h3>
                        </div>
                    </div>
                    <div className={style.bio_container} >
                        <h3>Bio</h3>
                        <textarea contentEditable placeholder="Type here..." defaultValue={user ? user.bio : ""} />
                    </div>
                </div>
                <div className={`${style.vertical} ${style.card} glass`} >
                    <h1>Password & Security</h1>
                    <div className={`${style.horizontal} ${style.password}`} >
                        <h3>Password</h3>
                        <div></div>
                        <button className={style.edit_button}>Edit</button>
                    </div>
                    <div className={`${style.horizontal} ${style.password}`} >
                        <h3>Multi-Factor Authentication</h3>
                        <div></div>
                        <button className={style.edit_button}>Setup</button>
                    </div>
                </div>
                <div className={`${style.horizontal} ${style.account_management}`} >
                    <button className={`glass`} >Log Out</button>
                    <button className={`glass`} data-delete-button >Delete Account</button>
                </div>
            </div>
        </div>
    )
}