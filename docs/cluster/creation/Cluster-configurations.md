# Cluster Configuration

## **Configure Cluster**

On the **Cluster Configuration** page:
 * Select your cluster **icon** and provide a **name** for your cluster, this will appear in the dashboard after creation.
 * Choose your desired **Kubernetes version**, **Container Runtime Engine**, **CNI Provider**, **Load Balancer**. Or you can keep the default options.
 * KubeKit support multiple Add-ons options, which are optional
    * **Metrics Provider**: You can enable Metrics Provider like kubekit or Prometheus. (Kubekit is a light-weight metrics which works with metrics server)
    * **Ingress Controller**: You can choose your desired ingress controller and provide ingress IP to access your ingress service.
    * **TLS/SSL(HTTPS)**: If you want to enable TLS/SSL(HTTPS) in your cluster, then enable the switch, provide your email. If you want to know more, click [here](/docs/cluster/creation/Cluster-configurations.md) 

Click **Continue** to start the cluster creation process.


![](../images/final/cluster-configuration.png)
