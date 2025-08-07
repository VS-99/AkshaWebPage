// src/components/FeatureBar.jsx
import {
  AlarmCheck,
  ShieldAlert,
  Eye,
  Bell,
  Car,
  Shield,
  MonitorSmartphone,
} from "lucide-react";

const features = [
  {
    icon: <AlarmCheck className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Customised
        <br />
        Alerts
      </>
    ),
  },
  {
    icon: <ShieldAlert className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Vandalism and
        <br />
        Theft Prevention
      </>
    ),
  },
  {
    icon: <Eye className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Suspicious Activity
        <br />
        Detection
      </>
    ),
  },
  {
    icon: <Bell className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Notification via
        <br />
        Telegram and Email
      </>
    ),
  },
  {
    icon: <Car className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Vehicle
        <br />
        Detection
      </>
    ),
  },
  {
    icon: <Shield className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Detection of Safety
        <br />
        Equipments
      </>
    ),
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-gray-700" />,
    title: (
      <>
        Multi-camera
        <br />
        Insights
      </>
    ),
  },
];

const FeatureBar = () => {
  return (
    <div className="flex bg-white shadow-md rounded-full px-4 py-7 max-w-6xl overflow-x-auto -mt-50 items-center justify-center mx-auto mb-10">
      <div className="flex gap-6 sm:gap-8 md:gap-10 items-center justify-between whitespace-nowrap">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center min-w-[100px] border-r border-dotted last:border-0 pr-4"
          >
            {item.icon}
            <p className="text-[12px] sm:text-sm text-gray-700 mt-1 leading-tight">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default FeatureBar;
