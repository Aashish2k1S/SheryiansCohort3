import { useEffect } from 'react';
import { Search, SlidersHorizontal } from "lucide-react";
import { useAllCategory } from '../../hooks/useProductHooks';

const Filter = ({
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
}) => {
    const { data, isPending, error } = useAllCategory();
    // console.log(data);


    const categories = data || [];

    if (isPending) return <p>Loading categories...</p>;

    if (error) return <p>Error loading categories: {error.message}</p>;


    return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
            </div>

            {/* Category Select */}
            <div className="relative sm:w-48">
                <SlidersHorizontal className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2 pl-9 pr-8 text-sm text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                >
                    <option key="all" value="all">All Categories</option>
                    {categories.map((cat) => (
                        <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                    ))}
                </select>
            </div>

        </div>
    );
};

export default Filter;