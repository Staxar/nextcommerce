import axios from 'axios'

export const getAllProducts = async () => {
    try {
        const response = await axios.get('/api/getData')
        return response.data
    } catch (error) {
        throw error
    }
}
