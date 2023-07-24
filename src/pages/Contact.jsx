import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import styled from "styled-components";

export default function Contact() {
  const mapRef = useRef();
  const [mapLoading, setMapLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_URL = `https://api.telegram.org/bot5833819728:AAH1dRS8nucWa5_Mh_CmoKUJOIx5uTsYg6I/sendMessage`;
    const message = `<b>Name:</b> ${e.target.fullName.value}\n\n<b>Email:</b> ${e.target.email.value}\n\n<b>Message:</b> ${e.target.description.value}`;

    try {
      await axios.post(
        API_URL,
        {
          chat_id: "-1001901613513",
          parse_mode: "html",
          text: message,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Message sent successfully!");
      document.getElementById("form").reset();
    } catch (err) {
      console.log(err);
    }
  };

  setTimeout(() => {
    setMapLoading(false);
  }, 8000);

  function reloadMap() {
    setMapLoading(true)
    mapRef.current.src = mapRef.current.src;

    setTimeout(() => {
      setMapLoading(false);
    }, 8000);
  }

  useEffect(() => {
    window.addEventListener("online", () => reloadMap());

    return window.removeEventListener("online", () => reloadMap());
  }, []);

  return (
    <StyledContact id="contact">
      <div className="container">
        <div className="contact__wrapper">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} id="form">
            <h3>Send Me message</h3>
            <div className="input__wrapper">
              <label htmlFor="text">Description</label>
              <textarea
                name="description"
                placeholder="Write your message"
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <div className="input__wrapper">
              <label htmlFor="text">Full Name</label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                id="text"
                required
              />
            </div>
            <div className="input__wrapper">
              <label htmlFor="text">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                id="email"
                required
              />
            </div>
            <div className="button__wrapper">
              <button type="submit">Send</button>
            </div>
          </form>

          {/* Map */}
          <div className="mapouter">
            <div className="gmap_canvas">
              {mapLoading ? (
                <div className="loading__wrapper">
                  <div className="loading"></div>
                </div>
              ) : null}
              <iframe
                ref={mapRef}
                className="gmap_iframe"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Tashkent, Shaxriston &amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </StyledContact>
  );
}

const StyledContact = styled.div`
  .contact__wrapper {
    padding: 40px 0px 30px;
    display: flex;
    align-items: end;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    row-gap: 30px;

    form#form {
      width: 100%;
      max-width: 400px;
      min-width: 300px;
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;

      h3 {
        text-align: left;
      }

      .input__wrapper {
        display: flex;
        flex-direction: column;
        gap: 6px;

        label {
          color: #333;
          font-weight: 600;
        }

        input,
        textarea {
          padding: 10px 12px;
          grid-column: span 1;
          border-radius: 10px;
          font-size: 1rem;
          border: 1px solid #333;

          &:hover,
          &:focus {
            outline: 1px solid #333;
          }
        }

        textarea {
          min-width: 100%;
          max-width: 400px;

          min-height: 150px;
          max-height: 150px;
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

    .mapouter {
      position: relative;
      text-align: right;
      width: 100%;
      max-width: 400px;
      height: 400px;
      transition: all 0.3s ease-in-out;
      animation: fadeIn ease 0.5s;

      .gmap_canvas {
        position: relative;
        overflow: hidden;
        background: none !important;
        width: 100%;
        height: 400px;

        .gmap_iframe {
          width: 100%;
          height: 400px !important;
          border-radius: 15px;
          border: 2px solid #333;
          z-index: 10;
        }
      }
    }
  }

  @media (max-width: 500px) {
    button {
      padding: 14px 10px !important;
      width: 100% !important;
    }
  }
`;
