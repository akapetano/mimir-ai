import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";

export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-2.5 py-5  bg-emerald-100 rounded-lg shadow-lg">
    <div className="flex flex-grow w-full">
      <div className="min-w-0 flex-1 flex justify-between items-center gap-5">
        <MimirIcon className="self-start" />
        <div className="space-y-2.5 w-full">
          <div className="grid grid-cols-3 gap-2.5">
            <div className="col-span-2 h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
            <div className="col-span-1 h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-4 gap-2.5">
            <div className="col-span-1 h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
            <div className="col-span-1 h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
            <div className="col-span-2 h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
          </div>
          <div className="h-2.5 rounded-lg bg-slate-300 dark:bg-slate-100"></div>
        </div>
      </div>
    </div>
  </div>
);
