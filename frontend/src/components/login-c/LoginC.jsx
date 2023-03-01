import React, { useState } from "react";
import "./LoginC.scss";

import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";

import InputC from "../input-c/InputC";
import BtnC from "../btn-c/BtnC";

// "className"s that are used without applying the "BEM" methodology are utility classes.
const LoginC = ({ className }) => {
    const [usernameOrPhoneNumber, setUsernameOrPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={`login-c flex-vert-center ${className}`}>
            <div className="login-c__title">ورود به کد ترکر</div>

            <div className="login-c__c1 flex-vert-center">
                {/* "auth-placeholder" is utility class. */}
                <InputC
                    id="login-c__username-or-phone-number"
                    type="text"
                    className="auth-placeholder"
                    placeholder="نام کاربری یا شماره تلفن همراه"
                    value={usernameOrPhoneNumber}
                    onChange={(e) => setUsernameOrPhoneNumber(e.target.value)}
                    //
                    rtl
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                    icon={<PersonIcon />}
                    required
                />

                <InputC
                    id="login-c__password"
                    type="password"
                    className="auth-placeholder"
                    placeholder="رمز عبور"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    //
                    rtl
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                    icon={<PasswordIcon />}
                    required
                />
            </div>

            <BtnC
                primary
                filled
                disabled
                opt={{
                    width: "30rem",
                    marginTop: "3rem",
                }}
            >
                ورود
            </BtnC>

            <div className="login-c__c2 flex-hor-center">
                <span className="login-c__signup-txt1">
                    هنوز ثبت نام نکرده اید؟
                </span>
                <span className="login-c__signup-txt2">ایجاد حساب کاربری</span>
            </div>
        </div>
    );
};

export default LoginC;
