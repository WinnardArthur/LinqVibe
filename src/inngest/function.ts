import { Agent, createAgent, gemini} from "@inngest/agent-kit";

import { inngest } from './client';

export const helloWorld = inngest.createFunction({
    id: "hello-world"
}, { event: "test/hello-world" }, async function ({ event }) {

    const codeAgent = createAgent({
        name: "codeAgent",
        system: "You are an expert next.js developer. You write readable, maintanable code. You write simple Next.js & React snippets",
        model: gemini({model: 'gemini-2.5-pro'})
    })

    const { output } = await codeAgent.run(`Write the following snippet: ${event.data.value}`);
    // Download step
    // await step.sleep("wait-a-moment", "5s");

    return { message: `Hello ${event.data.value}`, output }
})