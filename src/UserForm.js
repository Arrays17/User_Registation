import React from 'react'
import { useForm } from 'react-hook-form';

export const UserForm = ({ user, onSubmit }) => {
    const {register, handleSubmit} = useForm({
        defaultValues: { 
            username: user ? user.username : "",
            email: user ? user.email : "",
            last: user ? user.last : "",
            first: user ? user.first : "",
            gender: user ? user.gender : "",
            bday: user ? user.bday : ""}
    });

    const submitHandler = handleSubmit((data) => {
        onSubmit(data);
    });

    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control" {...register("username")} type="text" id="username" required/>
            </div>
            <div className="form-group">
                <label htmlFor="description">Email</label>
                <input className="form-control" {...register("email")} type="email" id="email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="first">Full Name</label>
                <div className="input-group">
                    <input className="form-control" {...register("first")} type="text" id="first" placeholder="First Name" required/>
                    <input className="form-control" {...register("last")} type="text" id="last" placeholder="Last Name" required/>
                </div>
            </div>
            <div className="input-group">
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select className="form-select" {...register("gender")} id="gender" required>
                        <option value="male">Male</option>
                       <option value="female">Female</option>
                        <option value="none">Prefer not to say</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="bday">Birthday</label>
                    <input className="form-control" {...register("bday")} type="date" id="bday" required/>
                </div>
            </div>
            <div className="form-group">
                <button className="btn btn-success" type="submit">
                    Save
                </button>
            </div>
        </form>
    )
}