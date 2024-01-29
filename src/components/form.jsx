import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from "react-redux";
import { AuthActions } from "../store/authentication";

const Form = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const log = (e) => {
        e.preventDefault();
        if (name.trim() !== "" && password.trim() !== "") dispatch(AuthActions.login());
    }

    return (
        <div>
            <div className="modal show" tabIndex="-1" style={{ display: 'block', marginTop: '50px' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Complete the form</h5>
                        </div>
                        <div className="modal-body">
                            <input className="form-control mb-2" type="search" placeholder="Name" aria-label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                            <input className="form-control" type="search" placeholder="Password" aria-label="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={log}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
