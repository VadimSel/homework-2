import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

export const pureAddUser = (name: string, setError: (value: string) => void, setName: (value: string) => void, addUserCallback: (value: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if (name !== "") {
        addUserCallback(name)
        setName("")
    } else {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnBlur = (name: string, setError: (value: string) => void) => {
    if (name == "") {
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: () => void) => {
    if (e.key === "Enter") {
        addUser()
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = users.length > 0 ? users[users.length - 1].name : '';

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

// -------------------------------------------

// import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
// import Greeting from './Greeting'
// import { UserType } from './HW3'

// type GreetingContainerPropsType = {
//     users: any // need to fix any
//     addUserCallback: any // need to fix any
// }

// export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
//     // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
// }

// export const pureOnBlur = (name: any, setError: any) => { // если имя пустое - показать ошибку
// }

// export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
// }

// // более простой и понятный для новичков
// // function GreetingContainer(props: GreetingPropsType) {

// // более современный и удобный для про :)
// const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
//     users,
//     addUserCallback,
// }) => {
//     // деструктуризация пропсов
//     const [name, setName] = useState<any>('') // need to fix any
//     const [error, setError] = useState<any>('') // need to fix any

//     const setNameCallback = (e: any) => { // need to fix any
//         setName('some name') // need to fix

//         error && setError('')
//     }
//     const addUser = () => {
//         pureAddUser(name, setError, setName, addUserCallback)
//     }

//     const onBlur = () => {
//         pureOnBlur(name, setError)
//     }

//     const onEnter = (e: any) => {
//         pureOnEnter(e, addUser)
//     }

//     const totalUsers = 0 // need to fix
//     const lastUserName = 'some name' // need to fix

//     return (
//         <Greeting
//             name={name}
//             setNameCallback={setNameCallback}
//             addUser={addUser}
//             onBlur={onBlur}
//             onEnter={onEnter}
//             error={error}
//             totalUsers={totalUsers}
//             lastUserName={lastUserName}
//         />
//     )
// }

// export default GreetingContainer