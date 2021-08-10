import React from 'react';
import { Meaning } from '../C_Meaning/Meaning';
import { Pronunciation } from '../B_Pronunciation/Pronunciation';
const LeftContainer = () => {
    return (
        <div>
            <Pronunciation />
            <Meaning />
        </div>
    );
};

export default LeftContainer;