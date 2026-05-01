import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  circle?: boolean;
  count?: number;
}

export const CustomSkeleton: React.FC<SkeletonProps> = (props) => {
  return (
    <SkeletonTheme baseColor="#1e293b" highlightColor="#334155">
      <Skeleton {...props} />
    </SkeletonTheme>
  );
};
