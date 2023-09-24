import { MdLocationOn } from 'react-icons/md';
import { AiOutlineDollar } from 'react-icons/ai';

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title"> {job_title} </h2>
        <p> {company_name} </p>
        <div>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] hover:bg-secondary hover:text-primary hover:duration-200  mr-4 text-[#7E90FE]">
            {' '}
            {remote_or_onsite}{' '}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90Fe] hover:bg-secondary hover:text-primary hover:duration-200  mr-4 text-[#7E90FE]">
            {' '}
            {job_type}{' '}
          </button>
        </div>
        <div className="mt-4 flex items-center">
          <h2 className="flex mr-4">
            <MdLocationOn className="text-3xl m-2"></MdLocationOn>
          </h2>
          <h2 className="flex">
            <AiOutlineDollar className="text-2xl"></AiOutlineDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions ">
          <button className="btn btn-primary"> View Details </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
