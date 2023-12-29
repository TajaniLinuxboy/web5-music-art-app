import React from "react";
import Styles from "./newCard.module.css";

const NewCard = () => {
  return (
    <div className={`${Styles.container}`}>
      <div className={`${Styles.cardImg}`}>
        <img
          className={`${Styles.img}`}
          src={"http://surl.li/osksa"}
          alt={"statue"}
        />
      </div>
      <h1 className={`${Styles.cardHeading}`}>NFT Art</h1>
      <p className={`${Styles.description}`}>some description of given NFT</p>
      <div className={`${Styles.tokenInfo}`}>
        <div className={`${Styles.price}`}>
          <span className={`${Styles.value}`}> 0.05 ETH</span>
        </div>
        <div className={`${Styles.duration}`}>
          <span> 11 days left</span>
        </div>
      </div>

      <hr className={`${Styles.hr}`} />

      <div className={`${Styles.creator}`}>
        <div className={`${Styles.wrapper}`}>
          <img
            className={`${Styles.creatorImg}`}
            src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt="Creator"
          />
        </div>
        <span className={`${Styles.creatorName}`}> Creation of Sahil</span>
        <button className={`${Styles.buyButton}`}>Buy Now</button>
      </div>
    </div>
  );
};

export default NewCard;
