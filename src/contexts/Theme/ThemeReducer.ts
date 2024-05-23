const ThemeReducer = (_state: { themeType: string }, theme: string) => {
  return { themeType: theme };
};

export default ThemeReducer;
