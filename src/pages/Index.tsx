import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, AlertTriangle, Car, Calendar, MapPin, Gauge, Fuel, Users, Settings, Shield, FileText } from "lucide-react";
import { PhotoGallery } from "@/components/PhotoGallery";
import { InspectionSection } from "@/components/InspectionSection";
import { CarDamageMap } from "@/components/CarDamageMap";

const Index = () => {
  // Sample inspection data
  const inspectionData = [
    {
      title: "Exterior Condition",
      rating: 8.5,
      items: [
        { name: "Bodywork", status: 'good' as const, description: "Excellent condition" },
        { name: "Paint Condition", status: 'good' as const, description: "Minor scratches" },
        { name: "Bumpers", status: 'good' as const, description: "No damage" },
        { name: "Lights", status: 'good' as const, description: "All working" },
      ],
      photos: [
        { id: 'ext-1', url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=600', alt: 'Front exterior' },
        { id: 'ext-2', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600', alt: 'Side view' },
      ]
    },
    {
      title: "Interior Condition",
      rating: 7.8,
      items: [
        { name: "Seats & Upholstery", status: 'good' as const },
        { name: "Dashboard", status: 'good' as const },
        { name: "Controls", status: 'fair' as const },
        { name: "Cleanliness", status: 'good' as const },
      ],
      photos: [
        { id: 'int-1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600', alt: 'Dashboard view' },
        { id: 'int-2', url: 'https://images.unsplash.com/photo-1506016467967-22e48aa5a263?w=600', alt: 'Interior seats' },
      ]
    },
    {
      title: "Engine & Mechanical",
      rating: 8.2,
      items: [
        { name: "Engine Performance", status: 'good' as const },
        { name: "Oil Condition", status: 'good' as const },
        { name: "Cooling System", status: 'good' as const },
        { name: "Belts & Hoses", status: 'fair' as const },
      ],
      photos: [
        { id: 'eng-1', url: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600', alt: 'Engine bay' },
      ]
    },
    {
      title: "Transmission",
      rating: 6.5,
      items: [
        { name: "Gear Changes", status: 'fair' as const },
        { name: "Fluid Level", status: 'issue' as const },
        { name: "Clutch Operation", status: 'good' as const },
      ],
      photos: [
        { 
          id: 'trans-1', 
          url: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600', 
          alt: 'Transmission fluid leak',
          isIssue: true,
          issueNote: "Minor transmission fluid leak observed at the gasket. Recommend inspection by qualified technician."
        },
      ]
    },
    {
      title: "Tyres & Suspension",
      rating: 7.0,
      items: [
        { name: "Front Tyres", status: 'fair' as const },
        { name: "Rear Tyres", status: 'good' as const },
        { name: "Suspension", status: 'good' as const },
        { name: "Wheel Alignment", status: 'good' as const },
      ],
      photos: [
        { id: 'tyre-1', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600', alt: 'Tyre condition' },
      ]
    },
    {
      title: "Electricals & Controls",
      rating: 8.0,
      items: [
        { name: "Battery", status: 'good' as const },
        { name: "Alternator", status: 'good' as const },
        { name: "Lights", status: 'good' as const },
        { name: "Electronic Systems", status: 'fair' as const },
      ]
    },
    {
      title: "Underbody & Frame",
      rating: 8.5,
      items: [
        { name: "Frame Condition", status: 'good' as const },
        { name: "Rust/Corrosion", status: 'good' as const },
        { name: "Exhaust System", status: 'good' as const },
        { name: "Underbody Protection", status: 'good' as const },
      ]
    },
    {
      title: "Test Drive Observations",
      rating: 7.8,
      items: [
        { name: "Engine Response", status: 'good' as const },
        { name: "Braking", status: 'fair' as const },
        { name: "Steering", status: 'good' as const },
        { name: "Noise Levels", status: 'good' as const },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Car className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Vehicle Inspection Report</h1>
                <p className="text-gray-600">Pre-Purchase Assessment</p>
              </div>
            </div>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Report #VIR-2024-001
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Car Overview with Main Photo */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span>2019 BMW 3 Series 320i</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Main Car Photo */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&h=600&fit=crop"
                alt="2019 BMW 3 Series 320i"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                <p className="text-sm font-semibold">2019 BMW 3 Series 320i</p>
              </div>
            </div>
            
            {/* Vehicle Details */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Year</p>
                    <p className="font-semibold">2019</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Gauge className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Mileage</p>
                    <p className="font-semibold">45,320 miles</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Fuel className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Fuel Type</p>
                    <p className="font-semibold">Petrol</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-600">Previous Owners</p>
                    <p className="font-semibold">2</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overall Score */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Overall Condition Score</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold text-green-600">7.8/10</span>
              <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                Good
              </Badge>
            </div>
            <Progress value={78} className="h-3 mb-4" />
            <p className="text-gray-600">
              This vehicle is in good condition with some minor issues identified. 
              Recommended for purchase with attention to highlighted items.
            </p>
          </CardContent>
        </Card>

        {/* Car Damage Map */}
        <CarDamageMap />

        {/* Photo Gallery */}
        <div className="mb-8">
          <PhotoGallery />
        </div>

        {/* Inspection Sections */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Detailed Inspection Results</h2>
          {inspectionData.map((section, index) => (
            <InspectionSection
              key={index}
              title={section.title}
              rating={section.rating}
              items={section.items}
              photos={section.photos}
            />
          ))}
        </div>

        {/* Issues & Recommendations */}
        <Card className="mt-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <span>Summary & Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Issues Requiring Attention</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5" />
                    <span className="text-gray-700">Transmission fluid leak - requires professional inspection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Front tyres showing moderate wear - replacement recommended within 6 months</span>
                  </li>
                </ul>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-green-600 mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Vehicle is suitable for purchase with proper maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Budget £1,000-1,500 for upcoming maintenance and repairs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Address transmission issue before purchase completion</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">Inspection conducted by Certified Vehicle Inspector</p>
          <p className="text-sm">Report generated on {new Date().toLocaleDateString()}</p>
          <p className="text-sm mt-4">This report is valid for 30 days from the inspection date</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
