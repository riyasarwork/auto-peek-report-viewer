
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface Photo {
  id: string;
  url: string;
  alt: string;
  category: 'exterior' | 'interior';
}

// Sample photos - replace with actual URLs
const samplePhotos: Photo[] = [
  // Exterior photos
  { id: 'ext1', url: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800', alt: 'Front view', category: 'exterior' },
  { id: 'ext2', url: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800', alt: 'Side view', category: 'exterior' },
  { id: 'ext3', url: 'https://images.unsplash.com/photo-1565024935761-b14e75d7b12f?w=800', alt: 'Rear view', category: 'exterior' },
  { id: 'ext4', url: 'https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=800', alt: 'Side profile', category: 'exterior' },
  
  // Interior photos
  { id: 'int1', url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800', alt: 'Dashboard', category: 'interior' },
  { id: 'int2', url: 'https://images.unsplash.com/photo-1506016467967-22e48aa5a263?w=800', alt: 'Front seats', category: 'interior' },
  { id: 'int3', url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800', alt: 'Steering wheel', category: 'interior' },
  { id: 'int4', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Center console', category: 'interior' },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  
  const exteriorPhotos = samplePhotos.filter(photo => photo.category === 'exterior');
  const interiorPhotos = samplePhotos.filter(photo => photo.category === 'interior');

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Vehicle Photo Gallery</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Exterior Photos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Exterior Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {exteriorPhotos.map((photo) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105 shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">{photo.alt}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>

        {/* Interior Photos */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Interior Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {interiorPhotos.map((photo) => (
              <Dialog key={photo.id}>
                <DialogTrigger asChild>
                  <div className="cursor-pointer group">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-32 object-cover rounded-lg transition-transform group-hover:scale-105 shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2 text-center">{photo.alt}</p>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                  <div className="relative">
                    <img
                      src={photo.url}
                      alt={photo.alt}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
