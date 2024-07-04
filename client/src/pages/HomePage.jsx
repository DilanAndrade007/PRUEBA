import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-100">
      <section className="bg-blue-700 flex justify-center items-center min-h-screen">
        <header className="bg-white p-10 shadow-lg rounded-lg max-w-3xl">
          <h1 className="text-5xl py-2 font-bold text-gray-800">React Tasks</h1>
          <p className="text-md text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
            fugit doloremque molestias recusandae labore repellat amet dicta tempore
            necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
            quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
            ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
            officia accusantium vitae doloremque, molestias modi.
          </p>
          <Link
            className="bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-yellow-700 transition-colors"
            to="/register"
          >
            Get Started
          </Link>
        </header>
      </section>

      <section className="bg-gray-50 flex justify-center items-center py-20">
        <div className="bg-white p-10 shadow-lg rounded-lg text-center max-w-3xl">
          <h2 className="text-4xl py-2 font-bold text-gray-800">New Section Title</h2>
          <p className="text-md text-gray-600">
            This is a new section added to the homepage. You can use this space to provide
            additional information or features to your users. Feel free to customize this
            section as needed.
          </p>
          <Link
            className="bg-yellow-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-yellow-700 transition-colors"
            to="/more-info"
          >
            Learn More
          </Link>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-10">
            <img src="/mnt/data/image.png" alt="PayPal Image" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 p-10">
            <h2 className="text-4xl py-2 font-bold text-gray-800">Dile hola a PayPal. Tu billetera digital segura.</h2>
            <p className="text-md text-gray-600">
              PayPal es una forma fácil, segura y privada de pagar en tiendas. Disponible con tus tarjetas American Express y Mastercard en tu iPhone y Apple Watch.
            </p>
          </div>
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
