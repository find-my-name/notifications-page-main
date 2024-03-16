import { useState } from "react";

import "./App.css";
import Notification from "./components/Notification";

import avatarMark from "./images/avatar-mark-webber.webp";
import avatarAngela from "./images/avatar-angela-gray.webp";
import avatarJacob from "./images/avatar-jacob-thompson.webp";
import avatarRizky from "./images/avatar-rizky-hasanuddin.webp";
import avatarKim from "./images/avatar-kimberly-smith.webp";
import chessImg from "./images/image-chess.webp";
import avatarNathan from "./images/avatar-nathan-peterson.webp";
import avatarAnna from "./images/avatar-anna-kim.webp";

const App = () => {
  let allRead = false;

  const [read, setRead] = useState(true);

  const handleClick = () => {
    setRead(false);
    document.querySelector(".unread").textContent = 0;
  };

  return (
    <div className="container">
      <div className="header">
        <div className="notifs">
          <h2>Notifications</h2>
          <h4 className="unread">3</h4>
        </div>
        <a className="mark-all" onClick={handleClick}>
          Mark all as read
        </a>
      </div>

      <div className="cards">
        <Notification
          imgUrl={avatarMark}
          name="Mark Webber"
          post="My first tournament today!"
          time="1m"
          unread={read}
        />
        <Notification
          imgUrl={avatarAngela}
          name="Angela Gray"
          followed={true}
          time="5m"
          unread={read}
        />
        <Notification
          imgUrl={avatarJacob}
          name="Jacob Thompson"
          group="Chess Club"
          time="1 day"
          unread={read}
        />
        <Notification
          imgUrl={avatarRizky}
          name="Rizky Hasanuddin"
          message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
          I'm already having lots of fun and improving my game."
          time="5 days"
          unread={false}
        />
        <Notification
          imgUrl={avatarKim}
          name="Kimberly Smith"
          pictureUrl={chessImg}
          time="1 day"
          unread={false}
        />
        <Notification
          imgUrl={avatarNathan}
          name="Nathan Peterson"
          post="5 end-game strategies to increase your win rate"
          time="2 weeks"
          unread={false}
        />
        <Notification
          imgUrl={avatarAnna}
          name="Anna Kim"
          group="Chess Club"
          left={true}
          time="2 weeks"
        />
      </div>
    </div>
  );
};
export default App;
