import React from 'react';
import ComparisonTool from '@/components/home/comparison-tool';

export default function ComparePage() {
  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="relative w-full h-64 bg-gradient-to-r from-green-900 via-green-800 to-green-700 mb-8">
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-center text-white text-center">
          <h1 className="text-4xl font-bold mb-2">Find Your Perfect Match: Compare Cars</h1>
          <p className="text-xl max-w-3xl mx-auto">Side-by-Side for Smarter Choices</p>
        </div>
      </div>
    
      {/* Comparison Tool */}
      <ComparisonTool />
    </div>
  );
}