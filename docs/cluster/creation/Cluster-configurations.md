# Cluster Configuration

On the **Cluster Configuration** page:
 * Select your cluster **icon** and provide a **name** for your cluster, this will appear in the dashboard after creation.
 * Choose your desired **Kubernetes version**, **Container Runtime Engine**, **CNI Provider**, **Load Balancer**. Or you can keep the default options.
 * KubeKit support multiple **Add-ons** options, which are optional
    * **Metrics Provider**: You can enable Metrics Provider like **KubeKit** or **Prometheus**. (KubeKit is a light-weight metrics which works with metrics server).   
    If you skip this step, you can always add a metrics provider later by following the [instructions](/docs/cluster/managing-cluster/metrics.md#addding-a-metrics-provider).

    * **Ingress Controller**: You can choose your desired ingress controller either **Nginx** or **Traefik** and provide ingress IP to access your ingress service.
    
    * **TLS/SSL(HTTPS)**: If you want to enable TLS/SSL(HTTPS) in your cluster, then enable the switch, and select the deployment mode either **Production** or **Staging** and  provide your **email address**. You must enable ingress controller to use this feature.   
    To know more about TLS/SSL(HTTPS) with **Let's Encrypt**, [Click Here](https://letsencrypt.org/) 

Click **Continue** to start the cluster creation process.


![Cluster Configuration](/docs/images/final/cluster-configuration.png)
