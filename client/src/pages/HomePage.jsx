import { Link } from "react-router-dom";

function HomePage() {
  return (
<div>
      <section className="bg-red-500 flex justify-center items-center">
        <header className="bg-zinc-800 p-10">
          <h1 className="text-5xl py-2 font-bold">React Tasks</h1>
          <p className="text-md text-slate-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
            fugit doloremque molestias recusandae labore repellat amet dicta tempore
            necessitatibus facilis repellendus voluptas ducimus maiores deserunt sed
            quo ratione provident debitis aut, voluptatem aliquam iste blanditiis
            ex? Voluptatibus, fuga quasi necessitatibus cumque optio error enim,
            officia accusantium vitae doloremque, molestias modi.
          </p>

          <Link
            className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
            to="/register"
          >
            Get Started
          </Link>
        </header>
      </section>
      
      <section className="bg-green-500 flex justify-center items-center py-10">
        <div className="bg-zinc-800 p-10 text-center">
          <h2 className="text-4xl py-2 font-bold">New Section Title</h2>
          <p className="text-md text-slate-400">
            This is a new section added to the homepage. You can use this space to provide
            additional information or features to your users. Feel free to customize this
            section as needed.
          </p>
          <Link
            className="bg-zinc-500 text-white px-4 py-2 rounded-md mt-4 inline-block"
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
