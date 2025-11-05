# Scaling Deployments

## What is deployment scaling and why it matters  
Scaling a deployment means adjusting the number of running instances (replicas) of a workload so that your cluster can respond appropriately to increased or decreased demand. When you scale up, additional pods are scheduled onto nodes, enabling your application to handle more load; when you scale down, you free up resources and avoid unnecessary cost or overhead. In Kubernetes, a deployment manages pods via a replica set — changing the replica count triggers the replica set controller to add or remove pods accordingly.  
For further reading on the native Kubernetes approach to scaling: [Kubernetes — Scaling an application](https://kubernetes.io/docs/tutorials/kubernetes-basics/scale/scale-intro/) and [Kubernetes — Autoscaling Workloads](https://kubernetes.io/docs/concepts/workloads/autoscaling/) 

---

## Step 1: Navigate to the Cluster Dashboard
On the **Home** page, you can view all the clusters that you have created or imported. Select the desired cluster to open its **Cluster Dashboard**. From this dashboard, you can proceed to manage and scale your deployments.

## Step 2: Open the Deployments page  
Navigate to the **Deployments** view under the **Workload** section in the sidebar of the KubeKit interface. This page displays all existing deployments across namespaces by default.

## Step 3: Choose a namespace (optional)  
If you wish to focus on a single namespace, use the namespace-selector dropdown at the top-left of the page to filter the list accordingly. Otherwise, you will see deployments from all namespaces.

## Step 4: Access the deployment’s action menu  
Locate the row corresponding to the deployment you wish to scale. Then click the three-dot menu (⋮) at the end of that row to open the available actions.

## Step 5: Select the “Scale” action  
From the action menu, choose **Scale**. This will open a dialog window where you can specify the new replica count.

## Step 6: Specify the desired number of replicas  
In the scale dialog, you will be shown the current number of replicas for reference. Enter the new desired count of replicas (for example, increasing from 3 to 6). This defines how many pod instances the deployment should run moving forward.

## Step 7: Apply the change  
Click the **Apply** button to confirm your change. KubeKit will instruct Kubernetes to reconcile the deployment to the new replica count and will update the underlying ReplicaSet accordingly.

---

By following these seven steps, you can quickly and reliably scale any deployment via KubeKit’s UI, thereby adapting your application footprint to match runtime conditions.

