import { BellAlertIcon } from "@heroicons/react/24/outline";
import { AnnouncementDetails } from "./annoucement-details";

export const AnnouncementSection: React.FC = () => {
  return (
    <div className="flex justify-center align-center mx-auto rounded">
      <div className="relative isolate flex items-center  overflow-hidden bg-gray-50 px-6  sm:px-3.5 sm:before:flex-1 rounded-full">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">Announcement </strong>
            <BellAlertIcon className=" -mt-1 w-5 h-5 inline mx-1" />
            <AnnouncementDetails />
          </p>
        </div>
      </div>
    </div>
  );
};
