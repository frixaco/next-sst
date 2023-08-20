import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const developmentEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: "dev.vbrato.io",
};

const testEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: "dev.vbrato.io",
};

const productionEnvs: Record<string, string> = {
  NEXT_PUBLIC_API_URL: "prod.vbrato.io",
};

const getEnvs = (stage: string) => {
  switch (stage) {
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
      profile: "admin@rr-ashurmatov-root",
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
