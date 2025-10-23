# Supported Operating Systems

When creating a Kubernetes cluster with **KubeKit**, each virtual machine (VM) must run a supported operating system. You can attempt to create a cluster with an unsupported operating system, but KubeKit does not guarantee compatibility. In most cases, the cluster creation process will likely fail or result in unstable behavior.

KubeKit supports the following operating systems for VM-based clusters:

* **Ubuntu:** 22 LTS, 24 LTS
* **Debian:** 12, 13
* **Fedora:** 41, 42
* **CentOS:** 10
* **Amazon Linux:** 2, 2023

Each node in your cluster (control plane and worker) must have one of the above operating systems installed and properly configured before initiating cluster creation. Using a non-supported OS may cause compatibility issues with Kubernetes components, system dependencies, or network configurations.

> **Recommendation:** Always ensure that your VM images are up to date with the latest security patches and system packages before cluster deployment. Consistency in OS type and version across all nodes is also recommended for stable performance and easier maintenance.
