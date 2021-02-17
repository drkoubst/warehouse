#!/bin/bash
pubkey="ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAtFYd08cF3ZvDI5vCRp7x/Zvc1df2mBocOGGaYDd70XM9kGdub7VJb4brObkhchAXAAXQsIAjJc0M1QXII3Rjm/A8d37OD3WwzkL5F7cJHy+0tk7qp8qNpMTw6tQiS/W2bmCDKMSdLpShOnzGwXgQCwVp1zVj4y8tEnaqLz7BNNM2dAgfGaxy27l/oPECwgZr4hUJ3UVsc+PYjWKew91eK1ki8PRuCAa+qI4gRcACws3rJvXsOVpkxfjLe+7rMQCqDtuO1JARZ8wVQk13Z5oX1MJIpNX/udtPQg7cNS1HxNdnQquuKreqR4MERQaIlHxmVF+WuYqCeH/8RdjygH2C4Q=="

mkdir -p /root/.ssh/
chmod 700 /root/.ssh/
echo $pubkey > /root/.ssh/authorized_keys
chmod 600 /root/.ssh/authorized_keys
chown -R root /root/.ssh/


sshd_file="/etc/ssh/sshd_config"
cp -n $sshd_file /etc/ssh/sshd_config.bak
sed -i "s|#?RSAAuthentication.*|RSAAuthentication yes|" $sshd_file
sed -i "s|#?PubkeyAuthentication.*|PubkeyAuthentication yes|" $sshd_file
sed -i "s|#AuthorizedKeysFile .ssh/authorized_keys|AuthorizedKeysFile .ssh/authorized_keys|" $sshd_file

sed -i "s|#?PasswordAuthentication.*|PasswordAuthentication no|" $sshd_file
#sed -i "s|#?PermitRootLogin.*|PermitRootLogin no|" $sshd_file
systemctl restart sshd;systemctl restart ssh;service sshd restart;service ssh restart