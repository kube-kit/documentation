# Ingress Controller in KubeKit

## Ingress

In Kubernetes, an **Ingress** is a resource that defines how external users can access applications running inside a cluster. It acts as a set of routing rules that determine which service should handle requests based on:

* **Domain name** (e.g., `api.example.com`)
* **URL path** (e.g., `example.com/app`)

Ingress can also manage **HTTPS/TLS certificates** to secure communication.

For detailed official documentation, refer to the Kubernetes Ingress page: [Kubernetes Ingress Documentation](https://kubernetes.io/docs/concepts/services-networking/ingress/)

## Ingress Controller

An **Ingress Controller** is the software that enforces Ingress rules. It runs inside the cluster and functions as a **reverse proxy** and **load balancer**. Its responsibilities include:

* Continuously watching Ingress resources
* Updating its configuration to ensure traffic is routed correctly
* Handling SSL/TLS termination

Without an Ingress Controller, Ingress rules do not have any effect.

### Popular Ingress Controllers

**NGINX Ingress Controller**

* Based on the NGINX web server
* Reliable, widely used, and production-ready
* Supports routing, SSL/TLS termination, and load balancing

Official documentation: [NGINX Ingress Controller](https://github.com/kubernetes/ingress-nginx)

**Traefik Ingress Controller**

* Modern, cloud-native proxy
* Developer-friendly and simple to configure
* Features automatic HTTPS and a built-in dashboard

Official documentation: [Traefik Ingress Controller](https://doc.traefik.io/traefik/providers/kubernetes-ingress/)

## Using Ingress in KubeKit

When creating a cluster through KubeKit, you can enable an Ingress Controller:

1. **Choose an Ingress Controller**: Select either NGINX or Traefik.
2. **Provide an external IP**: This IP will be used for routing traffic.

Once configured, your cluster is ready to route external traffic through the Ingress Controller to the appropriate services.
