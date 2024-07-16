import MainPageTitle from "./MainPageTitle";
import MainCategories from "./mainCategories";
import Discount from "./Discount";
import Sale from "./Sale"
import "./mainPage.css";

function MainPage() {
  return (
    <div className="mainPage_Img">
      <MainPageTitle />
      <div className="mainPage_content">
        <MainCategories />
        <Discount />
        <Sale />
      </div>
    </div>
  );
}
export default MainPage;
