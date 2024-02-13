import axios from "axios";

const API = "http://localhost:4000/api";

export const registerRequest = (user) => axios.post(`${API}/register`, user);


// const API = "http://localhost:4000/api";

// export const registerRequest = async (user) => {
//   try {
//     const response = await fetch(`${API}/register`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(user)
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error registering user:', error);
//     throw error;
//   }
// };
