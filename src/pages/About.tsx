import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: "10,000+", label: "Active Customers", icon: <Users className="h-8 w-8" /> },
    { number: "50M+", label: "Emails Sent Monthly", icon: <Globe className="h-8 w-8" /> },
    { number: "95%", label: "Customer Satisfaction", icon: <Award className="h-8 w-8" /> },
    { number: "300%", label: "Average ROI Increase", icon: <TrendingUp className="h-8 w-8" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation First",
      description: "We continuously innovate to provide cutting-edge email marketing automation solutions that stay ahead of industry trends."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer Success",
      description: "Your success is our mission. We're committed to helping every customer achieve their email marketing goals."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Data Security",
      description: "We maintain the highest standards of data protection and privacy to keep your customer information secure."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Results Driven",
      description: "Every feature we build is designed to deliver measurable results and improve your marketing performance."
    }
  ];

  const team = [
    {
      name: "Samantha Hookway",
      role: "Founder & CEO",
      bio: "15+ years in email marketing and automation. Former VP of Marketing at leading SaaS companies.",
      expertise: ["Email Marketing Strategy", "Marketing Automation", "B2B Growth"]
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering", 
      bio: "Former senior engineer at major tech companies. Expert in scalable email infrastructure.",
      expertise: ["System Architecture", "Email Deliverability", "API Development"]
    },
    {
      name: "Sarah Chen",
      role: "Head of Customer Success",
      bio: "Customer success leader with deep expertise in helping B2B companies optimize their email campaigns.",
      expertise: ["Customer Onboarding", "Campaign Optimization", "Analytics"]
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Samantha Hookway founded the company with a vision to democratize email marketing automation."
    },
    {
      year: "2020", 
      title: "First 1,000 Customers",
      description: "Reached our first major milestone and launched advanced automation features."
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Secured funding to expand our team and accelerate product development."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered features for predictive analytics and content optimization."
    },
    {
      year: "2023",
      title: "Global Expansion",
      description: "Expanded operations globally and reached 10,000+ active customers."
    },
    {
      year: "2024",
      title: "Advanced iEMA Platform",
      description: "Launched next-generation iEMA platform with enhanced automation capabilities."
    }
  ];

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { elementRef: valuesRef, isVisible: valuesVisible } = useScrollAnimation();
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div 
          ref={heroRef}
          className={`container mx-auto px-4 text-center transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in-up">
            About Samanthahookway Solutions
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text animate-fade-in">
            Empowering B2B Success Through Email Automation
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Since 2019, we've been helping businesses transform their email marketing with intelligent automation 
            that drives real results and meaningful customer relationships.
          </p>
          <a href="https://salescentri.com/company/about-us">
            <Button size="lg" className="cta-button hover-lift animate-bounce-gentle">
              Learn More About Our Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={statsRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <Card 
                key={index} 
                className="feature-card text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To democratize sophisticated email marketing automation for businesses of all sizes, 
                enabling them to build meaningful customer relationships and drive sustainable growth 
                through intelligent, data-driven communications.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Simplify complex marketing automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Deliver measurable business results</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                  <span>Provide exceptional customer support</span>
                </div>
              </div>
            </div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground mb-6">
                To be the leading platform that transforms how businesses connect with their customers, 
                making every email interaction personal, timely, and valuable.
              </p>
              <div className="bg-primary/10 rounded-lg p-4">
                <p className="text-primary font-medium">
                  "We believe that great customer relationships are built on relevant, 
                  personalized communication at the right moment."
                </p>
                <div className="text-sm text-muted-foreground mt-2">
                  - Samantha Hookway, Founder & CEO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={valuesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-in-left">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="feature-card text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div 
            ref={teamRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Leadership Team</h2>
            <p className="text-xl text-muted-foreground animate-slide-in-left">
              Meet the experts driving our mission forward
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card 
                key={index} 
                className="feature-card hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="text-sm font-medium">Expertise:</div>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Key milestones in our company's growth
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                  </div>
                  <Card className="feature-card flex-1">
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{milestone.year}</Badge>
                        <CardTitle className="text-lg">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{milestone.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Join Our Success Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Discover how Samanthahookway Solutions can help transform your email marketing strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;