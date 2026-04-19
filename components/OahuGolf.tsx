'use client'

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "@/components/ui/external-link";
import {
  Flag,
  MapPin,
  Clock,
  DollarSign,
  Users,
  ShoppingBag,
  Target,
  Shirt,
  UtensilsCrossed,
  Wine,
  GraduationCap,
  Building2,
  Car,
  Phone
} from "lucide-react";
import { golfCourses } from "@/data/golfCourses";
import { slugify } from "@/lib/slugify";

const OahuGolf = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Courses", count: golfCourses.length },
    { id: "Resort", label: "Resort", count: golfCourses.filter(c => c.type === "Resort").length },
    { id: "Public", label: "Public", count: golfCourses.filter(c => c.type === "Public").length },
    { id: "Municipal", label: "Municipal", count: golfCourses.filter(c => c.type === "Municipal").length },
    { id: "Private", label: "Private", count: golfCourses.filter(c => c.type === "Private").length },
  ];

  const filteredCourses = selectedCategory === "all" 
    ? golfCourses 
    : golfCourses.filter(course => course.type === selectedCategory);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Public": return "default";
      case "Resort": return "secondary";
      case "Municipal": return "outline";
      case "Private": return "destructive";
      default: return "default";
    }
  };

  const amenityIcons: Record<string, any> = {
    "Pro Shop": ShoppingBag,
    "Driving Range": Target,
    "Club Rentals": Shirt,
    "Restaurant": UtensilsCrossed,
    "Bar": Wine,
    "Practice Greens": Flag,
    "Cart GPS": MapPin,
    "Lessons": GraduationCap,
    "Clubhouse": Building2,
  };

  return (
    <section id="golf" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Flag className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Oahu Golf Courses
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover world-class golf in paradise. From championship resort courses to affordable municipal gems, 
            Oahu offers unforgettable golf experiences with stunning ocean and mountain backdrops.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card">
            <CardContent className="pt-6 text-center">
              <Flag className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{golfCourses.length}</div>
              <div className="text-sm text-muted-foreground">Total Courses</div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{golfCourses.filter(c => c.type === "Public" || c.type === "Municipal").length}</div>
              <div className="text-sm text-muted-foreground">Public Access</div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6 text-center">
              <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">{golfCourses.filter(c => c.type === "Resort").length}</div>
              <div className="text-sm text-muted-foreground">Resort Courses</div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="pt-6 text-center">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">$20+</div>
              <div className="text-sm text-muted-foreground">Starting From</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
          <TabsList className="flex overflow-x-auto scrollbar-none gap-2 mb-8 h-auto bg-transparent p-0 w-full justify-start md:justify-center">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex-none transition-colors bg-muted text-muted-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
              >
                <Flag className="h-3.5 w-3.5" />
                {category.label}
                <Badge variant="secondary" className="ml-1 text-xs">
                  {category.count}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={`${course.name} golf course — ${course.location}, Oahu Hawaii`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge 
                      variant={getTypeColor(course.type)}
                      className="absolute top-4 right-4"
                    >
                      {course.type}
                    </Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {course.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      <span>{course.location}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {course.description}
                    </p>

                    {/* Course Stats */}
                    <div className="grid grid-cols-2 gap-2 mb-4 p-3 bg-muted/50 rounded-lg">
                      <div className="text-sm">
                        <span className="font-semibold">{course.holes}</span> Holes
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">{course.yardage}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">{course.courseRating}</span> Rating
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold">{course.slope}</span> Slope
                      </div>
                    </div>

                    {/* Green Fees */}
                    <div className="flex items-center gap-2 mb-4 p-2 bg-primary/10 rounded">
                      <DollarSign className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">
                        {course.greenFees.nonResidents}
                      </span>
                    </div>

                    {/* Amenities Icons */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.amenities.slice(0, 6).map((amenity) => {
                        const Icon = amenityIcons[amenity] || Flag;
                        return (
                          <div 
                            key={amenity}
                            className="p-2 bg-muted rounded-full"
                            title={amenity}
                          >
                            <Icon className="h-4 w-4 text-primary" />
                          </div>
                        );
                      })}
                    </div>

                    {/* Distance Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {course.distanceFromWaikiki}
                      </div>
                      <div className="flex items-center gap-1">
                        <Car className="h-4 w-4" />
                        {course.driveTime}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {course.highlights.slice(0, 3).map((highlight) => (
                        <Badge key={highlight} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact & Book */}
                    <div className="space-y-2">
                      <Link href={`/golf/${slugify(course.name)}`} className="block">
                        <Button className="w-full" variant="default">
                          View Details
                        </Button>
                      </Link>

                      <ExternalLink
                        href={course.website}
                        className="block"
                        showIcon={false}
                      >
                        <Button className="w-full" variant="outline">
                          Book Tee Time
                        </Button>
                      </ExternalLink>

                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span>{course.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-12">
                <Flag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg text-muted-foreground">
                  No courses found in this category
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Golf Tips */}
        <Card className="mt-12 glass-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Golf on Oahu - Insider Tips
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Best Time to Play
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Early morning tee times offer the best conditions with calm winds and cooler temperatures. 
                  Twilight rates provide excellent value for afternoon golf.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  Money-Saving Tips
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Municipal courses offer incredible value. Book online for discounts, and consider twilight rates 
                  at resort courses for premium experiences at lower prices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Trade Winds
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Hawaii's famous trade winds typically pick up in the afternoon. Factor in wind when club selection 
                  and aim. Windward courses play longer than yardage suggests.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Booking Tee Times
                </h4>
                <p className="text-sm text-muted-foreground">
                  Popular courses like Ala Wai fill up weeks in advance. Book early for municipal courses. 
                  Resort courses often have same-day availability but at premium rates.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OahuGolf;
