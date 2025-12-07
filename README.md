## Clone the repo 

```bash
git clone https://github.com/kube-kit/documentation.git
```

## switch to gh-pages branch

```bash
git checkout gh-pages
```

## For local build

```bash
nvm install 10
npm use 10
npm install -g gitbook-cli
npm install
gitbook install
gitbook server
```

### Visit http://localhost:4000

## For deployment

```bash
nvm install 18
npm use 18
npm install -g gitbook-cli
npm install
gitbook install
gitbook build
```

### Visit https://kube-kit.github.io/documentation