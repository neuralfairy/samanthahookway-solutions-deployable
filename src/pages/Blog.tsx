import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Search,
  TrendingUp,
  Mail,
  Target,
  BarChart3,
  Lightbulb,
  Users
} from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    title: "10 Advanced Email Automation Strategies That Increase B2B Conversions by 300%",
    excerpt: "Discover the proven automation strategies that top-performing B2B companies use to dramatically increase their email marketing conversions and revenue.",
    author: "Samantha Hookway",
    date: "January 15, 2024",
    readTime: "8 min read",
    category: "Email Marketing",
    image: "/placeholder-blog-featured.jpg",
    featured: true
  };

  const blogPosts = [
    {
      title: "The Complete Guide to Email Deliverability in 2024",
      excerpt: "Learn how to ensure your emails reach the inbox with these essential deliverability best practices and technical requirements.",
      author: "Michael Rodriguez",
      date: "January 12, 2024",
      readTime: "6 min read",
      category: "Technical",
      tags: ["Deliverability", "Email Infrastructure", "Best Practices"]
    },
    {
      title: "How to Create Personalized Email Sequences That Convert",
      excerpt: "Step-by-step guide to building email sequences that feel personal and drive meaningful engagement with your prospects.",
      author: "Sarah Chen",
      date: "January 10, 2024", 
      readTime: "5 min read",
      category: "Strategy",
      tags: ["Personalization", "Email Sequences", "Conversion"]
    },
    {
      title: "Email Marketing ROI: How to Measure and Optimize Your Campaigns",
      excerpt: "Master the metrics that matter and learn how to calculate and improve the ROI of your email marketing efforts.",
      author: "Samantha Hookway",
      date: "January 8, 2024",
      readTime: "7 min read",
      category: "Analytics",
      tags: ["ROI", "Analytics", "Optimization"]
    },
    {
      title: "B2B Email Automation: From Lead to Customer in 30 Days",
      excerpt: "A complete framework for nurturing B2B leads through automated email sequences that build trust and drive sales.",
      author: "Michael Rodriguez",
      date: "January 5, 2024",
      readTime: "9 min read",
      category: "B2B Strategy",
      tags: ["B2B", "Lead Nurturing", "Automation"]
    },
    {
      title: "Email Design Trends That Boost Engagement in 2024",
      excerpt: "Explore the latest email design trends and learn how to create visually appealing emails that drive higher engagement.",
      author: "Sarah Chen",
      date: "January 3, 2024",
      readTime: "4 min read",
      category: "Design",
      tags: ["Email Design", "Engagement", "Trends"]
    },
    {
      title: "Integration Guide: Connecting Your CRM with Email Automation",
      excerpt: "Step-by-step instructions for integrating popular CRM systems with your email automation platform for seamless workflows.",
      author: "Michael Rodriguez",
      date: "December 30, 2023",
      readTime: "6 min read",
      category: "Integrations",
      tags: ["CRM", "Integrations", "Workflow"]
    }
  ];

  const categories = [
    { name: "Email Marketing", count: 24, icon: <Mail className="h-5 w-5" /> },
    { name: "Strategy", count: 18, icon: <Target className="h-5 w-5" /> },
    { name: "Analytics", count: 15, icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Technical", count: 12, icon: <Lightbulb className="h-5 w-5" /> },
    { name: "B2B Strategy", count: 10, icon: <Users className="h-5 w-5" /> },
    { name: "Case Studies", count: 8, icon: <TrendingUp className="h-5 w-5" /> }
  ];

  const popularTags = [
    "Email Automation", "B2B Marketing", "Lead Generation", "Conversion Optimization",
    "Email Design", "Deliverability", "Personalization", "Analytics", "CRM Integration",
    "ROI", "Segmentation", "A/B Testing"
  ];

  return (
    <div className="min-h-screen py-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Email Marketing Insights & Strategies
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Expert insights, proven strategies, and actionable tips to help you master email marketing automation 
            and drive better results for your business.
          </p>
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </div>
          <Card className="glass-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-subtle flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Featured Article Image</p>
                </div>
              </div>
              <div className="p-8">
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {featuredPost.category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <span>{featuredPost.readTime}</span>
                </div>
                <a href="https://salescentri.com/resources/case-studies">
                  <Button className="cta-button">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog Posts */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              <div className="space-y-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="feature-card">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-base">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <a href="https://salescentri.com/resources/case-studies">
                          <Button variant="outline" size="sm">
                            Read More
                            <ArrowRight className="ml-2 h-3 w-3" />
                          </Button>
                        </a>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Categories */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {categories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 cursor-pointer transition-colors">
                        <div className="flex items-center space-x-2">
                          <div className="text-primary">
                            {category.icon}
                          </div>
                          <span className="font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Popular Tags */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Popular Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Newsletter Signup */}
              <Card className="glass-card bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">Stay Updated</CardTitle>
                  <CardDescription>
                    Get the latest email marketing insights delivered to your inbox
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" type="email" />
                    <a href="https://salescentri.com/get-started/free-trial">
                      <Button className="w-full cta-button">
                        Subscribe
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <a href="https://salescentri.com/resources/whitepapers-ebooks" className="block p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="font-medium">Email Marketing Guide</div>
                      <div className="text-sm text-muted-foreground">Free comprehensive guide</div>
                    </a>
                    <a href="https://salescentri.com/resources/case-studies" className="block p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="font-medium">Case Studies</div>
                      <div className="text-sm text-muted-foreground">Real customer success stories</div>
                    </a>
                    <a href="https://salescentri.com/resources/tutorials-webinars" className="block p-2 rounded-lg hover:bg-accent/50 transition-colors">
                      <div className="font-medium">Webinar Series</div>
                      <div className="text-sm text-muted-foreground">Live training sessions</div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Ready to Put These Insights to Work?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start implementing these email marketing strategies with our powerful automation platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://salescentri.com/get-started/free-trial">
              <Button size="lg" variant="secondary">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <a href="https://salescentri.com/solutions/use-case-navigator/demo">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Demo
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;