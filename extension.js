// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate() {

// Use the console to output diagnostic information (console.log) and errors (console.error)
// This line of code will only be executed once when your extension is activated
console.log('Congratulations, your extension "next-custom-doc" is now active!');

// The command has been defined in the package.json file
// Now provide the implementation of the command with  registerCommand
// The commandId parameter must match the command field in package.json
const fileName = "pages/_document.js";
const data = `import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
	<Html>
		<Head />
		<body>
		<Main />
		<NextScript />
		</body>
	</Html>
	)
}
`

const fileEdit = () => {
	fs.readFile(fileName, "utf8", (err, file) => {
		if (err) {
			console.error(err);
			return;
		} else {
			if (file == "") {
				fs.writeFile(fileName, data, (err) => {
					if (err) throw err;
				});
				vscode.window.showInformationMessage("_document.jsが作成されました。");
			}
		}
	});
}

setInterval(fileEdit, 1000);

//context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {
}

module.exports = {
	activate,
	deactivate
}
