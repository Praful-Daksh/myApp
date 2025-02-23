import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaMapMarker} from 'react-icons/fa'

const JobListing = (props) => {

    const [showDescription, setShowDescription] = useState(false);
    const { job } = props;
    let description = job.description;

    if (!showDescription) {
        description = description.substring(0, 120) + '...';
    }
    return (
        <div className="bg-white rounded-xl shadow-md relative">
            <div className="p-4">
                <div className="mb-6">
                    <div className="text-gray-600 my-2">{job.type}</div>
                    <h3 className="text-xl font-bold">{job.company.name}</h3>
                </div>
                <div className="mb-5">{description}
                    <button onClick={() => setShowDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showDescription ? 'See Less' : 'See More'}</button>
                </div>
                <h3 className="text-indigo-500 mb-2">{job.salary} Per Year</h3>
                <div className="border border-gray-100 mb-5"></div>
                <div className="flex flex-col lg:flex-row justify-between mb-4">
                    <div className="text-orange-700 mb-3">
                            <FaMapMarker/>
                            {job.location}
                    </div>
                    <Link
                        to={``}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                    >Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default JobListing
