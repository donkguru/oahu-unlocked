import React from 'react';
import { ExternalLink as ExternalLinkIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { validateAndFixUrl } from '@/utils/linkValidator';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  iconSize?: number;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  children, 
  className, 
  showIcon = true, 
  iconSize = 14 
}) => {
  const validation = validateAndFixUrl(href);
  
  // If URL is invalid, render as disabled text and log the issue
  if (!validation.isValid) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Invalid restaurant link detected:`, {
        originalUrl: href,
        errors: validation.errors
      });
    }
    
    return (
      <span className={cn("text-muted-foreground cursor-not-allowed opacity-70", className)}>
        {children}
        {showIcon && <ExternalLinkIcon className="inline ml-1 opacity-30" size={iconSize} />}
      </span>
    );
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      window.open(validation.fixedUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to open external link:', {
          url: validation.fixedUrl,
          error: error
        });
      }
      
      // Fallback to regular navigation
      try {
        window.location.href = validation.fixedUrl;
      } catch (fallbackError) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Fallback navigation also failed:', fallbackError);
        }
        alert(`Unable to open link: ${validation.fixedUrl}`);
      }
    }
  };

  return (
    <a
      href={validation.fixedUrl}
      onClick={handleClick}
      className={cn(
        "inline-flex items-center hover:opacity-80 transition-opacity cursor-pointer text-primary hover:text-primary/80",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      title={`Visit ${validation.fixedUrl}`}
    >
      {children}
      {showIcon && <ExternalLinkIcon className="inline ml-1" size={iconSize} />}
    </a>
  );
};

export default ExternalLink;