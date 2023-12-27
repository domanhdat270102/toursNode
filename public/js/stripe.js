/* eslint-disable */
import axios from "axios"
import { showAlert } from "./alerts"

export const bookTour = async tourId => {
    const stripe = Stripe('pk_test_51ONydXJHbgv9zkHZ7WpDV392WjxdpmnCxHegIPACsiT9IvbdI8kL2b8Njlz1qNgBtRa1dPBjQmj0GCGDwYpe4RmG00TThHkofv')

    // 1) Get checkout session from API
    try {
        const session = await axios(`http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`)

        //2) Create checkout form + chanre credit card
        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        })
    } catch (err) {
        console.log(err);
        showAlert('error', err)
    }
}