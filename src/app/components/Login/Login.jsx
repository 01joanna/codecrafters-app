"use client";
import axios from "axios";
import Button from "../Button/Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../contexts/AuthContext";
import { loginApi } from "../../../services/RestApi";
import Coookies from "js-cookie";

export default function Login() {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });


  const { login } = useAuthContext();
  const { getUserData } = useAuthContext();
  const router = useRouter();
  const [error, setError ] = useState(null);

  const updateFormInput = (e) => {
    e.persist();
    setFormInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
      .then(() => {
        loginApi(formInput)
          .then(({ accessToken, user }) => {
            login(accessToken, user);
            Coookies.set("user", JSON.stringify(user));
            alert('Login successful')
            router.push('/');
            router.refresh();
          })
          .catch(error => {
            console.error('Login failed:', error);
            let errorMessage = "There was an error with your login, please try again";
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage = error.response.data.message;
            }
            setError(errorMessage);
        });
      })
      .catch(error => {
        console.error('Fetching CSRF cookie failed:', error);
      });
  };

  return (
    <div>
      <div id="logo" className="flex flex-col items-center">
        <h1 className="">./m</h1>
      </div>
      <div id="signup-form" className="shadow-xl">
        <form
          action="/login"
          method="post"
          className="flex flex-col items-center px-20"
          onSubmit={handleSubmit}
        >
          <legend className="font-light text-4xl my-8">Sign in</legend>

          <div id="form-images-button" className="flex flex-col items-center">
          {error && <p className="text-red-500">{error}</p>}
            <div id="form-fillables" className="">
              <div className="flex flex-col gap-2">
                <div>
                  <label id="signup-label" htmlFor="email">
                    EMAIL:
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={formInput.email}
                    onChange={updateFormInput}
                  />
                  {error && !formInput.email && <p className="text-red text-xs">Email is required.</p>}
                </div>

                <div>
                  <label id="signup-label" htmlFor="password">
                    PASSWORD:
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Your password"
                    value={formInput.password}
                    onChange={updateFormInput}
                  />
                  {error && !formInput.password && <p className="text-red text-xs">Password is required.</p>}
                </div>
              </div>
            </div>

            <div id="submit-login" className="flex flex-col gap-2 my-10">
              <Button type="submit" text="Sign in" classname="px-20" />
              <p className="text-xs font-light">
                Not a member yet?{" "}
                <a href="/register" className="text-blue">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
