export const getUsers = () => fetch("http://localhost:4000/UserList/").then(res => res.json())

export const registerUser = (user) => fetch("http://localhost:4000/", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})

export const updateUser = (user, id) => fetch(`http://localhost:4000/${id}`, {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
})

export const deleteUser = (id) => {fetch(`http://localhost:4000/${id}` , {
    method:'DELETE'
  }).then((result) => result.json()).then((resp)=>{
    alert("User Deleted")
    console.warn(resp)
  })
};

export const getUser = (id) => fetch(`http://localhost:4000/${id}`).then(res => res.json())