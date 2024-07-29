import styles from "./discount.module.css";
import dogs from "../../assets/images/dogs.png";
// import DiscountForm from "./DiscountForm";
import FormHomePage from "../../layout/Form/FormHomePage";

function Discount() {
  return (
    <div className={styles.discount} data-aos="fade-up">
      <h1>5% off on the first order</h1>
      <div className={styles.discount_content}>
        <div className={styles.discount_contentIMG}>
          <img src={dogs} alt="img" />
        </div>
        <div className={styles.discount_content_Form}>
        {/* <DiscountForm /> */}
          <FormHomePage />
        </div>
        
      </div>
    </div>
  );
}

export default Discount;
