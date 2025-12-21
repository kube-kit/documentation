# KubeKit Documentation Contribution Guide

> `DOCS_GUIDE.md` is the markdown guide for kubekit documentation contributors. It contains instructions on how to set up the local development environment for building and testing the documentation site.

## Introduction
This guide provides step-by-step instructions to set up a local development environment for contributing to the KubeKit documentation. Follow these steps to clone the repository, install necessary dependencies, and build the documentation site locally and then deploy it. Also, learn about the internals of the Gitbook documentation system used for KubeKit.

## Clone the Repository

To contribute to the documentation, first clone the repository:

```bash
git clone https://github.com/kube-kit/documentation.git
```

## Switch to the Develop Branch

Navigate to the cloned repository and switch to the `develop` branch:

```bash
cd documentation
git switch develop
```

## Install Node.js and npm via nvm commands

Following commands will install nvm, Node.js versions 18 and 10, and set version 18 as default:

Source: https://github.com/nvm-sh/nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash && \
export NVM_DIR="$HOME/.nvm" && \
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && \
nvm install 18 && \
nvm install 10 && \
nvm alias default 18
```

## Install Gitbook-cli Globally

Make sure you have Node.js and npm installed. Then, install Gitbook-cli globally:

```bash
npm install @gitbook/cli -g
```

## Contributing Changes

### Switch to a New Branch
Before making any changes, create a new branch `your-feature-branch` from `develop`:

```bash
git switch -c your-feature-branch
```
### Make Changes
Make your changes to the documentation files using your preferred text editor or IDE.

### Local Build

To build and serve the documentation locally, follow `package.json` scripts:

```bash
npm run install:gitbook
npm run build
npm run start
```
This will start a local server, usually at `http://localhost:4000`, where you can view the documentation. 

### Use the Live Reload Feature (Reload the server on file changes)
To use the `live-reload` feature during development, open `book.json` and then go to the end of the file and hit an `Enter` and then undo it by `ctrl + z` or `cmd + z` on Mac. This will trigger the `livereload` plugin to work. You can see the server will automatically reload and the changes are reflected in localhost.

### Commit and Push Changes
After making changes, commit and push them to your feature branch:
```bash
git add .
git commit -m "Describe your changes"
git push --set-upstream origin your-feature-branch
git push
```

### Create a Pull Request
Once your changes are pushed, create a pull request (PR) from `your-feature-branch` to the `develop` branch in the `kube-kit/documentation` repository for review and merging.


### Creating a Release
To create a new release of the documentation, follow these steps:
1. Ensure all changes are committed and pushed to the `develop` branch.
2. Make a PR to the `master` branch from the `develop` branch.
3. Once the PR is approved and merged, go to [Draft a new release](https://github.com/kube-kit/documentation/releases/new) to create a new release.
4. Set the tag version (e.g., `v2.1.5`), release title, and description.
5. Set the target branch to `master`.
6. Write release descriptions with relevant information about the changes made in this release.
7. Create the release in the GitHub repository by clicking on the `Publish release` button.

### Production Build
Once you have created a release, you can create a production build of the documentation. To create a production build of the documentation, run:

```bash
npm run build
npm run deploy
```

This deploys the documentation to the production environment which can be accessed at the link [**docs.kubekit.io**](https://docs.kubekit.io).
You may wait for a few minutes (2-5 minutes) for the changes to reflect on the production site.

## Gitbook Internals - How The Documentation Site Gets Built

The documentation site is built using [**Gitbook**](https://gitbook.com/docs/), a popular tool for creating documentation websites.

Gitbook uses markdown files located in the `docs/` directory to generate the documentation site. Each markdown file corresponds to a section or page in the documentation. The main configuration file for Gitbook is `book.json`, which defines the structure and settings of the documentation site.

* When we run the install command - `npm run install:gitbook`, it installs the necessary Gitbook plugins and dependencies specified in the `book.json` file along with our custom plugin `gitbook-plugin-kubekit-custom` (find it in `_plugins/`).

* When we run the build command - `npm run build`, Gitbook processes the markdown files, applies the configuration settings from `book.json`, and generates a static website that can be served locally or deployed to a web server.

## File Structure Explanation
The key files and directories in the KubeKit documentation repository are:
- `docs/`: Contains all the markdown files for the documentation.
- `styles/website.css`: Custom CSS styles for the documentation site.
-  `gitbook`: Contains Gitbook-specific files and configurations. Plugins used in the documentation site.
- `book.json`: The main configuration file for Gitbook, defining the structure and settings of the documentation site. Checked into the repository and used during `npm run build`.
- `_plugins/`: Contains custom Gitbook plugins used in the documentation site.
- `scripts/`: Contains scripts used for setting up and managing the documentation site.
- `package.json`: Contains npm scripts for building and serving the documentation site.
- `SUMMARY.md`: Defines the structure of the documentation sidebar and navigation. The main entry point for the documentation site.
- `INTRODUCTION.md`: The introduction page of the documentation.
- `README.md`: README file for the documentation repository.
- `_book/`: The output directory where the built static documentation site is generated. Created during `npm run build`.

## `package.json` Scripts Explanation
The `package.json` file contains several npm scripts that are used to manage the documentation site. Here are the key scripts:

```json
"scripts": {
    "install:gitbook": ". ~/.nvm/nvm.sh && nvm use 18 && npm i && . ~/.nvm/nvm.sh && nvm use 10 && npm run setup-plugin && gitbook install 2>&1 | grep -v 'Not found : gitbook-plugin-kubekit-custom' || true",
    "setup-plugin": "chmod +x scripts/setup-plugin.sh && bash scripts/setup-plugin.sh",
    "start": ". ~/.nvm/nvm.sh && nvm use 10 && npm run setup-plugin && gitbook serve",
    "build": "rm -rf _book && . ~/.nvm/nvm.sh && nvm use 10 && npm run setup-plugin && gitbook build",
    "deploy": ". ~/.nvm/nvm.sh && nvm use 18 && gh-pages -d _book -b docs"
}
```
- `install:gitbook`: Installs Gitbook and its dependencies, including the custom plugin.
- `setup-plugin`: Sets up the custom Gitbook plugin.
- `start`: Serves the documentation site locally for development.
- `build`: Builds the static documentation site.
- `deploy`: Deploys the built documentation site to the `docs` branch for production.

### Script Details

#### install:gitbook
Sets up the project for GitBook usage (one-time or after dependency/plugin changes).

- Loads `nvm` so Node versions can be switched inside the script
- Uses **Node 18** to install npm dependencies (`npm i`)
- Switches to **Node 10** (required by GitBook CLI)
- Runs the custom plugin setup script
- Installs GitBook plugins
- Suppresses the known warning for the local custom plugin
- Prevents the script from failing on non-critical errors

Used for: initial setup, CI preparation, plugin changes

---

#### setup-plugin
Prepares the custom GitBook plugin.

- Makes the setup script executable
- Runs `scripts/setup-plugin.sh`
- Handles linking/copying the custom GitBook plugin

Used internally by other scripts

---

#### start
Starts the local GitBook development server.

- Loads `nvm`
- Switches to **Node 10**
- Ensures the custom plugin is set up
- Runs `gitbook serve`

Used for: local documentation development

---

#### build
Builds the static documentation site.

- Deletes the existing `_book` directory
- Loads `nvm`
- Switches to **Node 10**
- Ensures the custom plugin is set up
- Runs `gitbook build`

Used for: generating production-ready static docs

---

#### deploy
Deploys the built documentation to GitHub Pages.

- Loads `nvm`
- Switches to **Node 18**
- Publishes `_book` to the `docs` branch using `gh-pages`

Used for: publishing documentation to GitHub Pages / custom domain

---

#### Node Version Rationale

- **Node 10** → Required by GitBook CLI (legacy dependency)
- **Node 18** → Required for modern tooling (`npm`, `gh-pages`, CI)

Using `nvm` inside scripts ensures consistent behavior across local and CI environments.

## CNAME Configuration for Custom Domain

> CNAME related info: The `deploy` script uses the `gh-pages` package to deploy the built documentation site to the `docs` branch of the repository. The `CNAME` file in the `_book` directory ensures that the custom domain `docs.kubekit.io` is used for the documentation site.

**CNAME file content:**
```CNAME
docs.kubekit.io
``` 

> CNAME related problem: When deploying the documentation site, if you encounter an error like `ERROR 404: Page Not Found` when visiting `docs.kubekit.io`, it may be due to the absence of the `CNAME` file in the `_book` directory which is generated during the build process. To resolve this, ensure that the `CNAME` file is present in the `_book` directory before running the `deploy` script. By reseting the custom domain in the GitHub repository settings, then adding it back again, the issue can be resolved. you can follow these steps:
1. Go to the repository settings on GitHub.
2. Scroll down to the "Pages" section.
3. In the "Custom domain" field, remove the existing domain (`docs.kubekit.io`) and save the changes.
4. Re-enter the custom domain (`docs.kubekit.io`) and save the changes
5. Wait for a few minutes for the changes to take effect.
6. Try accessing `docs.kubekit.io` again.
7. The documentation site should now load without the 404 error.

If the issue persists, run `npm run build` again to regenerate the `_book` directory and ensure the `CNAME` file is included before deploying. And, then run `npm run deploy` to redeploy the documentation site and now it should work correctly.


## Release Notes Automation 

The release notes for KubeKit are automatically generated and updated in the `docs/release-notes/` directory. Each release note file follows a specific naming convention, such as `release-vX.Y.Z.md`, where `X.Y.Z` represents the version number.

A `CI/CD pipeline` (For reference, it can be accessed in: [`sync-release-notes`](https://github.com/kube-kit/kube-kit/blob/develop/.github/workflows/sync-release-notes.yml)) is set up to automate the creation and updating of release notes. When a new version of **KubeKit** is released, the pipeline generates a new markdown file in the `docs/release-notes/` directory with the relevant information about the release, including new features, bug fixes, and enhancements etc. And, the `SUMMARY.md` file is also updated with the link to the new release notes file.

When a new **KubeKit** release is published, the pipeline automatically creates a pull request (PR) in the `kube-kit/documentation` repository to add or update the corresponding release notes file.
Find the PR, [here](https://github.com/kube-kit/documentation/pulls). 


## Creating a GitHub Personal Access Token (PAT) for Documentation Repo
A `Personal Access Token (Classic)` has been created with an expiration period of 365 days for now. This token is used in the GitHub Actions workflow to authenticate and raise a PR for updating the release notes in the `kube-kit/documentation` repository. 


## Steps to create a Token:
1. Go to GitHub → Settings
2. Developer settings
3. Personal access tokens
4. Tokens (classic)
5. Click Generate new token
6. Set the expiration period to 365 days

### Token Configurations:
1. Token Name: `DOCUMENTATION_REPO_TOKEN`
2. Expiration: `365 days`
3. Scopes: Select `repo` (full control of repositories the token can access)
4. Click `Generate token` at the bottom of the page

## Renewing the Token
Before the token expires, follow these steps to renew it:
1. Navigate to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Locate the `DOCUMENTATION_REPO_TOKEN` and click on `Regenerate`
3. Update the new token in the GitHub Actions secrets for the `kube-kit/documentation` repository:
   - Go to the `kube-kit/documentation` repository on GitHub
   - Click on `Settings` → `Secrets and variables` → `Actions`
    - Find the `DOCUMENTATION_REPO_TOKEN`
    - Click on `Update secret` and paste the newly generated token


## Conclusion
By following this guide, you should be able to set up a local development environment for contributing to the KubeKit documentation. You can build and test your changes locally before deploying them to the production site. Happy documenting!