import { useState } from "react"

function Cart() {
    const [cart, setCart] = useState([]);
    function handleSubmit(i) {

        setCart((prev) => {
            const exist = prev.find((element) => element.id === i);
            if (exist)
                return prev.map((element) => (element.id === i ? { ...element, quantity: element.quantity + 1 } : element));
            else
                return [...prev, { id: i, quantity: 1 }];
        });

    }
    function handleDelete(i) {
        setCart(cart.filter((value) => value.id !== i))
        console.log('i am rendering');
    }
    function handleAdd(i) {
        setCart((prev) => prev.map((item) => (
            item.id === i ? { ...item, quantity: item.quantity + 1 } : item
        )));
    }
    function handleSub(i) {
        setCart((prev) => prev.map((item) => (

            item.id === i && item.quantity >= 1 ? { ...item, quantity: item.quantity - 1 } : item
        )).filter((item) => item.quantity > 0));
    }
    console.log(cart);

    return (
        <>

            <div className='p-4 my-2 shadow-md flex flex-col items-center justify-center'>
                <div className='my-2'>item 1</div>
                <div>
                    <button className='border' onClick={() => handleSubmit(1)}>Add to cart</button>
                </div>
            </div>
            <div className='p-4 my-2 shadow-md flex flex-col items-center justify-center'>
                <div className='my-2'>item 2</div>
                <div>
                    <button className='border' onClick={() => handleSubmit(2)}>Add to cart</button>
                </div>
            </div>
            <div className='p-4 my-2 shadow-md flex flex-col items-center justify-center'>
                <div className='my-2'>item 3</div>
                <div>
                    <button className='border ' onClick={() => handleSubmit(3)}>Add to cart</button>
                </div>
            </div>
            <div className='p-4 my-2 shadow-md flex flex-col items-center justify-center'>
                <div className='my-2'>item 4</div>
                <div>
                    <button className='border' onClick={() => handleSubmit(4)}>Add to cart</button>
                </div>
            </div>

            <div>
                <div className="text-center">Remove Elements</div>
                <div className="m-2 p-2">
                    <ul>
                        {cart.map((item, index) => (
                            <>
                                <li key={index}>item id: {item.id} quantity: {item.quantity} <button className="border p-1" onClick={() => handleDelete(item.id)}>Delete</button></li>
                                <button className="border p-1" onClick={() => handleAdd(item.id)}>+</button>
                                <button className="border p-1" onClick={() => handleSub(item.id)}>-</button>
                            </>

                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Cart