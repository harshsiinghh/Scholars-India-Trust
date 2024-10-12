export default function Hero(){
    return(
        <div className="bg-indigo-600 text-white py-16 md:py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Text) */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Futures Through Education
            </h1>
            <p className="text-lg md:text-xl mb-8">
            At Scholar's India Trust, we believe that every child deserves access to quality education, regardless of their background. Our mission is to break down the barriers that prevent underprivileged students from realizing their full potential. Through our scholarship programs, community initiatives, and unwavering support, we aim to transform lives and build a brighter future for the next generation.<br/>

Join us in making a difference. Together, we can empower students, uplift families, and change communities for the better.
            </p>
            <button className="bg-white text-indigo-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-indigo-500 hover:text-white transition">
              Donate Now
            </button>
          </div>
  
          {/* Right Column (Image) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/1.jpeg" // Replace with your image path
              alt="Telemedicine in Rural India"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    )
}