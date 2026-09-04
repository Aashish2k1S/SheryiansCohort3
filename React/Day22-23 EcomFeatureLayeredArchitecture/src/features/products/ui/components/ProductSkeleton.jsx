import React from 'react'

const ProductSkeleton = () => (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 shadow-sm animate-pulse">
        <div className="aspect-square w-full rounded-xl bg-gray-200" />
        <div className="mt-4 h-4 w-1/3 rounded bg-gray-200" />
        <div className="mt-2 h-5 w-3/4 rounded bg-gray-200" />
        <div className="mt-2 h-3 w-full rounded bg-gray-200" />
        <div className="mt-4 flex items-center justify-between pt-3 border-t border-gray-100">
            <div className="h-6 w-16 rounded bg-gray-200" />
            <div className="h-8 w-20 rounded-lg bg-gray-200" />
        </div>
    </div>
);

export default ProductSkeleton