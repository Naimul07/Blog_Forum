import useCart from "./store"

function CartZustand() {
    const { cart, addCart, removeCart, addQuantity, subQuantity } = useCart();

    return (
        <div className="container mx-auto p-4">
            {/* Items Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Item 1 */}
                <div className="p-4 shadow-md rounded-lg flex flex-col items-center justify-center bg-white">
                    <div className="my-2 text-xl font-semibold">Item 1</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        onClick={() => addCart(1)}>Add to Cart</button>
                </div>

                {/* Item 2 */}
                <div className="p-4 shadow-md rounded-lg flex flex-col items-center justify-center bg-white">
                    <div className="my-2 text-xl font-semibold">Item 2</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        onClick={() => addCart(2)}>Add to Cart</button>
                </div>

                {/* Item 3 */}
                <div className="p-4 shadow-md rounded-lg flex flex-col items-center justify-center bg-white">
                    <div className="my-2 text-xl font-semibold">Item 3</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        onClick={() => addCart(3)}>Add to Cart</button>
                </div>

                {/* Item 4 */}
                <div className="p-4 shadow-md rounded-lg flex flex-col items-center justify-center bg-white">
                    <div className="my-2 text-xl font-semibold">Item 4</div>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
                        onClick={() => addCart(4)}>Add to Cart</button>
                </div>
            </div>

            {/* Cart Section */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-semibold text-center mb-4">Your Cart</div>
                {cart.length === 0 ? (
                    <p className="text-center text-gray-600">Your cart is empty</p>
                ) : (
                    <ul className="space-y-4">
                        {cart.map((item, index) => (
                            <li key={index} className="flex items-center justify-between p-4 border-b">
                                <div>
                                    <span className="font-semibold">Item ID: {item.id}</span> 
                                    <span className="ml-4">Quantity: {item.quantity}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md transition duration-300" 
                                        onClick={() => addQuantity(item.id)}>+</button>
                                    <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-md transition duration-300" 
                                        onClick={() => subQuantity(item.id)}>-</button>
                                    <button className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded-md transition duration-300" 
                                        onClick={() => removeCart(item.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CartZustand;
