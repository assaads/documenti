---
title: Scaling
description: Architectural diagrams showing how Documenti's architecture is designed to scale.
---

While Documenti's current architecture is not explicitly designed for large-scale deployments, it can be scaled to handle increased workloads with some modifications. Here are some potential scaling strategies:

## Scaling Gemini AI Interactions

The primary bottleneck for scaling Documenti is likely to be the interactions with the Gemini AI model. Here's how we can address this:

### Horizontal Scaling with Asynchronous Requests

```
                             +-----------------+     +-----------------+
                             | Gemini Client  |---->| Gemini Client  |
                             +-----------------+     +-----------------+
                                  ^                    ^
                                  |                    |
+---------------------+    +-----------------------+    |
|     User Input      |--->|  Codebase Parser      |----+--->  Documentation Processor  
+---------------------+    +-----------------------+    |     (with Queue and Workers)
                       |                         ^      |
                       |                         |      |
                       v                         |      |
                 +-----------------------+      |      |
                 | documentation_sections.json |------+
                 +-----------------------+           
```

1. **Queueing System:** Introduce a queueing system (e.g., RabbitMQ, Redis) to handle documentation requests.
2. **Worker Processes:** Implement multiple worker processes that consume requests from the queue, interact with Gemini AI, and process the responses.
3. **Asynchronous Requests:** Utilize asynchronous request libraries (e.g., `aiohttp`) within the worker processes to send requests to Gemini AI concurrently.

This approach allows horizontal scaling by adding more worker processes to handle the increasing number of documentation requests.

## Scaling Codebase Parsing

For very large codebases, parsing the code can also become a bottleneck. Here's a potential scaling solution:

### Distributed Codebase Parsing

```
+---------------------+      +-----------------------+      +-----------------------+
|     User Input      |---->| Codebase Parser (Node 1) |---->| Codebase Parser (Node 2) |
+---------------------+      +-----------------------+      +-----------------------+
                                  |                    |
                                  v                    v
                                +-----------------------+
                                |   Combined Output     |
                                +-----------------------+
```

1. **Split Codebase:** Divide the codebase into smaller chunks.
2. **Distributed Parsing:** Deploy multiple instances of the Codebase Parser, each responsible for parsing a specific chunk of the codebase.
3. **Combine Output:** Aggregate the parsed output from all instances into a single, combined output.

This allows distributing the parsing workload across multiple machines, reducing the overall parsing time.

## Vertical Scaling

Vertical scaling can also be applied to individual components by increasing their resources (CPU, memory, etc.). For instance:

- **Gemini Client:** Allocate more resources to the Gemini Client instances to handle concurrent requests efficiently.
- **Documentation Processor:** Increase the resources of the Documentation Processor to speed up content processing and file writing.

## Conclusion

While Documenti's current architecture is not explicitly designed for massive scale, these scaling strategies can be implemented to handle larger codebases and higher documentation generation demands. The choice of scaling approach depends on the specific requirements and constraints of your deployment.
