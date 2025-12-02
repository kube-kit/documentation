# Logs

Logs are indispensable for effective cluster management. They provide a chronological record of events, errors, state-changes and operational activity within your cluster. In a dynamic environment like Kubernetes, where pods start and stop frequently and nodes may be rescheduled, timely access to logs enables you to **diagnose issues**, **audit actions**, **ensure compliance** and **maintain visibility** into system behaviour.
With KubeKit, you are empowered to access real-time log streams and leverage advanced features such as filtering, searching, timestamp viewing and downloading thereby transforming raw log data into actionable insights.

---

## Access the Cluster Dashboard  
From the KubeKit home screen, you will see all clusters you have created or imported. Select your target cluster to open its **Cluster Dashboard**.  

---

## Navigate to the Logs Page  
Within the selected cluster dashboard, locate the **Logs** section in the right-hand sidebar and click it. This will bring you to the Logs page where you can commence your log-analysis work.

![](../../images/final/logs.png)

---

## Filter Logs by Resource Type  
On the Logs page, you may filter log output by namespace, deployment, replicaset, daemonset, replication controller, stateful set, job, node controller or pod. This enables you to narrow the scope of logs to the exact resource you wish to investigate.

---

## Search and Inspect Logs  
Utilise the search bar located at the top-left of the Logs page to query specific log entries (e.g., error messages, component names, keywords). You may also enable the **`Wrap*`* button to adjust text formatting and check the **Show Timestamps** checkbox if you need to view timestamped entries in the log stream.

---

## Download Logs for Offline Analysis  
If you wish to review or archive logs outside of the console, use the **`Download`** button to export the selected log output. This is particularly helpful for long-term investigations, auditing purposes or sharing with other teams.



