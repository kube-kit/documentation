# Creating a Cluster

Creating a Kubernetes cluster with KubeKit is designed to be simple, visual, and intuitive. Even users with minimal Kubernetes experience can understand and prepare for cluster creation. This page is not a step-by-step guide but highlights important considerations and best practices. If you have not done so already, check the [Creating Your First Cluster](../tutorial/creating-your-first-cluster.md) tutorial for a guided setup.



## Prerequisites

Before starting the cluster creation process, ensure the following:

* You have at least **two virtual machines (VMs)** to create a cluster.
* Each VM should have a minimum of **2 CPU cores** and **2 GB RAM**.
* **SSH access** must be enabled on all nodes.
* All nodes should have **network connectivity** with each other.

If you encounter errors during the creation process, these are often related to network connectivity or SSH access. Double-check your VM configurations and retry.

## Cluster Creation Steps

The cluster creation workflow in KubeKit follows a clear step-by-step process:

1. **Initiate Cluster Creation**: Click the `Create Cluster` button on your KubeKit home page.
2. **Information Page**: Read through the introductory information and instructions.
3. **Node Input Page**: Enter the details for your VMs, including IP addresses and SSH credentials.
4. **Node Information Page**: Confirm that KubeKit can access the nodes and validate system requirements.
5. **Node Check**: KubeKit will verify connectivity, OS compatibility, and available resources.
6. **Cluster Configuration Page**: Configure Kubernetes version, container runtime, networking, and additional options.
7. **Create Cluster**: Once all settings are confirmed, initiate cluster creation. KubeKit will deploy all nodes and configure the cluster.

## Cluster Configuration

The Cluster Configuration page allows you to customize your cluster:

### Basic Information

* **Cluster Name and Icon**: Assign a unique name and icon for reference. This helps identify your cluster in the dashboard.
* **Description**: Add an optional description for documentation or context.

### Kubernetes Version

* Choose the version of Kubernetes for your cluster. The **latest stable version** is recommended for security, performance, and feature updates.

### Container Runtime

* Kubernetes runs applications in isolated containers. Choose a container runtime to manage these containers. KubeKit supports **containerd** and **CRI-O**, both of which are widely used and production-ready.

### Network Configuration (CNI Provider)

* The CNI (Container Network Interface) manages network communication between pods. Options include **Calico**, **Weave Net**, and **Flannel**. All are robust and production-grade solutions.

### Ingress Controller

* An ingress controller manages external access to services within the cluster. Choose between **NGINX** and **Traefik**.
* Specify an **Ingress IP** to route incoming traffic correctly.

### Optional Features

* **Metrics Provider**: Enable to view cluster performance metrics. You can also configure this later.
* **Cert Manager**: Integrate with Let's Encrypt to manage SSL certificates. Provide an email and select a deployment mode (staging or production).

## Tips for a Smooth Cluster Creation

* Ensure **all nodes meet the minimum system requirements**.
* Check **network connectivity** and **SSH access** to each node before starting.
* Use the latest Kubernetes version for optimal stability and features.
* If an error occurs during deployment, review the logs and verify node configurations.

By following these steps, you can create a stable, fully functional Kubernetes cluster with KubeKit, ready for application deployment and management.
