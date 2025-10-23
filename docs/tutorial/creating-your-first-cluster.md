# Creating Your First Cluster

Creating a cluster in **KubeKit** is simple, fast, and effortless. Follow these steps to set up your first Kubernetes cluster. You can include images for each step to visually guide users.

---

### **Step 1: Open the Home Page**

On the KubeKit home page, click **Create Cluster**.
An information page will appear. After reviewing it, click **I am ready to make my cluster** to proceed.
<!-- TODO: Add image -->

---

### **Step 2: Set Node Count**

In the **Node Number** page:

* Adjust the total number of nodes for your cluster.
* You need a **minimum of 2 nodes**.
* Use the **+** and **−** icons to increase or decrease node count.
  When ready, click **Continue**.
<!-- TODO: Add image -->

---

### **Step 3: Provide Node Information**

On the **Node Information** page:

* For each node, enter the **IP address** and **access method** (e.g., SSH credentials).
* You will see one form per node based on your previous selection.
* Designate one node as the **Master Node**. You can choose any node to be the master.
* Use the **Delete** button to remove a node or **+ Add Node** to include more.

Click **Continue** when all nodes are configured.

A confirmation pop-up will appear asking to start verification. Click **Start** to begin.
<!-- TODO: Add image -->

---

### **Step 4: Node Verification and Preview**

KubeKit will now check the accessibility of your virtual machines (VMs):

* If any node is unreachable, an **error message** will appear.
* Once all nodes are verified, a **Preview Page** will display the following details:

  * CPU count
  * Total memory
  * Operating system
  * Total storage

Click **Continue** to move forward.
<!-- TODO: Add image -->

---

### **Step 5: Configure Cluster Settings**

On the **Cluster Configuration** page:

* Choose the components you want to install. You may continue with default options or customize as needed.
* Provide a **Cluster Name** and an optional **Description**.

Click **Continue** to proceed.
<!-- TODO: Add image -->

---

### **Step 6: Start Cluster Creation**

A confirmation dialog will appear. Click **Start** to begin the cluster creation process.

* Depending on your **internet speed**, **VM resources**, and **node count**, the setup may take some time.
* You can monitor progress and view logs during installation.

If an error occurs (often due to network issues):

* The process will stop.
* A **Retry** button will appear.
* Click **Retry** to continue from where it stopped.
<!-- TODO: Add image -->

---

### **Step 7: Completion and Dashboard Access**

When the process completes successfully, a **Congratulations** page will appear.

Click **Manage This Cluster** to open your **Cluster Dashboard**, where you can start managing your cluster.

You have now successfully created your first Kubernetes cluster using KubeKit!
<!-- TODO: Add image -->
