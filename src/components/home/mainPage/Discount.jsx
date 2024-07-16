import "./discount.css"
import dogs from "../../../assets/images/dogs.png"
import DiscountForm from "./DiscountForm"

function Discount() {
    return(
        <div className="discount">
           <h1>5% off on the first order</h1>
           <div className="discount_content">
            <img src={dogs} alt="img" />
            <DiscountForm />
            </div> 
        </div>
    )
}

export default Discount;