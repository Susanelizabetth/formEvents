
export default function Input({ label, set, type }) {
   
    return(
        <div className={set}>
            <label className="label">{label}:</label>
            <div className="control">
                <input className="input" type={type} placeholder={label} required/>
            </div>
        </div>
    )
    
};


Input.defaultProps = {
    type: "text",
    set: "field"
}