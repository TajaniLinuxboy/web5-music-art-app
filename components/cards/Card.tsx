import React from "react";
import Styles from "./cards.module.css";
const Card = () => {
  return (
    <div className={`${Styles.cardBody}`}>
      <div className={`${Styles.nft}`}>
        <div className={`${Styles.main}`}>
          <img
            className={`${Styles.tokenImage}`}
            src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="NFT"
          />
          <h2 className={`${Styles.nftName}`}>Name of NFT</h2>
          <p className={`${Styles.description}`}>
            some description of given nft
          </p>
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
              <img className={`${Styles.creatorImg}`}
                src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                alt="Creator"
              />
            </div>
            <span className={`${Styles.creatorName}`}> Creation of Sahil</span>
            <button className={`${Styles.buyButton}`}>
                Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
