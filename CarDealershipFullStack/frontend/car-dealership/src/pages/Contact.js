import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card p-4">
                        <h2 className="text-center mb-4">Kontakt</h2>
                        <p><strong>Adresa:</strong> Bratislava, Slovensko</p>
                        <p><strong>Telefónne číslo:</strong> +421 123 456 789</p>
                        <p><strong>Email:</strong> info@cardealership.com</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-lg-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe
                            title="Mapa Bratislavy"
                            className="embed-responsive-item"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d266186.8204414572!2d17.042719019899963!3d48.14859661267894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8ef0f9cdd71b%3A0x400af0f6616d990!2sBratislava%2C%20Slovakia!5e0!3m2!1sen!2sus!4v1645318359643!5m2!1sen!2sus"
                            allowFullScreen
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
