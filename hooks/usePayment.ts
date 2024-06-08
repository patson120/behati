

const usePayment = () => {

    const initializePayment = async (body: any) => {

        body = {
            apikey: '11574589986659e34d7cb754.35602709',
            site_id: '5872958',
            ...body,
        }

        return fetch('https://api-checkout.cinetpay.com/v2/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            
    }

    return { initializePayment }

}


export default usePayment;