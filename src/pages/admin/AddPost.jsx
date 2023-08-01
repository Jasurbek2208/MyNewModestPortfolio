import React, { useState } from "react";
import { myAxios } from "../../service/axios";
import toast from "react-hot-toast";
import styled from "styled-components";

export default function AddPost() {
  const [img, setImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        img,
        title: e.target.title.value,
        project_link: e.target.projectLink.value,
        github_link: e.target.githubLink.value || "",
      };

      const response = await myAxios.post('/portfolio', data)

      toast.success(response.data.message);
      document.getElementById("form").reset();
      setImg("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <StyledAddPost>
      <form onSubmit={handleSubmit} id="form">
        <h3>Add post</h3>
        <div className="input__wrapper">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter your title"
            id="title"
            required
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="photo">Photo</label>
          <div className="file-input-container">
            <input
              type="file"
              id="fileInput"
              name="fileInput"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => setImg(e.target.value)}
              required
            />
            <div className="input-vizual">
              <div>Click</div>
              <div>{img || "File not selected!"}</div>
            </div>
          </div>
        </div>
        <div className="input__wrapper">
          <label htmlFor="projectLink">Project Link</label>
          <input
            type="text"
            name="projectLink"
            placeholder="Enter your Project Link"
            id="projectLink"
            required
          />
        </div>
        <div className="input__wrapper">
          <label htmlFor="githubLink">Github Link</label>
          <input
            type="text"
            name="githubLink"
            placeholder="Enter your Github Link"
            id="githubLink"
          />
        </div>
        <div className="button__wrapper">
          <button type="submit">Send</button>
        </div>
      </form>
    </StyledAddPost>
  );
}

const StyledAddPost = styled.main`
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
      margin-bottom: -5px;
      text-align: center;
      text-transform: uppercase;
      font-size: 36px;
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

      .file-input-container {
        position: relative;
        grid-column: span 1;
        padding: 0;
        width: 100%;
        height: 40px;

        & > input[type="file"] {
          cursor: pointer;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
        }

        .input-vizual {
          position: absolute;
          inset: 0;
          display: flex;
          overflow: hidden;
          border-radius: 10px;
          border: 1px solid #333;
          pointer-events: none;

          &:hover,
          &:focus {
            outline: 1px solid #333;
          }

          div:first-of-type {
            width: 30%;
            display: grid;
            place-items: center;
            color: #fff;
            font-weight: 600;
            font-size: 17px;
            background-color: #333;
          }

          div:last-of-type {
            padding: 0 7px;
            width: 70%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            background-color: #fff;
          }
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
