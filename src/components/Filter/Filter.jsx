import { useState } from "react";


const Filter = ({ value, onChangeFilter }) => {
    
    return <div>
        <h4>Search by name</h4>
        <input type="text" value={value} onChange = {onChangeFilter} />
    </div>
};

export default Filter;