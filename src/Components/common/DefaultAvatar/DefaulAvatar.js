import React from 'react'
import s from "./DefaultAvatar.module.css"

export const DefaulAvatar = (props) => {
    let firstLetter = "s";
    if(props.name !== null){
        const text = props.name;
        const regex = /[a-zA-ZА-Яа-я]/; // Регулярное выражение для поиска буквы
        firstLetter = text.match(regex)[0].toUpperCase();
    }
    return (
        <div className={s.defaultImage}>
            <span>{firstLetter}</span>
        </div>
    )
}
