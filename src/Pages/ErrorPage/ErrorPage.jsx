import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Page Not Found | Ashikur Rahman Ashik</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-lg p-8 bg-black rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-white mb-6">
            I apologize for the inconvenience.
          </p>
          <Link to="/" className="flex justify-center space-x-4">
            <button className="bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:scale-105 transition-transform">
              Return to Homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
