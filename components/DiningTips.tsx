'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Utensils, 
  Calendar, 
  CreditCard, 
  Users, 
  Shirt, 
  AlertCircle,
  CheckCircle,
  Phone,
  Clock,
  Car,
  Waves
} from "lucide-react";

const diningEtiquette = [
  {
    title: "Reservation Essentials",
    icon: Calendar,
    tips: [
      {
        situation: "Fine Dining Restaurants",
        advice: "Book 2-4 weeks in advance, especially for oceanfront tables during sunset hours",
        priority: "Essential"
      },
      {
        situation: "Popular Local Spots",
        advice: "Many don't take reservations - arrive early or be prepared to wait",
        priority: "Good to Know"
      },
      {
        situation: "Hotel Restaurants",
        advice: "Hotel guests often get priority booking and better tables",
        priority: "Insider Tip"
      }
    ]
  },
  {
    title: "Dress Codes",
    icon: Shirt,
    tips: [
      {
        situation: "Upscale Restaurants",
        advice: "Resort elegant: no flip-flops, tank tops, or beach wear. Collared shirts for men.",
        priority: "Required"
      },
      {
        situation: "Casual Dining",
        advice: "Beach casual is fine, but cover up from swimwear",
        priority: "Respectful"
      },
      {
        situation: "Beachfront Venues",
        advice: "Smart casual with sandals acceptable, but check specific policies",
        priority: "Varies"
      }
    ]
  },
  {
    title: "Payment & Tipping",
    icon: CreditCard,
    tips: [
      {
        situation: "Standard Tipping",
        advice: "18-20% is standard for good service, 22-25% for exceptional service",
        priority: "Expected"
      },
      {
        situation: "Automatic Gratuity",
        advice: "Many restaurants add 18-20% for parties of 6+ or tourists",
        priority: "Check Your Bill"
      },
      {
        situation: "Cash vs Card",
        advice: "Most places accept cards, but small local spots may prefer cash",
        priority: "Be Prepared"
      }
    ]
  }
];

const practicalAdvice = [
  {
    category: "Transportation",
    icon: Car,
    advice: [
      "Valet parking costs $25-45 at most upscale restaurants",
      "Street parking is limited and enforced until midnight",
      "Consider walking or ride-sharing during peak hours",
      "Some hotels offer validated parking for restaurant guests"
    ]
  },
  {
    category: "Timing",
    icon: Clock,
    advice: [
      "Happy hour is typically 3-6 PM with significant discounts",
      "Sunset dining requires reservations 30 minutes before sunset",
      "Late night dining options are limited - most kitchens close by 10 PM",
      "Sunday brunch is extremely popular - book well in advance"
    ]
  },
  {
    category: "Weather Considerations",
    icon: Waves,
    advice: [
      "Ocean-view restaurants can be windy - bring a light jacket",
      "Outdoor seating may close during rare rain showers",
      "Trade winds make beachfront dining comfortable year-round",
      "Sunset timing varies by season - check local sunset times"
    ]
  },
  {
    category: "Group Dining",
    icon: Users,
    advice: [
      "Large groups (8+) often have limited menu options",
      "Split bills may not be possible at some establishments",
      "Consider family-style dining for authentic Hawaiian experience",
      "Book private dining rooms for special occasions"
    ]
  }
];

const commonMistakes = [
  {
    mistake: "Not making reservations for popular sunset spots",
    consequence: "Long waits or no availability during prime dining hours",
    solution: "Book 2-4 weeks ahead, especially for weekend sunset dining"
  },
  {
    mistake: "Arriving underdressed to upscale restaurants",
    consequence: "Being turned away or feeling uncomfortable",
    solution: "Check dress codes online or call ahead to confirm requirements"
  },
  {
    mistake: "Not researching local dining customs",
    consequence: "Cultural insensitivity or missing authentic experiences",
    solution: "Learn about Hawaiian food culture and local dining etiquette"
  },
  {
    mistake: "Forgetting to validate parking",
    consequence: "Unexpected $30-50 parking fees",
    solution: "Always ask about parking validation when dining at hotels"
  },
  {
    mistake: "Not checking for automatic gratuity",
    consequence: "Double-tipping or undertipping service staff",
    solution: "Review your bill carefully before adding additional tip"
  }
];

const culturalInsights = [
  {
    title: "Aloha Spirit in Dining",
    description: "Embrace the relaxed pace and warm hospitality that defines Hawaiian dining culture.",
    practices: [
      "Take time to appreciate your meal and surroundings",
      "Engage with local staff to learn about ingredients and preparation",
      "Respect the land and ocean that provide the food",
      "Share dishes family-style when appropriate"
    ]
  },
  {
    title: "Local Food Traditions",
    description: "Understanding traditional Hawaiian foods enhances your dining experience.",
    practices: [
      "Try poi (taro root) as a traditional staple",
      "Understand the significance of fresh fish in Hawaiian cuisine",
      "Appreciate the fusion of cultures in modern Hawaiian regional cuisine",
      "Respect sacred foods and their cultural importance"
    ]
  }
];

const DiningTips = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            <Utensils className="h-4 w-4 mr-2" />
            Dining Guide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Essential <span className="gradient-text">Dining Tips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Make the most of your Waikiki dining experience with insider knowledge about reservations, 
            etiquette, and local customs that will ensure memorable meals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Etiquette & Practical */}
          <div className="space-y-8">
            {/* Dining Etiquette */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Dining Etiquette</CardTitle>
                <CardDescription>
                  Essential knowledge for navigating Waikiki's diverse restaurant scene
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion className="w-full">
                  {diningEtiquette.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <AccordionItem key={index} value={`etiquette-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5 text-primary" />
                            {section.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-2">
                            {section.tips.map((tip, tipIndex) => (
                              <div key={tipIndex} className="p-3 rounded-lg bg-muted/50">
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-medium text-sm">{tip.situation}</h4>
                                  <Badge 
                                    variant={tip.priority === "Essential" || tip.priority === "Required" ? "default" : "secondary"}
                                    className="text-xs"
                                  >
                                    {tip.priority}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{tip.advice}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
            
            {/* Practical Advice */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Practical Advice</CardTitle>
                <CardDescription>
                  Logistics and planning tips for stress-free dining
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {practicalAdvice.map((category, index) => {
                    const Icon = category.icon;
                    return (
                      <div key={index}>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon className="h-5 w-5 text-primary" />
                          <h3 className="font-semibold">{category.category}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.advice.map((tip, tipIndex) => (
                            <div key={tipIndex} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="h-3 w-3 text-accent mt-1 flex-shrink-0" />
                              <span className="text-muted-foreground">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Mistakes & Culture */}
          <div className="space-y-8">
            {/* Common Mistakes */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                  Avoid These Mistakes
                </CardTitle>
                <CardDescription>
                  Learn from common tourist mistakes to ensure smooth dining experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commonMistakes.map((mistake, index) => (
                    <Card key={index} className="border-destructive/20">
                      <CardContent className="p-4">
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-destructive mb-1">❌ {mistake.mistake}</h4>
                            <p className="text-sm text-muted-foreground">{mistake.consequence}</p>
                          </div>
                          <div className="p-2 bg-accent/10 rounded-lg">
                            <p className="text-sm font-medium text-accent">
                              ✅ Solution: {mistake.solution}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Cultural Insights */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl">Cultural Insights</CardTitle>
                <CardDescription>
                  Understanding Hawaiian dining culture enriches your experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {culturalInsights.map((insight, index) => (
                    <div key={index}>
                      <h3 className="font-semibold mb-2">{insight.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{insight.description}</p>
                      <div className="space-y-2">
                        {insight.practices.map((practice, practiceIndex) => (
                          <div key={practiceIndex} className="flex items-start gap-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{practice}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Emergency Contacts */}
            <Card className="glass-card border-primary/20">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Helpful Contacts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Restaurant Reservations</span>
                    <span className="font-medium">OpenTable App</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxi/Rideshare</span>
                    <span className="font-medium">Uber, Lyft</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tourist Information</span>
                    <span className="font-medium">(808) 924-0722</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Concierge Services</span>
                    <span className="font-medium">Hotel Front Desk</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Explore Waikiki's Flavors?
              </h3>
              <p className="text-muted-foreground mb-6">
                Use our restaurant finder to discover the perfect dining experience 
                based on your preferences, budget, and location.
              </p>
              <div className="flex gap-3 justify-center">
                <Button variant="default" size="lg">
                  Find Restaurants Now
                </Button>
                <Button variant="outline" size="lg">
                  Download Dining Guide
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DiningTips;