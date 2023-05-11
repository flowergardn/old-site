import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetScrollbar } from "unocss-preset-scrollbar";

export default defineConfig({
  presets: [presetUno(), presetScrollbar(),  presetIcons({
    scale: 1.2,
    cdn: 'https://esm.sh/'
  }),],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    fontFamily: {
      hack: "Hack",
    },
    colors: {
      uwuPink: "#f8b0c9",
      themeBlack: "#121212",
    },
  },
});
