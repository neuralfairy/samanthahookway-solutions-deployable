import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Account information (name, email, company details)",
        "Email marketing data (contacts, campaigns, analytics)",
        "Usage data (how you interact with our platform)",
        "Technical data (IP address, browser type, device information)",
        "Communication data (support tickets, feedback)"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our email marketing automation services",
        "Process your email campaigns and manage your contacts",
        "Improve our platform features and user experience",
        "Communicate with you about your account and our services",
        "Comply with legal obligations and prevent fraud"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "We never sell your personal information to third parties",
        "We may share data with trusted service providers who help us operate our platform",
        "We may disclose information if required by law or to protect our rights",
        "We may share aggregated, anonymized data for research purposes",
        "Your email contacts and campaign data remain strictly confidential"
      ]
    },
    {
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data",
        "All data transmission is secured with SSL/TLS encryption",
        "We maintain SOC 2 compliance and regular security audits",
        "Access to your data is strictly limited to authorized personnel",
        "We implement multi-factor authentication and access controls"
      ]
    },
    {
      title: "Your Rights (GDPR Compliance)",
      content: [
        "Right to access your personal data",
        "Right to rectify inaccurate information", 
        "Right to erasure ('right to be forgotten')",
        "Right to restrict processing of your data",
        "Right to data portability",
        "Right to object to processing",
        "Right to withdraw consent at any time"
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain your data only as long as necessary to provide our services",
        "Account data is retained while your account is active",
        "Email campaign data is retained for analytics and compliance purposes",
        "You can request deletion of your data at any time",
        "Some data may be retained longer for legal compliance"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Samanthahookway Solutions 
            collects, uses, and protects your personal information.
          </p>
          <div className="text-sm text-muted-foreground">
            Last updated: January 1, 2024
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="glass-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Eye className="mr-3 h-6 w-6 text-primary" />
                  Privacy Overview
                </CardTitle>
                <CardDescription className="text-base">
                  At Samanthahookway Solutions, we are committed to protecting your privacy and ensuring 
                  the security of your personal information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Lock className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Secure by Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Industry-leading security measures protect your data
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">GDPR Compliant</h4>
                    <p className="text-sm text-muted-foreground">
                      Full compliance with international privacy regulations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Eye className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2">Transparent</h4>
                    <p className="text-sm text-muted-foreground">
                      Clear policies about how we handle your information
                    </p>
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
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact for Privacy */}
            <Card className="glass-card mt-12">
              <CardHeader>
                <CardTitle className="text-xl">Contact Us About Privacy</CardTitle>
                <CardDescription>
                  If you have questions about this Privacy Policy or want to exercise your rights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Data Protection Officer</h4>
                    <p className="text-muted-foreground mb-1">Email: privacy@samanthahookway.com</p>
                    <p className="text-muted-foreground mb-4">Phone: (321) 555-0123</p>
                    
                    <h4 className="font-semibold mb-2">Mailing Address</h4>
                    <p className="text-muted-foreground">
                      Samanthahookway Solutions<br />
                      Attn: Privacy Officer<br />
                      123 Business District<br />
                      Orlando, FL 32801
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quick Actions</h4>
                    <div className="space-y-3">
                      <a href="https://salescentri.com/trust/security-privacy">
                        <Button variant="outline" className="w-full justify-start">
                          <FileText className="mr-2 h-4 w-4" />
                          Request Data Export
                        </Button>
                      </a>
                      <a href="https://salescentri.com/contact/support-request">
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="mr-2 h-4 w-4" />
                          Report Privacy Concern
                        </Button>
                      </a>
                      <a href="https://salescentri.com/trust/compliance-certifications">
                        <Button variant="outline" className="w-full justify-start">
                          <Lock className="mr-2 h-4 w-4" />
                          View Security Certifications
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <div className="mt-12 text-center">
              <h3 className="text-2xl font-bold mb-6">Related Policies</h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/terms">
                  <Button variant="outline">
                    Terms of Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://salescentri.com/trust/security-privacy">
                  <Button variant="outline">
                    Security Information
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="https://salescentri.com/trust/compliance-certifications">
                  <Button variant="outline">
                    Compliance Certifications
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
            Questions About Our Privacy Practices?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our privacy team is here to help. Contact us if you have any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/contact">
              <Button size="lg" variant="secondary">
                Contact Privacy Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/trust/security-privacy">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Security Details
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;