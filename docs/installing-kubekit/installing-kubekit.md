# Installing KubeKit

Execute the steps below in the specified order to install KubeKit.

## 1. Download KubeKit 
- Download KubeKit from official site [KubeKit.io](https://kubekit.io) based on your OS and architecture.

## 2. Install KubeKit

### Linux

- Locate the downloaded file and double-click it to open the installer, then follow the on-screen instructions to complete the installation.

  Alternatively, you can install KubeKit using the terminal. Navigate to the directory where the file was downloaded and run one of the following commands depending on your system:

For Debian/Ubuntu - amd64
```bash
sudo apt install ./KubeKit-2.1.1-amd64.deb -y
```
For Debian/Ubuntu - arm64
```bash
sudo apt install ./KubeKit-2.1.1-arm64.deb -y
```
For Fedora/CentOS - amd64
```bash
sudo rpm -ivh ./KubeKit-2.1.1-amd64.rpm -y
```
For Fedora/CentOS - arm64
```bash
sudo rpm -ivh ./KubeKit-2.1.1-arm64.rpm -y
```


### Windows(AMD only)

- Double-click on the `.exe` file, KubeKit will be installed automatically.

### MAC 

- Double click on the `.dmg` file and drag KubeKit into the Applications folder.

## 3. Launch KubeKit

- Double click on the KubeKit logo and the applications should run immidiately.
- If KubeKit fails to launch and you are in MAC Silicon(M1,M2,M3,...), Run the below command in your terminal and accept the license agreement by typing **`a`**
```bash
softwareupdate --install-rosetta
```
Then try to launch KubeKit again.