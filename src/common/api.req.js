import HttpRequest from '@/common/axios'
import config from '@/confing'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

const axios = new HttpRequest(baseUrl)
export default axios
