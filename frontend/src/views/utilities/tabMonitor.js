export const monitorTabActivity = (onTabSwitch) => {
  const handleVisibilityChange = () => {
    if (document.hidden) {
      onTabSwitch();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
};
