import { useState } from "react";

export default function OurImpact(){
    const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      "title": "Hundreds of Students Supported",
      "content": "Through our diverse scholarship programs, we have assisted numerous students in overcoming financial obstacles that would otherwise prevent them from pursuing their education. Each scholarship represents a step toward breaking the cycle of poverty, allowing students to focus on their studies without the burden of financial stress. We believe that every child deserves the chance to learn, grow, and succeed."
    },
    {
      "title": "Reducing Dropout Rates",
      "content": "Our focused efforts to address the challenges faced by students in need have significantly reduced dropout rates in the communities we serve. By providing timely financial assistance and resources, we ensure that students can remain enrolled in school, complete their education, and move forward with confidence. Our interventions are tailored to meet the unique needs of each student, helping them stay on track toward their academic goals."
    },
    {
      "title": "Building Futures",
      "content": "Investing in education is an investment in the future. By empowering students with the knowledge and skills they need, we are helping them pave the way for brighter opportunities. Many of our scholarship recipients have gone on to excel in their studies, pursue higher education, and even give back to their communities. Their success stories inspire us and highlight the transformative power of education."
    },
    {
      "title": "Promoting Dignity",
      "content": "We are committed to protecting the dignity of our students and their families. We understand the stigma and shame that can accompany financial hardship, and our programs aim to provide support without judgment. By ensuring that students are treated with respect and given the resources they need, we foster an environment where they can thrive academically and personally. Our goal is to empower them to rise above their circumstances and build a future filled with possibilities."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="bg-indigo-600 text-white w-full min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-5xl font-bold mb-6">Our Impact</h2>
        <p className="text-xl mb-10">
        At Scholar's India Trust, we measure success by the lives we change and the futures we help build. Our commitment to education has positively impacted hundreds of underprivileged students across India. By removing financial barriers and providing essential resources, we have empowered young minds to pursue their dreams and thrive academically. Here’s how we’re making a difference:
        </p>

        <div className="bg-white rounded-lg p-8 mb-12 shadow-xl">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <h3 className="text-3xl font-bold text-indigo-600 mb-4">Real Stories, Real Impact</h3>
                  <div className="flex items-center">
                    <img src="/2.jpeg" alt="Impact story" className="w-1/3 rounded-xl  mr-6 shadow-md h-[400px]" />
                    <div className="w-2/3">
                      <h4 className="text-4xl font-semibold text-gray-800 mb-8">{slide.title}</h4>
                      <p className="text-gray-600 text-lg pe-8">{slide.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-indigo-600 p-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-300">
              &lt;
            </button>
            <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-indigo-600 p-3 rounded-full shadow-md hover:bg-indigo-100 transition duration-300">
              &gt;
            </button>
          </div>
        </div>

        <div className="flex justify-around text-center">
          <div>
            <p className="text-6xl font-bold mb-2">4,000</p>
            <p className="text-xl">Student Helped</p>
          </div>
          <div>
            <p className="text-6xl font-bold mb-2">20</p>
            <p className="text-xl">Villages Covered</p>
          </div>
          <div>
            <p className="text-6xl font-bold mb-2">1L+</p>
            <p className="text-xl">Fundraised per year</p>
          </div>
        </div>
      </div>
    </div>
  );
}