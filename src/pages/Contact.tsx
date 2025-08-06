import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Calendar,
  Users,
  ArrowRight,
  Send
} from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      description: "Speak directly with our team",
      details: "(321) 555-0123",
      action: "Call Now",
      link: "tel:+13215550123"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      description: "Get detailed help via email",
      details: "support@samanthahookway.com",
      action: "Send Email",
      link: "mailto:support@samanthahookway.com"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      description: "Instant help from our team",
      details: "Available 24/7",
      action: "Start Chat",
      link: "https://salescentri.com/contact/support-request/live-chat"
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Schedule Demo",
      description: "Book a personalized demo",
      details: "15-30 minute sessions",
      action: "Book Demo",
      link: "https://salescentri.com/get-started/book-demo"
    }
  ];

  const officeInfo = {
    address: "123 Business District, Orlando, FL 32801",
    hours: [
      "Monday - Friday: 8:00 AM - 6:00 PM EST",
      "Saturday: 9:00 AM - 2:00 PM EST", 
      "Sunday: Closed"
    ],
    support: "24/7 Online Support Available"
  };

  const quickActions = [
    {
      title: "Sales Inquiry",
      description: "Get pricing and plan information",
      link: "https://salescentri.com/contact/sales-inquiry",
      cta: "Contact Sales"
    },
    {
      title: "Technical Support",
      description: "Get help with your account",
      link: "https://salescentri.com/contact/support-request",
      cta: "Get Support"
    },
    {
      title: "Partnership Opportunities",
      description: "Explore partnership options",
      link: "https://salescentri.com/contact/partnerships",
      cta: "Partner With Us"
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Ready to transform your email marketing? Our team is here to help you get started 
            with iEMA and answer any questions you may have.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-xl text-muted-foreground">
              Choose the best way to reach us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="feature-card text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-4">
                    {method.icon}
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{method.details}</p>
                  <a href={method.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://salescentri.com/contact" method="post" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Your Company Name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your email marketing goals and challenges..."
                      rows={5}
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full cta-button">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Information */}
            <div className="space-y-8">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MapPin className="mr-2 h-6 w-6 text-primary" />
                    Orlando Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{officeInfo.address}</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <span className="font-medium">Business Hours:</span>
                    </div>
                    {officeInfo.hours.map((hour, index) => (
                      <p key={index} className="text-sm text-muted-foreground ml-7">{hour}</p>
                    ))}
                    <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm text-primary font-medium">{officeInfo.support}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Actions</CardTitle>
                  <CardDescription>Common requests and how to get help</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {quickActions.map((action, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <h4 className="font-semibold mb-2">{action.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                      <a href={action.link}>
                        <Button variant="outline" size="sm">
                          {action.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Quick answers to frequently asked questions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: "How quickly can I get started?",
                answer: "You can start your free trial immediately and be sending automated emails within 30 minutes."
              },
              {
                question: "Do you offer migration assistance?",
                answer: "Yes, our team provides free migration assistance to help you move from your current platform."
              },
              {
                question: "What integrations are available?",
                answer: "We integrate with 100+ popular tools including Salesforce, HubSpot, Shopify, and more."
              }
            ].map((faq, index) => (
              <Card key={index} className="feature-card">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/faq">
              <Button variant="outline">
                View All FAQs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't wait to transform your email marketing. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/calendly">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Schedule Consultation
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;