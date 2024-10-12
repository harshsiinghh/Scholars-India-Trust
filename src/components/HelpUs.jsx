export default function HelpUs(){
    const campaigns = [
        {
          "title": "Empower a Child's Future",
          "description": "Help us provide scholarships to underprivileged students, ensuring they have access to quality education and essential resources.",
          "raised": 15000,
          "goal": 50000,
          "image": "path/to/image1.jpg"
        },
        {
          "title": "Books and Supplies Drive",
          "description": "Join us in our mission to provide textbooks and school supplies to students in need. Your contributions will make a significant impact on their education.",
          "raised": 8000,
          "goal": 20000,
          "image": "path/to/image2.jpg"
        },
        {
          "title": "Support for Struggling Families",
          "description": "Donate to help families facing financial hardships due to unexpected circumstances, ensuring their children can continue their education without interruption.",
          "raised": 12000,
          "goal": 30000,
          "image": "path/to/image3.jpg"
        }
      ];
    
      return (
        <div className="bg-indigo-600 w-full min-h-screen">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-stone-200 rounded-lg p-8 mb-12 flex items-center">
              <div className="w-2/3 pr-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Make a Difference with Your CSR Initiatives</h1>
                <p className="text-gray-600 mb-6">
                At Scholar's India Trust, we firmly believe that every child deserves access to quality education, regardless of their financial circumstances. However, achieving this mission requires collective effort and support from compassionate individuals like you. Your contributions can directly fund scholarships, educational resources, and essential assistance for underprivileged students in need. By donating, you not only make a significant impact on their lives but also help us spread awareness about our cause. We encourage you to share our mission with your friends and family to help us reach a wider audience. Additionally, if you have time to spare, consider volunteering with us—whether it’s assisting with administrative tasks or mentoring students, every effort counts. If you're part of a corporation or organization, we welcome partnerships that can strengthen our initiatives. Together, we can break down barriers to education and empower the next generation of leaders. Join us in our mission to transform lives through education!
                </p>
                <button className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Start a Donation
                </button>
              </div>
              <div className="w-1/3">
                <img src="/api/placeholder/400/300" alt="CSR Initiative" className="rounded-lg" />
              </div>
            </div>
    
            <h2 className="text-3xl font-bold text-center text-white mb-2">You can help lots of people by donating little</h2>
            <p className="text-center text-white mb-8">These campaigns need your help to achieve victory.</p>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {campaigns.map((campaign, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{campaign.title}</h3>
                    <p className="text-gray-600 mb-4">{campaign.description}</p>
                    <div className="bg-gray-200 rounded-full h-2 mb-2">
                      <div className="bg-indigo-600 h-2 rounded-full" style={{width: `${(campaign.raised / campaign.goal) * 100}%`}}></div>
                    </div>
                    <p className="text-gray-600 mb-4">₹{campaign.raised} of ₹ {campaign.goal} raised</p>
                    <div className="flex justify-between items-center">
                      <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full">💖 10 Backer</button>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-full">Donate Now</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
}