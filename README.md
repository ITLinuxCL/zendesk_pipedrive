# Zendesk Pipedrive contact information

Display and update contact information from [Pipedrive](http://www.pipedrive.com) directly on [Zendesk](http://www.zendesk.com).

## How to install
This is a `Private Zendesk App` and as such is not available on the Zendesk Marketplace, yet ;). This means that you must upload it yourself to your Zendesk account.

### 1. You need the App package
You have 2 options:

* Clone this repo and build the package as explained in this guide: [Installing and using the Zendesk apps tools](https://support.zendesk.com/hc/en-us/articles/203691236),
* or download the package directly from here [zendesk_pipedrive-latest.zip](https://raw.github.com/ITLinuxCL/zendesk_pipedrive/master/package/zendesk_pipedrive-latest.zip).

### 2. Upload de App to your Zendesk account
You need to upload the App Package as explained in this guide [Uploading and installing your private app in Zendesk](https://support.zendesk.com/hc/en-us/articles/203691246). 

### Why?
We used to use [Highrise](http://www.highrisehq.com) but given that is hasn't received any improvent, we moved to [Pipedrive](http://www.pipedrive.com), but we couldn't read our contact information.

So we built it our selfs.

### The following information is displayed:

* Company name
* Person name
* Person Phone
* Person Email

If the contact does not exists on Pipedrive, it let you create it.

Please submit bug reports hera as Issues. Pull requests are welcome.

### Screenshot(s):
![Screenshot](https://raw.github.com/ITLinuxCL/zendesk_pipedrive/master/assets/screenshot.png)

# Todos

* Mostly check and manage API errors
* Add company in Pipedrive if it doesn't exists

