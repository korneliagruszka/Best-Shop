import { defineConfig } from "vite";

/**
 * Path to exercise folder
 */
const exercisePath = "Best Shop";
/**
 * Don't change those lines below
 */
export default defineConfig({
  root: exercisePath,
  server: {
    port: 3000,
  },
});