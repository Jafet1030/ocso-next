import axios from "axios";
const CountPage = async () => {
    const countLocations = await axios.get("http://127.0.0.1:4000/locations");
    return "hay tantas locations: " + countLocations?.data?.length;
}

export default CountPage;