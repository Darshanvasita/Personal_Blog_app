

import React from 'react';
import { useForm } from 'react-hook-form';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import db from '../../../firebase';

const Create = () => {
    const navigate = useNavigate();
    const { register, handleSubmit,formState: { errors } } = useForm();

    const submitData = (data) => {
        const newDocRef = push(ref(db, "Blog"));
        set(newDocRef, data)
            .then(() => {
              console.log(data);
                alert("Data saved successfully");
                navigate('/Blog'); // Use navigate instead of redirect
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });


        // console.log(data);
    };

    return (
        <div className='col-6 mx-auto my-5 p-5 shadow'>
            <form onSubmit={handleSubmit(submitData)}>
                <div className="head d-flex">
                <img src="https://res.cloudinary.com/diyqncua4/image/upload/v1728020169/Blogtastic/omsmnkugqlx7nwjhyc5q.png" alt="" className='w-25 h-25' />
                    <h1 className='text-center mt-5 mx-5'>Writer Blog</h1>
                    <p className='text-center mt-4 '>Your Daily Dose of Inspiration</p>
                </div>
                <select
                    required
                    className="form-select"
                    // style={{ width: "47rem", marginTop: "15px" }}
                    {...register("b_category")}
                >
                    <option disabled selected value="">Select Blog Category</option>
                    <option value="Sports">Sports</option>
                    <option value="Music">Music</option>
                    <option value="Business">Business</option>
                    <option value="Fashion and beauty">Fashion and beauty</option>
                    <option value="Travel">Travel</option>
                    <option value="Art and design">Art and design</option>
                </select>
                <div className="mt-4">
                    <input type="text" {...register('b_title', {
            required: 'Username is required',
            minLength: { value: 3, message: 'Title must be at least 3 characters' },
            maxLength: { value: 20, message: 'Title cannot exceed 20 characters' }
          })} className='form-control text-black' placeholder='Enter Blog title' />
          {/* <span> {errors.username.message}</span> */}
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_desc')} className='form-control text-black' placeholder='Enter Blog description' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_image')} className='form-control text-black' placeholder='Enter Blog image URL' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_writer')} className='form-control' placeholder='Enter Writer name' />
                </div>
                <div className="mt-4">
                    <button className='btn btn-info'>Submit Blog</button>
                </div>
            </form>
        </div>
    );
};

export default Create;
