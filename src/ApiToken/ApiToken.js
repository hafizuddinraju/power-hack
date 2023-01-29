import { useEffect, useState } from "react";

//api token function
const ApiToken = (email) => {
  // console.log(email);
  const [token, setToken] = useState("");
  useEffect(() => {
    if (email) {
      fetch(`https://server-power.vercel.app/jwt?email=${email}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("power-token", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};

export default ApiToken;
