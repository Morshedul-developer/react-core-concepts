import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 5);
    }

    const design = {
        padding: '10px 40px',
        backgroundColor: 'lightblue',
        borderRadius: '5px',
        display: 'inline-block',
        marginBottom: '10px'
    }
    return (
        <div style={design}>
            <h3>Count: {count}</h3>
            <button onClick={handleAdd}>Add</button>
        </div>
    );
};

export default Count;