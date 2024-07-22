import styles from "./discount.module.css";
import dogs from "../../assets/images/dogs.png";
import DiscountForm from "./DiscountForm";

function Discount() {
  return (
    <div className={styles.discount}>
      <h1>5% off on the first order</h1>
      <div className={styles.discount_content}>
        <div className={styles.discount_contentIMG}>
          <img src={dogs} alt="img" />
        </div>
        <DiscountForm />
      </div>
    </div>
  );
}

export default Discount;
