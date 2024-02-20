import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCarForm = () => {
    const navigate = useNavigate();
    const [carData, setCarData] = useState({
        brand: '',
        model: '',
        price: '',
        year: '',
        description: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/cars', carData);
            alert('Auto bolo úspešne pridané!');
            navigate('/'); // Presmerovanie na domovskú stránku po úspešnom pridaní auta
        } catch (error) {
            console.error('Chyba pri pridávaní auta:', error);
            alert('Nastala chyba pri pridávaní auta. Skúste to prosím znova.');
        }
    };

    return (
        <div>
            <h2>Pridať auto</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Značka:</label>
                    <input type="text" name="brand" value={carData.brand} onChange={handleChange} />
                </div>
                <div>
                    <label>Model:</label>
                    <input type="text" name="model" value={carData.model} onChange={handleChange} />
                </div>
                <div>
                    <label>Cena:</label>
                    <input type="number" name="price" value={carData.price} onChange={handleChange} />
                </div>
                <div>
                    <label>Rok výroby:</label>
                    <input type="number" name="year" value={carData.year} onChange={handleChange} />
                </div>
                <div>
                    <label>Popis:</label>
                    <textarea name="description" value={carData.description} onChange={handleChange} />
                </div>
                <div>
                    <label>Obrázok (URL):</label>
                    <input type="text" name="image" value={carData.image} onChange={handleChange} />
                </div>
                <button type="submit">Pridaj auto</button>
            </form>
        </div>
    );
};

export default AddCarForm;
