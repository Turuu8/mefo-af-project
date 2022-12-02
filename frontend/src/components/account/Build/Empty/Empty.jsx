import React from 'react';
import css from "../../../../assets/styles/Account/empty-style.module.scss";

export const Empty = () => {
  return (
    <section className={css.empty_section}>
        <div className={css.empty_section__container}>
            <div className={css.circle_border}>
                <img src="https://raw.githubusercontent.com/AmgalanAmga/mepo-af-project/49507182e8e78a413f74152b25329308f43a58d4/frontend/src/assets/images/bag.svg" alt="bag" />
            </div>
            <h1 className={css.advice}>You haven't shopped with us yet. Is today the day?</h1>
            <button className={css.continue_btn}>
                Continue shopping
            </button>
        </div>
    </section>
  )
}