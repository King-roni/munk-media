export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-mm-ivory">
      <div className="text-center space-y-6">
        <div className="w-16 h-16 bg-gradient-to-br from-mm-brown to-mm-stone rounded-2xl flex items-center justify-center mx-auto animate-pulse">
          <span className="text-mm-ivory font-bold text-2xl">M</span>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-mm-ink">Loading Munk Media</h2>
          <p className="text-gray-600">Preparing your experience...</p>
        </div>
        
        <div className="flex justify-center">
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-mm-brown to-mm-stone rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
