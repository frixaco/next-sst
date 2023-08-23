import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const localEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "localhost:3000",
};

const developmentEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "dev.vbrato.io",
};

const testEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "test.vbrato.io",
};

const productionEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || "prod.vbrato.io",
};

const getEnvs = (stage: string) => {
  switch (stage) {
    case "local":
      return localEnvs;
    case "development":
      return developmentEnvs;
    case "test":
      return testEnvs;
    case "production":
      return productionEnvs;
    default:
      return developmentEnvs;
  }
};

export default {
  config(_input) {
    return {
      name: "next-sst",
      region: "us-east-1",
      profile: "default",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site", {
        environment: getEnvs(stack.stage),
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
