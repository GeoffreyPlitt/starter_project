ExpoSync
========

Prerequisites:
-------------
- [Vagrant](https://www.vagrantup.com/)
  - Then, do `vagrant plugin install vagrant-pristine`.
- [VirtualBox](https://www.virtualbox.org/)

Boot the vagrant box
--------------
- Boot it with `vagrant up`. Or smarter, do `vagrant pristine -f` (this destroys existing VM if any, and then boots it).
  The first time, this will download the base box which may take 10 minutes. Then some provisioning scripts will run,
  and you know it's done when it says "VAGRANT IS READY".
- SSH into it: `vagrant ssh`

Install packages (inside vagrant box)
----------------
- `npm install` - This has a post-install step which installs bower packages.
- `npm run bower_install` - If you ever change bower and you just want to reinstall packages.

Run (inside vagran box)
----
- `npm run`
- You will now have the server running on http://localhost:3000 accessible from the host machine.
