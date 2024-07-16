import img61 from "../../../assets/images/img61.png";
import "./allProducts.css";

function AllProducts() {
  return (
    <div className="categories">
      <div className="categories_navigation">
        <div className="categories_nav">
          <p>Main page</p>
        </div>
        <div className="categories_line"></div>
        <div className="categories_nav">
          <p className="categories_nav-p">All products</p>
        </div>
      </div>

      <div className="allProducts_container">
        <div className="allProducts_flex">
          <h2>All products</h2>
          <div className="allProducts_title">
            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Price</p>
              <input
                type="text"
                className="allProducts_title-p1"
                placeholder="from"
              ></input>
              <input
                type="text"
                className="allProducts_title-p1"
                placeholder="to"
              ></input>
            </div>

            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Discounted items</p>
              <input type="checkbox" className="allProducts_title-input" />
            </div>

            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Sorted</p>
              <select name="name" className="allProducts_title-select">
                <option value="value1">by default </option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="allProducts_flexBox">
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
            <div className="allProducts_flex-box">
              <img src={img61} alt="img" />
              <div className="allProducts_flex-text">
                <p className="allProducts_flex-textP2">Dry & Wet Food</p>
                <p className="allProducts_flex-textP">$23 <span>$35</span></p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
export default AllProducts;
