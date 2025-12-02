# Workloads  
The **Workloads** section displays all running resources within your cluster. Each workload type supports searching, filtering, and management features such as deletion, scaling, and detailed inspection.

---

## **Pods**  
You can view all pods across all namespaces within the Cluster Dashboard. The pod list allows you to search and filter by namespace, node, or status to easily locate specific pods. For any pod, you have the option to delete it by selecting the pod, which will display a Delete button. 
### Access pod terminal
You can also access the terminal of a pod directly from the dashboard. To do this, navigate to the Workloads section and select Pods. On the Pods page, locate the pod you want to access and click the three-dot action menu on the far right of its row. From the menu, click the Terminal button to open a shell session into the container running inside that pod. This feature enables you to interact with the pod directly for troubleshooting, configuration, or monitoring purposes.

## **Deployments**  
You can search and filter deployments by namespace. Each deployment can be deleted or scaled as needed to adjust your application workload.

![](/docs/images/final/deployments.png)

## Scaling Deployments
Scaling a deployment means adjusting the number of running instances, or replicas, of a workload so that your cluster can respond appropriately to changing demand. Scaling up schedules additional pods onto nodes, enabling your application to handle increased load. Scaling down frees up resources and reduces unnecessary cost or overhead. In Kubernetes, a deployment manages pods through a replica set. Changing the replica count triggers the replica set controller to add or remove pods accordingly.  

For further reading on the native Kubernetes approach to scaling, see [Kubernetes Scaling an Application](https://kubernetes.io/docs/tutorials/kubernetes-basics/scale/scale-intro/) and [Kubernetes Autoscaling Workloads](https://kubernetes.io/docs/concepts/workloads/autoscaling/).

### Open the Deployments Page
Navigate to the **Deployments** view under the **Workload** section in the sidebar of the KubeKit interface. This page displays all existing deployments across namespaces by default.

### Choose a Namespace (Optional)
To focus on a single namespace, use the namespace-selector dropdown at the top-left of the page to filter the list. If no namespace is selected, deployments from all namespaces will be shown.

### Access the Deployment’s Action Menu
Find the row corresponding to the deployment you wish to scale. Click the three-dot menu (⋮) at the end of the row to view available actions.

### Select the “Scale” Action
From the action menu, choose **Scale**. A dialog window will open where you can specify the new replica count.

### Specify the Desired Number of Replicas
The scale dialog will display the current number of replicas for reference. Enter the new desired count of replicas, for example increasing from 3 to 6. This defines how many pod instances the deployment should run moving forward.

### Apply the Change
Click the **`Apply`** button to confirm your change. KubeKit will instruct Kubernetes to reconcile the deployment to the new replica count and update the underlying ReplicaSet accordingly.

By following these steps, you can quickly and reliably scale any deployment using KubeKit’s UI, adapting your application footprint to match runtime conditions.


## **Replica Sets**  
- Lists all ReplicaSets.  
- Search or filter by **namespace**.  
- Delete by selecting the desired ReplicaSet.  
- View details by clicking on its name.

## **Replication Controllers**  
- Functionality identical to ReplicaSets.  
- Search, filter, delete, or inspect detailed configurations.

## **Stateful Sets**  
- Lists all StatefulSets.  
- Search or filter by namespace.  
- Delete as required.  
- Click to view configuration details.

## **Jobs**  
- Displays all Kubernetes Jobs.  
- Search or filter by namespace.  
- Delete Jobs when necessary.  
- Click to see more details.

## **CronJobs**  
- Similar management features as Jobs.  
- Search, filter, delete, or view details.

## **Daemon Sets**  
- View, search, and filter by **namespace**.  
- Delete or inspect a DaemonSet by clicking its name.
