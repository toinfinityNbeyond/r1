import React, {useState} from 'react';
import ShowName from "./ShowName";
import OddEven from "./OddEven";
import Dice from "./Dice";
import CountContainer from "./counter/CountContainer";
import KioskContainer from "./kiosk/KioskContainer";

const initState = {value: 1}

const HelloWorlds = () => {

    const name = "Hong Gil Dong"
    const [num, setNum] = useState(initState)

    const change = () => {

        const newNum = {value:num.value + 1}

        setNum(newNum)
    }

    return (
        <>
          <KioskContainer></KioskContainer>
        </>
    );
};

export default HelloWorlds;