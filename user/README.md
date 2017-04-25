# This folder is just for you

For managing your own MacOSa files and configuration

## `config`

Any files in here with `.cfg` extension will be loaded for root MacOSa (bash variable) configuration on install and provisioning.  See `/config/default.cfg` for relevant variables to override.

## `vars`

This is where your custom Ansible vars go. There are some example files placed in the `vars` directory for you to reference.

## `templates`

A place for your Ansible Jinja2 templates, you can reference this location in any variables like `user/templates/yourfile.j2`

## `files`

A place for your Ansible files, you can reference this location in any variables like `user/files/yourfile.plist`.  Additionally, there are some more structured places for particular things in this directory:

* `dotfiles`: any files beginning with a `.` (**except `.bash_profile`**) in this directory will be considered dotfiles (e.g. `.profile`) and placed in your home directory.  We are reserving `.bash_profile` for MacOSa, but our auto-generated version of this file will automatically include `~/.bashrc`, `~/.profile`, and `~/.bash_aliases` files if they're present.  See
* `.ssh`: any files in this directory will be placed in your `~/.ssh` directory

## `reminders`

You can place files in this directory to remind you of certain things to do before and after running MacOSa.  The following file names will be recognized:

* `before`: a text file with some reminders for you before any MacOSa run
* `after`: a text file with some reminders for you after any MacOSa run

## `bin`

Any custom binaries/executables that you'd like to include.  This directory (`~/.macosa/user/bin`) will be added to your PATH.

## `tasks`

* `pre`: all `.yml` files in this directory will be executed as an Ansible pre_task
* `post`: all `.yml` files in this directory will be executed after the default MacOSa Ansible provisioning