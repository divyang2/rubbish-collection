import axios from 'axios';

const API_URL = 'https://iweb.itouchvision.com/portal/itouchvision/kmbd/';

export const apiHeaders = async () => {
  return {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
};

export const getApi = async (url) => axios.get(`${API_URL}${url}`, await apiHeaders());

export const postApi = async (url, apiData) => axios.post(`${API_URL}${url}`, apiData, await apiHeaders());

export const putApi = async (url, apiData) => axios.put(`${API_URL}${url}`, apiData, await apiHeaders());

export const patchApi = async (url, apiData) => axios.patch(`${API_URL}${url}`, apiData, await apiHeaders());

export const deleteApi = async (url) => axios.delete(`${API_URL}${url}`, await apiHeaders());
