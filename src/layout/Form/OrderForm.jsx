// OrderForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { clearCart } from "../../redux/cartSlice";

function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const orderData = {
      ...data,
      products: products.map((product) => ({
        id: product.id,
        title: product.title,
        quantity: product.quantity,
        price: product.discont_price || product.price,
      })),
    };

    try {
      const response = await axios.post(
        "http://localhost:3333/order/send",
        orderData
      );
      console.log("Order sent successfully:", response.data);

      // Очистка корзины и формы
      dispatch(clearCart());
      reset();

    } catch (error) {
      console.error("Error sending order:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
      <div style={styles.inputContainer}>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          style={styles.input}
        />
        {errors.name && (
          <span style={styles.error}>This field is required</span>
        )}
      </div>

      <div style={styles.inputContainer}>
        <input
          {...register("phone", {
            required: true,
            pattern: /^[0-9]{8}$/,
          })}
          placeholder="Phone number"
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
          style={styles.input}
        />
        {errors.email && <span style={styles.error}>Invalid email</span>}
      </div>

      <button type="submit" style={styles.button}>
        Order
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
  },
  button: {
    padding: "16px 32px",
    backgroundColor: "#0d50ff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontSize: "20px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "12px",
  },
};

export default OrderForm;
