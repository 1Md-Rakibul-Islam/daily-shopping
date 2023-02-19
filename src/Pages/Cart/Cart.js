import React, { useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
    const [show, setShow] = useState(false);

    const products = useSelector(state => state.cart)

    return (
        <>
            <div className="w-full h-full bg-black bg-opacity-90 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
                <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
                    <div className="flex md:flex-row flex-col justify-end" id="cart">
                        <div className=" w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen" id="scroll">
                            <div className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer" >
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <polyline points="15 6 9 12 15 18" />
                                </svg>
                                <p className="text-sm pl-2 my-5 leading-none">Back to home</p>
                            </div>

                            <ul class="space-y-4">
                                {
                                    products?.map( product => (
                                        <li class="flex justify-between items-center">
                                            <img
                                            src={product?.images[0]}
                                            alt=""
                                            class="object-cover w-36 h-36 rounded"
                                            />
                            
                                            <div class="m l -4">
                                            <h3 class="text-sm text-gray-900">{product?.title}</h3>
                                
                                            <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
                                                <div>
                                                <dt class="inline">Date: </dt>
                                                <dd class="inline">{product?.updatedAt}</dd>
                                                </div>
                                
                                                <div>
                                                <dt class="inline">Category: </dt>
                                                <dd class="inline">{product?.category?.name}</dd>
                                                </div>
                                            </dl>
                                            </div>

                                            <div class="m l -10">
                                                <p>Price: $646</p>
                                            </div>
                                
                                            <div class="flex gap-5">
                                            <form>
                                                <label for="Line2Qty" class="sr-only"> Quantity </label>
                                
                                                <input
                                                type="number"
                                                min="1"
                                                value="1"
                                                id="Line2Qty"
                                                class="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                                                />
                                            </form>
                                
                                            <button class="text-gray-600 transition hover:text-red-600">
                                                <span class="sr-only">Remove item</span>
                                
                                                <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                class="w-4 h-4"
                                                >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                />
                                                </svg>
                                            </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                        <div className="xl:w-1/2 md:w-1/3 w-full bg-gray-100 h-full">
                            <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                                <div>
                                    <p className="text-4xl font-black leading-9 text-gray-800">Summary</p>
                                    <div className="flex items-center justify-between pt-16">
                                        <p className="text-base leading-none text-gray-800">Subtotal</p>
                                        <p className="text-base leading-none text-gray-800">$9,000</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Shipping</p>
                                        <p className="text-base leading-none text-gray-800">$30</p>
                                    </div>
                                    <div className="flex items-center justify-between pt-5">
                                        <p className="text-base leading-none text-gray-800">Tax</p>
                                        <p className="text-base leading-none text-gray-800">$35</p>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                                        <p className="text-2xl leading-normal text-gray-800">Total</p>
                                        <p className="text-2xl font-bold leading-normal text-right text-gray-800">$10,240</p>
                                    </div>
                                    <button onClick={() => setShow(!show)} className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white">
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
