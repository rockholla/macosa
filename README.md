<img src="https://s3-us-west-2.amazonaws.com/org.rockholla.macosa/macosa.png" width=300 />

## Get up and running quickly with a new macOS install the way you want it.  And keep it that way.

### Getting Started

1. Install your operating system, supported versions so far:
   * OSX 10.11 (El Capitan)
    * MacOS 10.12 (Sierra)
2. See info on how to run the install script:
```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r -h
```
3. See how to customize to fit your needs: https://github.com/rockholla/mymacosa. Fork that repo into your own, make all of the changes you like and push back up to your _public_ fork. MacOSa will ask you for this repo location at install time.

4. When you're ready to install, run the following:
```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r
```
or if you'd like to install the full Xcode app/suite (not just tools):

```
bash <(curl https://raw.githubusercontent.com/rockholla/macosa/master/install) -r -x full
```

5. Follow the prompts and enjoy!
