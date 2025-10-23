# Importing a Cluster

Importing or adding a cluster to KubeKit is straightforward. Adding a cluster allows KubeKit to access your existing Kubernetes cluster and store its configuration details for easy management. All added clusters can be viewed directly from the KubeKit homepage.

When you create a cluster using KubeKit, it is automatically added to your cluster list.

## How to Import a Cluster

1. **Navigate to the Import Cluster Page**

   * From the homepage, click on `Import Cluster`.

2. **Provide Cluster Details**

   * On the right side, select an icon, provide a name, and optionally add a description for your cluster. This information will be displayed in your cluster list on the homepage.

3. **Select Access Method**

   * On the left side, you can choose how KubeKit will access your cluster. There are two primary methods:

   #### Option 1 and 2: Using a Kubeconfig File

   * The kubeconfig file contains all necessary credentials and configuration for accessing your cluster. You do not need to understand its contents.
   * Option 1: Upload the kubeconfig file directly.
   * Option 2: Paste the contents of the kubeconfig file if you have it in text format.

    #### Option 3: Using Master Node Credentials

    * You can provide credentials to access the cluster's master node directly.
    * Required information includes the node IP, username, and preferred access method (e.g., SSH).

4. **Import the Cluster**

   * Click `Continue` to complete the import process.

5. **Verify the Imported Cluster**

   * Return to the homepage to see the imported cluster in the list.
   * The cluster entry displays details such as CPU cores, memory, storage, number of pods, and other essential metrics.
   * You can also download the kubeconfig file from the cluster entry for future use.

## Notes and Best Practices

* Ensure your kubeconfig file or master node credentials are valid to prevent import failures.
* Imported clusters can be managed alongside clusters created in KubeKit, enabling unified multi-cluster management.
* Adding descriptive names and icons helps in quickly identifying clusters, especially in environments with multiple clusters.
* KubeKit supports importing clusters from diverse OS nodes including Ubuntu, Debian, CentOS, Fedora, and Amazon Linux for seamless integration.
