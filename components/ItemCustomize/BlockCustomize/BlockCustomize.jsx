import React, { useState, useEffect } from 'react';
import styles from './BlockCustomize.module.scss';
import cx from 'classnames';



const BlockCustomize = ({ dataImg, onSelectCustomization, customization, category, underCategoriesID }) => {


    const select = (id) => {

        onSelectCustomization({
            optionId: id,
            groupId: underCategoriesID,
            categoryId: category.category,
        });
        // const category = newState.find(e => e.underCategories.id === obj.underCategoriesID); 
        // console.log(category,obj)
    }

    return (
        <div className={styles.BlockCustomize}>
            <div className={styles.BlockCustomize__blockIcon}>
                {
                    dataImg.options.map((data, i) => {
                        console.log(data);
                        return (
                            <div>
                                <div onClick={() => select(data.id)} key={i} className={cx(styles.BlockCustomize__icon, { [styles.active]: data.id === dataImg.active })}>
                                    <img src={data.img} alt="img" />
                                </div>
                                <div className={styles.BlockCustomize__nameBlock}>
                                    <span className={cx({ [styles.active2]: data.id === dataImg.active })}>{data.name}</span>
                                    <span>+$ {data.price}</span>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    );
};

export default BlockCustomize;