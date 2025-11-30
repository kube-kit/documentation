# KubeKit Release Notes

This document provides a detailed overview of KubeKit releases, including new features, bug fixes, and enhancements.

---

## Release v2.1.0 (Latest)
**New Feature:**
* Added in app analytics
* Cluster remove/reconnect from dashboard
* App menu added

**Enhancement**

* Updated Kubernetes & OS version supports
* Design updated for node, cluster, import configurations
* Cluster import issue fixed even CNI, LB pods are not available

**Bug Fix**
* Fixed Helm repo add/remove issue 
* Metrics graph initial value issue fixed.
* Node terminal issue fixed



## Release v2.0.3 

**Bug Fixes:**

* Fixed root user home path issue
* Verbose log enabled in metrics installation script

---

## Release v2.0.2

**Bug Fixes:**

*  SSH key input form fixed.

---

## Release v2.0.1

**New Features:**

* TLS support with Let's Encrypt
* Node info prefill form
* Node config form re-design
* Helm feature integrated
* CI/CD pipeline introduced with self-hosted OS
* CNI supports
* Kubernetes version up to 1.34 added

**Bug Fixes:**

* Get Started page scroll issue fix in Mac ARM laptop
* CRI-O installation URL updated.
* Node terminal issue fixed.
* RPM .store write permission issue.

**Enhancements:**

* Firewall configured correctly.
* Kubectl bundled as binary
* Metrics & SSL added as add-ons.
* Parallel node checking and cluster import

---

## Release v2.0.0 

**New Features:**

* Electron store path modified.
* Electron first run flag store introduced.

**Bug Fixes:**

* Title bar back button issue fixed.
* App update installation design issue fixed.
* Node info form SSH key auto select issue fixed.
* Container log failure issue fixed.
* Added backend environment load mechanism.

**Enhancements:**

* Removed Docker, MongoDB, Login, Profile menu.
* Added WSL, PouchDB, and external bundled packages of Ansible, Python, ssh, sshpass, bash, helm.
* Cluster success page copy commands updated.
* Table header and row divider background color modified.
* Prometheus installation configuration updated.
* Cluster join-command path updated.
* Cluster user email replaced with host machine username.

---

## Release v1.2.0

**New Features:**

* Logs monitoring dashboard.
* Metrics monitoring dashboard.
* App auto-update.
* Prometheus metrics auto-install support.

**Bug Fixes:**

* Swap disable issue in cluster creation with CentOS 9 or above fixed.

**Enhancements:**

* Auto-enable KubeKit metrics provider if it exists in cluster import.
* Table header and row divider background color modified.

---

## Release v1.1.4

**Feature Updates:**

* Sign-in with external browser.
* Introduced context-menu for copy, cut, paste, select all.
* Custom page designed for 'How to enable sudo?' with reference link.
* Added hint text on password-less access selection.
* Added privacy policy and terms of service links with updated info.
* Made table dropdown selection persistent.

**Bug Fixes:**

* Fixed bad permission or owner issue in `/root/.ssh/config`.
* Corrected spelling mistakes in table details page.

---

## Release v1.1.3

**Bug Fixes:**

* Multi-container terminal released.
* App window fit into low-resolution display.

---

## Release v1.1.2

**Bug Fixes:**

* Mongo image bundled with executables.
* Added license.

---

## Release v1.1.1

**Bug Fixes:**

* More Kubernetes workloads added.

---

## Release v1.0.1

**Bug Fixes:**

* Docker service start if stopped.
* After the first installation of Docker, restart required in some Linux variants.

---

## Release v1.0.0

**KubeKit Desktop App (Windows, Linux, macOS)**

**Features:**

* Create clusters from bare metal (Ubuntu, Debian, CentOS, Fedora, Amazon Linux 2 & 2023).
* Manage existing clusters via kube-config or master node credentials.
* Interactive GUI for cluster monitoring and management.

**Available Features:**

* Cluster dashboard & overview.
* List, details, logs, delete, scale up/down of cluster resources.
* Interactive terminal for nodes and pods.
* Node, pod, container metrics graph.
