import axios from "axios";

const instance=axios.create({
    baseURL:'http://localhost:8080/Spring_POS_war/'
})
export default instance;