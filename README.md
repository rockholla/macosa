# MacOSa gives you the power to automate your MacOS environment

## Create a bootable USB of MacOS

```
sudo /Applications/Install\ macOS\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/Untitled --applicationpath /Applications/Install\ macOS\ Sierra.app --nointeraction &&say Done
```

Depending on the USB drive you're using, you may replace `/Volumes/Untitled` above with the path to your drive

## Getting Started

1. Copy or clone this repo to the USB install drive you just created
2. Go to the [`user` directory README for more info on customizing](user)
3. Install MacOS
4. Once the OS is up and running, cd to the directory on the USB install where you cloned this repo and run `/.install`