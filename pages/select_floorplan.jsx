import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/layout/layout';
import SelectFloorPlanTemplate from '../templates/SelectFloorPlanTemplate/SelectFloorPlanTemplate';
import plans from '../db/plans';
import  useTimeout from '../UTILS/useTimeout';

const SelectFloorPlan = () => {

    useTimeout();

    const selectorLot = useSelector(state => state.lot.lotData);
    const plansSlot = plans.filter(e => selectorLot?.plans.some(i => e.id === i))
    console.log(plansSlot);

    return (
        <Layout>
            <SelectFloorPlanTemplate
                plansSlot={plansSlot}
            />
        </Layout>
    );
};

export default SelectFloorPlan;