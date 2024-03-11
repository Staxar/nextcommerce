import axios from 'axios'

export const saveProduct = async (req: Request) => {
    const { data } = await req.json()
    console.log(data)
    try {
        // const response = await axios.post('/api/saveData', {

        // })
        // return response.data
        return null
    } catch (error) {
        throw error
    }
}
