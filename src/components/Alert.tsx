import style from "./Alert.module.css";
import IconButton from "./IconButton";

export type AlertType = "log" | "warning" | "error";

export default function Alert({ message, type, remove }: { message: string, type: AlertType, remove: () => void }) {
    return (
        <div className={`${style.main} ${style[`type_${type}`]}`} >
            <h1>{message}</h1>
            <IconButton iconName="close" onClick={remove} />
        </div>
    )
}