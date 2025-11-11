# Managing a Cluster

## Overview  
Cluster management is at the heart of maintaining a stable, performant, and secure Kubernetes environment. **KubeKit** provides a powerful and intuitive interface for managing all aspects of your cluster — from nodes and workloads to events, metrics, and logs — directly from the **Cluster Dashboard**.

When you select a cluster from the **KubeKit Dashboard**, you’ll land on the **Overview Page**, which offers a complete summary of your cluster’s configuration and status.  

At the top of the page, you’ll find details such as:  
- Kubernetes version  
- Container Network Interface (CNI) type and version  
- Container Runtime Engine type and version  
- Load Balancer type and version  
- Cluster age  

You can download the **kubeconfig** file from the top-right corner of this page for local access or automation.  

The overview also visualizes **CPU and memory usage** for all nodes — represented through a time-series graph. If the metrics are not visible, ensure that your metrics provider (Prometheus or KubeKit metrics) is configured properly.  

In the left panel, you can see all running **pods** within the cluster, filter them by namespace, and manage them directly using the **Manage** button (visible when hovering over the Pods section). Similarly, all **nodes** are listed in the **Nodes** section, where you can manage them via the **Manage** button.  

All **cluster events** are displayed on the same page, offering insights into real-time activities and potential issues.

---

## Cluster Management Options

KubeKit’s **right sidebar** includes several tools for advanced cluster management. Each section provides dedicated views and controls for specific resources.

---

### **Nodes**  
This page lists all nodes in your cluster.  
- Search for nodes by name using the search bar.  
- Filter nodes by **status** and **roles**.  
- Access node terminals for direct interaction — follow the instructions in [Terminal Access](#) *(hyperlink to be added)*.  

---

### **Namespaces**  
All namespaces are displayed here.  
- Search namespaces by name or filter by **status**.  
- View **labels** and **age** for each namespace.  
- Delete a namespace by clicking its **delete icon**.

---

### **Events**  
This section shows all cluster events.  
- Search for events by **resource name**.  
- Filter events by **namespace** to locate specific occurrences.

---

### **Metrics**  
Monitor cluster performance through detailed node and workload metrics.  
- For more details, see [Metrics Documentation](#) *(hyperlink to be added)*.  

---

### **Logs**  
View real-time logs across nodes, pods, and workloads.  
- For details, refer to [Logs Documentation](#) *(hyperlink to be added)*.  

---

### **Helm**  
Manage Helm repositories and install Helm releases directly from KubeKit.  
- For detailed guidance, refer to [Helm Management Documentation](#) *(hyperlink to be added)*.

---

### **Workload**  
All workloads in the cluster are listed under this section. Let’s explore each workload type individually.

#### **Pods**  
- View all pods across namespaces.  
- Search by pod name, filter by **namespace**, **node**, or **status**.  
- Delete a pod by selecting it via the checkbox — a **Delete** button will appear.  
- Access the pod’s terminal by following the steps in [Terminal Access](#) *(hyperlink to be added)*.

#### **Deployments**  
- View and search all deployments.  
- Filter by **namespace**.  
- Delete deployments by selecting them via checkbox — a **Delete** button will appear.  
- Scale deployments easily — see [Scaling Deployments](#) *(hyperlink to be added)* for full instructions.

#### **Daemon Sets**  
- View all DaemonSets across namespaces.  
- Search or filter as needed.  
- Delete a DaemonSet by selecting it via checkbox — a **Delete** button will appear.  
- View more details about any DaemonSet by clicking on its name.

---

Managing your cluster with **KubeKit** consolidates all administrative, monitoring, and troubleshooting capabilities into a single intuitive interface — ensuring that your Kubernetes operations remain efficient, transparent, and fully under control.
