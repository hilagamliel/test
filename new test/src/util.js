import axios from 'axios';

export const GetAllProfiles = () => {
    return axios.get("http://localhost:4000/users");
}