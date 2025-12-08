## Cluster Dashborad  

**KubeKit** provides an intuitive UI interface to manage every aspect of your cluster including [**nodes**](/docs/cluster/managing-cluster/nodes.md), [**namespaces**](/docs/cluster/managing-cluster/namespaces.md), [**events**](/docs/cluster/managing-cluster/events.md), [**metrics**](/docs/cluster/managing-cluster/metrics.md), [**logs**](/docs/cluster/managing-cluster/log.md), [**helm**](/docs/cluster/managing-cluster/helm.md), [**workloads**](/docs/cluster/managing-cluster/workload.md) within a unified dashboard.


 <!-- [**config**](/docs/cluster/managing-cluster/config.md),  -->
 
<!-- [**network**](/docs/cluster/managing-cluster/networking.md), [**access control**](/docs/cluster/managing-cluster/access-control.md),  -->
<!-- and [**storage**](/docs/cluster/managing-cluster/storage.md)   -->

![Cluster Dashboard](/docs/images/final/cluster-dashboard.png)

You can switch among clusters from top left dropdown.

At the top, the versions of  **Kubernetes**, **Container Network Interface**, **Container Runtime Engine**, **Load Balancer**  and **Age** of this cluster are shown.

At a glance, you will see:

- **CPU** and **Memory usage** of cluster nodes
- **Node** list (master node highlighted in blue).
- Recent **event** list, which occurred in your cluster.
- On the right side, all **pods** are listed.


You can manage [pods](/docs/cluster/managing-cluster/workload.md#pods), [nodes](/docs/cluster/managing-cluster/nodes.md) and [events](/docs/cluster/managing-cluster/events.md) directly via the **Manage** button available on hover. 

All information on this page is updated in real time.

If metrics graphs are not visible then click on **`configure metrics`** button and follow the [instructions](/docs/cluster/managing-cluster/metrics.md#addding-a-metrics-provider).
