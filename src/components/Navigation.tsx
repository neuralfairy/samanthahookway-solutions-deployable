import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const solutionsLinks = [
    { href: 'https://salescentri.com/solutions/psa-suite', label: 'PSA Suite' },
    { href: 'https://salescentri.com/solutions/use-case-navigator', label: 'Use Case Navigator' },
    { href: 'https://salescentri.com/solutions/by-industry/it', label: 'IT Industry' },
    { href: 'https://salescentri.com/solutions/by-industry/healthcare', label: 'Healthcare' },
    { href: 'https://salescentri.com/solutions/by-use-case/sdr-teams', label: 'SDR Teams' },
  ];

  const servicesLinks = [
    { href: 'https://salescentri.com/services/data-enrichment', label: 'Data Enrichment' },
    { href: 'https://salescentri.com/services/sdr-service', label: 'SDR Service' },
    { href: 'https://salescentri.com/platforms/lead-management/lead-generation', label: 'Lead Generation' },
    { href: 'https://salescentri.com/platforms/lead-management/voice-ai-agent', label: 'Voice AI Agent' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl">Samanthahookway</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            
            <Link 
              to="/features" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/features') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Features
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary">
                Solutions <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {solutionsLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <a href={link.href} className="w-full">{link.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.href}>
                    <a href={link.href} className="w-full">{link.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              to="/pricing" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/pricing') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Pricing
            </Link>
            
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/about') ? 'text-primary' : 'text-foreground'
              }`}
            >
              About
            </Link>
            
            <Link 
              to="/blog" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/blog') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button variant="outline" size="sm">
                Free Trial
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/book-demo">
              <Button className="cta-button" size="sm">
                Book Demo
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/features" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/blog" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Blog
              </Link>
              <Link to="/contact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4">
                <a href="https://salescentri.com/get-started/free-trial">
                  <Button variant="outline" className="w-full">
                    Free Trial
                  </Button>
                </a>
                <a href="https://salescentri.com/get-started/book-demo">
                  <Button className="cta-button w-full">
                    Book Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;