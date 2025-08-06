import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Mail, 
  Users, 
  BarChart3, 
  Zap, 
  Settings,
  Target,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Workflow,
  Database,
  MessageSquare,
  Brain
} from 'lucide-react';

const Features = () => {
  const coreFeatures = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Advanced Email Automation",
      description: "Create sophisticated drip campaigns with conditional logic, A/B testing, and advanced personalization.",
      benefits: [
        "Visual drag-and-drop campaign builder",
        "Conditional branching and smart triggers",
        "A/B test subject lines and content",
        "Advanced personalization tokens"
      ]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Lead Scoring & Segmentation",
      description: "Automatically score leads and segment your audience based on behavior, demographics, and engagement.",
      benefits: [
        "Behavioral lead scoring",
        "Dynamic list segmentation", 
        "Custom scoring criteria",
        "Real-time audience updates"
      ]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics & Reporting",
      description: "Get deep insights into campaign performance with comprehensive analytics and custom reporting.",
      benefits: [
        "Real-time campaign metrics",
        "Revenue attribution tracking",
        "Custom report builder",
        "ROI and conversion analysis"
      ]
    }
  ];

  const integrationFeatures = [
    {
      name: "CRM Integration",
      description: "Seamlessly sync with popular CRM platforms",
      platforms: ["Salesforce", "HubSpot", "Pipedrive", "Zoho"]
    },
    {
      name: "E-commerce Platforms", 
      description: "Connect with major e-commerce solutions",
      platforms: ["Shopify", "WooCommerce", "Magento", "BigCommerce"]
    },
    {
      name: "Marketing Tools",
      description: "Integrate with your existing marketing stack",
      platforms: ["Google Analytics", "Facebook Ads", "LinkedIn", "Zapier"]
    }
  ];

  const automationWorkflows = [
    {
      title: "Welcome Series",
      description: "Onboard new subscribers with personalized welcome sequences",
      steps: ["Welcome email", "Value proposition", "Social proof", "CTA"]
    },
    {
      title: "Lead Nurturing",
      description: "Guide prospects through the sales funnel with targeted content",
      steps: ["Pain point identification", "Solution education", "Case studies", "Demo offer"]
    },
    {
      title: "Re-engagement",
      description: "Win back inactive subscribers with targeted campaigns",
      steps: ["Inactivity detection", "Re-engagement offer", "Feedback request", "List cleanup"]
    }
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Complete Feature Suite
          </Badge>
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Powerful iEMA Features for Modern B2B Marketing
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the comprehensive set of tools designed to automate, optimize, and scale your email marketing campaigns.
          </p>
          <a href="https://salescentri.com/solutions/use-case-navigator/demo">
            <Button size="lg" className="cta-button">
              Explore Interactive Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core iEMA Capabilities</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your email marketing automation
            </p>
          </div>
          <div className="space-y-16">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <Card className="feature-card p-8">
                    <div className="aspect-video bg-gradient-subtle rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          {feature.icon}
                        </div>
                        <p className="text-muted-foreground">Interactive Demo Available</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Complete Feature Breakdown</h2>
            <p className="text-xl text-muted-foreground">
              Explore all features by category
            </p>
          </div>
          <Tabs defaultValue="automation" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="automation">Automation</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="personalization">Personalization</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automation" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {automationWorkflows.map((workflow, index) => (
                  <Card key={index} className="feature-card">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Workflow className="h-5 w-5 text-primary" />
                        <span>{workflow.title}</span>
                      </CardTitle>
                      <CardDescription>{workflow.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {workflow.steps.map((step, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-sm text-primary font-medium">
                              {idx + 1}
                            </div>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { icon: <BarChart3 />, title: "Open Rates", desc: "Track email opens by segment" },
                  { icon: <Target />, title: "Click-through Rates", desc: "Measure engagement levels" },
                  { icon: <Database />, title: "Conversion Tracking", desc: "Monitor revenue attribution" },
                  { icon: <Brain />, title: "Predictive Analytics", desc: "AI-powered insights" }
                ].map((item, idx) => (
                  <Card key={idx} className="feature-card text-center">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mx-auto mb-2">
                        {item.icon}
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{item.desc}</CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="personalization" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle>Dynamic Content</CardTitle>
                    <CardDescription>Personalize emails based on recipient data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Name and company personalization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Industry-specific content</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Behavioral triggers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Location-based customization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="feature-card">
                  <CardHeader>
                    <CardTitle>Smart Recommendations</CardTitle>
                    <CardDescription>AI-powered content suggestions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Product recommendations</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Content suggestions</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Send time optimization</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>Subject line optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-8">
              <div className="space-y-8">
                {integrationFeatures.map((integration, index) => (
                  <Card key={index} className="feature-card">
                    <CardHeader>
                      <CardTitle>{integration.name}</CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {integration.platforms.map((platform, idx) => (
                          <Badge key={idx} variant="secondary">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and discover how iEMA can transform your email marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/get-started/book-demo">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Book Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;