import * as vscode from "vscode";
import { AzureOpenAIChatModelProvider } from "./provider";

export function activate(context: vscode.ExtensionContext) {
	// Build a descriptive User-Agent to help quantify API usage
	const ext = vscode.extensions.getExtension("tony-kim.azure-oai-compatible-copilot");
	const extVersion = ext?.packageJSON?.version ?? "unknown";
	const vscodeVersion = vscode.version;
	// Keep UA minimal: only extension version and VS Code version
	const ua = `azure-oai-compatible-copilot/${extVersion} VSCode/${vscodeVersion}`;

	const provider = new AzureOpenAIChatModelProvider(context.secrets, ua);
	// Register the Azure OpenAI provider under the vendor id used in package.json
	vscode.lm.registerLanguageModelChatProvider("azureoai", provider);

	// Management command to configure API key
	context.subscriptions.push(
		vscode.commands.registerCommand("azureoai.setApikey", async () => {
			const existing = await context.secrets.get("azureoai.apiKey");
			const apiKey = await vscode.window.showInputBox({
				title: "Azure OpenAI API Key",
				prompt: existing ? "Update your Azure OpenAI API key" : "Enter your Azure OpenAI API key",
				ignoreFocusOut: true,
				password: true,
				value: existing ?? "",
			});
			if (apiKey === undefined) {
				return; // user canceled
			}
			if (!apiKey.trim()) {
				await context.secrets.delete("azureoai.apiKey");
				vscode.window.showInformationMessage("Azure OpenAI API key cleared.");
				return;
			}
			await context.secrets.store("azureoai.apiKey", apiKey.trim());
			vscode.window.showInformationMessage("Azure OpenAI API key saved.");
		})
	);
}

export function deactivate() {}
