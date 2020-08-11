### ssh自动更换密钥 初始版本

### 一键安装命令
```bash
apt-get -y install wget && wget --no-check-certificate https://cdn.jsdelivr.net/gh/drkoubst/warehouse/normal-ssh/autossh.sh && sed -i 's/\r//' autossh.sh && chmod +x autossh.sh && /bin/bash autossh.sh
```