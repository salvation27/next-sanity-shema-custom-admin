import React from 'react'
import Title from '../Title/Title';

const HeroVideo = ({products}) => {
    console.log("hero", products);
    if (products) {
    return (
      <>
        <section className="offer">
          <div className="offer_wrap">
            <Title text={products.title_offer} />
            <h3>{products.text_offer}</h3>
          </div>
          <div>
            <button>{products.button_offer1}</button>
            <button>{products.button_offer2}</button>
          </div>
        </section>
        <section className="reviews">
          <div className="reviews_wrap">
            <Title text={products.reviews_title} />
          </div>
          <div className="card_reviews_wrap dflex">
            {products.reviews.map((item, i) => {
              return (
                <div key={i} className="card_reviews">
                  <div
                    className="reviews_title"
                    style={{ textAlign: "center" }}
                  >
                    <h2>{item.reviewName}</h2>
                  </div>
                  <div className="reviews_text" style={{ textAlign: "center" }}>
                    {item.reviewText}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </>
    );
    }
}
export default HeroVideo