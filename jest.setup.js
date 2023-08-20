import "@testing-library/jest-dom/jest-globals";

import { loadEnvConfig } from "@next/env";

const setup = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default setup;
