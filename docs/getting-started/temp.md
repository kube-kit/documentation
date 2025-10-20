# KubeKit Quick Start Guide

## 1. Introduction

KubeKit supports a wide range of operating systems, including Linux, Windows, and macOS, enabling you to deploy and manage Kubernetes clusters across diverse platforms with ease.

## 2. System Requirements

* **Operating Systems:** Linux (Debian/Ubuntu, CentOS/RHEL), Windows 10 or later, macOS 10.15 or later
* **Disk Space:** Minimum 1.5 GB free space
* **Network:** Internet connection required for certain features

## 3. Installation

### Linux (Debian/Ubuntu)

1. Download the `.deb` package from the KubeKit website.
2. Open a terminal and run:

   ```bash
   sudo dpkg -i kubekit_x.y.z.deb
   sudo apt-get install -f  # To fix dependencies
   ```
3. Launch KubeKit from the applications menu.

### Linux (RHEL/CentOS)

1. Download the `.rpm` package.
2. Open a terminal and run:

   ```bash
   sudo rpm -ivh kubekit_x.y.z.rpm
   ```
3. Launch KubeKit from the applications menu.

### Windows

1. Download the `.exe` installer.
2. Double-click the installer and follow the on-screen instructions.
3. Launch KubeKit from the Start Menu.

### macOS

1. Download the `.dmg` file.
2. Drag KubeKit into the Applications folder.
3. Launch KubeKit from the Applications folder.

## 4. Launching KubeKit

1. Open the KubeKit application on your OS.
2. On the welcome screen, you will see options to:

   * Create a new cluster
   * Import an existing cluster
   * Access previous clusters
3. Navigate using the intuitive GUI to start managing or creating your Kubernetes clusters.
