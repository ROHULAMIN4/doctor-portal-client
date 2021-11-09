import { Alert, AlertTitle, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  // const { token } = useAuth();
  const hanleOnEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanleOnForm = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        // authorization: `bearer ${token}`,
        // authorizatin verify token for secure
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };

  return (
    <div>
      <h4>make this admin</h4>
      <form onSubmit={hanleOnForm}>
        <TextField
          sx={{ width: "60%" }}
          id="outlined-basic"
          label="Email"
          type="email"
          onBlur={hanleOnEmail}
          variant="standard"
          style={{ marginRight: "10px" }}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
        {success && (
          <Alert style={{ marginTop: "20px" }} severity="success">
            <AlertTitle>Made admin Successfully </AlertTitle>
          </Alert>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;
