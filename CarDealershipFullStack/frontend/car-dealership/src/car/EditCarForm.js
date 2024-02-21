import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditCarForm = () => {
    const { id } = useParams(); 
    const [car, setCar] = useState(null);
    const [formData, setFormData] = useState({
        brand: '',
        model: '',
        price: 0,
        year: 0,
        description: '',
        image: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCar = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/car/${id}`);
                setCar(response.data);
                
                setFormData({
                    brand: response.data.brand,
                    model: response.data.model,
                    price: response.data.price,
                    year: response.data.year,
                    description: response.data.description,
                    image: response.data.image
                });
            } catch (error) {
                console.error('Error fetching car:', error);
            }
        };

        fetchCar();
    }, [id]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8080/api/car/${id}`, formData);
            navigate('/'); 
        } catch (error) {
            console.error('Error updating car:', error);
        }
    };

    if (!car) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="container mt-4">
    <div className="card bg-dark text-white">
        <div className="card-body">
            <h2 className="card-title">Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="brand">Brand:</label>
                    <input type="text" className="form-control" id="brand" name="brand" value={formData.brand} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="model">Model:</label>
                    <input type="text" className="form-control" id="model" name="model" value={formData.model} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="price">Price:</label>
                    <input type="number" className="form-control" id="price" name="price" value={formData.price} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="year">Year:</label>
                    <input type="number" className="form-control" id="year" name="year" value={formData.year} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="description">Description:</label>
                    <textarea className="form-control" id="description" name="description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="image">Image URL:</label>
                    <input type="text" className="form-control" id="image" name="image" value={formData.image} onChange={handleInputChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>

    );
};

export default EditCarForm;
