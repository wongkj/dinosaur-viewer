export default $config({
  app(input) {
    return {
      name: "dinosaur-viewer",
      home: "aws",
      removal: input?.stage === "prod" ? "retain" : "remove",
      protect: input?.stage === "prod",
    };
  },
  async run() {
    new sst.aws.Nextjs("dinosaur-viewer", {
      path: ".",
      environment: {
        NEXT_STAGE: process.env.NEXT_STAGE || "",
      },
    });
  },
});
