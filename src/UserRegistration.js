import React from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from './api';
import { UserForm } from './UserForm';

export const UserRegistration = () => {
    const history = useHistory();
    
    const onSubmit = async (data) => {
      await registerUser(data)
      history.push("/")
    };

    return <div className="container">
        <h3 className="">User Registration</h3>
        <UserForm onSubmit={onSubmit} />
    </div>
}