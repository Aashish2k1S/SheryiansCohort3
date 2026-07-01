export default function ProductCard({ product, deleteProduct }) {
    return (
        <div>
            <div className="w-64 p-3 bg-black-800 rounded-lg overflow-hidden shadow-[0_0_1rem_rgba(255,255,255,0.5)] ring-1 hover:ring-0 hover:shadow-none hover:translate-y-1 transition duration-500 ease-in-out">
                <img className="w-full h-48 object-contain object-center" src={product.image} alt={product.title} />
                <div className="p-4">
                    <h1 className='hidden'>{product.id}</h1>
                    <h2 className="text-lg font-semibold mb-2">{product.title.substring(0, 10)}</h2>
                    <p className="text-gray-400 mb-2">{product.description.substring(0, 50)}</p>
                    <div className="text-white font-bold bg-blue-50-50 flex justify-between items-center">
                        <p className="text-white font-bold">${product.price}</p>
                        <p className="text-white font-bold">⭐{product.rating.rate}</p>
                    </div>

                    <button onClick={() => deleteProduct(product.id)}
                        className="w-full text-white font-bold bg-red-500 hover:bg-red-800 py-2 px-4 mt-4 rounded transition duration-500 ease-in-out">Delete</button>
                </div>
            </div>
        </div>
    );
}