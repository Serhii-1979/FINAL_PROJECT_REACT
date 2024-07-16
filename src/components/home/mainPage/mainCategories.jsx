import "./mainCategories.css";
import img11 from "../../../assets/images/img11.png";

function MainCategories() {
  return (
    <div className="mainCategories_container">
      <div className="mainCategories_cont">
        <h1>Categories</h1>
        <button className="mainCategories_cont-line">
          <div className="mainCategories_line"></div>
          <p>All categories</p>
        </button>
      </div>
      <div className="mainCategories_flex">
        <div className="mainCategories_flex-box">
          <img src={img11} alt="img" />
          <p>Dry & Wet Food</p>
        </div>
        <div className="mainCategories_flex-box">
          <img src={img11} alt="img" />
          <p>Dry & Wet Food</p>
        </div>
        <div className="mainCategories_flex-box">
          <img src={img11} alt="img" />
          <p>Dry & Wet Food</p>
        </div>
        <div className="mainCategories_flex-box">
          <img src={img11} alt="img" />
          <p>Dry & Wet Food</p>
        </div>
      </div>
    </div>
  );
}
export default MainCategories;
