export const getThumbnailUrl = (url: string): string => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[7].length == 11
    ? `http://i3.ytimg.com/vi/${match[7]}/hqdefault.jpg`
    : "";
};
