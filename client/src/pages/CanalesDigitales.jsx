import React from 'react';

const CanalesDigitales = () => {
    return (
        <div>
            <header>
                <h1>Redes Digitales</h1>
            </header>
            <main>
                <section className="social-media-cards">
                    <div className="card facebook-card">
                        <img src="path_to_facebook_image" alt="Facebook" className="social-media-image" />
                        <h2>Facebook</h2>
                        <p>Únete a nuestra comunidad en Facebook y mantente actualizado con las últimas noticias y promociones.</p>
                        <a href="https://www.facebook.com/tu_pagina" className="social-media-link" target="_blank" rel="noopener noreferrer">Síguenos en Facebook</a>
                    </div>
                    <div className="card instagram-card">
                        <img src="path_to_instagram_image" alt="Instagram" className="social-media-image" />
                        <h2>Instagram</h2>
                        <p>Sigue nuestro perfil de Instagram para ver fotos y videos exclusivos, y participa en nuestros concursos.</p>
                        <a href="https://www.instagram.com/tu_pagina" className="social-media-link" target="_blank" rel="noopener noreferrer">Síguenos en Instagram</a>
                    </div>
                    <div className="card twitter-card">
                        <img src="path_to_twitter_image" alt="Twitter" className="social-media-image" />
                        <h2>Twitter</h2>
                        <p>Conéctate con nosotros en Twitter para recibir actualizaciones en tiempo real y unirte a la conversación.</p>
                        <a href="https://www.twitter.com/tu_pagina" className="social-media-link" target="_blank" rel="noopener noreferrer">Síguenos en Twitter</a>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 AndesInvest</p>
            </footer>

            {/* Estilos en línea para propósitos demostrativos */}
            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                }
                .social-media-cards {
                    display: flex;
                    justify-content: space-around;
                    margin: 20px 0;
                }
                .card {
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    text-align: center;
                    width: 30%;
                    padding: 20px;
                }
                .facebook-card {
                    background-color: #3b5998;
                    color: white;
                }
                .instagram-card {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                }
                .twitter-card {
                    background-color: #1da1f2;
                    color: white;
                }
                .social-media-image {
                    max-width: 100%;
                    height: auto;
                }
                .social-media-link {
                    display: inline-block;
                    margin-top: 10px;
                    padding: 10px 15px;
                    border-radius: 5px;
                    background-color: rgba(255, 255, 255, 0.2);
                    color: white;
                    text-decoration: none;
                    transition: background-color 0.3s;
                }
                .social-media-link:hover {
                    background-color: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </div>
    );
};

export default CanalesDigitales;
