const elapsedTime = (utcTime: number | string) => {
  const utcTimeStamp = Number(utcTime);
  const currentTime = Date.now();
  const millisecondsGoneSinceCommentMade = currentTime - utcTimeStamp;
  let timeElapsed: string;
  if (millisecondsGoneSinceCommentMade < 60000) {
    const secondsLeftSinceCommentMade = Math.floor(
      millisecondsGoneSinceCommentMade / 1000
    );
    timeElapsed = `${secondsLeftSinceCommentMade}s`;
  } else if (millisecondsGoneSinceCommentMade < 3600000) {
    const minutesLeftSinceCommentMade = Math.floor(
      millisecondsGoneSinceCommentMade / 60000
    );
    timeElapsed = `${minutesLeftSinceCommentMade}m`;
  } else if (millisecondsGoneSinceCommentMade < 86400000) {
    const hoursLeftSinceCommentMade = Math.floor(
      millisecondsGoneSinceCommentMade / 3600000
    );
    timeElapsed = `${hoursLeftSinceCommentMade}h`;
  } else {
    const daysLeftSinceCommentMade = Math.floor(
      millisecondsGoneSinceCommentMade / 86400000
    );
    timeElapsed = `${daysLeftSinceCommentMade}d`;
  }
  return timeElapsed;
};
export { elapsedTime };
