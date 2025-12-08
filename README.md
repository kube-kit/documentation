## Clone the repo 

```bash
git clone https://github.com/kube-kit/documentation.git
```

## switch to develop branch

```bash
git switch develop
```
## Install Gitbook-cli Globally
```bash
npm install @gitbook/cli -g
```
## For local build
```bash
nvm install 10
npm use 10
npm install
gitbook install
gitbook serve
```
### Visit http://localhost:4000

## For build
Install Node 18 by following the command
```bash
nvm install 18
npm use 18
npm install
gitbook build
```
## For deployment/publish
```bash
npm run deploy
```

### Visit https://kube-kit.github.io/documentation
