export const modifyErrorCode = (errorCode) => {
  return (
    errorCode?.split("/")?.pop()?.replace(/-/g, " ")?.charAt(0)?.toUpperCase() +
    errorCode?.split("/")?.pop()?.replace(/-/g, " ").slice(1)
  );
};
