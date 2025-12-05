# Workloads  
The **Workloads** section displays all running resources within your cluster including [**Pods**](/docs/cluster/managing-cluster/workload.md#pods), [**Deployments**](/docs/cluster/managing-cluster/workload.md#deployments), [**Daemon Sets**](/docs/cluster/managing-cluster/workload.md#daemon-sets), [**Replica Sets**](/docs/cluster/managing-cluster/workload.md#replica-sets), [**Replication Controllers**](/docs/cluster/managing-cluster/workload.md#replication-controller), [**Stateful Sets**](/docs/cluster/managing-cluster/workload.md#stateful-sets), [**Jobs**](/docs/cluster/managing-cluster/workload.md#jobs), [**Cron Jobs**](/docs/cluster/managing-cluster/workload.md#cron-jobs).


## **Pods**  

All **pods** along with their **name**, **namespace**, **container**, **cpu**, **memory**, **restarts**, **controlled by**, **node**, **age**, **status** are listed her.
![](/docs/images/final/pod-list.png)

### Pod Details

Click on a **pod** row to view detailed information about it.
![](/docs/images/final/pod-details.png)

This page shows real-time **CPU** and **Memory** usage graphs for the selected pod. You will also find detailed information such as **Annotations**, **Service Account**, **QoS Class**, **Conditions**, **Affinities**, **Tolerations** and more.  

In addition, you can view details about the **containers** running inside the pod, along with **Volumes** and **Events** related to the pod.


### Access pod terminal

To access a pod's terminal, locate the three-dot menu on the pod row and click the **`Terminal`** button.  

Alternatively, if you open the pod's detailed page by clicking on its row, the **`Terminal`** button is available at the top-right corner. Clicking it will open the terminal for that node.  
![](/docs/images/final/pods.png)

---

## **Deployments**   

All the **deployments** along with **name**, **namespace**, **pods**, **replicas**, **age** and **status** are listed here.
You can view **logs** of any **deployment** by clicking the **`Logs`** option in the three-dot menu of the deployment row.
![](/docs/images/final/deployments.png)

### Deployment Details

Click on a **deployment** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected deployment. You will also find detailed information such as **Annotations**, **Selector**, **Node Selector**, **Conditions**, **Affinities**, **Tolerations**, **Straegy Type** and more.  
![](/docs/images/final/deployments-details.png)

In addition, you can view details about the **pods** running inside the deployment, along with **Events** related to the deployment.

### Scaling Deployments

You can scale a deployment to your desired number of replicas.  
The **`Scale`** option is available in the three-dot menu of each deployment row.  

You can also scale from the deployment detail page (opened by clicking the deployment row), where the **`Scale`** icon is located in the top-right corner.

---

## Daemon Sets

All the **daemon sets** along with **name**, **namespace**, **pods**, **node selector**, **age** and **update strategy** are listed here.
You can view **logs** of any **daemon set** by clicking the **`Logs`** option in the three-dot menu of the **daemon set** row.
![](/docs/images/final/ds-list.png)

### Daemon set details

Click on a **daemon sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected daemon set. You will also find detailed information such as **Annotations**, **Images**, **Selector**, **Service account**, **DNS policy**, **Schedular**, **Straegy Type** and more.  
![](/docs/images/final/ds-details.png)

You can view details about the **pods** running inside the daemon set, as well as **Events** related to it.  
A **Logs** button is also available at the top-right corner to view the daemon set logs.

---

## Replica Sets

All the **replica sets** along with **name**, **namespace**, **node selector**, **desired**, **current**, **ready** and **age** are listed here.
You can view **logs** of any **replica set** by clicking the **`Logs`** option in the three-dot menu of the **replica set** row.
![](/docs/images/final/rs-list.png)

### Replica set details

Click on a **replica sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected replica set. You will also find detailed information such as **Annotations**, **Tolerations**, **Selector**, **Service account**, **DNS policy**, **Schedular**, **Restart Policy** and more.  
![](/docs/images/final/rs-details.png)

You can view details about the **pods** running inside the replica set, as well as **Events** related to it.  
A **Logs** button is also available at the top-right corner to view the replica set logs.

---

## Replication Controller

All the **replication controller** along with **name**, **namespace**, **selector**, **replicas**, **ready** and **age** are listed here.
You can view **logs** of any **replication controller** by clicking the **`Logs`** option in the three-dot menu of the **replication controller** row.
![](/docs/images/final/rc-list.png)

### Replication controller details

Click on a **replication controller** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected replication controller. You will also find detailed information such as **Labels**, **Selector**, **DNS policy**, **Schedular**, **Restart Policy** and more.  
![](/docs/images/final/rc-details.png)

You can view details about the **pods** running inside the replication controller, as well as **Events** related to it.  
A **Logs** button is also available at the top-right corner to view the replication controller logs.

---

## Stateful Sets

All the **stateful sets** along with **name**, **namespace**, **service name**, **pods**, **replicas**, **age** and **update strategy** are listed here.
You can view **logs** of any **stateful set** by clicking the **`Logs`** option in the three-dot menu of the **stateful set** row.
![](/docs/images/final/ss-list.png)

### Stateful Set details

Click on a **stateful sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected stateful set. You will also find detailed information such as **Images**, **Status**, **Selector**, **Schedular**, **Restart Policy** and more.  
![](/docs/images/final/ss-details.png)

You can view details about the **pods** running inside the stateful set, as well as **Events** related to it.  
A **Logs** button is also available at the top-right corner to view the stateful set logs.

---

## **Jobs**   

All the **jobs** along with **name**, **namespace**, **completions**, **age** and **conditions** are listed here.
You can view **logs** of any **jobs** by clicking the **`Logs`** option in the three-dot menu of the jobs row.
![](/docs/images/final/job-list.png)

### Job Details

Click on a **job** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected jobs. You will also find detailed information such as **Annotations**, **Labels**, **Node Selector** and more.  
![](/docs/images/final/job-details.png)

You can view details about the **pods** running inside the jobs, as well as **Events** related to it.  
A **Logs** button is also available at the top-right corner to view the job logs.

---

## **Cron Jobs**   

All the **cron Jobs** along with **name**, **namespace**, **schedule**, **suspend**, **last schedule**, **age**,  and **conditions** are listed here.
![](/docs/images/final/cj-list.png)

### Cron Job Details

Click on a **cron Jobs** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected cron Jobs. You will also find detailed information such as **Scheduler**, **DNS policy**, **Status**, **Concurrency policy** and more.  
![](/docs/images/final/cj-details.png)

You can view details about the **events** related to the cron jobs. 

