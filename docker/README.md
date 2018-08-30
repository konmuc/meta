# Dockerize development

## Folder structure

Clone `core`, `meta`, `web-app-prototype` into the same folder, to achieve this structure.

```
.
├── _core
|   ├── ...
|   ├── .dockerignore
|   └── Dockerfile
├── _meta
|   ├── ...
|   └── _docker
|       ├── docker-compose.yml
|       └── README.md
└── _web-app-prototype
    ├── ...
    └── Dockerfile
```

## Run the `docker-compose` tool

Navigate into the `./meta/docker/` directory first. Then run the following command.

```bash
cd ./meta/docker/
docker-compose up --build
```

Where to find which service:

|      Service      |     IP    | Port  |  Repository name  |
|:------------------|:---------:|------:|------------------:|
| kongeos-mongo     | 127.0.0.1 | 27017 | -                 |
| kongeos-core      | 127.0.0.1 |  8088 | core              |
| kongeos-prototype | 127.0.0.1 |  8080 | web-app-prototype |