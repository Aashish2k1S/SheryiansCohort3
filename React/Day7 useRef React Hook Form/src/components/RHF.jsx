import { useState } from "react";
import { useForm } from "react-hook-form";

const RHF = () => {
    console.log('React Hook Form rendering...');
    

    const { register, handleSubmit, reset } = useForm();
    {/* , forState: { errors }  */ }

    // console.log(register);
    // console.log(handleSubmit);

    const [formData, setFormData] = useState({});

    const formHandleSubmit = (data) => {
        console.log(data);
        setFormData(data);
        reset();
    }

    return (
        <div className="p-6 border-2 rounded-2xl">
            <h1 className="text-3xl font-bold mb-4">React Hook Form</h1>


            <form action=""
                onSubmit={handleSubmit(formHandleSubmit)}
                className="rounded flex flex-col gap-2">

                <input {...register("name")}
                    type="text" id="name" placeholder="name" className="p-2" />

                <input {...register("category")}
                    type="text" id="category" placeholder="category" className="p-2" />

                <input {...register("price")}
                    type="text" id="price" placeholder="price" className="p-2" />

                <button className="bg-blue-600 text-white py-1 rounded-xl">Submit</button>

            </form>

            <h1>{formData.name}</h1>
            <h1>{formData.category}</h1>
            <h1>{formData.price}</h1>
        </div>
    )
}

export default RHF