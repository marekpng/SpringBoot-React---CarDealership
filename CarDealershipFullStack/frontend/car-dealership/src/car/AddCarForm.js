
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCarForm = () => {
    const navigate = useNavigate();
    const [carData, setCarData] = useState({
        model: '',
        price: '',
        year: '',
        description: '',
        image: '',
        brand: '',
        featureIDs: []
        
    });
    const [brands, setBrands] = useState([]);
    const [features, setFeatures] = useState([]);


    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/features');
                setFeatures(response.data);
            } catch (error) {
                console.error('Error fetching features:', error);
            }
        };
    
        fetchFeatures();
    }, []);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/brands');
                setBrands(response.data);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        };

        fetchBrands();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
        if (name === 'featureIDs') {
            const selectedFeatures = Array.from(e.target.selectedOptions, option => parseInt(option.value));
            setCarData({ ...carData, [name]: selectedFeatures });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            await axios.post('http://localhost:8080/api/cars', carData);
            
            alert('Auto bolo úspešne pridané!');
            navigate('/'); 
        } catch (error) {
            console.error('Chyba pri pridávaní auta:', error);
            alert('Nastala chyba pri pridávaní auta. Skúste to prosím znova.');
        }
    };

    return (
        <div className="container mt-4">
            <div className="card bg-dark text-white">
                <div className="card-body">
                    <h2 className="card-title">Pridať auto</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Značka:</label>
                            <select className="form-select" name="brand" onChange={handleChange}>
                                <option value="">Vyberte značku</option>
                                {brands.map((brand, index) => (
                                    <option key={index} value={brand}>{brand}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Model:</label>
                            <input type="text" className="form-control" name="model" value={carData.model} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Vlastnosti:</label>
                            <select className="form-select" name="featureIDs" onChange={handleChange} multiple> 
                                <option value="">Vyberte vlastnosť</option>
                                {features.map((feature) => (
                                    <option key={feature.id} value={feature.id}>{feature.featureName}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Cena:</label>
                            <input type="number" className="form-control" name="price" value={carData.price} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rok výroby:</label>
                            <input type="number" className="form-control" name="year" value={carData.year} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Popis:</label>
                            <textarea className="form-control" name="description" value={carData.description} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Obrázok (URL):</label>
                            <input type="text" className="form-control" name="image" value={carData.image} onChange={handleChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Pridaj auto</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCarForm;
