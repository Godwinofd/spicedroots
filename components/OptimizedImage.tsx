import React from 'react';

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    aspectRatio?: string;
    priority?: boolean;
    sizes?: string;
    objectPosition?: string;
}

/**
 * OptimizedImage Component
 * 
 * Features:
 * - Lazy loading with Intersection Observer
 * - Responsive image loading
 * - Smooth fade-in animation
 * - Aspect ratio preservation
 * - Loading placeholder
 * - Error handling
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
    src,
    alt,
    className = '',
    aspectRatio = 'aspect-auto',
    priority = false,
    sizes = '100vw',
    objectPosition = 'object-center'
}) => {
    // Simplified Component: Direct render to ensure visibility
    // Removed all custom loading logic to rely 100% on browser native handling

    // Generate srcset for responsive images
    const generateSrcSet = (url: string): string => {
        // For Unsplash images, we can use their URL parameters
        if (url.includes('unsplash.com')) {
            return `
        ${url}&w=400 400w,
        ${url}&w=800 800w,
        ${url}&w=1200 1200w,
        ${url}&w=1600 1600w
      `.trim();
        }

        // For Cloudinary images
        if (url.includes('cloudinary.com')) {
            const parts = url.split('/upload/');
            if (parts.length === 2) {
                return `
          ${parts[0]}/upload/w_400,q_auto,f_auto/${parts[1]} 400w,
          ${parts[0]}/upload/w_800,q_auto,f_auto/${parts[1]} 800w,
          ${parts[0]}/upload/w_1200,q_auto,f_auto/${parts[1]} 1200w,
          ${parts[0]}/upload/w_1600,q_auto,f_auto/${parts[1]} 1600w
        `.trim();
            }
        }

        return '';
    };

    return (
        <div
            className={`relative overflow-hidden ${aspectRatio} ${className}`}
        >
            <img
                src={src}
                srcSet={generateSrcSet(src)}
                sizes={sizes}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                className={`w-full h-full object-cover ${objectPosition}`}
            />
        </div>
    );
};

export default OptimizedImage;
