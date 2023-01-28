import { Link } from "react-router-dom";

const Header2 = () => {
    return (
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/221000/pexels-photo-221000.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        
        <div className="px-4 py-16 relative h-screen bg-gray-900 bg-opacity-50 mx-auto sm:max-w-xl md:max-w-full  md:px-24 lg:px-8 lg:py-20">
          <div className="relative  max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over a{' '}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-gray-100">lazy dog</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            <ul className='flex justify-center  items-center'>

           <li >
              <Link
                to="/bill"
                className="inline-flex items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-outline focus:outline-none"
                aria-label="Add Bill"
                title="Get Started"
              >
                Get Started
              </Link>
            </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default Header2;