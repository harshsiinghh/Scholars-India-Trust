export default function WhoWeAre(){
    return(
        <div className="bg-white w-full min-h-screen flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-5xl font-bold mb-8">Who we are?</h2>
          <h3 className="text-3xl font-semibold mb-8">
            Empowering <span className="text-blue-600"> underprivileged students</span> by providing access to
            <span className="text-blue-600"> quality education</span>
          </h3>
          <p className="mb-6 text-lg">
          Scholar's India Trust is a dedicated non-profit organization focused on transforming the lives of underprivileged students across India. Established in 2019, we work tirelessly to break down financial barriers to education through scholarships, fee deposits, and other essential support. Our mission is to ensure that every student, regardless of their background, has the opportunity to pursue their education with dignity and hope. By collaborating with communities and partners, we aim to foster a brighter future for children who face financial challenges. Through our work, we strive to create a more equitable and educated society.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">
            {[...Array(4)].map((_, index) => (
              <img 
                key={index}
                src={`/api/placeholder/300/200`} 
                alt={`Healthcare image ${index + 1}`} 
                className="w-full h-auto rounded-lg shadow-md"
              />
            ))}
          </div>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300">
            Read More About Our Mission
          </button>
        </section>
        
        <section>
          <h2 className="text-3xl font-bold mb-6">What We Do?</h2>
          <p className="mb-8 text-lg">
          At Scholar's India Trust, we are committed to ensuring that financial hardships do not stand in the way of a student’s education. Our programs provide essential support, ranging from fee assistance to complete scholarships, ensuring students can stay in school and thrive. Here's how we make an impact:
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: 'Scholarships ', description: 'We provide one, two, and three-year scholarships that cover school fees, uniforms, and textbooks, ensuring uninterrupted education for deserving students facing financial difficulties.' },
              { title: 'Fee Assistance', description: 'For students struggling with immediate financial crises, we offer partial fee deposits, preventing disruptions in their education and giving them a chance to catch up.' },
              { title: 'Educational Resources', description: 'Beyond covering fees, we ensure students have access to the necessary educational materials, including textbooks and uniforms, so they can fully participate and succeed in their studies.' },
              { title: 'Empowerment', description: 'Through our programs, we empower students to focus on their future, boosting their self-esteem and enabling them to overcome financial challenges and pursue their academic goals with confidence.' }
            ].map((service, index) => (
              <div key={index} className="bg-blue-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
    )
}