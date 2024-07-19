import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import "./Form.css"
import { toast } from 'react-toastify';

const AddSchool = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('address', data.address);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('contact', data.contact);
        formData.append('email_id', data.email_id);
        formData.append('image', data.image[0]);

        try {
            const response = await axios.post('http://localhost:5000/api/addSchool', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            toast.success(response.data);
            reset(); // Reset the form fields after successful submission
        } catch (error) {
            toast.error('There was an error!', error);
        }
    };

    return (
        <div className="container">
            <h1>Add School</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <div className="form-group">
                    
                    <input type="text" {...register('name', { required: true })} placeholder='Name' />
                    {errors.name && <p>This field is required</p>}
                </div>

                <div className="form-group">
                    
                    <input type="text" {...register('address', { required: true })} placeholder='Address'/>
                    {errors.address && <p>This field is required</p>}
                </div>

                <div className="form-group">
                    
                    <input type="text" {...register('city', { required: true })} placeholder='City' />
                    {errors.city && <p>This field is required</p>}
                </div>

                <div className="form-group">
                    
                    <input type="text" {...register('state', { required: true })} placeholder='State' />
                    {errors.state && <p>This field is required</p>}
                </div>

                <div className="form-group">
                  
                    <input type="number" {...register('contact', { required: true })} placeholder='Contact'/>
                    {errors.contact && <p>This field is required</p>}
                </div>

                <div className="form-group">
                   
                    <input type="email" {...register('email_id', { required: true })} placeholder='Email' />
                    {errors.email_id && <p>This field is required</p>}
                </div>

                <div className="form-group">
                    <label>Image</label>
                    <input type="file" {...register('image', { required: true })} accept="image/png, image/gif, image/jpeg" />
                    {errors.image && <p>This field is required</p>}
                </div>

                <button className='btnSubmitForm' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddSchool;
