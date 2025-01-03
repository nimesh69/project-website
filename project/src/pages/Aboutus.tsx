import React from 'react';
import { TeamMember } from '../components/TeamMember/TeamMember';
import { Header } from '../components/Header/Header';
import { Mail } from 'lucide-react';

function Aboutus() {
  const teamMembers = [
    {
      name: "Nimesh Shrestha",
      role: "Lead Researcher",
      description: "Specializing in computer vision and deep learning with 10+ years of experience in facial recognition technology.",
      image: "",
      linkedin: "https://www.linkedin.com/in/nimesh-shrestha-b22057206/",
      github: "https://github.com/nimesh69",
      website: "https://example.com",
      email: "nimeshstha79@gmail.com",
    },
    {
      name: "Aadish Prajapati",
      role: "ML Engineer",
      description: "Expert in implementing neural networks and optimization algorithms for image processing applications.",
      image: "",
      linkedin: "https://linkedin.com",
      github: "https://github.com/aadish-praz",
      website: "https://example.com",
      email: "alex.rodriguez@example.com"
    },
    {
      name: "Kusan Khambu",
      role: "Research Scientist",
      description: "Focusing on innovative approaches to facial feature extraction and reconstruction methodologies.",
      image: "",
      linkedin: "https://linkedin.com",
      github: "https://github.com/KhamuKusan7",
      website: "https://example.com",
      email: "maya.patel@example.com"
    },
    {
      name: "Simal Shakha",
      role: "Software Architect",
      description: "Designing scalable systems for processing and analyzing large-scale facial image datasets hjjdcjvy.",
      image: "",
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      website: "https://example.com",
      email: "james.wilson@example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50"   style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      }}>
        <Header />

      {/* Team Members Section */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-50 py-4 px-4 text-center" style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        backgroundImage: 'radial-gradient(rgba(12, 12, 12, 0.171) 2px, transparent 0)',
        backgroundSize: '30px 30px',
        backgroundPosition: '-5px -5px',
      }}>
        <a
          href="mailto:nimeshstha79@gmail.com"
          className="inline-flex items-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Contact Us
        </a>
      </footer>
    </div>
  );
}

export default Aboutus;