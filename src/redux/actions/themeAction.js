export const Is_Dark_Mode = "Is_Dark_Mode";

export const changeThemeMode = (themeMode) => {
  return {
    type: Is_Dark_Mode,
    themeMode,
  };
};
