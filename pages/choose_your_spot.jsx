import React, { useState } from 'react';
import ChooseYourSpotTemplate from '../templates/ChooseYourSpotTemplate/ChooseYourSpotTemplate';
import Layout from '../components/layout/layout';
import SlotPopup from '../templates/ChooseYourSpotTemplate/SlotPopup/SlotPopup';

const ChooseYourSpot = () => {

    const [slotId, setSlotId] = useState(null);

    console.log(slotId);

    return (
        <Layout>
            <ChooseYourSpotTemplate
                setIsPopup={setSlotId}
            />
            {
                slotId && (
                    <SlotPopup id={slotId}
                        setSlotId={setSlotId}
                    />
                )
            }
        </Layout>
    );
};

export default ChooseYourSpot;