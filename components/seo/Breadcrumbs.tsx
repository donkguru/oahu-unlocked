'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbStructuredData } from "./StructuredData";

interface BreadcrumbItem {
  label: string;
  href: string;
  isActive?: boolean;
}

const Breadcrumbs = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

    pathSegments.forEach((seg, i) => {
      const href = '/' + pathSegments.slice(0, i + 1).join('/');
      const label = seg.charAt(0).toUpperCase() + seg.slice(1).replace(/-/g, ' ');
      breadcrumbs.push({ label, href, isActive: i === pathSegments.length - 1 });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === '/') return null;

  const structuredDataItems = breadcrumbs.map(item => ({
    name: item.label,
    url: `https://oahuunlocked.com${item.href}`
  }));

  return (
    <>
      <BreadcrumbStructuredData items={structuredDataItems} />
      <nav aria-label="Breadcrumb" className="py-4 px-6 bg-muted/30 border-b">
        <div className="container mx-auto">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-muted-foreground mx-2" />
                )}
                {crumb.isActive ? (
                  <span className="flex items-center text-foreground font-medium">
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
