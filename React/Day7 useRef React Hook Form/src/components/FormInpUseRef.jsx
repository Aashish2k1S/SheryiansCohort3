import { useState, useRef } from 'react'

const FormInpUseRef = () => {
    console.log('Form useRef rendering...');

    let formRef = useRef();
    const [formData, setFormData] = useState({});


    const formHandleSubmit = (e) => {
        e.preventDefault();
        // console.log(formRef);
        // console.log(formRef.name.value);
        // console.log(formRef.category.value);
        // console.log(formRef.price.value);

        setFormData({name: formRef.name.value, category: formRef.category.value, price: formRef.price.value});
    }

    return (
        <div className="p-6 border-2 rounded-2xl">
            <h1 className="text-3xl font-bold mb-4">Form Handling with useRef</h1>


            <form action="" onSubmit={formHandleSubmit}
                className="rounded flex flex-col gap-2">

                <input ref={(e) => formRef.name = e} name="name"
                    type="text" id="name" placeholder="name" className="p-2" />

                <input ref={(e) => formRef.category = e}
                    type="text" id="category" placeholder="category" className="p-2" />

                <input ref={(e) => formRef.price = e}
                    type="text" id="price" placeholder="price" className="p-2" />

                <button className="bg-blue-600 text-white py-1 rounded-xl">Submit</button>

            </form>

            <h1>{formData.name}</h1>
            <h1>{formData.category}</h1>
            <h1>{formData.price}</h1>
        </div>
    )
}

export default FormInpUseRef