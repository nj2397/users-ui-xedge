import axios from "axios";

const fetchList = async () => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        // console.log(response.data);
        return response.data;
    } catch(err) {
        return err.message;
    }       
}

export { fetchList }