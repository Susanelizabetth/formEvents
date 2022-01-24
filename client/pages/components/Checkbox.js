export default function Checkbox({ label, index, toggleChange, checkIs }) { 
    return(
        <div class="control">
            <label class="checkbox">
                <input type="checkbox" 
                       key={index} 
                       value={label}
                       onChange={toggleChange}
                       defaultChecked={false} />
                {label}
            </label>
        </div>
       
    )
};
