# Workloads  
The **Workloads** section displays all running resources within your cluster including [**Pods**](/docs/cluster/managing-cluster/workload.md#pods), [**Deployments**](/docs/cluster/managing-cluster/workload.md#deployments), [**Daemon Sets**](/docs/cluster/managing-cluster/workload.md#daemon-sets), [**Replica Sets**](/docs/cluster/managing-cluster/workload.md#replica-sets), [**Replication Controllers**](/docs/cluster/managing-cluster/workload.md#replication-controller), [**Stateful Sets**](/docs/cluster/managing-cluster/workload.md#stateful-sets), [**Jobs**](/docs/cluster/managing-cluster/workload.md#jobs), [**Cron Jobs**](/docs/cluster/managing-cluster/workload.md#cron-jobs).


## **Pods**  

All **pods** along with their **name**, **namespace**, **container**, **cpu**, **memory**, **restarts**, **controlled by**, **node**, **age**, **status** are listed here.

![Pod List](/docs/images/final/pod-list.png)

### Pod Details

Click on a **pod** row to view detailed information about it.

![Pod Details](/docs/images/final/pod-details.png)

This page shows real-time **CPU** and **Memory** usage graphs for the selected pod. You will also find detailed information such as **Annotations**, **Service Account**, **QoS Class**, **Conditions**, **Affinities**, **Tolerations** and more.  

In addition, you can view details about the **containers** running inside the pod, along with real-time **CPU** and **Memory** usage graphs, **Volumes** and **Events** related to the pod.

![Pod Details Containers](/docs/images/final/pod-details-containers.png)

### Access pod terminal

Follow the [instructions](/docs/cluster/managing-cluster/terminal-access.md#access-pod-terminal)
  to access the pod terminal.

### View pod logs

To view the logs of a pod, click on the three-dot menu  and then select the **`Logs`** button. 

![Pod Logs List](/docs/images/final/pod-logs-list.png)

Alternatively, you can view pod logs from the pod detail page by clicking on the **`Logs`** button located at the top-right corner.

![Pod Logs Details](/docs/images/final/pod-logs-details.png)

## **Deployments**   

All the **deployments** along with **name**, **namespace**, **pods**, **replicas**, **age** and **status** are listed here.

![Deployment List](/docs/images/final/deployment-list.png)

### Deployment Details

Click on a **deployment** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected deployment. You will also find detailed information such as **Annotations**, **Selector**, **Node Selector**, **Conditions**, **Affinities**, **Tolerations**, **Strategy Type** and more. 

![Deployment Details](/docs/images/final/deployments-details.png)

In addition, you can view details about the **pods** running inside the deployment, along with **Events** related to the deployment.

### Scaling Deployments

You can scale a deployment to your desired number of replicas.  
The **`Scale`** option is available in the three-dot menu of each deployment row.

![Scale Deployment](/docs/images/final/scale-deployment.png)  

You can also scale from the deployment detail page (opened by clicking the deployment row), where the **`Scale`** icon is located in the top-right corner.

### View deployment logs

KubeKit allows you to view logs for deployments by combining logs from all pods managed by the deployment according to the timestamp.

To view the logs of a deployment, click on the three-dot menu  and then select the **`Logs`** button. 

![Deployment Logs List](/docs/images/final/deployment-logs-list.png)

Alternatively, you can view deployment logs from the deployment detail page by clicking on the **`Logs`** button located at the top-right corner.

---

## Daemon Sets

All the **daemon sets** along with **name**, **namespace**, **pods**, **node selector**, **age** and **update strategy** are listed here. 

![Daemon Set List](/docs/images/final/daemon-set-list.png)

### Daemon Set details

Click on a **daemon sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected daemon set. You will also find detailed information such as **Annotations**, **Images**, **Selector**, **Service account**, **DNS policy**, **Schedular**, **Straegy Type** and more.  

![Daemon Set Details](/docs/images/final/ds-details.png)

You can view all the **pods** running under the daemon set, as well as **Events** related to it.  

### View Daemon Set logs

KubeKit allows you to view logs for daemon sets by combining logs from all pods managed by the daemon set according to the timestamp.

To view the logs of a daemon set, click on the three-dot menu  and then select the **`Logs`** button. 

![Daemon Set Logs List](/docs/images/final/daemon-set-logs-list.png)

Alternatively, you can view daemon set logs from the daemon set detail page by clicking on the **`Logs`** button located at the top-right corner.

## Replica Sets

All the **replica sets** along with **name**, **namespace**, **node selector**, **desired**, **current**, **ready** and **age** are listed here.

![Replica Set List](/docs/images/final/rs-list.png)

### Replica Set details

Click on a **replica sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected replica set. You will also find detailed information such as **Annotations**, **Tolerations**, **Selector**, **Service account**, **DNS policy**, **Schedular**, **Restart Policy** and more.  

![Replica Set Details](/docs/images/final/rs-details.png)

You can view all the **pods** running under the replica set, as well as **Events** related to it.

### View Replica Set logs

KubeKit allows you to view logs for replica sets by combining logs from all pods managed by the replica set according to the timestamp.

To view the logs of a replica set, click on the three-dot menu  and then select the **`Logs`** button. 

![Replica Set Logs List](/docs/images/final/replica-set-logs-list.png)

Alternatively, you can view replica set logs from the replica set detail page by clicking on the **`Logs`** button located at the top-right corner.

## Replication Controller

All the **replication controller** along with **name**, **namespace**, **selector**, **replicas**, **ready** and **age** are listed here.

You can view **logs** of any **replication controller** by clicking the **`Logs`** option in the three-dot menu of the **replication controller** row.

![Replication Controller List](/docs/images/final/rc-list.png)

### Replication controller details

Click on a **replication controller** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected replication controller. You will also find detailed information such as **Labels**, **Selector**, **DNS policy**, **Schedular**, **Restart Policy** and more.  

A **Logs** button is also available at the top-right corner to view the replication controller logs.

![Replication Controller Details](/docs/images/final/rc-details.png)

You can view all the **pods** running under the replication controller, as well as **Events** related to it.

## Stateful Sets

All the **stateful sets** along with **name**, **namespace**, **service name**, **pods**, **replicas**, **age** and **update strategy** are listed here.

You can view **logs** of any **stateful set** by clicking the **`Logs`** option in the three-dot menu of the **stateful set** row.
![Stateful Set List](/docs/images/final/ss-list.png)

### Stateful Set details

Click on a **stateful sets** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected stateful set. You will also find detailed information such as **Images**, **Status**, **Selector**, **Schedular**, **Restart Policy** and more.  

A **Logs** button is also available at the top-right corner to view the stateful set logs.

![Stateful Set Details](/docs/images/final/ss-details.png)

You can view all the **pods** running under the stateful set, as well as **Events** related to it.  

## **Jobs**   

All the **jobs** along with **name**, **namespace**, **completions**, **age** and **conditions** are listed here.

You can view **logs** of any **jobs** by clicking the **`Logs`** option in the three-dot menu of the jobs row.
![Job List](/docs/images/final/job-list.png)

### Job Details

Click on a **job** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected jobs. You will also find detailed information such as **Annotations**, **Labels**, **Node Selector** and more.  

A **Logs** button is also available at the top-right corner to view the job logs.

![Job Details](/docs/images/final/job-details.png)

You can view all the **pods** running under the jobs, as well as **Events** related to it.  

## **Cron Jobs**   

All the **cron Jobs** along with **name**, **namespace**, **schedule**, **suspend**, **last schedule**, **age**,  and **conditions** are listed here.
![Cron Job List](/docs/images/final/cj-list.png)

### Cron Job Details

Click on a **cron Jobs** row to view detailed information about it.

This page shows real-time **CPU** and **Memory** usage graphs for the selected cron Jobs. You will also find detailed information such as **Scheduler**, **DNS policy**, **Status**, **Concurrency policy** and more.  
![Cron Job Details](/docs/images/final/cj-details.png)

You can view all the **events** related to these cron jobs. 

