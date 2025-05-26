
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronDown, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface InspectionPhoto {
  id: string;
  url: string;
  alt: string;
  isIssue?: boolean;
  issueNote?: string;
}

interface InspectionSectionProps {
  title: string;
  rating: number;
  maxRating?: number;
  items: Array<{
    name: string;
    status: 'good' | 'fair' | 'poor' | 'issue';
    description?: string;
  }>;
  photos?: InspectionPhoto[];
}

export const InspectionSection = ({ 
  title, 
  rating, 
  maxRating = 10, 
  items, 
  photos = [] 
}: InspectionSectionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'text-green-600 bg-green-100';
    if (rating >= 6) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600';
      case 'fair': return 'text-yellow-600';
      case 'poor': return 'text-orange-600';
      case 'issue': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return '✓';
      case 'fair': return '⚠';
      case 'poor': return '⚠';
      case 'issue': return '✗';
      default: return '•';
    }
  };

  return (
    <Card className="border-0 shadow-lg">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <Badge className={`text-lg px-3 py-1 ${getRatingColor(rating)}`}>
                  {rating}/{maxRating}
                </Badge>
              </div>
              <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0">
            {/* Inspection Items */}
            <div className="space-y-3 mb-6">
              {items.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-2">
                  <span className="font-medium">{item.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className={`text-lg ${getStatusColor(item.status)}`}>
                      {getStatusIcon(item.status)}
                    </span>
                    <span className={`text-sm ${getStatusColor(item.status)}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Photos */}
            {photos.length > 0 && (
              <div>
                <h4 className="font-semibold mb-3 text-gray-800">Inspection Photos</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {photos.map((photo) => (
                    <Dialog key={photo.id}>
                      <DialogTrigger asChild>
                        <div className="cursor-pointer group relative">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className={`w-full h-24 object-cover rounded-lg transition-transform group-hover:scale-105 shadow-md ${
                              photo.isIssue ? 'border-2 border-red-500' : ''
                            }`}
                          />
                          {photo.isIssue && (
                            <div className="absolute top-1 right-1">
                              <AlertTriangle className="h-4 w-4 text-red-500 bg-white rounded-full p-0.5" />
                            </div>
                          )}
                          <p className="text-xs text-gray-600 mt-1 text-center">{photo.alt}</p>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] p-4">
                        <div className="space-y-4">
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                          />
                          {photo.isIssue && photo.issueNote && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                              <div className="flex items-center space-x-2">
                                <AlertTriangle className="h-5 w-5 text-red-500" />
                                <span className="font-semibold text-red-700">Issue Identified</span>
                              </div>
                              <p className="text-red-600 mt-2">{photo.issueNote}</p>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};
