import axios from "axios";
import { atom, selector } from "recoil";

// Asynchronous data queries
export const notifications = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await axios.get("https://sum-server.100xdevs.com/notifications");
      return res.data;
    }
  })
});

export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotifications = get(notifications);
    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.notifications +
      allNotifications.messaging
    );
  }
});
/*import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./recoilState"; // Adjust the path if needed

const Notifications = () => {
  const allNotifications = useRecoilValue(notifications);
  const totalNotifications = useRecoilValue(totalNotificationSelector);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Notifications</h1>
      {allNotifications ? (
        <div className="mt-2">
          <p><strong>Network:</strong> {allNotifications.network}</p>
          <p><strong>Jobs:</strong> {allNotifications.jobs}</p>
          <p><strong>General Notifications:</strong> {allNotifications.notifications}</p>
          <p><strong>Messaging:</strong> {allNotifications.messaging}</p>
          <p className="mt-2 font-bold">Total: {totalNotifications}</p>
        </div>
      ) : (
        <p>Loading notifications...</p>
      )}
    </div>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Notifications />
      </div>
    </RecoilRoot>
  );
};

export default App;
*/