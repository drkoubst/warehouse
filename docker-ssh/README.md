### docker ssh 初始版本

#### 1.下载dockerfile 并创建image

```
wget https://cdn.jsdelivr.net/gh/drkoubst/warehouse/docker-ssh/dockerfile && docker build -t docker-ssh .
```

#### 2.启动容器

```
docker run -itd -p 8022:22 docker-ssh
```



默认开启两个端口：22 和 8888