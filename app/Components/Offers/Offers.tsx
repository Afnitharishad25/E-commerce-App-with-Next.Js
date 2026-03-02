
import './Offers.css'

export default function Offers() {
  const offers = [
    { id: 1, img: '/offers/offer1.webp', title: 'Top Offers' },
    { id: 2, img: '/offers/offer2.jpeg', title: 'Mobiles' },
    { id: 3, img: '/offers/offer3.webp', title: 'Fashion' },
    { id: 4, img: '/offers/offer4.webp', title: 'Electronics' },
    { id: 5, img: '/offers/offer5.webp', title: 'Footwears' },
    { id: 6, img: '/offers/offer6.webp', title: 'swing Chairs' },
    { id: 7, img: '/offers/offer7.webp', title: 'Make up Essentials' },
    { id: 8, img: '/offers/offer8.webp', title: 'Groceries' },
  ]

  return (
    <div className="container my-4">
      <h5 className="fw-bold mb-3">Top Deals</h5>

      <div className="row g-3">
        {offers.map((offer) => (
          <div key={offer.id} className="col-6 col-md-3">
            <div className="offer-card text-center p-3">
              <img src={offer.img} alt={offer.title} />
              <p className="mt-2 fw-semibold">{offer.title}</p>
              <small className="text-success">Up to 50% off</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}