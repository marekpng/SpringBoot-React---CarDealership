import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const { id } = useParams();
    const [carDetail, setCarDetail] = useState(null);

    useEffect(() => {
        const fetchCarDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/car/${id}`);
                setCarDetail(response.data);
            } catch (error) {
                console.error('Error fetching car detail:', error);
            }
        };

        fetchCarDetail();
    }, [id]);

    if (!carDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="car-detail">
      <h2>{carDetail.brand} {carDetail.model}</h2>
      <img src={carDetail.image} alt={carDetail.brand} />
      <p><strong>Price:</strong> {carDetail.price}</p>
      <p><strong>Year:</strong> {carDetail.year}</p>
      <p>{carDetail.description}</p>
      <div className="contact-info">
        <h3>Kontaktne informacie</h3>
        <p>Pre viac informacii prosim kontaktujte nasledovne:</p>
        <p><strong>Phone:</strong> +1234567890</p>
        <p><strong>Email:</strong> info@example.com</p>
      </div>
    </div>
    );
};

export default CarDetail;

