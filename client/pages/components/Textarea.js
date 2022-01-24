export default function Textarea({ set, label }) {
    return(
        <div class={set}>
            <label class="label">{label}:</label>
            <div class="control">
            <textarea class="textarea" placeholder={label}></textarea>
            </div>
        </div>  
    )
};


Textarea.defaultProps = {
    set: "field"
}