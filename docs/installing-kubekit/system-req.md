# System Requirements

KubeKit can be installed on a wide range of operating systems, including Ubuntu, Debian, Fedora, Red Hat, Amazon Linux, macOS, and Windows. Installation is supported on all Windows editions except Windows ARM.

## Permissions

Administrative (sudo) privileges are required to install and run KubeKit on your operating system. During installation or while executing certain tasks, the system may prompt you to enter your administrator or sudo password. This is necessary because KubeKit needs elevated privileges to perform system-level operations, such as managing services and accessing network configurations.

## Ports

KubeKit operates locally and requires access to two specific ports: **5963** and **5964**. These ports must be open and available for KubeKit to function properly.

If these ports are already in use by another process, KubeKit will display an error message indicating that the ports are unavailable. To resolve this, terminate the processes currently using those ports before restarting the KubeKit application.

On **Windows** systems, a firewall prompt may appear requesting permission to allow these ports. When this prompt appears, click Allow to grant KubeKit the necessary access.


## Application Data

KubeKit stores application-related data in the user's home directory under the folder named **.kube-kit-v2**. This directory contains essential files, including configuration data, databases, logs, and update packages.

You may explore this folder if needed for troubleshooting, backup, or system maintenance purposes.

Click [here](/docs/installing-kubekit/installing-kubekit.md) to continue installation process. 
