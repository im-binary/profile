export const Is_Light_Mode = "Is_Light_Mode";

export const changeThemeMode = (themeMode) => {
  return {
    type: Is_Light_Mode,
    themeMode,
  };
};
