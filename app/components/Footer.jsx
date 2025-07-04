import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="text-gray-600 bg-black max-sm:w-full overflow-hidden body-font">
                <div className="container justify-items-between px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-[30%] max-md:my-9 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-wides mx-10t text-5xl mb-3">.__AK Store__.</h2>
                            
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full scale-[1.05] px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl my-3">Men Watches</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Men Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Women Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">baby Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Couple Watches</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full scale-[1.05] px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl my-3">Men Watches</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Men Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Women Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">baby Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Couple Watches</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 scale-[1.05] w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl my-3">Baby Watches</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Men Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Women Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">baby Watches</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Couple Watches</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 scale-[1.05] w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-xl my-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Track your order</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Support</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">FAQs</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Carrier</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">About</Link>
                                </li>
                                <li>
                                    <Link href='/' className="text-gray-100 hover:text-gray-300">Contact us</Link>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="border-t border-black">
                    <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
                        <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
                                <label htmlFor="footer-field" className="leading-7 text-sm text-gray-100">Enter Your Email to get Notified to our Offers</label>
                                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-red-200 focus:border-red-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Subscribe</button>
                            <p className="text-gray-100 text-sm md:ml-6 md:mt-0 mt-2 sm:text-left text-center">Bitters chicharrones fanny pack
                                <br className="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
                            <a className="text-gray-100">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-100">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="bg-black">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2025 Abdullah Khan —
                            <a href="" className="text-gray-100 ml-1" target="_blank" rel="noopener noreferrer">@abdullahkhan</a>
                        </p>
                        <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-100 text-sm">Enamel pin tousled raclette tacos irony</span>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer