# JavaScript and Web Development

## Setup

These instructions assume you have the following software installed:

- [Git](https://git-scm.org) at least version 2.20.
- [Node.js](https://nodejs.org) at least version 22.

Also, assume "command line" refers to a DOS command prompt, PowerShell prompt, terminal window, etc.

Clone this repository locally. You can use git from the command line, or a Git UI product.

Open a command line in the `2026-04-javascript-and-web-development` folder.

Check your Node.js version with `node -v`. It should report at least version 22. If it is not at least version 22, either install an updated version, or use a Node version manager:

- For Linux and MacOS: [nvm](https://github.com/nvm-sh/nvm) Node Version Manager
- For Windows: [nvm-windows](https://github.com/coreybutler/nvm-windows)
- Other tools that let you manage your version of Node will work as well

Run `npm install`. You may see a warning message, but ultimately should see success with a message along the lines of "added X packages and audited Y packages in Zs".

Typical issues with `npm install` include installation fails, and failures when installing. If you encounter problems you cannot solve, here are some suggestions for places to go for solutions:

> - Submit a Help Ticket under **Technology Support** > **Network Issue**.
>   - If it is not an issue with your network, there are also options for **Application Issues** or **Computer or Accessory Issues**. You will likely have an idea of the root cause, so direct that request through the appropriate channels.
> - Go to the **Matrix Bar** ("Help Desk") for immediate In-Person assistance. If you are experiencing issues on the day of the training, then submitting a Help Ticket would not result in a fast enough resolution. Any support provided day of the training is quickest resolved at the help desk.

Having handled any install issues, run `npm test`. All tests should pass.

## FAQ

### Why is there no `package-lock.json` file?

Because for some dependencies, there will be a difference between the version on a public NPM JS repository and the version a local instance of Artifactory will permit.

### According to NPM there are audit issues!

This is a known issue. There are two packages (`http-server` and `json-server`) which provide quite a bit of utility in class. But they're a bit out of date. Since we won't be using them in production, we don't have to worry about the two audit issues.

### On Windows, I get a message about not being allowed to run scripts or running scripts is disabled? Frequently this comes up in terminals from Visual Studio Code....

The issue is that your PowerShell terminal has a restrictive ExecutionPolicy. In Visual Studio Code you can change this by accessing [settings.json](https://code.visualstudio.com/docs/configure/settings#_settings-editor) and adding the following:

```jsonc
"terminal.integrated.profiles.windows": {
	"PowerShell": {
		"source": "PowerShell",
		"icon": "terminal-powershell",
		"args": ["-ExecutionPolicy", "Bypass"],
	},
}
```
