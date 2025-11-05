# Terminal Access

Gaining terminal access to nodes and pods within a cluster empowers engineers to dive deeply into root-cause analysis, perform real-time debugging, and execute commands that may not be visible via standard dashboards or logs. Within a KubeKit-managed cluster, being able to open a shell on a node or pod lets you inspect filesystem state, network connectivity, container internals, running processes, and more. All of which contribute to smoother troubleshooting, faster incident resolution and more robust cluster management. 

---

## Access Node Terminal  
From the KubeKit **Cluster Dashboard**, navigate to the **Nodes** section via the right-sidebar. On the **Nodes** page, you will see a list of all nodes in the cluster. Locate the row of the node you wish to inspect, then click the three-dot action menu at the far right of that row. Select the **Terminal** button — this will instantly open a shell session on the selected node.

---

## Access Pod Terminal  
Within the same Cluster Dashboard, navigate to the **Workloads** section and choose **Pods**. On the **Pods** page you will find all pods across namespaces listed; you may filter the list by namespace or status to narrow down your selection. For a given pod, click the three-dot action menu located at the far right of its row, and then click the **Terminal** button to open a shell into the selected pod’s container.

---

By using these steps, you can seamlessly reach both nodes and pods from the KubeKit UI for in-depth inspection and troubleshooting.
