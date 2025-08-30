import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
}

export function Skeleton({ className = '', width = 'w-full', height = 'h-4' }: SkeletonProps) {
  return (
    <div className={`animate-pulse bg-gray-200 rounded ${width} ${height} ${className}`} />
  );
}

// Specific skeleton components for common use cases
export function CardSkeleton() {
  return (
    <div className="p-6 bg-white rounded-lg border shadow-sm">
      <Skeleton height="h-6" width="w-3/4" className="mb-3" />
      <Skeleton height="h-4" width="w-full" className="mb-2" />
      <Skeleton height="h-4" width="w-full" className="mb-2" />
      <Skeleton height="h-4" width="w-5/6" className="mb-4" />
      <Skeleton height="h-10" width="w-32" />
    </div>
  );
}

export function PracticeAreaSkeleton() {
  return (
    <div className="group hover:shadow-lg transition-all duration-200">
      <div className="p-6 bg-white rounded-lg border">
        <Skeleton height="h-6" width="w-2/3" className="mb-3" />
        <Skeleton height="h-4" width="w-full" className="mb-2" />
        <Skeleton height="h-4" width="w-4/5" className="mb-4" />
        <Skeleton height="h-4" width="w-24" />
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center mb-4">
        <Skeleton width="w-12" height="h-12" className="rounded-full mr-4" />
        <div className="flex-1">
          <Skeleton height="h-5" width="w-32" className="mb-1" />
          <Skeleton height="h-4" width="w-24" />
        </div>
      </div>
      <Skeleton height="h-4" width="w-full" className="mb-2" />
      <Skeleton height="h-4" width="w-full" className="mb-2" />
      <Skeleton height="h-4" width="w-3/4" />
    </div>
  );
}

export function FormSkeleton() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton height="h-5" width="w-24" className="mb-2" />
        <Skeleton height="h-12" width="w-full" />
      </div>
      <div>
        <Skeleton height="h-5" width="w-32" className="mb-2" />
        <Skeleton height="h-12" width="w-full" />
      </div>
      <div>
        <Skeleton height="h-5" width="w-28" className="mb-2" />
        <Skeleton height="h-32" width="w-full" />
      </div>
      <Skeleton height="h-12" width="w-40" />
    </div>
  );
}
