import MainPageTitle from "./MainPageTitle";
import MainCategories from "./MainCategories";
import Discount from "./Discount";
import Sale from "./Sale"
import styles from "./mainPage.module.css";

function MainPage() {
  return (
    <div className={styles.mainPage_Img} data-aos="fade-up">
      <MainPageTitle />
      <div className="mainPageContent">
        <MainCategories />
        <Discount />
        <Sale />
      </div>
    </div>
  );
}
export default MainPage;
