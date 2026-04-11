'use client'

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, Users } from "lucide-react";

const quickStats = [
  { icon: Star, label: "5-Star Restaurants", value: "50+" },
  { icon: MapPin, label: "Oceanfront Locations", value: "25+" },
  { icon: Clock, label: "Open Late Night", value: "15+" },
  { icon: Users, label: "Local Favorites", value: "100+" }
];

const WaikikiHero = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${"/assets/hawaiian-hula-hero.jpg"})`
        }}
      >
        <div className="absolute inset-0 bg-background/40" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Hero Content */}
        <div className="text-center text-foreground mb-12">
          <Badge variant="secondary" className="mb-4 bg-background/20 text-foreground border-border/30">
            <MapPin className="h-4 w-4 mr-2" />
            Waikiki Beach, Hawaii
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Best Restaurants in
            <span className="block gradient-text bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Waikiki Hawaii
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Discover paradise for your palate with our complete guide to Waikiki's finest dining. 
            From authentic Hawaiian poke to world-class oceanfront restaurants.
          </p>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
             return (
               <Card key={index} className="glass-card border-border/20 bg-background/10 backdrop-blur-md">
                 <CardContent className="text-center p-6">
                   <div className="mx-auto mb-3 p-3 rounded-full bg-background/20">
                     <Icon className="h-6 w-6 text-foreground" />
                   </div>
                   <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                   <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WaikikiHero;