import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({ email: '', password: '', admin: false });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://localhost:8080/api/user', formData);
            if (response.status === 200) {
                // Uložte token do lokálneho úložiska alebo kontextu, ak je používateľ úspešne zaregistrovaný
                navigate('/login');
            }
        } catch (error) {
            setError('Registrácia zlyhala. Skúste to znova.');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Registrácia</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Heslo</label>
                    <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Registrovať sa</button>
            </form>
        </div>
    );
};

export default RegisterPage;
