# Cluster Configuration

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

### Add-ons

* **Metrics Provider**: Enable to view cluster performance metrics. You can also configure this later.
* **Cert Manager**: Integrate with Let's Encrypt to manage SSL certificates. Provide an email and select a deployment mode (staging or production).

![](../../images/final/cluster-configuration.png)
