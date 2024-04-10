// export const base_url = "http://localhost:5000/api/";
// const getTokenFromLocalStorage = localStorage.getItem("customer")
//   ? JSON.parse(localStorage.getItem("customer"))
//   : null;

// export const config = {
//   headers: {
//     Authorization: `Bearer ${
//       getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
//     }`,
//     Accept: "application/json",
//   },
// }; 
export const base_url = "https://ecommerce-backend-taz5.onrender.com/api/";

const getTokenFromLocalStorage = () => {
  const customer = localStorage.getItem("customer");
  return customer ? JSON.parse(customer).token : null;
};

export const config = {
  headers: {
    Authorization: `Bearer ${getTokenFromLocalStorage() || ""}`,
    Accept: "application/json",
  },
};