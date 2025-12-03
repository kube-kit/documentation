# Nodes

All nodes along with their **status**, **cpu**, **memory usages** and their **roles**(master or worker) are listed here.

## Node Details

Click on a node row to view detailed information about that node.

You can see real-time graphs of **CPU** and **Memory** usage.  
Other important information about the node is also displayed, including **Name**, **Labels**, **Annotations**, **OS**, **Kernel Version**, and **IP addresses**.  

Below, you will find a list of pods running on the node and a list of events occurring on the node.

<!-- todo: node details ss -->


## Access Terminal

To access a node's terminal, locate the three-dot menu on the node row and click the **`Terminal`** button.  

Alternatively, if you open the node's detailed page by clicking on its row, the **`Terminal`** button is available at the top-right corner. Clicking it will open the terminal for that node.  

KubeKit provides terminal access as the **root** user. To switch to another user, run the following command:

```bash
su <username>
```

![](/docs/images/final/node-terminal.png)

## Delete Node

To delete a node, locate the three-dot menu on the node row and click the **`Delete`** icon.  

Alternatively, if you open the node's detailed page by clicking on its row, the **`Delete`** icon is available at the top-right corner. 

This **Delete** action works the same way as *`kubectl delete`.*

It does **not** perform actions like *`kubectl cordon`* or *`kubectl drain`.*
