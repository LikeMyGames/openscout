"use client";

import style from "./AlertManager.module.css";
import AlertWidget, { AlertType } from "./Alert";
import { nanoid } from "nanoid";
import { useSyncExternalStore } from "react";

type Alert = {
    message: string;
    type: AlertType;
    id: string;
}


// const alertContext = createContext<Map<string, Alert>>(new Map<string, Alert>());
let alerts: Alert[] = [];
const alertStoreListeners: Set<(() => void)> = new Set()

const alertsStore = {
    get() {
        return alerts;
    },

    addAlert(alert: Alert) {
        alerts = [...alerts, alert];
        console.log(`Added alert with id ${alert.id}`);
        alertStoreListeners.forEach((callback) => callback());
    },

    removeAlert(id: string) {
        alerts = alerts.filter((alert) => { return alert.id !== id })
        alertStoreListeners.forEach((callback) => callback());
    },

    subscribe(callback: () => void): (() => void) {
        console.log("new alert store subsriber");
        alertStoreListeners.add(callback);
        return () => { console.log("subscriber deleted"); alertStoreListeners.delete(callback); };
    }
}

export default function AlertManager() {
    // const subscribe = useCallback((callback: () => void) => {
    //     return alertsStore.subscribe(callback);
    // }, [])

    const alertsStates = useSyncExternalStore(alertsStore.subscribe, alertsStore.get, () => { return alerts }).values().toArray();

    // console.log(alertsStates)

    return (
        <div className={style.main} >
            {/* <AlertWidget message="test" type="error" remove={() => { }} /> */}
            {
                alertsStates.map((val) => {
                    return <AlertWidget key={val.id} message={val.message} type={val.type} remove={() => alertsStore.removeAlert(val.id)} />
                })
            }
        </div>
    )
}

export function AddAlert(message: string, type: AlertType) {

    const id = nanoid(8);
    alertsStore.addAlert({ message: message, type: type, id: id } as Alert);

    // setTimeout(() => RemoveAlert(id), 5000);
}

export function GetNumAlerts() {
    return alerts.length;
}