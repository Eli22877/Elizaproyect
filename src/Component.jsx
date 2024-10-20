import React, {useState} from 'react';

export default function Component() {
    const [data, setData] = useState('');
    const handleChange = (event)=>
    {setData(event.target.value);};
    const handon=()=>{alert(data);};

return (
        <div>
            <input type ="text"
            placeholder="ingresa tus datos"
            onChange={handleChange} />
        
        <button onClick={handon}>no toques
        </button>
        </div>
    );
}