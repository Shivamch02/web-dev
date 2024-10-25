import { useState } from "react";
import "./App.css";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./atom";

function App() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsAtomCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>Home</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobsAtomCount >= 100 ? "99+" : jobsAtomCount})</button>
      <button>
        Messaging ({messagingAtomCount >= 100 ? "99+" : messagingAtomCount})
      </button>
      <button>
        Notification (
        {notificationAtomCount >= 100 ? "99+" : notificationAtomCount})
      </button>
      <button>Me ({totalNotificationCount})</button>
    </>
  );
}

export default App;
