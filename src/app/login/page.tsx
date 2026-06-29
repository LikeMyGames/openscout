"use client";

import style from "./page.module.css";
import { useState } from "react";
import { FirebaseLogIn, FirebaseSignUp } from "@/utils/firebase";
import TitledInput from "./components/TitledInput";
import SsoList from "./components/SsoList";
import { LogInSignUpContext } from "./utils/contexts";
// import { AddAlert, GetNumAlerts } from "@/components/AlertManager";

export default function Home() {
    const [loggingIn, setLoggingIn] = useState(true);

    const handleSubmit = async (formData: FormData) => {
        if (loggingIn) {
            await FirebaseLogIn(formData);
        } else {
            await FirebaseSignUp(formData);
        }
    };

    return (
        <div className={style.page} >
            {/* <button onClick={() => { AddAlert(`${GetNumAlerts()}`, "log"); }} >add alert</button> */}
            <LogInSignUpContext.Provider value={[loggingIn, setLoggingIn]} >
                <form className={style.main} action={handleSubmit} >
                    <div>
                        <div>
                            <TitledInput title="Email" name="email" placeholder="john.doe@example.com" type="email" />
                            <TitledInput title="Password" name="password" placeholder="password123" type="password" />
                            <button type="submit" className={style.submit_button} >{loggingIn ? "Log In" : "Sign Up"}</button>
                            <div className={style.divider} >
                                <div />
                                <h4>or continue with</h4>
                                <div />
                            </div>
                        </div>
                        <SsoList />
                    </div>
                    <h2>
                        or
                    </h2>
                    <button type="button" className={style.switch_button} onClick={() => { setLoggingIn(!loggingIn); }} >{loggingIn ? "Sign Up" : "Log In"}</button>
                </form>
            </LogInSignUpContext.Provider>
        </div >
    );
}