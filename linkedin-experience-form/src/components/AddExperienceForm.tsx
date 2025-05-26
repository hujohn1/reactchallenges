import {useForm} from 'react-hook-form'
import {useState} from 'react'

export default function AddExportForm(){
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit =(data: any)=>{console.log(data)}
    return(
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="max-w-md mx-auto p-4 border border-gray-300 rounded">
                <div className="mb-4">
                    <label className="block mb-1 text-left">Title*</label>
                    <input className="border border-black px-0.5 py-0.5 rounded w-full" {...register("title", {required: true})} placeholder = "Ex: Retail Sales Manager"/>
                    {errors.title && (<p className="text-red-600 mt-1 text-sm"> <span className="mr-1 text-red-600 font-bold">−</span>{"Title is a required field"}</p>)}
                </div>
            
                <div className="mb-4">
                    <label className="block mb-1 text-left">Employment type</label>
                    <select className="border border-black px-0.5 py-0.5 rounded w-full" {...register("etype")}>
                        <option value="FULLTIME">Full-time</option>
                        <option value="PARTTIME">Part-time</option>
                        <option value="SELFEMPLOYED">Self-employed</option>
                        <option value="FREELANCE">"Freelance</option>
                        <option value="CONTRACT">"Contract</option>
                        <option value="INTERNSHIP">Internship</option>
                        <option value="APPRENTICESHIP">Apprenticeship</option>
                        <option value="SEASONAL">Seasonal</option>
                    </select>
                </div> 
            
                <div className="mb-4">
                    <label className="block mb-1 text-left">Company*</label>
                    <input className="border border-black px-0.5 py-0.5 rounded w-full" {...register("company", {required: true})} placeholder = "Ex: Microsoft"/>
                    {errors.company && <p className="text-red-600 mt-1 text-sm"> <span className="mr-1 text-red-600 font-bold">−</span>{"Company is a required field"}</p>}
                    <label className="block mt-2"><input type="checkbox" {...register("is_current")} className="mr-2"/>I am currently working in this role</label>
                </div>
            
                <div className="mb-4">
                    <label className="block mb-1 text-left">Start date*</label>
                    <input className="border border-black px-0.5 py-0.5 rounded mr-2" {...register("smonth", {required: true})} placeholder = "Month"/>
                    <input className="border border-black px-0.5 py-0.5 rounded" {...register("syear", {required: true})} placeholder = "Year"/>
                    {errors.smonth && errors.syear && <p className="text-red-600 mt-1 text-sm"> <span className="mr-1 text-red-600 font-bold">−</span>{"Start date is a required field"}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-1 text-left">End date*</label>
                    <input className="border border-black px-0.5 py-0.5 rounded mr-2" {...register("emonth", {required: true})} placeholder = "Month"/>
                    <input className="border border-black px-0.5 py-0.5 rounded" {...register("eyear", {required: true})} placeholder = "Year"/>
                    {errors.emonth && errors.eyear && <p className="text-red-600 mt-1 text-sm"> <span className="mr-1 text-red-600 font-bold">−</span>{"End date is a required field"}</p>}
                </div>
            </div>
            <input type="submit" value="Save" className="bg-blue-700 text-white font-semibold rounded px-4 py-2"/>
        </form>
        </div>
    );
}