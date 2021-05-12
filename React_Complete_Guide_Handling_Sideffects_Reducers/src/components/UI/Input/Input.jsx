import React, { useEffect, useRef, useImperativeHandle } from 'react'
import classes from '../Input/Input.module.css';



const Input = React.forwardRef(({ type, id, value, label, isValid, onChange, onBlur},ref)=> {


    const inputref = useRef();
    // useEffect(() => {
    //     inputref.current.focus();
    // }, [])

    const activate = () => {
        inputref.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate
        }
    });
    return (
        <div
            className={`${classes.control} ${isValid === false ? classes.invalid : ""
                }`}
        >
            <label htmlFor={id}>{label}</label>
            <input
                ref={inputref}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
})

export default Input
