import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {API_URL} from "../../api"

import "./FormHomePage.css";

function FormHomePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      console.log("Data to be sent:", data);
      const response = await axios.post(`${API_URL}/sale/send`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <div style={styles.inputContainer}>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="input-placeholder"
          style={styles.input}
        />
        {errors.name && (
          <span style={styles.error}>This field is required</span>
        )}
      </div>

      <div style={styles.inputContainer}>
        <input
          {...register("phone", { required: true, pattern: /^[0-9]{8}$/ })}
          placeholder="Phone number"
          className="input-placeholder"
          style={styles.input}
        />
        {errors.phone && <span style={styles.error}>Invalid phone number</span>}
      </div>

      <div style={styles.inputContainer}>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="Email"
          className="input-placeholder"
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>Invalid email</span>}
      </div>

      <button type="submit" className="button-style btn">
        Get a discount
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
    margin: "0 auto",
    padding: "1rem",
    backgroundColor: "transparent",
    borderRadius: "8px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "16px 32px",
    border: "1px solid #DDDDDD",
    borderRadius: "4px",
    fontSize: "20px",
    backgroundColor: "transparent",
    color: "#fff",
  },
  button: {
    padding: "16px 32px",
    backgroundColor: "#fff",
    color: "#282828",
    border: "none",
    borderRadius: "4px",
    fontSize: "20px",
    cursor: "pointer",
    fontWeight: "600",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};

export default FormHomePage;
