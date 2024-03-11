import axios from 'axios'

export const getAllProducts = async () => {
    try {
        const response = await axios.get('/api/getData')
        return response.data
    } catch (error) {
        throw error
    }
}

export const getLimitProducts = async (limit: number) => {
    console.log('🚀 ~ getLimitProducts ~ limit:', limit)

    try {
        const response = await axios.get('/api/getLimitData', {
            params: { limit },
        })
        console.log('🚀 ~ getLimitProducts ~ response:', response)

        return response.data
    } catch (error) {
        throw error
    }
}
