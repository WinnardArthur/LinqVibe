import { Sandbox } from "@e2b/code-interpreter";

export async function getSandbox(sandobxId: string) {
    const sandbox = await Sandbox.connect(sandobxId);

    return sandbox;
}