import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg-gray-100">
      <section className="bg-red-500 flex justify-center items-center min-h-screen">
        <header className="bg-white p-10 shadow-lg rounded-lg">
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
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-blue-700 transition-colors"
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
            className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 inline-block hover:bg-blue-700 transition-colors"
            to="/more-info"
          >
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
