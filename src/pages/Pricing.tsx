import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  CheckCircle, 
  ArrowRight,
  Star,
  Users,
  Mail,
  BarChart3,
  Headphones
} from 'lucide-react';
import { useState } from 'react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses getting started with email automation",
      monthlyPrice: 49,
      annualPrice: 39,
      contacts: "Up to 1,000",
      emails: "10,000/month",
      features: [
        "Basic email automation",
        "Drag-and-drop editor",
        "Basic analytics",
        "Email support",
        "Landing pages",
        "Form builder"
      ],
      popular: false,
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Professional", 
      description: "Ideal for growing businesses that need advanced features",
      monthlyPrice: 149,
      annualPrice: 119,
      contacts: "Up to 10,000",
      emails: "100,000/month",
      features: [
        "Advanced automation workflows",
        "A/B testing",
        "Advanced analytics & reporting",
        "Priority support",
        "API access",
        "Custom integrations",
        "Lead scoring",
        "Dynamic content"
      ],
      popular: true,
      cta: "Start Free Trial",
      ctaLink: "https://salescentri.com/get-started/free-trial"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      monthlyPrice: 449,
      annualPrice: 359,
      contacts: "Unlimited",
      emails: "Unlimited",
      features: [
        "Everything in Professional",
        "Custom workflows",
        "Advanced integrations",
        "Dedicated account manager",
        "Custom reporting",
        "SSO/SAML",
        "Advanced security",
        "Custom training"
      ],
      popular: false,
      cta: "Contact Sales",
      ctaLink: "https://salescentri.com/contact/sales-inquiry"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Unlimited Team Members",
      description: "All plans include unlimited users"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "99.9% Deliverability",
      description: "Industry-leading email delivery rates"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-time Analytics",
      description: "Track performance in real-time"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support"
    }
  ];

  const faqs = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
    },
    {
      question: "Is there a free trial?",
      answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card required."
    },
    {
      question: "What happens if I exceed my contact limit?",
      answer: "We'll notify you before you reach your limit. You can upgrade your plan or remove inactive contacts."
    },
    {
      question: "Do you offer custom enterprise solutions?",
      answer: "Yes, we provide custom solutions for enterprise clients with specific requirements."
    }
  ];

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: plansRef, isVisible: plansVisible } = useScrollAnimation();
  const { elementRef: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

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
          <h1 className="text-5xl font-bold mb-6 gradient-text animate-fade-in">
            Transparent Pricing for Every Business
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Choose the perfect plan for your email marketing automation needs. All plans include our core features with no hidden fees.
          </p>
          
          {/* Annual/Monthly Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8 animate-fade-in-up">
            <span className={`text-lg transition-all duration-300 ${!isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="hover-lift"
            />
            <span className={`text-lg transition-all duration-300 ${isAnnual ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-800 border-green-200 animate-bounce-gentle">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={plansRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ${
              plansVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative hover-lift animate-on-scroll ${plan.popular ? 'border-primary shadow-elegant scale-105' : 'feature-card'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="py-4">
                    <div className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      <span className="text-lg font-normal text-muted-foreground">/month</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-muted-foreground">
                        Billed annually (${plan.annualPrice * 12})
                      </div>
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="font-semibold">{plan.contacts} contacts</div>
                    <div className="text-muted-foreground">{plan.emails} emails</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <a href={plan.ctaLink}>
                    <Button 
                      className={`w-full mb-6 ${plan.popular ? 'cta-button' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div 
            ref={featuresRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              featuresVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Included in All Plans</h2>
            <p className="text-xl text-muted-foreground animate-slide-in-left">
              Every plan comes with these essential features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="feature-card text-center hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and plans
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our enterprise team can create a custom plan tailored to your organization's specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/pricing/enterprise-custom">
              <Button size="lg" variant="secondary">
                Enterprise Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/contact/sales-inquiry">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Sales
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;