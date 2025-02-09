import axios from "axios";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { notifications, totalNotificationSelector } from "./atoms";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    axios
      .get("https://sum-server.100xdevs.com/notifications")
      .then((res) => {
        setNetworkCount(res.data);
      });
  }, []);

  return (
    <>
      <button>Home</button>
      <button>
        My network {networkCount.networks >= 100 ? "99+" : networkCount.network}
      </button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging {networkCount.messaging}</button>
      <button>Notifications {networkCount.notifications}</button>
      <button>Me {totalNotificationCount}</button>
    </>
  );
}

export default App;
/*import { atom, selector } from "recoil";

export const notifications = atom({
  key: "networkAtom",
  default: {
    network: 4,
    jobs: 6,
    messaging: 3,
    notifications: 3,
  },
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
  },
});
*/