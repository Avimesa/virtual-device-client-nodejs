# Avimesa Virtual Device (Node.js) (alpha)
*last updated 2019-Feb-15*

<a id="toc"></a>
## Table of Contents
- [1. Overview](#1.-overview)
- [2. Prerequisites](#2.-prerequisites)
- [3. Usage](#3.-usage)
- [4. Examples](#4.-examples)
    - [4.1 General Use Case](#4.1-examples)
    - [4.2 Conectric USB Gateway](#4.2-examples)


<a id="1.-overview"></a>
## 1. Overview

The Avimesa Virtual Device Client (VDC) is a native command line utility that allows one to easily build Avimesa Device clients without having to do any of the hard coding!


[Top](#toc)<br>
<a id="2.-prerequisites"></a>
## 2. Prerequisites

- Node.js
- A valid Avimesa Device Cloud **Device ID** and associated **Authentication Key**
- The ability to run the `npm` command as root (**sudo**) to install the command line utility to /usr/local/bin
- **For some examples below**, there may be other requirements that should be followed.  Reference the example that is being used below for more information.


[Top](#toc)<br>
<a id="4.-examples"></a>
## 4. Examples


<a id="4.1-examples"></a>
### 4.1 General Use Case

##### Summary:

This project can be used to enable a Raspberry Pi to be an Avimesa Device client.

##### Prerequisites:

- A Raspberry Pi 3B/3B+ to be used as the gateway host
- Node.js 10
- Ability to use `root` user

##### Usage:

```
su
git clone https://github.com/Avimesa/virtual-device-client-nodejs.git
cd virtual-device-client-nodejs
npm install
```

Now, update the `examples/general/index.js` file with a valid `deviceId` and `authKey`.  This can be generated at app.avimesa.com.

Run the example and observe the response.

```
npm start
```

<a id="4.2-examples"></a>
### 4.2 Connectric USB Gateway

##### Summary:

This project can be used to enable the [Conectric USB Gatway](https://github.com/Conectric/conectric-usb-gateway) to be used with the Avimesa Device Cloud.

##### Prerequisites:

- A Raspberry Pi 3B/3B+ to be used as the gateway host
- Please follow the Quick Start located at the [Conectric USB Gatway](https://github.com/Conectric/conectric-usb-gateway) GitHub page to setup the RPi with the default Conectric USB Gateway

##### Usage:

After following the Prerequisites above, you should have an `iotgateway` npm project.  To enable the gateway with the Avimesa Device Cloud:

**Note:** the following command needs to be ran with `sudo` to install the native client to /usr/local/bin

```
sudo npm install @avimesa/virtual-device
cp node_modules/@avimesa/virtual-device/examples/conectric/server.js .
npm start
```

[Top](#toc)<br>
