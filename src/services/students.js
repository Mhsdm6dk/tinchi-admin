import axios from "axios"
import config from "../config"

const getListStudentService = async (pageSize, current) => {
    const results = await axios.get(`${config.service_host}/users/get-all-student`, {
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
    getListStudentService
}