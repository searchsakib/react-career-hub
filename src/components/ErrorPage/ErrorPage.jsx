import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2 className="text-center text-4xl text-red-500">Oops, Error</h2>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
};

export default ErrorPage;
