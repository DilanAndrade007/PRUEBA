import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-100">
      <section className="bg-blue-900 text-white flex flex-col md:flex-row justify-between items-center min-h-screen p-10">
        <div className="md:w-1/2 flex flex-col justify-center items-start space-y-6">
          <span className="uppercase tracking-wider text-sm">Primero Tú</span>
          <h1 className="text-5xl font-bold">
            Abre tu cuenta en minutos, sin ir al banco y sin trámites complicados
          </h1>
          <div className="space-y-4">
            <Link
              className="bg-pink-600 text-white px-6 py-3 rounded-md inline-block hover:bg-pink-700 transition-colors"
              to="/register"
            >
              Contrata una Cuenta →
            </Link>
            <Link
              className="border border-white text-white px-6 py-3 rounded-md inline-block hover:bg-white hover:text-blue-900 transition-colors"
              to="/login"
            >
              Ingresa a Banca Personas →
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src="public/meetAndes.webp" alt="Tarjeta de Crédito" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <section className="bg-white flex flex-col md:flex-row justify-center items-center py-20">
        <div className="md:w-1/2 p-10 flex justify-center">
          <img src="public/paypal.jpg" alt="PayPal Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl py-2 font-bold text-gray-800">Dile hola a PayPal. Tu billetera digital segura.</h2>
          <p className="text-md text-gray-600">
            PayPal es una forma fácil, segura y privada de pagar en tiendas. Disponible con tus tarjetas American Express y Mastercard en tu iPhone y Apple Watch.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 flex flex-col md:flex-row justify-center items-center py-20">
        <div className="md:w-1/2 p-10">
          <img src="public/cardAndes.webp" alt="PacificID Image" className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl py-2 font-bold text-gray-800">PacificID</h2>
          <p className="text-md text-gray-600">
            ¡Realizar tus transacciones es ahora mucho más fácil con PacificID!
            Genera claves transaccionales con esta aplicación móvil para administrar de forma
            rápida, segura y cómoda tus pagos y cobros.
          </p>
          <Link
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-blue-700 transition-colors"
            to="/more-info"
          >
            Conoce más →
          </Link>
        </div>
      </section>

      <section className="bg-white flex flex-col md:flex-row justify-center items-center py-20">
        <div className="md:w-1/2 p-10">
          <h2 className="text-4xl py-2 font-bold text-gray-800">Bolsa de bienes en venta</h2>
          <p className="text-md text-gray-600">
            Descubre las oportunidades de inversión en bienes muebles e inmuebles.
          </p>
          <Link
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-blue-700 transition-colors"
            to="/more-info"
          >
            Conoce los bienes →
          </Link>
        </div>
        <div className="md:w-1/2 p-10 flex justify-center">
          <img src="/images/bienes.jpg" alt="Bienes en venta" className="rounded-lg shadow-lg" />
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold mb-4">Productos y Servicios</h4>
            <ul>
              <li><a href="#" className="hover:underline">Cuenta de Ahorros</a></li>
              <li><a href="#" className="hover:underline">Multicrédito</a></li>
              <li><a href="#" className="hover:underline">American Express</a></li>
              <li><a href="#" className="hover:underline">Mastercard</a></li>
              <li><a href="#" className="hover:underline">Visa</a></li>
              <li><a href="#" className="hover:underline">Membership Rewards</a></li>
              <li><a href="#" className="hover:underline">Pólizas de Inversión</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Acerca de EPN</h4>
            <ul>
              <li><a href="#" className="hover:underline">Conócenos</a></li>
              <li><a href="#" className="hover:underline">Transparencia</a></li>
              <li><a href="#" className="hover:underline">Sostenibilidad</a></li>
              <li><a href="#" className="hover:underline">Gobierno Corporativo</a></li>
              <li><a href="#" className="hover:underline">Accionistas</a></li>
              <li><a href="#" className="hover:underline">Inversionistas</a></li>
              <li><a href="#" className="hover:underline">Trabaja con Nosotros</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Canales de Atención</h4>
            <ul>
              <li><a href="#" className="hover:underline">Teléfono: 04 37 30 100</a></li>
              <li><a href="#" className="hover:underline">Celular: 099 37 30 100</a></li>
              <li><a href="#" className="hover:underline">Puntos de Atención</a></li>
              <li><a href="#" className="hover:underline">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:underline">Reclamos</a></li>
              <li><a href="#" className="hover:underline">Whatsapp</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Conoce más Sobre</h4>
            <ul>
              <li><a href="#" className="hover:underline">Programa de Educación Financiera</a></li>
              <li><a href="#" className="hover:underline">COSEDE Protegemos tu dinero</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto text-center mt-8">
          <p>&copy; 2024 Escuela Politécnica Nacional. Todos los derechos reservados.</p>
          <p>
            <Link className="underline hover:text-yellow-400" to="/privacy-policy">Política de Privacidad</Link> | 
            <Link className="underline hover:text-yellow-400" to="/terms-of-service"> Términos de Servicio</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
