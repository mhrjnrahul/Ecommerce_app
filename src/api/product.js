import axios from "axios";

const API_URL = "https://fakestoreapi.com/products"; 

const fetchProducts = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log("Error fetching products:", error);
        throw error;
    }
}

export default fetchProducts