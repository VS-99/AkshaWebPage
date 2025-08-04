import { Star } from "lucide-react";
import sharada from "../assets/clients/sharada.png";
import unitedToolKits from "../assets/clients/unitedToolKits.png";
import pppl from "../assets/clients/pppl.png";
import female from "../assets/clients/female.png";
import male from "../assets/clients/male.png";

const clients = [
  { name: "Sharada Industries", logo: sharada },
  { name: "United Toolkits", logo: unitedToolKits },
  { name: "Praditi Pressparts Pvt. Ltd", logo: pppl },
];

const testimonials = [
  {
    name: "COO",
    company: "Sharada Industries",
    image: female,
    feedback:
      "Aksha has empowered our investments into the CCTV setup. Human monitoring efforts have reduced a lot. The ability to detect abnormal unforeseen events along with specific important actions without a lot of CAPEX is wonderful.",
  },
  {
    name: "Partners",
    company: "United Toolkits",
    image: male,
    feedback:
      "Aksha has given us a different outlook into how CCTV can be used. The ability to detect abnormal events and then highlight them has been really useful. It has also been eye-opening wrt. what we can automate and the highlighted and archived videos. We are looking forward to new updates and innovations in the pipeline from Aksha.",
  },
];

const ClientsAndStories = () => {
  return (
    <div className="px-4 py-28 mx-auto">
      {/* --- Our Clients --- */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-16">
        Our Clients
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-24 mb-20">
        {clients.map((client, i) => (
          <div key={i} className="text-center">
            <img
              src={client.logo}
              alt={client.name}
              className="h-24 mx-auto mb-2 object-contain"
            />
            <p className="text-sm sm:text-base">{client.name}</p>
          </div>
        ))}
      </div>

      {/* --- Success Stories --- */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-25">
        Success Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-4xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-[#ebedff] p-6 rounded-xl shadow-md flex flex-col items-center text-center"
          >
            {/* Avatar (unchanged) */}
            <div className="absolute -top-16 w-30 h-30 bg-blue-500 rounded-full flex items-center justify-center border-4 border-white">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-25 h-26 rounded-full object-contain"
              />
            </div>

            {/* Stars (unchanged) */}
            <div className="flex justify-center gap-1 mb-2 mt-8 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  fill="currentColor"
                  strokeWidth={1}
                />
              ))}
            </div>

            {/* Feedback — now left-aligned */}
            <p className="text-left w-full text-md sm:text-lg text-gray-700 mb-4 mt-2">
              {testimonial.feedback}
            </p>

            {/* Company — now left-aligned */}
            <p className="text-left w-full font-semibold text-md">
              {testimonial.company}
            </p>

            {/* Name — now left-aligned */}
            <p className="text-left w-full text-sm text-gray-500">
              {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientsAndStories;
