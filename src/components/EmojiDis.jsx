import React from 'react';


const EmojiDis = (props) => {
    return (
        <>
            <div className='inline-block justify-center items-center rounded-xl px-2 mr-5 pr-5'>
                <div className=" w-96 h-100 bg-white bg-clip-border text-gray-700 shadow-md p-8 m-2 rounded-2xl">
                    <div>
                        <h1 className='flex justify-center text-7xl'>{props.emoji}</h1>
                        <h2 className='text-2xl font-bold text-green-400' >{props.category}</h2>
                        <p>{props.description}</p>
                    </div>
                    <button
                        className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                        >
                        Read More
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default EmojiDis