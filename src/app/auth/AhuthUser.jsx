// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const AhuthUser = () => {
//     const navigate = useNavigate();

//     const getToken = () => {
//         const tokenString = sessionStorage.getItem("token");
//         const token = JSON.parse(tokenString);
//         return token;
//     }


//     const getUser = () => {
//         const userString = sessionStorage.getItem("user");
//         const rol = JSON.parse(userString);
//         return user;
//     }

//     // const getRol = () => {
//     //     const rolString = sessionStorage.getItem("rol");
//     //     const rol = JSON.parse(rolString);
//     //     return rol;
//     // }

//     const [token, setToken] = useState(getToken);
//     const [user, setUser] = useState(getUser);
//     // const [rol, setRol] = useState(getRol);


//     const saveToken =(user, token) => {
//         sessionStorage.setItem("user", JSON.stringify(user));
//         sessionStorage.setItem("token", JSON.stringify(token));

//         setUser(user);
//         setToken(token);

//         if (user) {
//             navigate("/dashboard");
//         }


//     }



//   return (
//     <div>
      
//     </div>
//   )
// }

export default AhuthUser
