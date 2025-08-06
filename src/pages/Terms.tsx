import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Samanthahookway Solutions' iEMA platform, you agree to be bound by these Terms of Service",
        "If you do not agree to these terms, you may not use our services",
        "We may update these terms from time to time, and continued use constitutes acceptance of any changes",
        "These terms apply to all users, including free trial users and paid subscribers"
      ]
    },
    {
      title: "Description of Service",
      content: [
        "Samanthahookway Solutions provides email marketing automation (iEMA) software and related services",
        "Our platform allows you to create, send, and track email campaigns and automated sequences",
        "We provide analytics, reporting, and integration capabilities as part of our service",
        "Features and capabilities may vary based on your subscription plan"
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "You are responsible for maintaining the security of your account credentials",
        "You must provide accurate and complete information when using our services",
        "You agree to use our platform only for lawful purposes and in compliance with all applicable laws",
        "You are responsible for all content uploaded to or sent through our platform",
        "You must comply with email marketing best practices and anti-spam regulations"
      ]
    },
    {
      title: "Prohibited Uses",
      content: [
        "Sending spam, unsolicited emails, or emails to purchased lists",
        "Uploading or transmitting viruses, malware, or other harmful code",
        "Using our service to send illegal, fraudulent, or deceptive content",
        "Attempting to access other users' accounts or data",
        "Reverse engineering or attempting to extract our source code",
        "Using our service in any way that could damage or overload our systems"
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis",
        "All fees are non-refundable except as required by law",
        "You authorize us to charge your payment method for all fees owed",
        "Failure to pay fees may result in suspension or termination of your account",
        "Price changes will be communicated with at least 30 days notice"
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "Our platform, software, and related materials are protected by intellectual property rights",
        "You retain ownership of your content and data uploaded to our platform",
        "You grant us a license to use your content solely to provide our services",
        "You may not copy, modify, or distribute our software or proprietary materials",
        "Third-party integrations and tools remain the property of their respective owners"
      ]
    },
    {
      title: "Data and Privacy",
      content: [
        "We are committed to protecting your privacy and data security",
        "Our data practices are governed by our Privacy Policy",
        "You are responsible for obtaining proper consent for email recipients",
        "We comply with GDPR, CAN-SPAM, and other applicable privacy regulations",
        "You may export your data at any time through our platform"
      ]
    },
    {
      title: "Service Availability",
      content: [
        "We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service",
        "Scheduled maintenance will be communicated in advance when possible",
        "We are not liable for service interruptions beyond our reasonable control",
        "Service level agreements may vary based on your subscription plan"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Our liability is limited to the amount you paid for our services in the preceding 12 months",
        "We are not liable for indirect, incidental, or consequential damages",
        "You use our service at your own risk and we provide it 'as is'",
        "We are not responsible for third-party integrations or external services",
        "Some jurisdictions may not allow these limitations"
      ]
    },
    {
      title: "Termination",
      content: [
        "You may cancel your account at any time through your account settings",
        "We may suspend or terminate accounts that violate these terms",
        "Upon termination, your access to the service will cease immediately",
        "You may export your data for 30 days after account termination",
        "Certain provisions of these terms will survive termination"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            These terms govern your use of Samanthahookway Solutions' iEMA platform and services. 
            Please read them carefully.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 1, 2024 • Effective Date: January 1, 2024
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                  Key Points Summary
                </CardTitle>
                <CardDescription className="text-base">
                  Here are the most important points from our Terms of Service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">✓ Your Rights</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• You own your data and content</li>
                      <li>• You can export your data anytime</li>
                      <li>• You can cancel your account anytime</li>
                      <li>• We protect your privacy and security</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">⚠ Your Responsibilities</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Use our service legally and ethically</li>
                      <li>• No spam or unsolicited emails</li>
                      <li>• Maintain account security</li>
                      <li>• Comply with email marketing laws</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <Card key={index} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {section.content.map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Important Notice */}
            <Card className="glass-card mt-12 border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-xl flex items-center text-yellow-800">
                  <AlertCircle className="mr-3 h-6 w-6" />
                  Important Notice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-700 mb-4">
                  These terms constitute a legally binding agreement between you and Samanthahookway Solutions. 
                  If you have questions about any provision, please contact our legal team before using our services.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-yellow-800">Legal Contact</h4>
                    <p className="text-sm text-yellow-700">legal@samanthahookway.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-yellow-800">Governing Law</h4>
                    <p className="text-sm text-yellow-700">State of Florida, United States</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card mt-12">
              <CardHeader>
                <CardTitle className="text-xl">Questions About These Terms?</CardTitle>
                <CardDescription>
                  Contact us if you need clarification on any part of our Terms of Service
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Legal Department</h4>
                    <p className="text-muted-foreground mb-1">Email: legal@samanthahookway.com</p>
                    <p className="text-muted-foreground mb-4">Phone: (321) 555-0123</p>
                    
                    <h4 className="font-semibold mb-2">Business Address</h4>
                    <p className="text-muted-foreground">
                      Samanthahookway Solutions<br />
                      123 Business District<br />
                      Orlando, FL 32801
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick Actions</h4>
                    <div className="space-y-3">
                      <a href="https://salescentri.com/contact">
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="mr-2 h-4 w-4" />
                          Contact Legal Team
                        </Button>
                      </a>
                      <a href="/privacy">
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="mr-2 h-4 w-4" />
                          View Privacy Policy
                        </Button>
                      </a>
                      <a href="https://salescentri.com/trust/compliance-certifications">
                        <Button variant="outline" className="w-full justify-start">
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Compliance Information
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Documents */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Related Documents</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/privacy">
                  <Button variant="outline">
                    Privacy Policy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://salescentri.com/trust/security-privacy">
                  <Button variant="outline">
                    Security Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="/faq">
                  <Button variant="outline">
                    Frequently Asked Questions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
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
            By using our service, you agree to these terms. Start your free trial today.
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

export default Terms;