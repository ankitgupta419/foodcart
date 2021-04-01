import React from 'react'
export default function Card(props) {
    const { cardData,clickCard } = props
    return cardData && cardData.map((card,i)=>{
        return(
          <div className="card-content">
            <div className="card-click" onClick={() => clickCard(card.img)}>
              <div className="card-img"><img src={card.img} /></div>
              <div className="card-detail">
                <div className="card-name">{card.name}</div>
                <div className="card-star">
                  <div className="card-star-draw">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                  </div>
                  <div className="card-star-rating">{card.rating}</div>
                  </div>
                <div className="clr"></div>
              </div>
              <div className="card-place">{card.city}</div>
              <div className="card-desc">{card.details}</div>
            </div>
            <div className="card-purchase">
              <div className="card-like"><svg className="heart" viewBox="0 0 32 29.6">
                <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
              </svg> </div>
              <div className="card-buy"><a href={card.img} target="_blank">Buy Now</a></div>
            </div>
          </div>
        )
    })
    }

    