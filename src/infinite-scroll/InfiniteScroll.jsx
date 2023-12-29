/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ImgBlank from '../assets/images/img-blank.svg';

const cards = Array.from(Array(10).keys()).map(item => ({
  title: `Card title ${item + 1}`,
  lead: `Some quick example text to build on the card title and make up the bulk of the card's content.`
}))

function InfiniteScroll() {
   // code something here ...
   
  return (
    <div>
      <h2>Infinite scroll</h2>

      <div className='test03_content'>
        {cards.map(item => (
          <div key={item.title} className="card" style={{ width: '18rem' }}>
            <img className="card-img-top" src={ImgBlank} alt="card" />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.lead}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>

      
    </div>
  )
}

export default InfiniteScroll