import { isSafari } from './detectSafari';

export const handlePayment = (paymentLink: string) => {
    if (isSafari()) {
        console.log('Open Apple Pay flow for Safari user');
        //TODO: replace below w apple pay integration
        window.open(paymentLink, '_blank');
    } else {
        console.log('Load stripe link for Non-Safari user');
        window.open(paymentLink, '_blank');
    }
};