import { useState } from "react";


const UseFetchCar = () => {

    const [carData, setCarData] = useState([]);
    const [loading, setLoading] = useState(false);
    
    function fetchAllCars() {
        try{
            setLoading(true);
            fetch(`http://localhost:8080/cars`)
                .then((response) => response.json())
                .then((car) => {
                    setCarData(car);
                    setLoading(false);
                })
                .catch(error => {
                    console.log('my error', error);
                    setLoading(false)
                })
    
        }
        catch(e){
            console.log(e);
        }
    }
    
    return { fetchAllCars, carData, loading };

}

export default UseFetchCar;

