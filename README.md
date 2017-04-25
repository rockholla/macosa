# OSXa is for automation in setting up and configuring an OS X installation (and other machines on your network)

## Create a bootable USB of OSX (and download XCode tools if you'd like it)

```
sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ macOS\ Sierra.app --nointeraction &&say Done
```
Download the most recent version of XCode tools, this post should help: http://stackoverflow.com/questions/10335747/how-to-download-xcode-dmg-or-xip-file.  Put the file in the `.downloads` directory.


## Getting Started

1. Copy or clone this repo to an OSX install USB drive
2. Install OSX
3. Once the OS is up and running, cd to this repo on the USB drive and run `./install`
4. Add the new local .osxa path as a remote on the USB drive: `git remote add install ~/.osxa/`: this allows for the USB stick copy to pull directly from the installed copy like: `git pull install master`.  You can continue development on osxa from ~/.osxa

## Third-party tools
- `bin/defaultbrowser`: https://github.com/kerma/defaultbrowser

## Instructions for setting up the docker-local server

* Install Ubuntu server w/ OpenSSH server, hostname `docker-local`, user `user`
* Enable osx internet sharing through ethernet to docker-local
* Run the install/osxa script

## TODO

- duti: smarter about utis/handlers removed, when the .duti file has changed, also need to logout when changes made
- mailplane: pre-configure account and other, mailplane as default mail app not set initially
- set computer name changed sometimes when it shouldn't
- time machine automation
- Automate sidebar favorites
- xcode editor settings:
  - show line numbers
  - dusk theme
- fonts install
- anything to be done with automating itunes?

- offsite backup: backup install thumb drive as well, archives, etc
