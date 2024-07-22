import styles from "./Button1.module.css"

function Button1() {
    return(
        <div className={styles.button_cont}>
            <button className={styles.button_Add}>Add to cart</button>
        </div>
    )
}
export default Button1;