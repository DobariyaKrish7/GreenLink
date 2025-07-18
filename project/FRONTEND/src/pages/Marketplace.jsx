import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Recycle, Truck } from 'lucide-react';
import MarketplaceHero from '../components/Marketplace/MarketplaceHero';
import MarketplaceFeatures from '../components/Marketplace/MarketplaceFeatures';
import MarketplaceCategories from '../components/Marketplace/MarketplaceCategories';
import MarketplaceFeatureDetails from '../components/Marketplace/MarketplaceFeatureDetails';
import MarketplaceActions from '../components/Marketplace/MarketplaceActions';
import MarketplaceStats from '../components/Marketplace/MarketplaceStats';
import MarketplaceTestimonials from '../components/Marketplace/MarketplaceTestimonials';
import MarketplaceHowItWorks from '../components/Marketplace/MarketplaceHowItWorks';

export default function Marketplace() {
  const navigate = useNavigate();
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      emoji: "🌍",
      title: "Global Network",
      shortDescription: "Connect with verified partners worldwide",
      longDescription: "Access our extensive network of verified suppliers and buyers across the globe. Our platform connects you with trusted partners in over 150 countries, enabling seamless international trade of sustainable materials.",
      stats: [
        { value: "150+", label: "Countries" },
        { value: "10K+", label: "Active Users" },
        { value: "50K+", label: "Successful Trades" }
      ],
      benefits: [
        "Real-time market insights from global trading activities",
        "Verified international suppliers and buyers",
        "Multi-currency support and secure transactions",
        "Local market expertise and support"
      ]
    },
    {
      emoji: "⭐",
      title: "Quality Assured",
      shortDescription: "All materials meet strict standards",
      longDescription: "Our rigorous quality assurance process ensures that all materials traded on our platform meet international standards and specifications. Every supplier undergoes thorough verification and regular audits.",
      stats: [
        { value: "99.9%", label: "Quality Rate" },
        { value: "24/7", label: "Quality Support" },
        { value: "100%", label: "Satisfaction Guarantee" }
      ],
      benefits: [
        "Independent quality verification process",
        "Regular supplier audits and ratings",
        "Detailed material specifications and testing",
        "Quality dispute resolution support"
      ]
    },
    {
      emoji: "♻️",
      title: "Eco-Friendly",
      shortDescription: "Support sustainable practices",
      longDescription: "Join the circular economy revolution. Our platform promotes sustainable practices by facilitating the trade of recycled and eco-friendly materials, helping reduce environmental impact across industries.",
      stats: [
        { value: "1M+", label: "Tons CO₂ Saved" },
        { value: "30%", label: "Average Cost Savings" },
        { value: "85%", label: "Waste Reduction" }
      ],
      benefits: [
        "Carbon footprint tracking and reporting",
        "Sustainable material certification",
        "Environmental impact assessment",
        "Green supply chain optimization"
      ]
    },
    {
      emoji: "🔒",
      title: "Secure Trading",
      shortDescription: "Safe and transparent transactions",
      longDescription: "Experience worry-free trading with our secure platform. We offer escrow services, verified payments, and comprehensive transaction protection to ensure safe and transparent dealings.",
      stats: [
        { value: "100%", label: "Secure Payments" },
        { value: "0%", label: "Fraud Rate" },
        { value: "24/7", label: "Support" }
      ],
      benefits: [
        "Secure payment processing",
        "Escrow services for large transactions",
        "Dispute resolution system",
        "Transaction insurance options"
      ]
    },
    {
      emoji: "📊",
      title: "Market Intelligence",
      shortDescription: "Data-driven insights and analytics",
      longDescription: "Make informed decisions with our comprehensive market intelligence. Access real-time pricing data, market trends, and predictive analytics to optimize your trading strategy.",
      stats: [
        { value: "Real-time", label: "Price Updates" },
        { value: "90%", label: "Prediction Accuracy" },
        { value: "Daily", label: "Market Reports" }
      ],
      benefits: [
        "Real-time market pricing and trends",
        "Predictive analytics for market movements",
        "Customized market reports and alerts",
        "Competitor analysis tools"
      ]
    },
    {
      emoji: "🤝",
      title: "Expert Support",
      shortDescription: "Dedicated assistance at every step",
      longDescription: "Get personalized support from our team of industry experts. From onboarding to complex transactions, we're here to help you succeed in sustainable material trading.",
      stats: [
        { value: "15min", label: "Avg Response Time" },
        { value: "98%", label: "Resolution Rate" },
        { value: "24/7", label: "Availability" }
      ],
      benefits: [
        "Dedicated account managers",
        "Technical support and consultation",
        "Trading strategy assistance",
        "Regulatory compliance guidance"
      ]
    }
  ];

  const categories = [
    {
      title: "Raw Materials",
      description: "High-quality recycled materials for manufacturing",
      image: "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?auto=format&fit=crop&q=80&w=500",
      icon: Package,
      items: ["Recycled Plastics", "Metal Scraps", "Wood Materials"]
    },
    {
      title: "Organic Waste",
      description: "Sustainable biomass and organic materials",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=500",
      icon: Recycle,
      items: ["Food Waste", "Agricultural Waste", "Compostable Materials"]
    },
    {
      title: "Industrial Materials",
      description: "Certified industrial grade materials",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=500",
      icon: Truck,
      items: ["Chemical Products", "Construction Materials", "Manufacturing Waste"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHero onCTAClick={() => document.getElementById('categories').scrollIntoView({ behavior: 'smooth' })} />
      <MarketplaceStats />
      <MarketplaceActions navigate={navigate} />
      <MarketplaceFeatures features={features} onFeatureClick={setSelectedFeature} />
      <MarketplaceHowItWorks />
      <MarketplaceCategories categories={categories} navigate={navigate} id="categories" />
      <MarketplaceTestimonials />
      <MarketplaceFeatureDetails feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
    </div>
  );
}