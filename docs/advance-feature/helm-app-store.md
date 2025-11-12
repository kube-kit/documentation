# Helm App Store

Helm is a powerful package manager for Kubernetes that simplifies application deployment and management. It lets you define, install, and upgrade applications using pre-configured templates known as *releases*. Each release includes all the configuration and dependencies needed to run an application seamlessly within a cluster.

In simple terms, Helm allows you to deploy applications on Kubernetes without manually handling complex YAML configuration files. Common applications like NGINX, Prometheus, and Grafana can be deployed easily using Helm.

**KubeKit** enhances this experience by providing a graphical interface for Helm operations, eliminating the need for command-line commands. With just a few clicks, you can browse, configure, and install applications directly into your clusters.

---

## Before You Begin

Before using Helm in KubeKit, ensure:

* You have at least one running cluster connected to KubeKit.
* Internet access is available to fetch Helm repositories and releases.
* Necessary permissions are configured to install applications on the target cluster.

---

## Accessing Helm in KubeKit

1. Open the **KubeKit Dashboard**.
2. From the left-hand menu, select **Helm**.

The Helm page will display a list of available Helm releases. Loading time may vary depending on your internet connection and the number of repositories added.

---

## Browsing Helm Releases

On the Helm page:

* The **left panel** shows all available releases.
* Each release card displays:

  * **Name** of the release
  * **Repository** it belongs to
  * **Short description** of its function

Selecting a release displays detailed information on the **right panel**, including:

* Available **versions**
* Full description and configurations
* Option to choose a version for installation

---

## Installing a Release

1. Select a release from the list.
2. Click **Install** to open the **Release Installation Page**.

On this page, you can:

* **Select a version** of the release.
* **Choose a namespace** for deployment.
* **Provide a custom name** to identify the release later.

### Configuring Release Values

In the right panel, you can view and modify the release’s configuration values. These values define the application’s behavior and resource usage.

You can:

* Edit values directly.
* Search for specific parameters.
* Add or delete configuration entries.
* Reset to default values.

> **Note:** Configuration options vary between releases. Some applications have only a few settings, while others offer extensive customization.

Once configuration is complete, click **Install**. KubeKit handles the deployment and will notify you when the installation finishes.

---

## Managing Installed Releases

Click the **Installed** tab to view all deployed releases. You can filter releases by namespace or search by name.

Selecting a release shows its details on the right panel:

* **Custom name** (if assigned)
* **Release name and version**
* **Namespace**
* **App version** and **last updated time**
* **Current status** (Deployed, Failed, Uninstalled, etc.)

You can also view all associated Kubernetes resources, such as:

* **ClusterRole** and **ClusterRoleBinding** – define access permissions.
* **ConfigMap** – store configuration data.
* **Deployment** – manage stateless applications.
* **StatefulSet** – manage stateful workloads.
* **DaemonSet** – ensure pods run on specific nodes.
* **PersistentVolumeClaim (PVC)** – manage storage requests.
* **Service** – expose applications internally or externally.
* **ServiceAccount** – provide identities for pods.

Viewing these components helps in understanding and troubleshooting the deployed release.

---

## Managing Release Lifecycle

After installation, you can perform the following lifecycle actions on any release:

### Upgrade

Upgrade a release to:

* Change its version
* Update configuration values
* Reuse current release values during upgrades

Example: If you installed Prometheus and changed the `scrape_interval` from 1 minute to 30 seconds, enabling **Reuse current release values** keeps that configuration during upgrade.

### Rollback

Each installation or upgrade creates a **revision**,  a checkpoint of your release. You can roll back to any previous revision to restore the application’s last working state in case of issues.

### Uninstall

Uninstalling removes the release from the cluster. By default, KubeKit keeps the release history for future rollbacks. You can uncheck **Keep history for future rollback** if you want to permanently delete it.

---

## Managing Repositories

Helm’s ecosystem includes thousands of prebuilt releases organized within **repositories**. A Helm repository is a collection of application charts maintained by different providers.

### Viewing and Managing Repositories

1. Go to **Helm → Manage Repo**.

2. The repository management page shows:

   * Repository **name** and **URL**
   * **Category**
   * **Status** (Added or Not Added)

3. Popular repositories may appear as **Not Added** by default. You can:

   * Click the **⋮ (three dots)** menu next to a repository.
   * Choose **Add** to include it or **Remove** to delete it.

4. To **update repositories**, use:

   * **Update All** to refresh every repository.
   * **Update** to refresh an individual one.

Updating ensures the latest versions of releases are available.

### Adding a Custom Repository

1. Click **Add New Repository**.
2. Enter a **custom name** and the **repository URL**.
3. Click **Add** to save.

Your new repository will appear in the list, and its releases will load into the main Helm page.

---

## Troubleshooting

| **Issue**                  | **Possible Cause**          | **Solution**                                |
| -------------------------- | --------------------------- | ------------------------------------------- |
| Release installation fails | Network or repository error | Check internet connection or repository URL |
| Repository not visible     | Not added or outdated       | Refresh repositories using **Update All**   |
| Configuration not applying | Incorrect parameter format  | Reset to default values and reapply         |

---
