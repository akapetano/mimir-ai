export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-4 py-5 sm:px-6">
    <div className="flex flex-grow space-x-3">
      <div className="min-w-0 flex-1">
        <p className="font-large text-xxl text-gray-900 dark:text-gray-100">
          <a href="#" className="hover:underline">
            AI
          </a>
        </p>
        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-zinc-500 dark:bg-zinc-100"></div>
            <div className="col-span-1 h-2 rounded bg-zinc-500 dark:bg-zinc-100"></div>
          </div>
          <div className="h-2 rounded bg-zinc-500 dark:bg-zinc-100"></div>
        </div>
      </div>
    </div>
  </div>
);
