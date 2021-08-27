export const getUsers = () => fetch("http://localhost:4000/UserList/").then(res => res.json())

export const registerUser = (user) => fetch("http://localhost:4000/", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})

export const getUser = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())