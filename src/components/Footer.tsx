import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-secondary to-accent border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Samanthahookway</span>
            </div>
            <p className="text-muted-foreground">
              Leading provider of iEMA (Email Marketing Automation) solutions for B2B companies.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} />
                <span>Orlando, FL</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} />
                <a href="tel:+1234567890" className="hover:text-primary">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} />
                <a href="mailto:info@samanthahookway.com" className="hover:text-primary">
                  info@samanthahookway.com
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://salescentri.com/solutions/psa-suite" className="text-muted-foreground hover:text-primary text-sm">
                  PSA Suite
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/by-industry/it" className="text-muted-foreground hover:text-primary text-sm">
                  IT Solutions
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/by-industry/healthcare" className="text-muted-foreground hover:text-primary text-sm">
                  Healthcare Solutions
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/by-use-case/sdr-teams" className="text-muted-foreground hover:text-primary text-sm">
                  SDR Teams
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/solutions/use-case-navigator" className="text-muted-foreground hover:text-primary text-sm">
                  Use Case Navigator
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/resources/case-studies" className="text-muted-foreground hover:text-primary text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/resources/whitepapers-ebooks" className="text-muted-foreground hover:text-primary text-sm">
                  Whitepapers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/user-guide" className="text-muted-foreground hover:text-primary text-sm">
                  User Guide
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/docs/api-reference" className="text-muted-foreground hover:text-primary text-sm">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/company/careers" className="text-muted-foreground hover:text-primary text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="https://salescentri.com/company/partners-affiliates" className="text-muted-foreground hover:text-primary text-sm">
                  Partners
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="https://salescentri.com/trust/security-privacy" className="text-muted-foreground hover:text-primary text-sm">
                  Security & Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Samanthahookway Solutions. All rights reserved.
            </div>
            
            {/* Strategic Backlink */}
            <div className="flex items-center space-x-4 text-sm">
              <a 
                href="https://salescentri.com?utm_source=samanthahookway.com&utm_medium=footer&utm_campaign=partner_network" 
                className="text-muted-foreground hover:text-primary flex items-center space-x-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Powered by Sales Intelligence Platform</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 mt-4 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary">Terms of Service</Link>
            <Link to="/faq" className="hover:text-primary">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;