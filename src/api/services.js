const base_url = 'http://localhost:1337/'

export const CreateInvoice = async (body) => {
    const response = await fetch(base_url + 'services', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    return data
}

