## Clone the Repository

To contribute to the documentation, first clone the repository:

```bash
git clone https://github.com/kube-kit/documentation.git
cd documentation
```

## Install Pre-requisites (Gitbook-cli, NVM, node)

Make sure you have Node.js with [NVM](https://github.com/nvm-sh/nvm) and npm installed. Then, install Gitbook-cli globally:

```bash
nvm install 10
nvm install 18
nvm alias default 18
npm install @gitbook/cli -g
```

### Run in Development Mode

```bash
npm run install:gitbook
npm run build
npm run start
```
This will start the documentation at http://localhost:4000. 


### Creating a Release
To create a new release of the documentation, follow these steps:
1. Ensure all changes are committed and pushed to the `develop` branch.
2. Make a PR to the `master` branch from the `develop` branch.
3. Once the PR is approved and merged, go to [Draft a new release](https://github.com/kube-kit/documentation/releases/new) to create a new release.
4. Set the target branch to `master`.
5. Create the release by clicking on the `Publish release` button.

Now check the documentation at [`docs.kubekit.io`](https://docs.kubekit.io).
You may wait for a few minutes (2-5 minutes) for the changes to reflect.


## In case, a ERROR 404: Page Not Found occurs on docs.kubekit.io

1. Go to the **documentation** repository settings on GitHub.
2. Scroll down to the "Pages" section.
3. In the "Custom domain" field, set `docs.kubekit.io` and save.

Now wait for a few minutes for the changes to take effect. Try accessing [`docs.kubekit.io`](https://docs.kubekit.io) again.

### Manual Deploy

Switch to **master** branch

```bash
git switch master
git pull origin master
npm run build
npm run deploy
```