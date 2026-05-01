import React from 'react';
import { PageLayout } from './PageLayout';
import { CustomSkeleton } from '../Common/Skeleton';

export const LoadingScreen: React.FC = () => {
  return (
    <PageLayout>
      {/* Header Skeleton */}
      <div className="flex flex-col items-center mb-16 space-y-4 px-4">
        <CustomSkeleton height={20} width={160} className="rounded-full opacity-30" />
        <CustomSkeleton height={60} width="80%" className="md:h-20 md:w-[400px] rounded-3xl" />
        <CustomSkeleton height={24} width="90%" className="md:w-[420px] rounded-full opacity-40" />
      </div>

      {/* Button Controls Skeleton */}
      <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 px-4">
        <CustomSkeleton height={44} width={100} className="rounded-xl" />
        <CustomSkeleton height={44} width={110} className="rounded-xl" />
        <CustomSkeleton height={44} width={100} className="rounded-xl" />
        <CustomSkeleton height={44} width={200} className="md:w-[240px] rounded-xl opacity-60" />
      </div>

      {/* Dashboard Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 bg-slate-800/20 border border-white/5 rounded-2xl p-6 flex flex-col gap-2">
            <CustomSkeleton height={12} width="40%" className="opacity-40" />
            <CustomSkeleton height={24} width="70%" />
          </div>
        ))}
      </div>

      {/* Grid Skeleton */}
      <div className="relative h-[500px] rounded-3xl overflow-hidden glass-card p-8 flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-sky-500/10 border-t-sky-500 rounded-full animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">
              🏙️
            </div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="text-xl font-bold tracking-tight text-slate-300">Synchronizing Spatial Data</div>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 200}ms` }} />
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Grid Pattern for the skeleton */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>
    </PageLayout>
  );
};
