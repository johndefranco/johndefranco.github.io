import React from 'react';

function Contact() {
   return (
        <div>
            <h1 className="flex items-center justify-center text-center pt-10 text-3xl md:text-4xl mb-1 md:mb-3 font-bold">Contact</h1>
            <div className="flex flex-col mt-6 mb-10 mx-auto">
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/(customSlugHere)"
                        method="POST"
                        className="flex flex-col w-full mx-20 md:max-w-2xl mx-auto"
                    >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-pink-500 drop-shadow-md hover:stroke-white"
                    >
                        Send
                    </button>
                    </form>
                </div>
            </div>
        </div>
   )
}

export default Contact;