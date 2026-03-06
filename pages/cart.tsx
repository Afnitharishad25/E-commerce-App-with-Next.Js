import { useCart } from '../context/cartContext';

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeItem } = useCart();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container my-5 min-vh-100">
      <h2 className="fw-bold mb-4">Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="alert alert-info">
          Your cart is empty 🛒
        </div>
      ) : (
        <div className="row">
          {/* Cart Items */}
          <div className="col-md-8">

          {cart.map((item) => (
            <div className='card mb-3' key={item.id} style={{ marginBottom: "15px" }}>
                <div className="row g-0 align-items-center">

                    <div className="col-md-3">
                    <img src={item.thumbnail} className="img-fluid p-3" alt={item.title}/>
                    </div>

                    <div className="col-md-6">
                      <div className="card-body ">
                        <h6 className="card-title">{item.title}</h6>
                        <p className="text-muted mb-1">
                           Price: AED {item.price}
                        </p>
                       </div>
                    </div>

                    <div className="col-md-3 text-center">
                        <div className='btn rounded-3'>
                     <button onClick={() => increaseQty(item.id)}>+</button>
                     <button>{item.quantity}</button>
                     <button onClick={() => decreaseQty(item.id)}>-</button>
                     </div>
                     <button className="btn btn-danger btn-sm"  onClick={() => removeItem(item.id)}><i className='bi bi-trash'></i></button>
                     
                    </div>

                    
                </div>
            </div>
            ))}
        </div>

      {/* Order Summary */}
          <div className="col-md-4">
            <div className="card p-3">
              <h5>Order Summary</h5>
              <hr />
              <p>Total Items: {cart.length}</p>
              <h6 className="fw-bold">
                Total Price: AED {totalPrice.toFixed(2)}
              </h6>

              <button className="btn btn-success w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}