const base_url = 'http://localhost:1337/'

export const getSchools = async () => {
    const response = await fetch(base_url + 'schools')
    const data = await response.json()
    return data
}

export const getSchool = async (id) => {
    const response = await fetch(base_url + 'schools/' + id)
    const data = await response.json()
    return data
}