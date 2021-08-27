import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getUser, updateUser } from './api';
import { UserForm } from './UserForm';

export const EditUser = () => {
    const match = useRouteMatch();
    const [user, setUser] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser(match.params.id)
            setUser(user)
        }
        fetchUser()
        // eslint-disable-next-line
    }, [])

    const onSubmit = async (data) => {
        await updateUser(data, match.params.id)
        history.push("/UserList")
    }

    return user ? (
        <div className="container">
            <div className="mt-3">
                <h3>Edit User [{user.username}]</h3>
                <UserForm user={user} onSubmit={onSubmit}/>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    )
}