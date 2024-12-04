import { getInput, setOutput, setFailed } from "@actions/core";
import { context } from "@actions/github";
import { AtpAgent } from "@atproto/api";

import { detectFacets } from "./utils.mjs";

async function runAction() {
  console.log(`Triggered action: ${context.action}`);

  const text = getInput("status");
  const identifier = getInput("bluesky-email");
  const password = getInput("bluesky-password");

  const agent = new AtpAgent({
    service: "https://bsky.social",
  });

  await agent.login({
    identifier,
    password,
  });

  try {
    const facets = detectFacets(text);
    const result = await agent.post({
      text,
      facets,
    });
    setOutput("cid", result.cid);
    setOutput("uri", result.uri);
    return process.exit(0);
  } catch (err) {
    setFailed(err);
    return process.exit(1);
  }
}

runAction();
