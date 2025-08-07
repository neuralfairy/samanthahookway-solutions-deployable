import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Mail, 
  Users, 
  BarChart3, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Shield,
  Globe,
  Clock,
  TrendingUp,
  Star
} from 'lucide-react';

const Index = () => {
  useScrollAnimation();
  const features = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Advanced Email Automation",
      description: "Create sophisticated drip campaigns that nurture leads automatically"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalized Sequences",
      description: "Dynamic content that adapts to each prospect's behavior and preferences"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Track opens, clicks, and conversions with detailed performance insights"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Smart Triggers",
      description: "Intelligent automation triggers based on prospect actions and engagement"
    }
  ];

  const benefits = [
    "Increase lead engagement by up to 300%",
    "Reduce manual email tasks by 85%",
    "Improve conversion rates with personalized content",
    "Scale your outreach without scaling your team",
    "Integrate seamlessly with existing CRM systems",
    "GDPR compliant and secure data handling"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp Solutions",
      content: "iEMA transformed our lead nurturing process. We've seen a 250% increase in qualified leads.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Sales Manager", 
      company: "InnovateLab",
      content: "The automation capabilities are incredible. We're closing 40% more deals with the same team size.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 animate-fade-in">
              iEMA - Email Marketing Automation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text animate-fade-in-up stagger-animation" style={{"--animation-delay": "0.2s"} as any}>
              Automate Your Email Marketing, Amplify Your Results
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up stagger-animation" style={{"--animation-delay": "0.4s"} as any}>
              Transform your B2B sales process with intelligent email automation that nurtures leads, 
              increases engagement, and drives conversions on autopilot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-animation" style={{"--animation-delay": "0.6s"} as any}>
              <a href="https://salescentri.com/get-started/free-trial">
                <Button size="lg" className="cta-button hover-lift">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://salescentri.com/get-started/book-demo">
                <Button variant="outline" size="lg" className="hover-lift">
                  Book a Demo
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-4 animate-fade-in-up stagger-animation" style={{"--animation-delay": "0.8s"} as any}>
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Powerful iEMA Features That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, automate, and optimize your email marketing campaigns
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card animate-on-scroll group">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-4xl font-bold mb-6">
                Why Choose Our iEMA Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of B2B companies who have transformed their email marketing with our automation platform.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 animate-on-scroll hover-lift transition-all duration-300" style={{"--animation-delay": `${index * 0.1}s`} as any}>
                    <CheckCircle className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 animate-on-scroll">
                <a href="https://salescentri.com/solutions/use-case-navigator/demo">
                  <Button className="cta-button hover-lift">
                    See Interactive Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
            <div className="glass-card p-8 animate-on-scroll hover-lift">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center animate-on-scroll" style={{"--animation-delay": "0.2s"} as any}>
                  <div className="text-3xl font-bold text-primary mb-2">300%</div>
                  <div className="text-sm text-muted-foreground">Increase in Lead Engagement</div>
                </div>
                <div className="text-center animate-on-scroll" style={{"--animation-delay": "0.4s"} as any}>
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Reduction in Manual Tasks</div>
                </div>
                <div className="text-center animate-on-scroll" style={{"--animation-delay": "0.6s"} as any}>
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">More Qualified Leads</div>
                </div>
                <div className="text-center animate-on-scroll" style={{"--animation-delay": "0.8s"} as any}>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Automated Follow-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-4xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our customers say about their iEMA experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card animate-on-scroll hover-lift transition-all duration-300" style={{"--animation-delay": `${index * 0.2}s`} as any}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current animate-bounce-gentle" style={{"--animation-delay": `${i * 0.1}s`} as any} />
                    ))}
                  </div>
                  <p className="text-lg mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">
            Ready to Transform Your Email Marketing?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-on-scroll">
            Join thousands of businesses using iEMA to automate their email marketing and increase conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary" className="hover-lift">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/contact/sales-inquiry">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary hover-lift">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
