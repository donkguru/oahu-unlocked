'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQStructuredData, FAQItem } from "@/components/seo/StructuredData";

const faqs: FAQItem[] = [
  {
    question: "What is the best restaurant in Waikiki?",
    answer: "Duke's Waikiki at the Outrigger Beach Resort is the most iconic dining experience in Waikiki — oceanfront tables, live music, and excellent Hawaiian seafood. For fine dining, La Mer and Orchids at the Halekulani Hotel are consistently rated among Hawaii's best. For a local favorite, Sansei Seafood Restaurant & Sushi Bar offers outstanding sushi and late-night deals."
  },
  {
    question: "What are the best things to do on Oahu?",
    answer: "Oahu offers something for every traveler. Top activities include hiking Diamond Head Crater Trail for panoramic views, snorkeling at Hanauma Bay Nature Preserve, visiting Pearl Harbor and the USS Arizona Memorial, surfing at Waikiki Beach, exploring Kualoa Ranch (famous from Jurassic Park), and watching big wave surfers on the North Shore in winter."
  },
  {
    question: "Where should I stay on Oahu?",
    answer: "Waikiki is the top choice for first-time visitors — walkable to beaches, restaurants, and activities. Kailua on the windward side offers quieter beaches and a charming local town. The North Shore suits surf lovers and those seeking a laid-back vibe. Ko Olina on the west side has calm resort lagoons, perfect for families. Kaneohe gives easy access to Kualoa Ranch and the lush windward coast."
  },
  {
    question: "What are the best hiking trails on Oahu?",
    answer: "The top hikes on Oahu are Diamond Head Crater Trail (1.6 miles, easy, stunning crater views), Koko Head Stairs (1,048 railway steps, intense workout, ocean panoramas), Manoa Falls Trail (1.6 miles, easy, leads to a 150-foot waterfall), Lanikai Pillbox Hike (2 miles, moderate, views over Kailua and the Mokulua Islands), and Makapuu Lighthouse Trail (2 miles, easy, whale watching in winter)."
  },
  {
    question: "What is the best time to visit Oahu?",
    answer: "April–June and September–November are the sweet spots — smaller crowds, lower prices, and great weather. Summer (June–August) is peak season with highest prices but reliable sunshine. Winter (December–February) brings some rain on the windward side but epic big waves on the North Shore. Oahu is warm year-round, averaging 78–85°F."
  },
  {
    question: "What are the best golf courses on Oahu?",
    answer: "Ko Olina Golf Club is the most picturesque, with ocean views and lush fairways along the west coast. Turtle Bay Resort offers two championship courses on the North Shore. For a bucket-list experience, the Royal Hawaiian Golf Club winds through a jungle valley in Kailua. Municipal courses like Ala Wai Golf Course are affordable and walkable from Waikiki."
  },
  {
    question: "Is Oahu good for families with kids?",
    answer: "Oahu is one of the best family destinations in the world. Top family activities include Hanauma Bay snorkeling, the Polynesian Cultural Center, Kualoa Ranch ATV and zipline tours, the calm Ko Olina lagoons for young swimmers, and the Bishop Museum with its planetarium. Most beaches have lifeguards and calm conditions in summer."
  },
  {
    question: "What is the best Hawaiian food to try on Oahu?",
    answer: "Must-try Hawaiian dishes on Oahu include plate lunches (rice, mac salad, protein), poke bowls (fresh marinated raw fish), shave ice at Matsumoto's on the North Shore, garlic shrimp from Giovanni's Shrimp Truck, malasadas (Portuguese donuts) from Leonard's Bakery, and loco moco (rice, burger patty, egg, brown gravy). For traditional Hawaiian food, Helena's Hawaiian Food in Honolulu is a James Beard Award winner."
  }
];

export default function HomeFAQ() {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <FAQStructuredData faqs={faqs} />
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Oahu Travel FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know before visiting Oahu, Hawaii.
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
