import { Link } from "react-router-dom";
import contact from "/images/contact/contact.jpg";

export default function Contact() {
  return (
    <div className="bg-gray-800 text-gray-200 min-h-screen w-full">
      <div className="text-center">
        <h1 className="text-6xl font-bold mt-7 bg-gradient-to-r from-purple-800 to-orange-800 bg-clip-text text-transparent">Contact Me</h1>
        <p className="text-sm p-2 font-light ">You Can Directly Contact Via</p>
        <div className="flex justify-center space-x-8 p-8">
          {/* Contact Number */}
          <div className="text-xl h-40 w-1/3 border border-slate-700 rounded-xl shadow-lg px-6 py-4 text-center">
            <h4 className="mt-4 text-xl font-bold bg-gradient-to-r from-purple-500 to-orange-600 bg-clip-text text-transparent">Contact Number</h4>
            <div className="p-4 flex justify-center items-center">
              <svg
                className="text-green-700 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"></path>
                <path d="M13.644 9.404c.012-1.492-1.219-2.86-2.744-3.049L10.8 6.34a1.384 1.384 0 0 0-.232-.026c-.313 0-.396.226-.418.361a.43.43 0 0 0 .06.329c.104.145.286.17.432.192.043.006.084.011.117.02 1.371.315 1.833.812 2.058 2.215.006.035.008.077.01.122.01.167.031.516.395.516.03 0 .062-.002.096-.008.339-.053.328-.372.323-.525-.002-.043-.003-.084 0-.111a.154.154 0 0 0 .002-.02z"></path>
                <path d="M10.48 5.807c.04.003.08.006.111.011 2.25.358 3.286 1.458 3.573 3.8.005.04.005.088.006.14.003.183.009.563.405.571h.012a.382.382 0 0 0 .294-.115c.123-.133.115-.33.108-.49-.002-.038-.004-.075-.003-.107.028-2.395-1.98-4.567-4.298-4.647l-.028.001a.188.188 0 0 1-.027.002c-.023 0-.052-.002-.082-.004-.036-.003-.078-.006-.12-.006-.369 0-.439.27-.448.432-.02.373.329.4.497.412zM14.055 12.644a7.197 7.197 0 0 1-.143-.115c-.246-.204-.508-.392-.76-.574a57.337 57.337 0 0 1-.158-.114c-.324-.234-.615-.349-.89-.349-.37 0-.693.212-.96.629-.118.184-.262.274-.438.274a.848.848 0 0 1-.353-.091c-1.045-.49-1.792-1.24-2.219-2.23-.206-.48-.14-.792.224-1.047.206-.144.59-.413.563-.928-.03-.585-1.281-2.345-1.808-2.545a.996.996 0 0 0-.698-.002c-.605.21-1.04.58-1.257 1.067-.21.472-.2 1.025.028 1.601.657 1.666 1.58 3.118 2.746 4.316 1.14 1.173 2.542 2.133 4.166 2.855.146.065.3.1.412.126l.095.024a.155.155 0 0 0 .04.006h.013c.764 0 1.681-.72 1.963-1.542.247-.72-.204-1.075-.566-1.36zM10.818 7.71c-.13.003-.403.01-.499.296-.044.134-.039.25.016.345.081.14.237.183.378.206.512.085.776.378.828.92.025.254.19.43.402.43a.383.383 0 0 0 .048-.002c.255-.032.378-.225.367-.575.004-.366-.181-.78-.496-1.11-.316-.332-.697-.519-1.044-.51z"></path>
              </svg>
              <Link to="tel:+917697989992">
                <button className="bg-slate-800 hover:text-green-600 text-slate-100 px-4 py-2 rounded">
                  +91 7697989992
                </button>
              </Link>
            </div>
          </div>

          {/* Email Address */}
          <div className="text-xl h-40 w-1/3 border border-slate-700 rounded-xl shadow-lg px-6 py-4 text-center">
            <h4 className="mt-4 text-xl font-bold bg-gradient-to-r from-purple-500 to-orange-600 bg-clip-text text-transparent">Email Address</h4>
            <div className="p-4 flex justify-center items-center">
              <svg
                className="text-green-700 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -5 24 24"
                width="28"
                fill="currentColor"
              >
                <path d="M18.572.083L10.676 7.12a1 1 0 0 1-1.331 0L1.416.087A2 2 0 0 1 2 0h16a2 2 0 0 1 .572.083zm1.356 1.385c.047.17.072.348.072.532v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2c0-.185.025-.364.072-.534l7.942 7.148a3 3 0 0 0 3.992 0l7.922-7.146z"></path>
              </svg>
              <a href="mailto:ibhagwanji13397@gmail.com">
                <button className="bg-slate-800 hover:text-green-600 text-slate-100 px-4 py-2 rounded">
                  ibhagwnji13397@gmail.com
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12">
        <h1 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-orange-600 bg-clip-text text-transparent">Contact Us</h1>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="overflow-hidden rounded-xl border border-gray-500">
            <img
              src={contact}
              alt="img"
              height={600}
              width={600}
              className="object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full max-w-xl border shadow-2xl  rounded-lg p-4 bg-gray-800">
            <form action="">
              <div className="space-y-5 ">
                <div className="flex flex-col">
                  <label htmlFor="Name" className="text-gray-100">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-1 h-10 w-full bg-transparent border border-slate-500 rounded-lg pl-4 text-slate-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Email" className="text-gray-100">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="mt-1 h-10 w-full bg-transparent border border-slate-500 rounded-lg pl-4 text-slate-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Mobile Number" className="text-gray-100">
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="mt-1 h-10 w-full bg-transparent border border-slate-500 rounded-lg pl-4 text-slate-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Subject" className="text-gray-100">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="mt-1 h-10 w-full bg-transparent border border-slate-500 rounded-lg pl-4 text-slate-100"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Your Message" className="text-gray-100">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="mt-1 h-28 w-full bg-transparent border border-slate-500 rounded-lg pl-4 text-slate-100"
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="mt-4 shadow-2xl px-4 py-2 w-28 bg-gradient-to-br from-pink-600 via-purple-600 to-orange-600 text-slate-100  rounded over:bg-gradient-to-r hover:from-teal-600 hover:to-blue-800"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
