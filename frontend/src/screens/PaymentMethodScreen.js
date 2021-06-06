import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentMethodScreen(props) {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    console.log(shippingAddress)
    console.log(shippingAddress.address);

    if (!shippingAddress.address) {
        // It implies that we should go to payment section only when the shipping adrees is fully filled  
        console.log('hi ')
        console.log(shippingAddress.address);
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    const dispatch = useDispatch()
    const submitHandler = (e) => {
        // Avoiding refresh after submit
        e.preventDefault();
        // dispatch the method so that it can be declared and used globally
        dispatch(savePaymentMethod(paymentMethod))
        // after continue it should ppoint to this location
        props.history.push('/placeorder')

    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler} >
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod"
                            required checked onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="paypal">PayPal
                        </label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod"
                            required onChange={(e) => setPaymentMethod(e.target.value)}
                        ></input>
                        <label htmlFor="stripe">Stripe
                        </label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">
                        Continue
                    </button>
                </div>

            </form>
        </div>
    )
}
