require 'socket'
Vagrant.configure("2") do |config|
  config.vm.hostname = Socket.gethostname + '.vagrant'
  config.vm.box = "vagrant-node-0.12-0.0.1"
  config.vm.box_url = "https://github.com/GeoffreyPlitt/vagrant-node-0.12/releases/download/0.0.1/package.box"
  config.vm.network :forwarded_port, host: 3000, guest: 3000
  config.vm.network :forwarded_port, host: 35729, guest: 35729
  config.vm.provision :shell, :inline => $BOOTSTRAP_SCRIPT # see below
  config.ssh.forward_agent = true
end

$BOOTSTRAP_SCRIPT = <<EOF
  set -e # Stop on any error

  export DEBIAN_FRONTEND=noninteractive

  # Set NODE_ENV var
  echo "export NODE_ENV=development" | sudo tee -a ~vagrant/.profile

  # Set PORT var
  echo "export PORT=3000" | sudo tee -a ~vagrant/.profile

  echo VAGRANT IS READY.
EOF
