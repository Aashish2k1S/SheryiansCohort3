import { useState, useRef } from 'react'

const FormUseRef = () => {
    console.log('useRef rendering...');

    let inpRef = useRef();
    const [inp, setInp] = useState('');

    console.log(inpRef);

    const handleSubmit = () => {
        console.log(inpRef);

        setInp(inpRef.current.value)
    }


    return (
        <div className="p-6 border-2 rounded-2xl flex flex-col gap-2 items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">useRef Hook</h1>

            <input ref={inpRef} type="text" id="name" placeholder="name" className="p-2" />
            <button onClick={handleSubmit} className="bg-blue-600 text-white p-2 rounded-xl">Submit</button>


            <h1>{inp}</h1>
        </div>
    )

}

export default FormUseRef