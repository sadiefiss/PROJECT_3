import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="container mx-auto text-center p-10">
      <h1 className="text-4xl font-bold mb-5">Pennsylvania Native Wildlife</h1>
      <p className="text-xl mb-8">Explore the diverse and fascinating wildlife native to Pennsylvania.</p>
      <Link to="/mammals" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View Mammal Photo List
      </Link>
    </div>
  );
};

export default LandingPage;
