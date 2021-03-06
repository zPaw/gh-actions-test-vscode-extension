// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gh-actions-test-vscode-extension" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand("gh-actions-test-vscode-extension.helloWorld", () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(getHelloWorldMessage());
	});

	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand("gh-actions-test-vscode-extension.goodbyeWorld", () => {
		vscode.window.showInformationMessage(getGoodbyeMessage());
	});

	context.subscriptions.push(disposable);

	// This comment is an interesting and necessary "feature"
	// Here is another interesting and necessary "feature"
}

// this method is called when your extension is deactivated
export function deactivate() {}

export function getHelloWorldMessage(): string {
	return "Hello, World! - from GitHub Actions Test Extension!";
}

export function getGoodbyeMessage(): string {
	return "Goodbye, World!";
}
