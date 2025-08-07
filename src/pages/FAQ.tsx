import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { 
  Search, 
  ArrowRight,
  Mail,
  CreditCard,
  Settings,
  Users,
  BarChart3,
  Shield,
  Headphones,
  Zap
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing Automation",
      description: "Questions about iEMA features and capabilities",
      count: 12
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Pricing & Plans",
      description: "Billing, pricing, and plan information",
      count: 8
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Setup & Integration",
      description: "Getting started and connecting your tools",
      count: 10
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics & Reporting",
      description: "Understanding your email performance data",
      count: 6
    }
  ];

  const faqs = [
    {
      category: "Email Marketing Automation",
      question: "What is iEMA and how does it work?",
      answer: "iEMA (Email Marketing Automation) is our comprehensive platform that automates your email marketing campaigns. It uses intelligent triggers, behavioral data, and personalization to send the right message to the right person at the right time, helping you nurture leads and increase conversions automatically."
    },
    {
      category: "Email Marketing Automation", 
      question: "Can I create complex automation workflows?",
      answer: "Yes! Our visual workflow builder allows you to create sophisticated automation sequences with conditional logic, multiple triggers, A/B testing, and branching paths based on recipient behavior and preferences."
    },
    {
      category: "Email Marketing Automation",
      question: "How does lead scoring work in iEMA?",
      answer: "Our lead scoring system automatically assigns points based on recipient actions like email opens, clicks, website visits, and form submissions. You can customize scoring criteria and use scores to trigger different automation paths."
    },
    {
      category: "Pricing & Plans",
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can upgrade to a paid plan anytime during or after your trial."
    },
    {
      category: "Pricing & Plans",
      question: "Can I change my plan anytime?",
      answer: "Absolutely. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll help you migrate your data if needed."
    },
    {
      category: "Pricing & Plans",
      question: "What happens if I exceed my contact limit?",
      answer: "We'll notify you when you're approaching your limit. You can either upgrade to a higher plan or remove inactive contacts. We won't charge overage fees without your consent."
    },
    {
      category: "Setup & Integration",
      question: "How long does it take to set up iEMA?",
      answer: "Most customers are up and running within 30 minutes. Our setup wizard guides you through connecting your domain, importing contacts, and creating your first automation. Our support team is available to help if needed."
    },
    {
      category: "Setup & Integration",
      question: "Which CRM systems do you integrate with?",
      answer: "We integrate with 100+ popular platforms including Salesforce, HubSpot, Pipedrive, Zoho CRM, and many others. We also offer API access for custom integrations."
    },
    {
      category: "Setup & Integration",
      question: "Can you help migrate from my current email platform?",
      answer: "Yes! Our migration team provides free assistance to help you move your contacts, templates, and automation workflows from your current platform. The process typically takes 1-2 business days."
    },
    {
      category: "Analytics & Reporting",
      question: "What analytics and reporting features are included?",
      answer: "Our platform provides comprehensive analytics including open rates, click rates, conversion tracking, revenue attribution, audience growth, and custom reporting. You can track ROI and see which campaigns drive the most revenue."
    },
    {
      category: "Analytics & Reporting",
      question: "Can I track email ROI and revenue attribution?",
      answer: "Yes! Our advanced analytics track revenue generated from each email campaign and automation sequence. You can see which emails drive sales and calculate your email marketing ROI."
    },
    {
      category: "Technical",
      question: "How do you ensure email deliverability?",
      answer: "We maintain relationships with major ISPs, use dedicated IP addresses for high-volume senders, provide SPF/DKIM authentication, and monitor sender reputation. Our deliverability team works to ensure your emails reach the inbox."
    },
    {
      category: "Technical",
      question: "Is my data secure and GDPR compliant?",
      answer: "Absolutely. We're fully GDPR compliant and use enterprise-grade security including SSL encryption, SOC 2 compliance, and regular security audits. Your data is stored securely and we never share it with third parties."
    },
    {
      category: "Support",
      question: "What kind of customer support do you provide?",
      answer: "We offer multiple support channels including 24/7 live chat, email support, phone support during business hours, and an extensive knowledge base. Enterprise customers also get dedicated account managers."
    },
    {
      category: "Support",
      question: "Do you provide training and onboarding?",
      answer: "Yes! All customers get access to our onboarding program, video tutorials, webinar training sessions, and knowledge base. Enterprise customers receive personalized training and dedicated success managers."
    }
  ];

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { elementRef: categoriesRef, isVisible: categoriesVisible } = useScrollAnimation();
  const { elementRef: faqsRef, isVisible: faqsVisible } = useScrollAnimation();

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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-in-left">
            Find quick answers to common questions about iEMA (Email Marketing Automation), 
            our features, pricing, and how to get the most out of our platform.
          </p>
          <div className="max-w-md mx-auto animate-fade-in-up">
            <div className="relative hover-lift">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search FAQs..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={categoriesRef}
            className={`text-center mb-16 transition-all duration-1000 ${
              categoriesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">Browse by Category</h2>
            <p className="text-xl text-muted-foreground animate-slide-in-left">
              Find answers organized by topic
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faqCategories.map((category, index) => (
              <Card 
                key={index} 
                className="feature-card text-center cursor-pointer hover:border-primary transition-colors hover-lift animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    {category.count} questions
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              ref={faqsRef}
              className={`text-center mb-12 transition-all duration-1000 ${
                faqsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">Common Questions & Answers</h2>
              {searchTerm && (
                <p className="text-muted-foreground animate-slide-in-left">
                  Showing {filteredFaqs.length} results for "{searchTerm}"
                </p>
              )}
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <Card 
                    className="glass-card hover-lift animate-on-scroll"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <AccordionTrigger className="p-6 hover:no-underline">
                      <div className="text-left">
                        <div className="text-sm text-primary font-medium mb-1">{faq.category}</div>
                        <div className="text-lg font-semibold">{faq.question}</div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
            
            {filteredFaqs.length === 0 && searchTerm && (
              <div className="text-center py-12">
                <div className="text-muted-foreground mb-4">
                  No FAQs found matching "{searchTerm}"
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-muted-foreground">
              Our support team is here to assist you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="feature-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  <Headphones className="h-6 w-6" />
                </div>
                <CardTitle>Live Chat Support</CardTitle>
                <CardDescription>Get instant help from our team</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/contact/support-request/live-chat">
                  <Button className="w-full cta-button">
                    Start Chat
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  <Mail className="h-6 w-6" />
                </div>
                <CardTitle>Email Support</CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/contact/support-request">
                  <Button variant="outline" className="w-full">
                    Send Email
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                  <Zap className="h-6 w-6" />
                </div>
                <CardTitle>Book a Demo</CardTitle>
                <CardDescription>See how iEMA can help your business</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/get-started/book-demo">
                  <Button variant="outline" className="w-full">
                    Schedule Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Resources */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Helpful Resources</h2>
            <p className="text-xl text-muted-foreground">
              Additional resources to help you succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="feature-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">User Guide</CardTitle>
                <CardDescription>Complete platform documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/docs/user-guide">
                  <Button variant="outline" size="sm">
                    View Guide
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">Video Tutorials</CardTitle>
                <CardDescription>Step-by-step video guides</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/resources/tutorials-webinars">
                  <Button variant="outline" size="sm">
                    Watch Videos
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">API Documentation</CardTitle>
                <CardDescription>Developer resources and API</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://salescentri.com/docs/api-reference">
                  <Button variant="outline" size="sm">
                    View API Docs
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>

            <Card className="feature-card text-center">
              <CardHeader>
                <CardTitle className="text-lg">Best Practices</CardTitle>
                <CardDescription>Tips and strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <a href="/blog">
                  <Button variant="outline" size="sm">
                    Read Blog
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started with iEMA?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how email marketing automation can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="/contact">
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

export default FAQ;