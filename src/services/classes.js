import axios from "axios"
import config from "../config"

const getListClassService = async (pageSize, current) => {
    const results = await axios.get(`${config.service_host}/class/get-all-class`, {
        params: {
            pageSize,
            current
        },
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    return results.data.data
}

export {
    getListClassService
}