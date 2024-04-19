export const WEATHER_INTERPRATIONS = [
  {
    codes: [0],
    label: "Ensoleille",
    image: require("../../assets/sun.png"),
  },
  {
    codes: [1, 2, 3, 45, 48],
    label: "Nuageux",
    image: require("../../assets/clouds.png"),
  },
  {
    codes: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
    label: "Pluvieux",
    image: require("../../assets/rain.png"),
  },
  {
    codes: [71, 73, 75, 77],
    label: "Neigeux",
    image: require("../../assets/snow.png"),
  },
  {
    codes: [96, 99],
    label: "Orageux",
    image: require("../../assets/thunder.png"),
  },
];

export function getWeatherInterpreation(code) {
  return WEATHER_INTERPRATIONS.find((interpretation) =>
    interpretation.codes.includes(code)
  );
}
