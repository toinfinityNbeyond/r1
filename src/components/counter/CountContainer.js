import React, {useState} from 'react';
import CountButtons from "./CountButtons";

const CountContainer = () => {

    const [num, serNum] = useState(0)

    const change = (amount) => {
        serNum(num + amount)
    }

    return (
        <div>
            <CountContainer num={num}></CountContainer>
            <CountButtons fn={change}></CountButtons>
        </div>
    );
};

export default CountContainer;
