import React, { useState } from "react";
import "./SignupC.scss";

import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";

import InputC from "../input-c/InputC";
import BtnC from "../btn-c/BtnC";

const SignupC = ({ className }) => {
    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className={`signup-c ${className}`}>
            <h1 className="signup-c__title">ثبت نام در کد ترکر</h1>

            <div className="signup-c__c1">
                {/* "auth-placeholder" is a utility class. */}
                <InputC
                    id="signup-c__username"
                    type="text"
                    className="auth-placeholder"
                    placeholder="نام کاربری"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    id="signup-c__phone-number"
                    type="text"
                    className="auth-placeholder"
                    placeholder="شماره تلفن همراه"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    //
                    rtl
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                    icon={<PhoneIcon />}
                    required
                />

                <InputC
                    id="signup-c__password"
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

                <InputC
                    id="signup-c__confirm-password"
                    type="password"
                    className="auth-placeholder"
                    placeholder="تکرار رمز عبور"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
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

                <InputC
                    id="signup-c__email"
                    type="email"
                    className="auth-placeholder"
                    placeholder="ایمیل"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    //
                    rtl
                    primary
                    lowContrast
                    filled
                    outlined
                    elevation={900}
                    icon={<EmailIcon />}
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
                ثبت نام
            </BtnC>

            <div className="signup-c__c2">
                <span className="signup-c__login-txt1">
                    قبلا ثبت نام کرده اید؟
                </span>
                <span className="signup-c__login-txt2">
                    ورود به حساب کاربری
                </span>
            </div>
        </div>
    );
};

export default SignupC;
