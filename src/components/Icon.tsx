import style from "./Icon.module.css"

export default function Icon({ iconName, className }: { iconName: string; className?: string; }) {
    return (
        <span className={`${style.icon} ${className} material-symbols-rounded`}>
            {iconName}
        </span>
    )
}