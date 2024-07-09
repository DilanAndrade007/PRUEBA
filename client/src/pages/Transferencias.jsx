import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Message, Button, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";

const Transferencias = () => {
    return (
        <div>
                <main>                
                <section className="transferencias-section">
                    <div className="transfer-container">
                        <h1>Transferencias Directas</h1>
                        <div className="account-info">
                            <h2>Cuenta de Ahorro</h2>
                        </div>
                        <form action="#" method="POST" className="transfer-form">
                            <div className="form-group">
                                <label htmlFor="amount">Monto</label>
                                <div className="amount-input">
                                    <span>$</span>
                                    <input type="number" id="amount" name="amount" min="0" step="0.01" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="beneficiary-name">Beneficiario</label>
                                <input type="text" id="beneficiary-name" name="beneficiary-name" placeholder="Nombre del beneficiario" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="account-number">Número de cuenta</label>
                                <input type="text" id="account-number" name="account-number" placeholder="Número de cuenta" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripción</label>
                                <textarea id="description" name="description" placeholder="Descripción (opcional)" maxLength="150"></textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="notification">Notificación</label>
                                <input type="email" id="notification" name="notification" placeholder="Correo electrónico (Opcional)" />
                            </div>
                            <div className="form-actions">
                                <button type="reset">Limpiar</button>
                                <button type="submit">Continuar</button>
                            </div>
                        </form>
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
                    background-color: #f0f4f8; /* Fondo gris claro */
                }
                .page-header {
                    text-align: center;
                    margin: 20px 0;
                }
                .page-header h1 {
                    font-size: 3em;
                    color: #003366; /* Azul oscuro del logo EPN */
                    text-shadow: 2px 2px 5px rgba(0,0,0,0.2);
                    border-bottom: 2px solid #d32f2f; /* Rojo del logo EPN */
                    padding-bottom: 10px;
                    display: inline-block;
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
                    background-color: white;
                    transition: transform 0.3s;
                }
                .card:hover {
                    transform: scale(1.05);
                }
                .image-container {
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    border-bottom: 1px solid #eee;
                    margin-bottom: 15px;
                }
                .social-media-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .facebook-card {
                    background-color: #3b5998; /* Azul de Facebook */
                    color: white;
                }
                .instagram-card {
                    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                    color: white;
                }
                .twitter-card {
                    background-color: #1da1f2; /* Azul de Twitter */
                    color: white;
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

                /* Estilos para la sección de transferencias */
                .transferencias-section {
                    margin: 40px 0;
                    text-align: center;
                }
                .transfer-container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 80%;
                    margin: auto;
                }
                .transfer-container h1 {
                    font-size: 24px;
                    margin-bottom: 20px;
                }
                .account-info {
                    background-color: #f9f9f9;
                    padding: 15px;
                    border-radius: 8px;
                    margin-bottom: 20px;
                    text-align: center;
                }
                .account-info h2 {
                    margin: 0;
                    font-size: 18px;
                    color: #333;
                }
                .account-info p {
                    margin: 5px 0;
                    font-size: 16px;
                    color: #666;
                }
                .transfer-form {
                    display: flex;
                    flex-direction: column;
                }
                .form-group {
                    margin-bottom: 15px;
                    text-align: left;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: bold;
                }
                .amount-input {
                    display: flex;
                    align-items: center;
                }
                .amount-input span {
                    background-color: #e9e9e9;
                    padding: 8px;
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                }
                .amount-input input {
                    flex: 1;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-left: 0;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
                input, textarea {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                textarea {
                    resize: none;
                }
                .form-actions {
                    display: flex;
                    justify-content: space-between;
                }
                .form-actions button {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                button[type="reset"] {
                    background-color: #ccc;
                    color: #fff;
                }
                button[type="submit"] {
                    background-color: #ffcc00;
                    color: #fff;
                }
            `}</style>
        </div>
    );
};

export default Transferencias;

