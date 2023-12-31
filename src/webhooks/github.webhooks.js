import { createOrUpdateChangesetFile } from "../controllers/changeset.controllers.js";

export const setupWebhooks = (webhooks,webhookUrl) => {

  webhooks.on("pull_request.opened", async ({ payload }) => {
    console.log(
      `Received a "pull request opened" event for #${payload.pull_request.number}`
    );
    await createOrUpdateChangesetFile(payload);
  });

  webhooks.on("pull_request.edited", async ({ payload }) => {
    console.log(
      `Received a "pull request edited" event for #${payload.pull_request.number}`
    );
    await createOrUpdateChangesetFile(payload);
  });

  webhooks.onError((error) => {
    console.error("Error handling webhook:", error);
  });
};
