# Helm Management

**KubeKit** enhances the Helm experience by providing a graphical interface to - 
 * Add, remove, and update repositories  
 * Search charts and releases 
 * Install charts
 * Upgrade, rollback, and uninstall releases

With a single click, you can manage all helm operations.

> Make sure you have internet access in **KubeKit** application to fetch Helm repositories and releases.

## Helm Dashboard

From the KubeKit **Cluster Dashboard**, open the **Helm** section using the left-sidebar navigation.
![Helm Dashboard](/docs/images/final/helm-dashboard.png)

The dashboard shows list of available charts and installed releases. On the right-side, selected chart details along with available versions, descriptions, charts values are displayed. 

## Installing a Chart

By clicking on the top-right **Install** button, you can install any charts in your cluster by providing - 
* **Version** 
* **Namespace**
* **Release name** 

Also, you can **edit/modify** chart values in a **VS code** like editor as per your requirements. 
![Helm Chart Install](/docs/images/final/helm-chart-install.png)

Finally, click on **Install now** button to start the installation process. And, after successful installation, you will see the installed chart under **Installed** tab.
![Helm Chart Installed](/docs/images/final/helm-chart-installed.png)


## Managing Installed Releases

Click the **Installed** tab to view all deployed releases. You can filter releases by namespace.
![](/docs/images/final/deployed-release.png)

Selecting a release shows its details on the right panel:

* **Release name** along with **chart name** and **version** 
* **Namespace**, **App version**, **Last updated time** and **Current status** (Deployed, Failed, Uninstalled, etc.)
* **Release values** used during the installation, by clicking the checkbox  **see only custom values**, will show you only the values that were modified from the default chart values while installing or upgrading the release. 
* **Release Description**, **Notes** 
* List of created **Kubernetes resources** with their **kind**, **name**, **namespace**, and **age**.

## Upgrading a Release

Upgrade a release to:

* Change its version
* Update configuration values
* Reuse current release values during upgrades

Example: If you installed Prometheus and changed the `scrape_interval` from 1 minute to 30 seconds, enabling **Reuse current release values** keeps that configuration during upgrade.

![Upgrade a release](/docs/images/final/upgrade-release.png)



## Rolling Back a Release

After the first installation of a release, it creates a revision history. After that, if you upgrade the release, it creates a new revision. After multiple revisions, you can rollback to any previous revision. 

Click on the **Rollback** button to see the list of available revisions.

![Rollback a release](/docs/images/final/rollback-release.png)

Select the desired revision and click **Rollback now** to initiate the rollback process.

## Uninstalling a Release

Uninstalling removes the release from the cluster. By default, KubeKit keeps the release history for future rollbacks. You can uncheck **Keep history for future rollback** if you want to permanently uninstall it.
![Uninstall a release](/docs/images/final/uninstall-release.png)


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
