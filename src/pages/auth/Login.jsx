import Cookies from "js-cookie";
import React from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { myAxios } from "../../service/axios";
import { useNavigate } from "react-router-dom";

export default function Login({ handleAuth }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: e.target.username.value,
        password: e.target.password.value,
      };

      const response = await myAxios.post("/auth/login", data);
      Cookies.set("token", response.data.access_token, { expires: 22 });
      handleAuth(true);

      toast.success("Successfull logged!");
      navigate("/");
    } catch (error) {
      handleAuth(false);
      toast.error(error.response.data.message);
    }
  };

  return (
    <StyledLogin>
      <form onSubmit={handleSubmit} id="form">
        <h3>Login</h3>
        <div className="input__wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
            id="username"
            required
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            required
          />
        </div>
        <div className="button__wrapper">
          <button type="submit">Send</button>
        </div>
      </form>
    </StyledLogin>
  );
}

const StyledLogin = styled.main`
  padding: 40px 14px 30px;
  display: grid;
  place-items: center;

  form#form {
    width: 100%;
    max-width: 400px;
    min-width: 300px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;

    h3 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 800;
    }

    .input__wrapper {
      display: flex;
      flex-direction: column;
      gap: 5px;

      label {
        color: #333;
        font-weight: 600;
      }

      input {
        padding: 10px 12px;
        grid-column: span 1;
        border-radius: 10px;
        font-size: 1rem;
        overflow: hidden;
        border: 1px solid #333;

        &:hover,
        &:focus {
          outline: 1px solid #333;
        }

        &::placeholder {
          opacity: 0.7;
        }
      }
    }

    .button__wrapper {
      display: flex;
      justify-content: flex-end;

      button {
        cursor: pointer;
        padding: 10px 12px;
        width: 150px;

        color: #fff;
        font-weight: 600;
        font-size: 14.5px;

        border: none;
        border-radius: 10px;
        background-color: #333;

        &:hover,
        &:focus {
          outline: none;
          box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #333;
        }
      }
    }
  }
`;
