import img71 from "../../../assets/images/img71.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./dryWetFood.css";

function DryWetFood({ addToCart }) {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Dry & Wet Food", discount: "-17%", price: "$23", originalPrice: "$35" },
    { id: 2, name: "Litter Boxes & Litter Trays", discount: "-20%", price: "$40", originalPrice: "$55" },
    { id: 3, name: "Baskets & Beds", discount: "-12%", price: "$23", originalPrice: "$35" },
    { id: 4, name: "Care & Grooming", discount: "-16%", price: "$23", originalPrice: "$35" },
    { id: 5, name: "Snacks & Supplements ", discount: "-20%", price: "$56", originalPrice: "$87" },
    { id: 6, name: "Runs & Fencing ", discount: "-22%", price: "$34", originalPrice: "$47" },
    { id: 7, name: "Dry & Wet Food", discount: "-10%", price: "$77", originalPrice: "$89" },
    { id: 8, name: "Runs & Fencing ", discount: "-11%", price: "$12", originalPrice: "$25" },
    // Добавьте другие продукты здесь
  ];

  return (
    <div className="categories">
      <div className="categories_navigation">
        <div className="categories_nav">
          <p>Main page</p>
        </div>
        <div className="categories_line"></div>
        <div className="categories_nav">
          <p>Categories</p>
        </div>
        <div className="categories_line"></div>
        <div className="categories_nav">
          <p className="categories_nav-p">Dry & Wet Food</p>
        </div>
      </div>

      <div className="allProducts_container">
        <div className="allProducts_flex">
          <h2>Dry & Wet Food</h2>
          <div className="allProducts_title">
            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Price</p>
              <input type="text" className="allProducts_title-p1" placeholder="from" />
              <input type="text" className="allProducts_title-p1" placeholder="to" />
            </div>

            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Discounted items</p>
              <input type="checkbox" className="allProducts_title-input" />
            </div>

            <div className="allProducts_title-price">
              <p className="allProducts_title-p">Sorted</p>
              <select name="name" className="allProducts_title-select">
                <option value="value1">by default</option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="dryWetFood_flexBox">
            {products.map(product => (
              <div
                key={product.id}
                className="allProducts_flex-box"
                onClick={() => navigate(`/goods/${product.id}`)}
              >
                <div className="dryWetFood_sale">
                  <p>{product.discount}</p>
                </div>
                <div className="allProducts_flex-boxHover">
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "#0D50FF",
                      color: "white",
                      fontFamily: "Montserrat",
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "26px",
                      textAlign: "center",
                      textTransform: "none",
                      width: "90%",
                      padding: "16px 32px",
                      position: "absolute",
                      bottom: "-50px",
                      left: "15px",
                      "&:hover": {
                        bgcolor: "#282828",
                      },
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart();
                    }}
                  >
                    Add to cart
                  </Button>
                </div>

                <img src={img71} alt="img" />
                <div className="allProducts_flex-text">
                  <p className="allProducts_flex-textP2">{product.name}</p>
                  <p className="allProducts_flex-textP">
                    {product.price} <span>{product.originalPrice}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DryWetFood;
