export default function Loading() {
  return (<div className="absolute w-1/2 h-1/2 top-1/4 left-1/4">
    <div className="w-full h-full flex items-center justify-center">
      <svg data-testid="loading-spinner" className="h-40 w-40 animate-spin stroke-gray-600 dark:stroke-white" viewBox="0 0 256 256">
        <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
        <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="24"></line>
        <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
        <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="24"></line>
        <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
        <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round"
          strokeWidth="24"></line>
        <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
        <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24">
        </line>
      </svg>
      <span className="text-5xl lg:text-7xl font-medium text-gray-600 dark:text-white">Loading...</span>
    </div>
  </div>)
}