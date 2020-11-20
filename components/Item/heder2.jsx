import React, { useState, useEffect } from 'react';
import styles from './heder.module.scss';
import cx from 'classnames';
import { useRouter } from 'next/router';



const tabs = [
    { id: 1, name: 'Choose your spot', active: false, visit: false, link: '/choose_your_spot' },
    { id: 2, name: 'Select Floorplan', active: false, visit: false, link: '/select_floorplan' },
    { id: 3, name: 'Detailed Floorplan', active: false, visit: false, link: '/detailed_floorplan' },
    { id: 4, name: 'Customize Interior', active: false, visit: false, link: '/customize_lnterior' },
    { id: 5, name: 'Apply', active: false, visit: false, link: '/apply' },
]

const Heder = () => {

    const router = useRouter();

    const [stateTubs, setStateTabs] = useState(tabs);


    const applyHandler = () => {
        if (router.pathname === '/customize_lnterior') {
            const newState = [...stateTubs];
            const apply = newState.find(e => e.name === 'Apply');
            apply.active = true;
            apply.visit = true;
            setStateTabs(newState);
        }
    }

    const selectTab = (id) => {
        const newState = [...stateTubs];
        newState.forEach(element => {
            element.active = false;
            if (element.id === id && element.visit) {
                element.active = true;
                router.replace(element.link);
            }
            console.log(element);
        });
        console.log(id);
    }

    const handlerTubs = () => {
        const newState = [...stateTubs];
        newState.forEach(element => {
            element.active = false;
            if (element.link === router.pathname) {
                element.active = true;
                element.visit = true;
            }
        });
        setStateTabs(newState);
    }

    useEffect(() => {
       if(router.pathname === '/customize_lnterior') applyHandler();
    }, [stateTubs])

    useEffect(() => {
        handlerTubs();
        applyHandler();
    }, [])

    return (
        <div className={styles.Heder}>
            {
                stateTubs.map((data) => {
                    console.log(data);
                    return (
                        <span
                            onClick={() => selectTab(data.id)}
                            className={cx(styles.tab, {
                                [styles.active]: data.active,
                                [styles.visit]: data.visit,
                                [styles.apply]: data.name === 'Apply' && data.active,
                            })}
                            key={data.id}>{data.name}
                        </span>
                    )
                })
            }
        </div>
    );
};

export default Heder;