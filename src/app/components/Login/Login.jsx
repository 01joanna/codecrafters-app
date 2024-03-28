"use client";
import axios from "axios";
import Button from "../Button/Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../contexts/AuthContext";
import { loginApi } from "../../../services/RestApi";

export default function Login() {
  const [formInput, setFormInput] = useState({
    email: '',
    password: '',
  });

  const updateFormInput = (e) => {
    e.persist();
    setFormInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value}));
    console.log(formInput)
  };

  const { login } = useAuthContext();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie').then(response => {
        console.log(response);
        loginApi(formInput).then(response => {
          console.log(response);
          login(response.data.access_token);
          router.push('/auth/dashboard');
          router.refresh();
        }), error => {
          console.error('Login failed:', error);
        }
      })} catch (err) {
        console.error('Login failed:', err);
      }
  }
  //     const loginResponse = await api.post('api/login', formInput);
  //     if (loginResponse.data.error) {
  //       console.log(loginResponse.data.error);
  //     } else {
  //       console.log("Success:", loginResponse.data);
  //       login(loginResponse.data.access_token);
  //       router.push('/');
  //       router.refresh();
  //     }}
  //   } .catch(error) {
  //     console.error('Login failed:', error);
  //   }
  // };

  return (
    <div>
      <div id="logo" className="items-baseline">
        <h1 className="">./m</h1>
      </div>
      <div id="signup-form" className="shadow-xl">
        <form
          action="/login"
          method="post"
          className="flex flex-col items-center px-20"
          onSubmit={handleSubmit}
        >
          @csrf
          <legend className="font-light text-4xl my-8">Sign in</legend>

          <div id="form-images-button" className="flex flex-col items-center">
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
