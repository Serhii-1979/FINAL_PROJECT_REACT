import img81 from "../../../assets/images/img81.png";
import "./allSales.css";

function AllSales() {
  const allsales = [
    { id: 1, name: "Dry & Wet Food", discount: "-17%", price: "$23", originalPrice: "$35" },
    { id: 2, name: "Litter Boxes & Litter Trays", discount: "-10%", price: "$19", originalPrice: "$21" },
    { id: 3, name: "Baskets & Beds", discount: "-5%", price: "$45", originalPrice: "$47" },
    { id: 4, name: "Toys", discount: "-20%", price: "$10", originalPrice: "$12" },
    { id: 5, name: "Trees & Scratching", discount: "-15%", price: "$30", originalPrice: "$35" },
    { id: 6, name: "Runs & Fencing", discount: "-25%", price: "$50", originalPrice: "$60" },
    { id: 7, name: "Snacks & Supplements", discount: "-8%", price: "$11", originalPrice: "$12" },
    { id: 8, name: "Care & Grooming", discount: "-12%", price: "$22", originalPrice: "$25" },
    // Добавьте другие категории здесь
  ];

  return (
    <div className="categories">
      <div className="categories_navigation">
        <div className="categories_nav">
          <p>Main page</p>
        </div>
        <div className="categories_line"></div>
        <div className="categories_nav">
          <p className="categories_nav-p">All sales</p>
        </div>
      </div>

      <div className="allProducts_container">
        <div className="allProducts_flex">
          <h2>All Sales</h2>
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
              <p className="allProducts_title-p">Sorted</p>
              <select name="name" className="allProducts_title-select">
                <option value="value1">by default </option>
                <option value="value2">Option 2</option>
                <option value="value3">Option 3</option>
              </select>
            </div>
          </div>

          <div className="dryWetFood_flexBox">
            {allsales.map((allsale) => (
              <div className="allProducts_flex-box" key={allsale.id}>
                <div className="dryWetFood_sale">
                  <p>{allsale.discount}</p>
                </div>

                <img src={img81} alt="img" />
                <div className="allProducts_flex-text">
                  <p className="allProducts_flex-textP2">{allsale.name}</p>
                  <p className="allProducts_flex-textP">
                    {allsale.price} <span>{allsale.originalPrice}</span>
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

export default AllSales;
