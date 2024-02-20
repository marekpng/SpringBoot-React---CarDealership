// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const [values, setValues] = useState({ email: '', password: '' });
//     const [errorMessage, setErrorMessage] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setValues({ ...values, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:8080/api/auth', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(values),
//             });

//             if (!response.ok) {
//                 throw new Error('Pri prihlasovaní nastala chyba.');
//             }

//             // Vynulujeme chybovu spravu, ak bola zobrazena
//             setErrorMessage('');
            
//             // Navigujeme na domovsku stranku
//             navigate('/');
//         } catch (error) {
//             setErrorMessage(error.message);
//         }
//     };

//     return (
//         <div className="offset-4 col-sm-6 mt-5">
//             <h1>Prihlásenie</h1>
//             <form onSubmit={handleSubmit}>
//                 {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">E-mail</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={values.email}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Heslo</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         value={values.password}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Prihlásiť sa</button>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ isLoggedIn, setIsLoggedIn }) => {
    const [values, setValues] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                throw new Error('Pri prihlasovaní nastala chyba.');
            }

            // Vynulujeme chybovu spravu, ak bola zobrazena
            setErrorMessage('');
            
            // Nastavíme isLoggedIn na true
            setIsLoggedIn(true);

            // Navigujeme na domovsku stranku
            navigate('/');
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <div className="offset-4 col-sm-6 mt-5">
            <h1>Prihlásenie</h1>
            <form onSubmit={handleSubmit}>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Heslo</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Prihlásiť sa</button>
            </form>
        </div>
    );
};

export default LoginPage;
