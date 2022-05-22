export const GrowingSpinners = () => {
    return (
        <div className="absolute absolute-center flex justify-center items-center space-x-2">
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full  text-blue-600" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-red-500" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-yellow-500" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-purple-500" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-green-500" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-blue-300" />
            <div className="animate-bounce inline-block w-8 h-8 bg-current rounded-full text-gray-300" />
        </div>
    )
}
