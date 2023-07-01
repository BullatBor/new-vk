import s from "./FormControl.module.css"

export const InputForm = () => {
    return (
        <div className={s.searchElement}>
            <input placeholder="Search"/>
        </div>
    )
}

export const MessageForm = () => {
    return (
        <div className={s.messageBlock}>
            <input placeholder="Message"/>
        </div>
    )
}