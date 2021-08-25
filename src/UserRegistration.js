import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserForm } from './UserForm';

export const UserRegistration = () => {
    const history = useHistory();
    
    const onSubmit = async (data) => {
      history.push("/")

    };
    return <div className="container">
        <h3>User Registration</h3>
        <UserForm onSubmit={onSubmit} />
    </div>
}