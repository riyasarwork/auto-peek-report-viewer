
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface DamageItem {
  id: number;
  type: string;
  severity: 'minor' | 'moderate' | 'major';
  position: { x: number; y: number }; // Percentage positions on the SVG
  description?: string;
  part: string; // Added part information
}

const damageTypes = [
  { id: 1, type: "Accident - Repainted", severity: 'major' as const },
  { id: 2, type: "Deep scratches", severity: 'moderate' as const },
  { id: 3, type: "Chipped", severity: 'minor' as const },
  { id: 4, type: "Minor scratches", severity: 'minor' as const },
  { id: 5, type: "Faded", severity: 'minor' as const },
  { id: 6, type: "Dented", severity: 'moderate' as const },
  { id: 7, type: "Paint Protection Film", severity: 'minor' as const },
  { id: 8, type: "Painted", severity: 'moderate' as const }
];

// Enhanced damage locations with part information
const damageLocations: DamageItem[] = [
  { id: 1, type: "Accident - Repainted", severity: 'major', position: { x: 15, y: 25 }, part: "Front Bumper", description: "Complete repaint due to accident damage" },
  { id: 1, type: "Accident - Repainted", severity: 'major', position: { x: 85, y: 25 }, part: "Front Bumper", description: "Matching repaint on passenger side" },
  { id: 2, type: "Deep scratches", severity: 'moderate', position: { x: 50, y: 95 }, part: "Rear Bumper", description: "Multiple deep scratches from parking incident" },
  { id: 8, type: "Painted", severity: 'moderate', position: { x: 20, y: 45 }, part: "Driver Door", description: "Touch-up paint visible" },
  { id: 8, type: "Painted", severity: 'moderate', position: { x: 80, y: 45 }, part: "Passenger Door", description: "Panel repainted due to minor damage" },
  { id: 3, type: "Chipped", severity: 'minor', position: { x: 50, y: 15 }, part: "Hood", description: "Small paint chips on leading edge" },
  { id: 4, type: "Minor scratches", severity: 'minor', position: { x: 25, y: 35 }, part: "Driver Door", description: "Light surface scratches" },
  { id: 6, type: "Dented", severity: 'moderate', position: { x: 75, y: 75 }, part: "Rear Quarter Panel", description: "Small dent from shopping cart impact" },
  { id: 5, type: "Faded", severity: 'minor', position: { x: 50, y: 80 }, part: "Trunk Lid", description: "UV damage causing paint fade" },
];

// Group damages by part
const groupDamagesByPart = (damages: DamageItem[]) => {
  return damages.reduce((acc, damage) => {
    if (!acc[damage.part]) {
      acc[damage.part] = [];
    }
    acc[damage.part].push(damage);
    return acc;
  }, {} as Record<string, DamageItem[]>);
};

export const CarDamageMap = () => {
  const [selectedDamage, setSelectedDamage] = useState<DamageItem | null>(null);
  const damagesByPart = groupDamagesByPart(damageLocations);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'bg-green-500';
      case 'moderate': return 'bg-yellow-500';
      case 'major': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getLegendColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'major': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'minor': return 'bg-green-100 text-green-800 border-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'major': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Card className="border-0 shadow-lg mb-8">
      <CardHeader>
        <CardTitle className="text-2xl">Exterior Body Damage Check</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="visual">Visual Damage Map</TabsTrigger>
            <TabsTrigger value="table">Damage Table View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="visual" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Car Diagram */}
              <div className="lg:col-span-2">
                <div className="relative bg-gray-50 rounded-lg p-4">
                  <svg
                    viewBox="0 0 400 600"
                    className="w-full h-auto max-h-96"
                    style={{ maxWidth: '400px' }}
                  >
                    {/* Car Outline - Top View */}
                    <g stroke="#333" strokeWidth="2" fill="none">
                      {/* Main body */}
                      <rect x="120" y="100" width="160" height="400" rx="20" />
                      
                      {/* Hood */}
                      <rect x="140" y="60" width="120" height="50" rx="10" />
                      
                      {/* Trunk */}
                      <rect x="140" y="490" width="120" height="50" rx="10" />
                      
                      {/* Front bumper */}
                      <rect x="130" y="40" width="140" height="30" rx="15" />
                      
                      {/* Rear bumper */}
                      <rect x="130" y="530" width="140" height="30" rx="15" />
                      
                      {/* Doors */}
                      <line x1="120" y1="180" x2="120" y2="320" />
                      <line x1="280" y1="180" x2="280" y2="320" />
                      <line x1="120" y1="320" x2="120" y2="420" />
                      <line x1="280" y1="320" x2="280" y2="420" />
                      
                      {/* Windshield */}
                      <rect x="150" y="120" width="100" height="40" rx="5" />
                      
                      {/* Rear window */}
                      <rect x="150" y="440" width="100" height="40" rx="5" />
                      
                      {/* Side mirrors */}
                      <circle cx="100" cy="140" r="15" />
                      <circle cx="300" cy="140" r="15" />
                      
                      {/* Wheels */}
                      <circle cx="80" cy="160" r="25" />
                      <circle cx="320" cy="160" r="25" />
                      <circle cx="80" cy="440" r="25" />
                      <circle cx="320" cy="440" r="25" />
                    </g>

                    {/* Damage Markers */}
                    {damageLocations.map((damage, index) => (
                      <g key={index}>
                        <circle
                          cx={damage.position.x * 4}
                          cy={damage.position.y * 6}
                          r="12"
                          className={`${getSeverityColor(damage.severity)} cursor-pointer hover:opacity-80 transition-opacity`}
                          onClick={() => setSelectedDamage(damage)}
                        />
                        <text
                          x={damage.position.x * 4}
                          y={damage.position.y * 6 + 5}
                          textAnchor="middle"
                          className="fill-white text-sm font-bold pointer-events-none"
                        >
                          {damage.id}
                        </text>
                      </g>
                    ))}
                  </svg>
                  
                  {selectedDamage && (
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-lg border max-w-xs">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge className={getLegendColor(selectedDamage.severity)}>
                          {selectedDamage.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Part:</strong> {selectedDamage.part}
                      </p>
                      <p className="text-sm text-gray-600 mb-1">
                        <strong>Severity:</strong> {selectedDamage.severity.charAt(0).toUpperCase() + selectedDamage.severity.slice(1)}
                      </p>
                      {selectedDamage.description && (
                        <p className="text-sm text-gray-600">
                          <strong>Description:</strong> {selectedDamage.description}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg text-gray-800">Damage Legend</h4>
                <div className="space-y-3">
                  {damageTypes.map((damage) => (
                    <div key={damage.id} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full ${getSeverityColor(damage.severity)} flex items-center justify-center`}>
                        <span className="text-white text-xs font-bold">{damage.id}</span>
                      </div>
                      <span className="text-sm text-gray-700">{damage.type}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 border-t">
                  <h5 className="font-medium text-gray-800 mb-2">Severity Levels</h5>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-600">Minor</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <span className="text-sm text-gray-600">Moderate</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <span className="text-sm text-gray-600">Major</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="table" className="space-y-4">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Exterior Part</TableHead>
                    <TableHead>Damage Type</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Object.entries(damagesByPart).map(([part, damages]) =>
                    damages.map((damage, index) => (
                      <TableRow key={`${part}-${index}`}>
                        <TableCell className="font-medium">
                          {index === 0 ? part : ""}
                        </TableCell>
                        <TableCell>{damage.type}</TableCell>
                        <TableCell>
                          <Badge 
                            variant="outline" 
                            className={`${getSeverityBadgeColor(damage.severity)} capitalize`}
                          >
                            {damage.severity}
                          </Badge>
                        </TableCell>
                        <TableCell className="max-w-md">
                          {damage.description || "No additional details"}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Summary Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-red-600">
                    {damageLocations.filter(d => d.severity === 'major').length}
                  </div>
                  <p className="text-sm text-gray-600">Major Issues</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-yellow-600">
                    {damageLocations.filter(d => d.severity === 'moderate').length}
                  </div>
                  <p className="text-sm text-gray-600">Moderate Issues</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {damageLocations.filter(d => d.severity === 'minor').length}
                  </div>
                  <p className="text-sm text-gray-600">Minor Issues</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
