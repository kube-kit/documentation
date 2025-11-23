# Creating Your First Cluster

Creating a cluster in **KubeKit** is simple, fast, and effortless. Follow these steps to set up your first Kubernetes cluster. You can include images for each step to visually guide users.

---

### **Step 1: Open the Home Page**

On the KubeKit home page, click **Create Cluster**.
An information page will appear. After reviewing it, click **I am ready to make my cluster** to proceed.
![](../images/tutorial/kubekit_empty_home.png)
Read requirements carefully.
![](../images/tutorial/cluster_create_info.png)


---

### **Step 2: Configure Node Details**

In this page, you have to provide information related to your nodes.

![](../images/tutorial/node_count_and_prefill.png)


On the **left side of the screen**, you will see the **Node Count** section:

Adjust the total number of nodes for your cluster (minimum 2 required) using the + and − icons.


On the **right side of the screen**, you will find several **options** that make configuration easier. These are designed to help when your cluster contains many nodes with similar settings.

For example, when creating a cluster with a large number of nodes, you may have node IPs in a similar range such as:

```
10.0.0.21, 10.0.0.22, 10.0.0.23
```

If all nodes share the same **username** and **password** or have a similar **access method**, you can fill information here.

If your nodes do not follow a similar pattern, don’t worry as you can manually adjust or update each node’s information on the next page.

When ready, click **Continue** to move forward.

---

### **Step 3: Provide Node Information**


On the **Node Information** page:

* Designate one node as the **Master Node**. You can choose any node to be the master.
* Use the + and delete buttons to add or remove nodes.
* Also you can modify any information of any node from here.

Click **Continue** when all nodes are configured.

![](../images/tutorial/node_information.png)


Click **continue** and it will ask you for confirmation for node access and **requirements** check.

![](../images/tutorial/node_check_confirmation_modal.png)
![](../images/tutorial/node_check_confirmation_modal_complete.png)

---

### **Step 4: Node Verification and Preview**

This page will ensure either your nodes are good to go or needs modifications.
* If any node is unreachable, an **error message** will appear.
* Once all nodes are verified, a **Preview Page** will display the following details:

  * CPU count
  * Total memory
  * Operating system
  * Total storage

Click **Continue** to move forward.

![](../images/tutorial/node_preview_page.png)

---

### **Step 5: Configure Cluster Settings**

On the **Cluster Configuration** page:

* On the left side of the page, you can find the cluster configuration entries. You may skip the add-ons for now and configure them later.
* On the right side of the page, define the **Cluster Name** and an optional **Description**.

Click **Continue** to proceed.


![](../images/tutorial/cluster_configuration.png)


---

### **Step 6: Start Cluster Creation**

A confirmation dialog will appear. Click **Start** to begin the cluster creation process.
![](../images/tutorial/cluster_creation_confirmation.png)


* Depending on your **internet speed**, **VM resources**, and **node count**, the setup may take some time.
* You can monitor progress and view logs during installation.

![](../images/tutorial/cluster_creation_running.png)

If an error occurs (often due to network issues):

* The process will stop.
* A **Retry** button will appear.
* Click **Retry** to continue from where it stopped.
* You can also track the error logs.
<!-- TODO: Add image of cluster creation error -->

---

### **Step 7: Completion and Dashboard Access**

When all the processes complete successfully, a **Congratulations** page will appear.

Click **Manage This Cluster** to open your **Cluster Dashboard**, where you can start managing this cluster.

**Congratulations!!** You have now successfully created your first Kubernetes cluster using KubeKit!
![](../images/tutorial/cluster_creation_success.png)

