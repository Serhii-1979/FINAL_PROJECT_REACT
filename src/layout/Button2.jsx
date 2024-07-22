import styles from "./Button2.module.css"

function Button2() {
    return(
        <div className={styles.button_cont}>
            <button className={styles.button_Add}>Add to cart</button>
        </div>
    )
}
export default Button2;