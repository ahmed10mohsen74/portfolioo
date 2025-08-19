// components/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-[#0A0F2C] border-t border-[#FF6B00]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-[#E0E0E0]">
              © {currentYear} Ahmed Mohsen. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#home"
              className="text-[#E0E0E0] hover:text-[#FF6B00] transition-colors text-sm"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[#E0E0E0] hover:text-[#FF6B00] transition-colors text-sm"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-[#E0E0E0] hover:text-[#FF6B00] transition-colors text-sm"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="text-[#E0E0E0] hover:text-[#FF6B00] transition-colors text-sm"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-[#E0E0E0] hover:text-[#FF6B00] transition-colors text-sm"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
