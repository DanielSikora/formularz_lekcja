import React from "react";
import Form from "./Form";

const LoginApp = () =>{
    return(
        <div className="login-page">
            <h2>Logowanie</h2>
            <Form formType="login"/>
        </div>
    );
};
export default LoginApp;