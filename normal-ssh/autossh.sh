#!/bin/sh
authdir="/root/.ssh"
error=0
if [ ! -d $authdir ];then
sudo mkdir -p -m 755 $authdir
echo "sudo mkdir -p -m 755 ${authdir} done"
fi

#下载公钥文件
wget -P --no-check-certificate /root/.ssh https://cdn.jsdelivr.net/gh/drkoubst/warehouse/docker-ssh/authorized_keys
k1=`grep 'PasswordAuthentication' /etc/ssh/sshd_config`
if [ ! $k1 ];then
echo "PasswordAuthentication no" >> /etc/ssh/sshd_config
echo "/etc/ssh/sshd_config PasswordAuthentication no"
fi
sed -i 's/#PasswordAuthentication/PasswordAuthentication/' /etc/ssh/sshd_config
sed -i 's/PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
ka=`grep -o "PasswordAuthentication no" /etc/ssh/sshd_config | wc -l`
if [ $ka != '1' ];then
echo "1 wrong"
error=1
fi

k2=`grep 'RSAAuthentication' /etc/ssh/sshd_config`
if [ ! $k2 ];then
echo "RSAAuthentication yes" >> /etc/ssh/sshd_config
echo "/etc/ssh/sshd_config RSAAuthentication yes"
fi
sed -i 's/#RSAAuthentication yes/RSAAuthentication yes/' /etc/ssh/sshd_config
kb=`grep -o "RSAAuthentication yes" /etc/ssh/sshd_config | wc -l`
if [ $kb != '1' ];then
echo "2 wrong"
error=1
fi

k3=`grep 'PubkeyAuthentication' /etc/ssh/sshd_config`
if [ ! $k3 ];then
echo "PubkeyAuthentication yes" >> /etc/ssh/sshd_config
echo "/etc/ssh/sshd_config PubkeyAuthentication yes"
fi
sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config
kc=`grep -o "PubkeyAuthentication yes" /etc/ssh/sshd_config | wc -l`
if [ $kc != '1' ];then
echo "3 wrong"
error=1
fi

service ssh restart
if [ "$error" = "1" ];then
echo "wrong happend!"
elif [ "$error" != "1" ];then
echo "run success!"
fi