/* eslint-disable @next/next/no-img-element */
"use client";

// import GoogleIcon from "@/../public/google-icon.svg"
import style from "./SsoList.module.css";
// import { GoogleSignIn } from "@/utils/firebase";

export default function SsoList() {
    // const google = async () => {
    //     await GoogleSignIn()
    // }

    return (
        <div className={style.main} >
            <button type="button" className={style.sso}
                // onClick={google}
                onClick={() => { throw new Error("function not implemented yet") }}
            >
                <img src={"./google-icon.svg"} alt={"Google"} />
            </button>
        </div>
    )
}