import React from 'react'
import { useForm } from 'react-hook-form';

export const UserForm = ({ user, onSubmit }) => {
    const {register, handleSubmit} = useForm({
        defaultValues: { 
            last: user ? user.last : "",
            first: user ? user.first : "",
            middle: user ? user.middle : ""},
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="last">Last Name:</label>
                <input className="form-control" {...register("last")} type="text" id="last" required/>
                <label htmlFor="first">First Name:</label>
                <input className="form-control" {...register("first")} type="text" id="first" required/>
                <label htmlFor="middle">Middle Name:</label>
                <input className="form-control" {...register("middle")} type="text" id="middle" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input className="form-control" {...register("description")} type="description" id="description" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary" type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}