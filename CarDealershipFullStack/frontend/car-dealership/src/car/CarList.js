// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import {useNavigate, Link } from 'react-router-dom';

// import './../styles/CarList.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const CarList = () => {
   
//     const [cars, setCars] = useState([]);

    

//     const navigate = useNavigate()

//     const handleAddCarClick = () => {
//         navigate('/add-car'); 
//     };

    

//     const handleDeleteCar = async (carId) => {
//       const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
//       if (isConfirmed) {
//           try {
//               await axios.delete(`http://localhost:8080/api/car/${carId}`);
              
//               setCars(cars.filter(car => car.id !== carId));
//               alert('Auto bolo úspešne odstránené.');
//           } catch (error) {
//               console.error('Chyba pri odstraňovaní auta:', error);
//           }
//       }
//   };
  

//     useEffect(() => {
//       const fetchData = async () => {
//           try {
//               const response = await axios.get('http://localhost:8080/api/cars');
//               setCars(response.data);
//           } catch (error) {
//               console.error('Error fetching cars:', error);
//           }
//       };

//       fetchData();
//   }, []); 



//     return (
   
//       <div className="container">
//             <div className="row">
//                 {cars.map((car, index) => (
//                     <div key={index} className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <Link style={{ textDecoration: 'none', color:'black'}} to={`/car/detail/${car.id}`}>
//                                 <img src={car.image} alt={car.brand} className="card-img-top" />
//                                 <div className="card-body">
//                                     <h2 className="card-title" >{car.brand} {car.model}</h2>
//                                     <p className="card-text">Price: {car.price}</p>
//                                     <p className="card-text" >Year: {car.year}</p>
//                                 </div>
//                             </Link>
//                             <div className="card-footer">
//                                 <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color:'black'}} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
//                                 <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
//         </div>


//     );
//   };
  
//   export default CarList;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// import './../styles/CarList.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const CarList = () => {

//     const [cars, setCars] = useState([]);
//     const [filterParams, setFilterParams] = useState({
//         brand: '',
//         fromYear: '',
//         toYear: '',
//         limit: 10
//     });

//     const navigate = useNavigate();

//     const handleAddCarClick = () => {
//         navigate('/add-car');
//     };

//     const handleDeleteCar = async (carId) => {
//         const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
//         if (isConfirmed) {
//             try {
//                 await axios.delete(`http://localhost:8080/api/car/${carId}`);

//                 setCars(cars.filter(car => car.id !== carId));
//                 alert('Auto bolo úspešne odstránené.');
//             } catch (error) {
//                 console.error('Chyba pri odstraňovaní auta:', error);
//             }
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/cars', { params: filterParams });
//                 setCars(response.data);
//             } catch (error) {
//                 console.error('Error fetching cars:', error);
//             }
//         };

//         fetchData();
//     }, [filterParams]);

//     const handleFilterChange = (e) => {
//         setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <label htmlFor="brand">Brand:</label>
//                     <input type="text" className="form-control" id="brand" name="brand" value={filterParams.brand} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="fromYear">From Year:</label>
//                     <input type="number" className="form-control" id="fromYear" name="fromYear" value={filterParams.fromYear} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="toYear">To Year:</label>
//                     <input type="number" className="form-control" id="toYear" name="toYear" value={filterParams.toYear} onChange={handleFilterChange} />
//                 </div>
//             </div>
//             <div className="row mt-2">
//                 {cars.map((car, index) => (
//                     <div key={index} className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <Link style={{ textDecoration: 'none', color: 'black' }} to={`/car/detail/${car.id}`}>
//                                 <img src={car.image} alt={car.brand} className="card-img-top" />
//                                 <div className="card-body">
//                                     <h2 className="card-title">{car.brand} {car.model}</h2>
//                                     <p className="card-text">Price: {car.price}</p>
//                                     <p className="card-text">Year: {car.year}</p>
//                                 </div>
//                             </Link>
//                             <div className="card-footer">
//                                 <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
//                                 <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
//         </div>
//     );
// };

// export default CarList;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// import './../styles/CarList.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const CarList = () => {
//     const [cars, setCars] = useState([]);
//     const [filterParams, setFilterParams] = useState({
//         brand: '',
//         fromYear: '',
//         toYear: '',
//         limit: 10
//     });
//     const [brands, setBrands] = useState([]); // Add state to store fetched brands

//     const navigate = useNavigate();

//     const handleAddCarClick = () => {
//         navigate('/add-car');
//     };

//     const handleDeleteCar = async (carId) => {
//         const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
//         if (isConfirmed) {
//             try {
//                 await axios.delete(`http://localhost:8080/api/car/${carId}`);

//                 setCars(cars.filter(car => car.id !== carId));
//                 alert('Auto bolo úspešne odstránené.');
//             } catch (error) {
//                 console.error('Chyba pri odstraňovaní auta:', error);
//             }
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/cars');
//                 setCars(response.data);

//                 // Fetch available brands
//                 const brandResponse = await axios.get('http://localhost:8080/api/brands');
//                 setBrands(brandResponse.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleFilterChange = (e) => {
//         setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
//     };

//     const handleFilterSubmit = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/cars', { params: filterParams });
//             setCars(response.data);
            
//         } catch (error) {
//             console.error('Error filtering cars:', error);
//         }
//     };

//     return (
//         <div className="container">
            
//             <div className="row">
//                 <div className="col-md-4">
//                     <label htmlFor="brand">Brandd:</label>
//                     <select className="form-select" id="brand" name="brand" value={filterParams.brand} onChange={handleFilterChange}>
//                         <option value="">Vyberte značku</option>
//                         {brands.map((brand, index) => (
//                             <option key={index} value={brand}>{brand}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="fromYear">From Year:</label>
//                     <input type="number" className="form-control" id="fromYear" name="fromYear" value={filterParams.fromYear} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="toYear">To Year:</label>
//                     <input type="number" className="form-control" id="toYear" name="toYear" value={filterParams.toYear} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-12 mt-3">
//                     <button className="btn btn-primary" onClick={handleFilterSubmit}>Filtrovať</button>
//                 </div>
//             </div>
//             <div className="row mt-2">
//                 {cars.map((car, index) => (
//                     <div key={index} className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <Link style={{ textDecoration: 'none', color: 'black' }} to={`/car/detail/${car.id}`}>
//                                 <img style={{ height: '233px', objectFit: 'cover' }} src={car.image} alt={car.brand} className="card-img-top" />
//                                 <div className="card-body">
//                                     <h2 className="card-title">{car.brand} {car.model}</h2>
//                                     <p className="card-text">Price: {car.price}</p>
//                                     <p className="card-text">Year: {car.year}</p>
//                                 </div>
//                             </Link>
//                             <div className="card-footer">
//                                 <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
//                                 <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
//         </div>
//     );
// };

// export default CarList;




// ZATIAL NAJLEPSIE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';

// import './../styles/CarList.css'

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const CarList = () => {
//     const [cars, setCars] = useState([]);
//     const [filterParams, setFilterParams] = useState({
//         brand: '',
//         fromYear: '',
//         toYear: '',
//         limit: 10
//     });
//     const [brands, setBrands] = useState([]);

//     const navigate = useNavigate();

//     const handleAddCarClick = () => {
//         navigate('/add-car');
//     };

//     const handleDeleteCar = async (carId) => {
//         const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
//         if (isConfirmed) {
//             try {
//                 await axios.delete(`http://localhost:8080/api/car/${carId}`);

//                 setCars(cars.filter(car => car.id !== carId));
//                 alert('Auto bolo úspešne odstránené.');
//             } catch (error) {
//                 console.error('Chyba pri odstraňovaní auta:', error);
//             }
//         }
//     };

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://localhost:8080/api/cars', { params: { limit: 10 } });
//                 setCars(response.data);

//                 const brandResponse = await axios.get('http://localhost:8080/api/brands');
//                 setBrands(brandResponse.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleFilterChange = (e) => {
//         setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
//     };

//     const handleFilterSubmit = async () => {
//         try {
//             const response = await axios.get('http://localhost:8080/api/cars', { params: filterParams });
//             setCars(response.data);
//         } catch (error) {
//             console.error('Error filtering cars:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-4">
//                     <label htmlFor="brand">Brand:</label>
//                     <select className="form-select" id="brand" name="brand" value={filterParams.brand} onChange={handleFilterChange}>
//                         <option value="">Vyberte značku</option>
//                         {brands.map((brand, index) => (
//                             <option key={index} value={brand}>{brand}</option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="fromYear">From Year:</label>
//                     <input type="number" className="form-control" id="fromYear" name="fromYear" value={filterParams.fromYear} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-4">
//                     <label htmlFor="toYear">To Year:</label>
//                     <input type="number" className="form-control" id="toYear" name="toYear" value={filterParams.toYear} onChange={handleFilterChange} />
//                 </div>
//                 <div className="col-md-12 mt-3">
//                     <button className="btn btn-primary" onClick={handleFilterSubmit}>Filtrovať</button>
//                 </div>
//             </div>
//             <div className="row mt-2">
//                 {cars.map((car, index) => (
//                     <div key={index} className="col-lg-4 col-md-6 mb-4">
//                         <div className="card h-100">
//                             <Link style={{ textDecoration: 'none', color: 'black' }} to={`/car/detail/${car.id}`}>
//                                 <img style={{ height: '233px', objectFit: 'cover' }} src={car.image} alt={car.brand} className="card-img-top" />
//                                 <div className="card-body">
//                                     <h2 className="card-title">{car.brand} {car.model}</h2>
//                                     <p className="card-text">Price: {car.price}</p>
//                                     <p className="card-text">Year: {car.year}</p>
//                                 </div>
//                             </Link>
//                             <div className="card-footer">
//                                 <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
//                                 <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//                 {cars.length === 0 && (
//                     <div className="col-md-12 mt-3">
//                         <p>Žiadne auto nevyhovuje zadaným filtrom.<strong> Prosím vyplňte filter.</strong></p>
//                     </div>
//                 )}
//             </div>
//             <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
//         </div>
//     );
// };

// export default CarList;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './../styles/CarList.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [filterParams, setFilterParams] = useState({
        brand: '',
        fromYear: '',
        toYear: '',
        limit: 10
    });
    const [brands, setBrands] = useState([]);

    const navigate = useNavigate();

    const handleAddCarClick = () => {
        navigate('/add-car');
    };

    const handleDeleteCar = async (carId) => {
        const isConfirmed = window.confirm('Naozaj chcete odstrániť toto auto?');
        if (isConfirmed) {
            try {
                await axios.delete(`http://localhost:8080/api/car/${carId}`);

                setCars(cars.filter(car => car.id !== carId));
                alert('Auto bolo úspešne odstránené.');
            } catch (error) {
                console.error('Chyba pri odstraňovaní auta:', error);
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/cars', { params: { limit: 10 } });
                setCars(response.data);

                const brandResponse = await axios.get('http://localhost:8080/api/brands');
                setBrands(brandResponse.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleFilterChange = (e) => {
        setFilterParams({ ...filterParams, [e.target.name]: e.target.value });
    };

    const handleFilterSubmit = async () => {
        try {
            
            const filter = { ...filterParams };
            if (!filter.brand && !filter.fromYear && !filter.toYear) {
                filter.toYear = '9999'; 
                filter.limit = 15; 
            }

            const response = await axios.get('http://localhost:8080/api/cars', { params: filter });
            setCars(response.data);
        } catch (error) {
            console.error('Error filtering cars:', error);
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <label htmlFor="brand">Brand:</label>
                    <select className="form-select" id="brand" name="brand" value={filterParams.brand} onChange={handleFilterChange}>
                        <option value="">Vyberte značku</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="fromYear">From Year:</label>
                    <input type="number" className="form-control" id="fromYear" name="fromYear" value={filterParams.fromYear} onChange={handleFilterChange} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="toYear">To Year:</label>
                    <input type="number" className="form-control" id="toYear" name="toYear" value={filterParams.toYear} onChange={handleFilterChange} />
                </div>
                <div className="col-md-12 mt-3">
                    <button className="btn btn-primary" onClick={handleFilterSubmit}>Filtrovať</button>
                </div>
            </div>
            <div className="row mt-2">
                {cars.map((car, index) => (
                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                        <div className="card h-100">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={`/car/detail/${car.id}`}>
                                <img style={{ height: '233px', objectFit: 'cover' }} src={car.image} alt={car.brand} className="card-img-top" />
                                <div className="card-body">
                                    <h2 className="card-title">{car.brand} {car.model}</h2>
                                    <p className="card-text">Price: {car.price} €</p>
                                    <p className="card-text">Year: {car.year}</p>
                                </div>
                            </Link>
                            <div className="card-footer">
                                <button className="btn btn-primary"><Link style={{ textDecoration: 'none', color: 'black' }} to={`/edit-car/${car.id}`} className="text-white">Edit Car</Link></button>
                                <button className="btn btn-danger" onClick={() => handleDeleteCar(car.id)}>Odstrániť auto</button>
                            </div>
                        </div>
                    </div>
                ))}
                {cars.length === 0 && (
                    <div className="col-md-12 mt-3">
                        <p>Žiadne auto nevyhovuje zadaným filtrom.<strong> Prosím vyplňte filter.</strong></p>
                    </div>
                )}
            </div>
            <button className="btn btn-primary add-car-button" onClick={handleAddCarClick}>Pridať auto</button>
        </div>
    );
};

export default CarList;
