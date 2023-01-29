import { toast } from "react-toastify";

export const saveUserMongodb = (name, email, password) => {
  console.log(name, email, password);
  const user = { name, email, password };
  fetch("https://server-power.vercel.app/api/registration", {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("User Create Successful", { autoClose: 500 });
    })
    .catch((error) => {
      console.log(error.message);
    });
};
