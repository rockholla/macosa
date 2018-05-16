<a href="https://rockholla.github.io/macosa/"><img src="docs/img/macosa.png" width=300 /></a>

## Get up and running quickly with a new macOS install the way you want it.  And keep it that way.

### Getting Started

1. Before you do anything, you should check out [this short presentation on macOSa](https://rockholla.github.io/macosa/)
2. Install your operating system, supported versions so far:
  * OSX 10.11 (El Capitan)
  * macOS 10.12 (Sierra)
  * macOS 10.13 (High Sierra)
  * You can see more detailed info on compatibility in the [macOSa Testing Scenarios project](https://github.com/rockholla/macosa/projects/1)

3. See info on how to run the install script:
```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r -h
```
4. Check out how to customize to fit your needs: https://github.com/rockholla/mymacosa. Fork that repo into your own, make all of the changes you like and push back up to your _public_ fork. macOSa will ask you for this repo location at install time. If you'd like a jumpstart with how to write your customizations, feel free to check out the [customizations I built and use](https://github.com/rockholla/mymacosa-personal).

5. When you're ready to install, run the following:
```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r
```
or if you'd like to install the full Xcode app/suite (not just tools):

```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r -x full
```

6. Follow the prompts, you'll be up-and-running pretty quickly and easily

### Other Helpful Info

macOSa is currently designed for new installs only. There might come a time where you could install it on an already-running and configured install of macOS, but not yet.

Please [submit issues](https://github.com/rockholla/macosa/issues) or [pull requests](https://github.com/rockholla/macosa/pulls) if you find something that needs fixing or if you think something should be changed. You can of course take what's available here and run with it on your own, but remember that submitting useful things back to the community is important and what this project is all about.
