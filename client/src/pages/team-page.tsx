import React from 'react';
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jacob Adams",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Marina Roberts",
    role: "Chief Marketing Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "James Reed",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Stella Martinez",
    role: "Head of Customer Support",
    image: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 5,
    name: "Richard Kim",
    role: "UI/UX Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 6,
    name: "Emily Johnson",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 7,
    name: "Michael Wong",
    role: "Finance Director",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 8,
    name: "Sophia Patel",
    role: "Senior Developer",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-gradient-to-r from-green-900 via-green-800 to-green-700">
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold">
            Meet the Visionaries Driving <span className="text-amber-500">Innovation Forward</span>
          </h1>
        </div>
      </div>
      
      {/* Team Introduction */}
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            At SheenCar, our diverse team is passionate about revolutionizing the car buying experience. With expertise spanning technology, automotive, and customer service, our dedicated professionals work together to create a seamless and trustworthy platform for all our users.
          </p>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center mt-3 space-x-2">
                    {member.socialLinks.facebook && (
                      <a 
                        href={member.socialLinks.facebook} 
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Facebook size={16} />
                      </a>
                    )}
                    {member.socialLinks.twitter && (
                      <a 
                        href={member.socialLinks.twitter} 
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter size={16} />
                      </a>
                    )}
                    {member.socialLinks.linkedin && (
                      <a 
                        href={member.socialLinks.linkedin} 
                        className="text-gray-400 hover:text-blue-700 transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.socialLinks.instagram && (
                      <a 
                        href={member.socialLinks.instagram} 
                        className="text-gray-400 hover:text-pink-600 transition-colors"
                      >
                        <Instagram size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Join Us Section */}
      <div className="py-16 bg-green-900 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-8 mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Join Us on the <span className="text-amber-500">Road to Innovation</span></h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals to join our mission to transform the automotive marketplace. If you're passionate about creating exceptional experiences and driving innovation, we'd love to hear from you.
            </p>
            <a href="/careers" className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-amber-600 transition-colors">
              View Openings
            </a>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" 
              alt="A shiny red car" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}