"use client";

import style from "./TitledInput.module.css"

export default function TitledInput({ className, title, placeholder, type, name }: { className?: string, title: string, placeholder: string, type?: string, name: string }) {
    return (
        <div className={`${style.main} ${className ?? ""}`} >
            <h4 className={style.title} >{title}</h4>
            <input placeholder={placeholder} type={type} name={name} />
        </div>
    )
}