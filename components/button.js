import utilStyles from "../styles/utils.module.css"
export default function Button(props) {
    return (
        <div className={utilStyles.button}>
            {props.buttonLabel||"Pass props"}
        </div>
    )
}
