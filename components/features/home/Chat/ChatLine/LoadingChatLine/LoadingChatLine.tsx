import { MimirIcon } from "@/components/atoms/icons/MimirIcon/MimirIcon";
import { Skeleton } from "@/components/atoms/Skeleton/Skeleton";

export const LoadingChatLine = () => (
  <div className="flex min-w-full animate-pulse px-2.5 py-5  bg-emerald-50 rounded-lg shadow-lg">
    <div className="flex flex-grow w-full">
      <div className="min-w-0 flex-1 flex justify-between items-center gap-5">
        <MimirIcon className="self-start" />
        <div className="space-y-2.5 w-full">
          <div className="grid grid-cols-3 gap-2.5">
            <Skeleton type="card" size="xs" className="col-span-2 h-4" />
            <Skeleton type="card" size="xs" className="col-span-1 h-4" />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <Skeleton type="card" size="xs" className="col-span-1 h-4" />
            <Skeleton type="card" size="xs" className="col-span-1 h-4" />
            <Skeleton type="card" size="xs" className="col-span-2 h-4" />
          </div>
          <Skeleton type="card" size="xs" className="col-span-1 h-4" />
        </div>
      </div>
    </div>
  </div>
);
