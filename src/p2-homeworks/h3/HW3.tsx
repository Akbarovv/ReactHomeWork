import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import {v1} from "uuid";
import s from "./Greeting.module.css"

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    let [users, setUsers] = useState<Array<UserType>>([
        {_id: v1(), name: "asa"}
    ]); // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        let newUser: UserType = {_id: v1(), name: "Must have"}
        setUsers([newUser, ...users]); // need to fix
    }

    return (
        <div className={s.body}>
            <hr/>
            homeworks 3

            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
        </div>
    );
}

export default HW3;
