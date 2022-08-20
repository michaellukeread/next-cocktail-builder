const Loading = () => (
  <div className="animate-pulse relative rounded-lg border border-black overflow-hidden flex">
    <div className="-z-10 left-0 bottom-0 h-[480px] aspect-square bg-gray-500" />
    <div className="p-8 flex flex-col gap-4">
      <div className="rounded-2xl h-12 w-72 bg-gray-500" />
      <ol className="inline-flex flex-wrap gap-2">
        <div className="rounded-2xl h-6 w-36 bg-gray-500" />
        <div className="rounded-2xl h-6 w-24 bg-gray-500" />
        <div className="rounded-2xl h-6 w-16 bg-gray-500" />
        <div className="rounded-2xl h-6 w-24 bg-gray-500" />
        <div className="rounded-2xl h-6 w-44 bg-gray-500" />
      </ol>
      <div>
        <div className="rounded-2xl h-5 w-44 bg-gray-500" />
        <ol className="pt-2 flex flex-col gap-2">
          <div className="rounded-2xl h-3 w-96 bg-gray-500" />
          <div className="rounded-2xl h-3 w-96 bg-gray-500" />
          <div className="rounded-2xl h-3 w-96 bg-gray-500" />
          <div className="rounded-2xl h-3 w-80 bg-gray-500" />
        </ol>
      </div>
    </div>
  </div>
)

export default Loading
