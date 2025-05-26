
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, AlertTriangle, Car, Calendar, MapPin, Gauge, Fuel, Users, Settings, Shield, FileText } from "lucide-react";

const Index = () => {
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
        {/* Vehicle Summary Card */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center space-x-2">
              <Car className="h-6 w-6" />
              <span>2019 BMW 3 Series 320i</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
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
              <span className="text-3xl font-bold text-green-600">8.2/10</span>
              <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                Very Good
              </Badge>
            </div>
            <Progress value={82} className="h-3 mb-4" />
            <p className="text-gray-600">
              This vehicle is in very good condition with minimal issues identified. 
              Recommended for purchase with routine maintenance attention.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Exterior Inspection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Car className="h-5 w-5 text-blue-600" />
                <span>Exterior Condition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Bodywork</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Excellent</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Paint Condition</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tyres</span>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600">Fair</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lights & Indicators</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Working</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Glass & Mirrors</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interior Inspection */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Interior Condition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Seats & Upholstery</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Dashboard & Controls</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Working</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Air Conditioning</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Working</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Electronics</span>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600">Minor Issues</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Cleanliness</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Very Good</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Engine & Mechanical */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Settings className="h-5 w-5 text-blue-600" />
                <span>Engine & Mechanical</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Engine Performance</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Excellent</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Transmission</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Smooth</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Brakes</span>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600">Service Soon</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Suspension</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Exhaust System</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Good</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Documentation */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-blue-600" />
                <span>Documentation</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>V5C (Log Book)</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Present</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Service History</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Full</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>MOT Certificate</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">Valid</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Insurance Documents</span>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm text-yellow-600">Check Required</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span>Spare Keys</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-green-600">2 Keys</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Issues & Recommendations */}
        <Card className="mt-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-yellow-600" />
              <span>Issues & Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Critical Issues</h4>
                <p className="text-gray-600">None identified</p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-yellow-600 mb-2">Minor Issues</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Front tyres showing moderate wear - consider replacement within 3-6 months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Brake pads at 30% - service recommended in next 6 months</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500 mt-0.5" />
                    <span className="text-gray-700">Infotainment system occasionally unresponsive</span>
                  </li>
                </ul>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold text-green-600 mb-2">Recommendations</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Vehicle is suitable for purchase</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Budget £800-1200 for upcoming maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Request recent service records for verification</span>
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
