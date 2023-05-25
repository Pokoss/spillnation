import React, { useEffect, useState } from 'react'
import dropin from "braintree-web-drop-in"

export default function Payments({ onPaymentCompleted }) {
    const show = true;
    const amount = 10.0;
    const currency = 'USD';

    const [braintreeInstance, setBraintreeInstance] = useState(undefined)

    useEffect(() => {
        if (show) {
            const initializeBraintree = () => dropin.create({
                // insert your tokenization key or client token here
                authorization: "sandbox_ykx5yt4p_x536wfbzjdzxqn5p",
                container: '#braintree-drop-in-div',
                venmo: {},
                paypal: {
                    flow: 'checkout',
                    amount: amount,
                    currency: currency
                },
                paymentRequest: {
                    total: {
                        label: 'South Sudan Global',
                        amount: amount
                    },
                    requiredBillingContactFields: ["postalAddress"]
                },
                googlePay: {
                    googlePayVersion: 2,
                    merchantId: 'merchant-id-from-google',
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPrice: amount,
                        currencyCode: currency
                    },
                    allowedPaymentMethods: [{
                        type: 'CARD',
                    }]
                }
            }, function (error, instance) {
                if (error)
                    console.error(error)
                else
                    setBraintreeInstance(instance);
            });

            if (braintreeInstance) {
                braintreeInstance
                    .teardown()
                    .then(() => {
                        initializeBraintree();
                    });
            } else {
                initializeBraintree();
            }
        }
    }, [show])

    return (
        <div style={{ display: `${show ? "block" : "none"}` }}>
            <div id={"braintree-drop-in-div"} />

            <button
                className={"braintreePayButton"}
                type="primary"
                // disabled={!braintreeInstance}
                onClick={() => {
                    if (braintreeInstance) {
                        braintreeInstance.requestPaymentMethod(
                            (error, payload) => {
                                if (error) {
                                    console.error(error);
                                } else {
                                    const paymentMethodNonce = payload.nonce;
                                    console.log("payment method nonce", payload.nonce);

                                    // TODO: use the paymentMethodNonce to
                                    //  call you server and complete the payment here

                                    // ...

                                    alert(`Payment completed with nonce=${paymentMethodNonce}`);

                                    onPaymentCompleted();
                                }
                            });
                    }
                }}
            >
                {"Pay"}
            </button>
        </div>
    )
}