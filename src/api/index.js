import axios from 'axios'
import md5 from 'js-md5'

export const register = (registerform) => {
  return axios.get('/register', {
    params: registerform
  })
}

export const login = (loginform) => {
  return axios.get('/login', {
    params: loginform
  })
}

export const getGoodsList = () => {
  return axios.get(`/cat?_token=${Cookies.get('Token')}`)
}

export const getAssignGoods = (cid) => {
  return axios.get(`/cat/${cid}?_token=${Cookies.get('Token')}`)
}

export const getAppointGoods = (id) => {
  return axios.get(`/goods/${id}?_token=${Cookies.get('Token')}`)
}

export const addCart = (addInfo) => {
  return axios.post(`/cart?_token=${Cookies.get('Token')}`, addInfo)
}

export const getCart = () => {
  return axios.get(`/cart?_token=${Cookies.get('Token')}`)
}

export const delCart = (id) => {
  return axios.delete(`/cart/${id}?_token=${Cookies.get('Token')}`)
}

export const getAddress = () => {
  return axios.get(`/address?_token=${Cookies.get('Token')}`)
}

export const setDefaultAddress = (id) => {
  return axios.put(`address/setDefaultAddress/${id}?_token=${Cookies.get('Token')}`)
}

export const AddAddress = (addressinfo) => {
  return axios.post(`/address?_token=${Cookies.get('Token')}`, addressinfo)
}
