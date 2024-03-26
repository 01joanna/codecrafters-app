"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../../context/authContext";
import { login } from "../../../services/RestApi";
import Button from "../../components/Button/Button";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const { login } = useAuthContext();

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage("");
        try {
            const response = login({ email, password });
            login(response);
            router.push("/");
            router.refresh();

        } catch (error) {
            setErrorMessage("Invalid email or password");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div>
            <div id="logo" className="items-baseline">
                    <h1 className="">./m</h1>
                </div>
                <div id="signup-form" className="shadow-xl">
                    <form action="/login" method="post" className="flex flex-col items-center px-20">
                        <legend className="font-light text-4xl my-8">Sign in</legend>

                        <div id="form-images-button" className="flex flex-col items-center">
                            <div id="form-fillables" className="">
                            <div className="flex flex-col gap-2">
                                <div>
                                <label id="signup-label" for="email">EMAIL:</label><br/>
                                    <input type="email" id="email" name="email" placeholder="Your email" />
                                </div>
                                <div>
                                <label id="signup-label" for="password">PASSWORD:</label><br/>
                                    <input type="password" id="password" name="password" placeholder="Your password" />
                                </div>
                            </div>
                        </div>
                        
                        <div id="submit-login" className="flex flex-col gap-2 my-10">
                            <Button type="submit" text="Sign in" classname="px-20"/>
                            <p className="text-xs font-light">Not a member yet? <a href="/signup" className="text-blue">Sign up</a></p>
                        </div>
                        </div>
                    </form>
                </div>
        </div>
    )
}