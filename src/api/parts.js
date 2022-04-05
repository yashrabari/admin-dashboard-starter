const base_url = 'http://localhost:1337/'

export const getParts = async () => {
    const response = await fetch(base_url + 'parts')
    const data = await response.json()
    return data
}

