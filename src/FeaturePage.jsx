import React, { useState } from "react";
import { FaLeaf, FaChartLine, FaMoneyBillWave, FaNewspaper, FaUsers, FaCalculator, FaGavel } from "react-icons/fa";
import ImpactCalculator from "./components/ImpactCalculator";
import SustainabilityScore from "./components/SustainabilityScore";
import GreenNews from './components/GreenNews';
import GreenMutualFund from './components/GreenMutualFund';
import GreenFundSearch from './components/GreenFundSearch';
import ESGEducation from './components/ESGEducation';

const features = [
  // { name: "Sustainability Score System", icon: <FaLeaf />, component: <SustainabilityScore /> },
  { name: "ESG Investment Guide", icon: <FaLeaf />, component: <ESGEducation /> },
  { name: "Green Mutual Fund", icon: <FaGavel />, component: <GreenFundSearch /> },
  { name: "ESG Funds Explorer", icon: <FaMoneyBillWave />, component: <GreenMutualFund /> },
  { name: "Impact Calculator", icon: <FaCalculator />, component: <ImpactCalculator /> },
  { name: "Live Green Investment News", icon: <FaNewspaper />, component: <GreenNews /> },
  { name: "Community", icon: <FaUsers />, component: null },
];

const FeaturePage = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-6 space-y-4">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">Features</h2>
        </div>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature.name}
              className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all ${
                selectedFeature.name === feature.name ? "bg-green-500 text-gray-900" : "hover:bg-gray-700"
              }`}
              onClick={() => setSelectedFeature(feature)}
            >
              <span className="text-lg">{feature.icon}</span>
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-8 overflow-y-auto">
        {selectedFeature.component ? (
          React.cloneElement(selectedFeature.component, { 
            onFeatureSelect: setSelectedFeature 
          })
        ) : (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-semibold">{selectedFeature.name}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturePage;