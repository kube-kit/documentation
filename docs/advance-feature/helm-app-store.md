## Helm App Store


Helm is a powerful package manager for Kubernetes that simplifies the deployment and management of applications. It allows users to define, install, and upgrade even the most complex Kubernetes applications using pre-configured templates called *releases*. Each release contains all the configurations and dependencies needed to deploy an application seamlessly within a cluster.

In simpler terms, Helm helps you deploy applications on Kubernetes without manually creating and managing complex YAML configuration files. It is widely used for deploying common applications such as NGINX, Prometheus, Grafana, and many more.

Using Helm through **KubeKit** makes the process even easier by providing a graphical interface, eliminating the need for command-line operations. With just a few clicks, you can browse available releases, configure them, and install them on your clusters.

---

### Accessing Helm in KubeKit

When you select the **Helm** option from the left-side menu in the KubeKit interface, a list of available Helm releases will appear. The loading time may vary depending on your internet connection and the number of repositories added.

There are two main tabs:

* **All Releases**: Displays a list of all applications fetched from the Helm repositories currently added to KubeKit. These releases are available for installation.
* **Installed**: Shows all the releases that are already installed on your clusters. We will discuss managing installed releases in a later section.

---

### Understanding the Helm Interface

#### Release List and Details

On the **left side**, you’ll see a list of all available releases. Each release card displays:

* **Name** of the release
* **Repository** it belongs to
* **Short description** summarizing what the release does

When you select a release card, its detailed information appears on the **right side** of the interface. Here, you can:

* View different **versions** of the release
* Read detailed descriptions and configurations
* Choose the version you want to install

---

### Installing a Release

If you wish to install a release, click on it to open the **Release Installation Page**.

On this page, you can:

1. **Select the version** of the release you want to install.
2. **Choose a namespace** where the release will be deployed.
3. **Provide a custom name** for the installed release. This helps in easily identifying it later.

#### Configuring Release Values

On the right panel, you’ll find all the configurable **values** of the release. These values define how the application behaves and what resources it uses.

You can:

* Edit any value directly.
* Search for specific parameters.
* Add or delete configuration entries.
* Reset to default values at any time.

> **Note:** Different releases come with different levels of configuration complexity. Some have only a few parameters, while others have extensive lists of configurable options.

Once you have set your desired configurations, click **Install** to deploy the release. KubeKit will handle the installation process and notify you once it is complete.

---

### Managing Installed Releases

If you click on the **Installed** tab, you will see a list of all installed releases. You can filter them by namespace or by using a text search.

When you click on a specific release, its details will appear on the right side of the screen. The details include:

* **Custom name** you provided during installation
* **Release name and version**
* **Namespace** where it is deployed
* **App version** and **last updated time**
* **Current status** (e.g., Deployed, Uninstalled, Suspended, etc.)

Below that, you will find the **release values** and any **custom values** that were modified during installation. Additional description or metadata might also be available depending on the release.

Further down, KubeKit displays all Kubernetes resources associated with the release, such as:

* **ClusterRole** and **ClusterRoleBinding**: Define and assign permissions for the release within the cluster.
* **ConfigMap**: Stores configuration data for the application.
* **DaemonSet**: Ensures specific pods run on all or selected nodes.
* **Deployment**: Manages stateless applications by maintaining desired pod replicas.
* **PersistentVolumeClaim (PVC)**: Requests and manages storage resources.
* **Service**: Exposes the application for internal or external access.
* **ServiceAccount**: Provides an identity for processes running in the pods.
* **StatefulSet**: Manages stateful applications requiring persistent storage and stable network identity.

These components are essential parts of your Helm release and provide a complete overview of what was deployed. Viewing these details helps with debugging, troubleshooting, and understanding the operational state of your applications.

---

### Release Lifecycle Actions

Once a release is installed, you may want to **upgrade**, **rollback**, or **uninstall** it. Each of these options can be managed through the KubeKit interface.

#### Upgrade

Upgrading is used to make any changes to an installed release. Examples include:

* Changing the version of the release.
* Updating configuration values.
* Reverting to a previous version.

The upgrade process is similar to installation but with one key difference: you can choose to **reuse your current release values**. This is especially useful when you’ve customized configurations during installation.

For example, suppose you installed Prometheus and modified the `scrape_interval` value from the default 1 minute to 30 seconds. During an upgrade, if you want to retain this configuration, check the **Reuse current release values** option. You can also view your current and custom values from the right side of the screen before proceeding.

#### Rollback

Every installation or upgrade creates a **revision**—a checkpoint of your release. These revisions allow you to roll back to a previous stable state if something goes wrong.

A rollback lets you revert your application to any earlier revision. This is particularly useful when a new version introduces issues or bugs. By rolling back, you can restore the last known working configuration in seconds.

#### Uninstall

Uninstalling a release removes it from the cluster. During the uninstall process, you’ll see an option labeled **Keep history for future rollback**, which is checked by default. This means the release will be removed from the cluster but its history will be preserved, allowing you to roll back or reinstall it later if necessary.

---

### Managing Repositories

One of Helm’s strongest advantages is its vast ecosystem of prebuilt releases, allowing users to deploy applications quickly without building configurations from scratch. These prebuilt Helm releases are maintained by different groups and organized within **repositories**. A Helm repository is essentially a collection of Helm releases.

To manage repositories in **KubeKit**:

1. Go to **Helm > Manage Repo**.

   * This will open the repository management page.
   * Here you can see a list of repositories along with their category, URL, and status.

2. When you first create a cluster, some repositories may already be added, while others will have the status **Not Added**.

   * These are popular repositories that KubeKit lists to make your task easier.
   * To add a repository, select it and click on the **⋮ (three dots)** menu, then choose **Add**.
   * Similarly, you can **remove** a repository using the same menu.

3. You can **update** an added repository or update all repositories using the **Update All** option.

   * In simple terms, updating a repository means refreshing it to fetch the latest list of available releases and versions from that repository.

4. You can also add your **own Helm repository**:

   * Click on **Add New Repository**.
   * Provide a **custom name** for your repository.
   * Enter the **repository URL** where it is hosted.

Once added, you can return to the main release list page, and you’ll see new releases loaded from your custom or newly added repositories.

---

### Summary

Using Helm through KubeKit bridges the gap between simplicity and power. It provides:

* An intuitive, no-code interface for managing Kubernetes applications
* Easy access to thousands of pre-built Helm releases
* Full control over installed releases, including upgrade, rollback, and uninstall operations

Whether you are a beginner exploring Kubernetes or an experienced DevOps engineer managing multiple clusters, KubeKit’s Helm integration makes application deployment faster, more reliable, and significantly more accessible.
