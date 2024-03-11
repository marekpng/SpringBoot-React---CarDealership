// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const CarDetail = () => {
//     const { id } = useParams();
//     const [carDetail, setCarDetail] = useState(null);
//     const [reviews, setReviews] = useState([]);
//     const [showReviews, setShowReviews] = useState(false);
//     const [showAddReviewForm, setShowAddReviewForm] = useState(false);
//     const [userEmail, setUserEmail] = useState('');
//     const [description, setDescription] = useState('');

//     useEffect(() => {
//         const fetchCarDetail = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/api/car/${id}`);
//                 setCarDetail(response.data);
//             } catch (error) {
//                 console.error('Error fetching car detail:', error);
//             }
//         };

//         fetchCarDetail();
//     }, [id]);


    
//     const handleShowReviews = async () => {
//         try {
//             if (!showReviews) {
//                 const response = await axios.get(`http://localhost:8080/api/review/${id}`);
//                 setReviews(response.data);
//             }
//             setShowReviews(prevShowReviews => !prevShowReviews);
//         } catch (error) {
//             console.error('Error fetching reviews:', error);
//         }
//     };
    

//     const handleDeleteReview = async (reviewId) => {
//         const confirmDelete = window.confirm('Naozaj chcete vymazať túto recenziu?');
//         if (confirmDelete) {
//             try {
//                 await axios.delete(`http://localhost:8080/api/review/${reviewId}`);
                
//                 setReviews(reviews.filter(review => review.id !== reviewId));
//             } catch (error) {
//                 console.error('Error deleting review:', error);
//             }
//         }
//     };


//     if (!carDetail) {
//         return <div>Loading...</div>;
//     }





//     const handleAddReview = async () => {
//         try {
//             const response = await axios.post('http://localhost:8080/api/review', {
//                 userEmail: userEmail,
//                 description: description,
//                 car_entity_id: id,
//                 date: new Date().toISOString()
//             });

            
//             handleShowReviews();
//             setUserEmail('');
//             setDescription('');
//             setShowAddReviewForm(false);
//         } catch (error) {
//             console.error('Error adding review:', error);
//         }
//     };


//     return (
//         <div className="car-detail">
//       <h2>{carDetail.brand} {carDetail.model}</h2>
//       <img src={carDetail.image} alt={carDetail.brand} />
//       <p><strong>Price:</strong> {carDetail.price} €</p>
//       <p><strong>Year:</strong> {carDetail.year}</p>
//       <p><strong>Description:</strong> {carDetail.description}</p>
//       <h3>Vlastnosti auta:</h3>
//             <ul>
//                 {carDetail.featureIDs.map(featureId => {
//                     const feature = features.find(f => f.id === featureId);
//                     return <li key={featureId}>{feature ? feature.featureName : 'Unknown Feature'}</li>;
//                 })}
//             </ul>
//       <div className="contact-info">
//         <h3 style={{color: 'black'}}>Kontaktne informacie</h3>
//         <p>Pre viac informacii prosim kontaktujte nasledovne:</p>
//         <p><strong>Phone:</strong> +1234567890</p>
//         <p><strong>Email:</strong> info@example.com</p>
//       </div>


//       <button className="btn btn-success" onClick={() => setShowAddReviewForm(!showAddReviewForm)}>{showAddReviewForm ? 'Skryt' : 'Pridat recenziu'}</button>
//             {showAddReviewForm && (
//                 <form onSubmit={handleAddReview}>
//                     <h3 style={{color: 'black'}}>Pridať recenziu</h3>
//                     <div className="form-group">
//                         <label htmlFor="userEmail" style={{ color: 'black' }}>Email address</label>
//                         <input type="email" className="form-control" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" />
//                     </div>
//                     <div className="form-group">
//                         <label htmlFor="description" style={{ color: 'black' }}>Popis</label>
//                         <textarea className="form-control" id="description" rows="3" value={description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}></textarea>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Odoslať recenziu</button>
//                 </form>
//             )}





//       <button className='btn btn-primary' onClick={handleShowReviews}>{showReviews ? 'Skryť recenzie' : 'Zobraziť recenzie'}</button>
//             {showReviews && (
//                 <div>
//                     <h3 style={{color: 'black'}}>Recenzie</h3>
//                     {reviews.length > 0 ? (
//                         <ul>
//                             {reviews.map(review => (
                                
//                                 <div className="card text-white bg-dark mb-3 ">
//                                 <div className="card-header">
//                                    <h3>Pouzivatel: {review.userEmail}</h3> 
//                                 </div>
//                                 <div className="card-body">
//                                     <h5 className="card-title">Popis: {review.description}</h5>
//                                     <h5 className="card-title">Datum pridania: {new Date(review.date).toLocaleDateString()}</h5>
//                                     <i className="bi bi-trash"></i>
//                                     <button className='btn btn-danger' onClick={() => handleDeleteReview(review.id)}>Vymazat recenziu</button>
//                                 </div>
//                                 </div>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p>Auto nemá žiadnu recenziu.</p>
//                     )}
//                 </div>
//             )}

//     </div>
//     );
// };

// export default CarDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CarDetail = () => {
    const { id } = useParams();
    const [carDetail, setCarDetail] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [showReviews, setShowReviews] = useState(false);
    const [showAddReviewForm, setShowAddReviewForm] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [description, setDescription] = useState('');
    const [features, setFeatures] = useState([]); // Nový stav pre vlastnosti auta

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

    // Získanie a zobrazenie vlastností auta
    useEffect(() => {
        const fetchFeatures = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/features`);
                setFeatures(response.data);
            } catch (error) {
                console.error('Error fetching features:', error);
            }
        };

        fetchFeatures();
    }, []);

    // Funkcia na zobrazenie recenzií
    const handleShowReviews = async () => {
        try {
            if (!showReviews) {
                const response = await axios.get(`http://localhost:8080/api/review/${id}`);
                setReviews(response.data);
            }
            setShowReviews(prevShowReviews => !prevShowReviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
        }
    };

    // Funkcia na pridanie recenzie
    const handleAddReview = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/review', {
                userEmail: userEmail,
                description: description,
                car_entity_id: id,
                date: new Date().toISOString()
            });
            
            handleShowReviews();
            setUserEmail('');
            setDescription('');
            setShowAddReviewForm(false);
        } catch (error) {
            console.error('Error adding review:', error);
        }
    };

    // Funkcia na odstránenie recenzie
    const handleDeleteReview = async (reviewId) => {
        const confirmDelete = window.confirm('Naozaj chcete vymazať túto recenziu?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8080/api/review/${reviewId}`);
                setReviews(reviews.filter(review => review.id !== reviewId));
            } catch (error) {
                console.error('Error deleting review:', error);
            }
        }
    };

    // Zobrazenie načítavania, pokiaľ sa načítavajú údaje o aute
    if (!carDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="car-detail">
            <h2>{carDetail.brand} {carDetail.model}</h2>
            <img src={carDetail.image} alt={carDetail.brand} />
            <p><strong>Price:</strong> {carDetail.price} €</p>
            <p><strong>Year:</strong> {carDetail.year}</p>
            <p><strong>Description:</strong> {carDetail.description}</p>
            {carDetail.featureIDs.length > 0 && (
                <div>
                    <h3 style={{color: 'black'}}>Vlastnosti auta:</h3>
                    <ul style={{color: 'black'}}>
                        {carDetail.featureIDs.map(featureId => {
                            const feature = features.find(f => f.id === featureId);
                            return <li key={featureId}>{feature ? feature.featureName : 'Unknown Feature'}</li>;
                        })}
                    </ul>
                </div>
            )}

            
            
            <div className="contact-info">
                <h3 style={{ color: 'black' }}>Kontaktne informacie</h3>
                <p>Pre viac informacii prosim kontaktujte nasledovne:</p>
                <p><strong>Phone:</strong> +1234567890</p>
                <p><strong>Email:</strong> info@example.com</p>
            </div>

            

            <button className="btn btn-success" onClick={() => setShowAddReviewForm(!showAddReviewForm)}>{showAddReviewForm ? 'Skryt' : 'Pridat recenziu'}</button>
            {showAddReviewForm && (
                <form onSubmit={handleAddReview}>
                    <h3 style={{ color: 'black' }}>Pridať recenziu</h3>
                    <div className="form-group">
                        <label htmlFor="userEmail" style={{ color: 'black' }}>Email address</label>
                        <input type="email" className="form-control" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description" style={{ color: 'black' }}>Popis</label>
                        <textarea className="form-control" id="description" rows="3" value={description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Odoslať recenziu</button>
                </form>
            )}

            <button className='btn btn-primary' onClick={handleShowReviews}>{showReviews ? 'Skryť recenzie' : 'Zobraziť recenzie'}</button>
            {showReviews && (
                <div>
                    <h3 style={{ color: 'black' }}>Recenzie</h3>
                    {reviews.length > 0 ? (
                        <ul>
                            {reviews.map(review => (
                                <div className="card text-white bg-dark mb-3 ">
                                    <div className="card-header">
                                        <h3>Používateľ: {review.userEmail}</h3>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">Popis: {review.description}</h5>
                                        <h5 className="card-title">Datum pridania: {new Date(review.date).toLocaleDateString()}</h5>
                                        <button className='btn btn-danger' onClick={() => handleDeleteReview(review.id)}>Vymazať recenziu</button>
                                    </div>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p>Auto nemá žiadnu recenziu.</p>
                    )}
                </div>
            )}

        </div>
    );
};

export default CarDetail;
