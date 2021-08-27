import React, { useEffect, useState } from 'react'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { deleteUser, getUser } from './api'

export const DeleteUser = () => {
    const match = useRouteMatch()
    const [user, setUser] = useState([])
    const history = useHistory()

    useEffect(() => {
        const fetchUser = async () => {
            const user = await getUser(match.params.id)
            setUser(user)
        }
        fetchUser()
        // eslint-disable-next-line
    }, [])

    const onSubmit = async () => {
        await deleteUser(user._id)
        history.push("/UserList")
    }

    return user ? (
        <div className="container">
            <div className="mt-3">
                <h3>Delete User</h3>
                <h6>Are you sure you want to delete user [{user.username}] and its data? This cannot be recovered once deleted.</h6>
                <form  onSubmit={onSubmit}>
                    <table className="table table-striped mt-3">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Full Name</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={user._id}>
                            <td>
                                {user.username}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>
                                {user.first + " " + user.last}
                            </td>
                            <td>
                                {user.gender}
                            </td>
                            <td>
                                {user.bday}
                            </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="form-group">
                        <div className="input-group">
                            <button className="btn btn-danger" type="submit">
                                Delete
                            </button>
                        </div>
                    </div>
                </form>
            </div>  
        </div>
        
    ) : (
        <div>Loading...</div>
    )
}