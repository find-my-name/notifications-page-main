const Notification = ({
  imgUrl,
  name,
  post,
  group,
  left,
  followed,
  message,
  pictureUrl,
  time,
  unread,
}) => {
  let notificationContent;

  if (post) {
    notificationContent = (
      <p>
        <b>{name}</b> reacted to your recent post{" "}
        <span className="grey">{post}</span>{" "}
      </p>
    );
  } else if (group) {
    notificationContent = (
      <p>
        <b>{name}</b> {!left ? "has joined your group" : "left the group"}{" "}
        <span className="blue">{group}</span>
      </p>
    );
  } else if (followed) {
    notificationContent = (
      <p>
        <b>{name}</b> followed you
      </p>
    );
  } else if (message) {
    notificationContent = (
      <p>
        <b>{name}</b> sent you a private message
      </p>
    );
  } else if (pictureUrl) {
    notificationContent = (
      <p>
        <b>{name}</b> commented on your picture
      </p>
    );
  }

  return (
    <div className={unread ? "card unread" : "card"}>
      <div className="image">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="wrapper">
        <div className="hero">
          <div className="content">
            {notificationContent}
            <div className={unread ? "dot" : ""}></div>
          </div>
          <p className="l-grey">{time} ago</p>
          {message ? (
            <div className="message">
              <div className="msg-content">{message}</div>
            </div>
          ) : (
            ""
          )}
        </div>
        {pictureUrl ? <img className="picture" src={pictureUrl}></img> : ""}
      </div>
    </div>
  );
};

export default Notification;
