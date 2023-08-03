import React from "react";
import styled from "styled-components";

export default function PostPreview({ data: { img, title, projectLink, githubLink, onClick } }) {
  return (
    <StyledPostPreview>
      <div className="background-modal" onClick={onClick}></div>

      <div className="modal">
        <img className="image" src={img} alt={title} />

        <div className="content">
          <h1 className="title">{title}</h1>
          <div className="links">
            <a className="link" target="_blank" href={projectLink}>
              View Project
            </a>
            {githubLink ? (
              <a className="link" target="_blank" href={githubLink || ""}>
                View Github
              </a>
            ) : (
              <p className="link">View Github</p>
            )}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="close-modal-button link"
        onClick={onClick}
      >
        Close Preview
      </button>
    </StyledPostPreview>
  );
}

const StyledPostPreview = styled.div`
  padding: 10px 12px;
  position: fixed;
  inset: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  z-index: 10;

  & > .modal {
    z-index: 13;
    padding: 0 0 10px;
    width: 100%;
    height: 380px;
    max-width: 340px;
    min-width: 280px;

    display: flex;
    justify-content: space-between;
    flex-direction: column;

    overflow: hidden;
    animation: fadeIn ease 0.5s;

    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 #00000036;

    .image {
      width: 100%;
      height: 250px;
    }

    .content {
      margin-top: 10px;
      padding: 7px 12px;

      width: 100%;
      height: 100%;
      max-width: 400px;
      min-width: 300px;

      display: flex;
      justify-content: space-between;
      flex-direction: column;
      gap: 10px;

      .title {
        color: #333;
        font-weight: 600;
        font-size: 1.8rem;
        text-align: left;
      }

      .links {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 15px;
      }
    }
  }

  .background-modal {
    position: fixed;
    inset: 0;
    background: #c6c6c67d;
    z-index: 11;
  }

  .link {
    cursor: pointer;
    padding: 10px 12px;
    width: 120px;

    color: #fff;
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    text-decoration: none;

    border: none;
    border-radius: 10px;
    background-color: #333;

    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 2px #fff, 0px 0px 0px 4px #333;
    }
  }

  .close-modal-button {
    padding: 10px 17px;
    width: 100%;
    max-width: 340px;
    min-width: 280px;
    font-weight: 800;
    z-index: 13;
  }
`;