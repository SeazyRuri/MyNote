# 在VirtualBox下的黑苹果安装笔记
最近要用到苹果来提交应用，死穷鬼没有钱买白苹果，只能用黑苹果来凑合凑合。我分别在win8.1系统和Ubuntu16.04系统用VirtualBox装了MacOS10.11系统。
给出MacOS10.11的下载资源：[MacOS10.11的bt下载](http://pan.baidu.com/s/1gffjgv5)

## win8.1系统下用VirtualBox安装MacOS10.11
完全参考[这篇教程](https://blog.csdn.net/chy555chy/article/details/51407410)的步骤。
要注意的是
* 所需的VirtualBox的版本是[5.0.20 for Windows hosts x86/amd64](http://download.virtualbox.org/virtualbox/5.0.20/VirtualBox-5.0.20-106931-Win.exe),也就是[这篇教程](https://blog.csdn.net/chy555chy/article/details/51407410)所用的VirtualBox的版本，否则不能保证100%的成功。
* 在执行第5步时，`cd "C:\Program Files\Oracle\VirtualBox\"`是进入VirtualBox的安装根目录，所以应把引号内的地址换成VirtualBox的安装根目录，并注意是否进入成功。

## Ubuntu16.04系统下用VirtualBox安装MacOS10.11
VirtualBox的版本是5.2.10，如果你也是Ubuntu16.04 64 位系统，可以直接下这个[安装包](https://download.virtualbox.org/virtualbox/5.2.10/virtualbox-5.2_5.2.10-122088~Ubuntu~xenial_amd64.deb)。
1. 仿照[这篇教程](https://blog.csdn.net/chy555chy/article/details/51407410)的前四步创建虚拟机，并且不要着急打开虚拟机。按照前四步创建完虚拟机后，关闭VirtualBox。
2. 打开终端，输入以下命令：
```shell
VBoxManage modifyvm MacOS10.11 --cpuidset 00000001 000106e5 00100800 0098e3fd bfebfbff
VBoxManage setextradata MacOS10.11 "VBoxInternal/Devices/efi/0/Config/DmiSystemProduct" "iMac11,3"
VBoxManage setextradata MacOS10.11 "VBoxInternal/Devices/efi/0/Config/DmiSystemVersion" "1.0"
VBoxManage setextradata MacOS10.11 "VBoxInternal/Devices/efi/0/Config/DmiBoardProduct" "Iloveapple"
VBoxManage setextradata MacOS10.11 "VBoxInternal/Devices/smc/0/Config/DeviceKey" "ourhardworkbythesewordsguardedpleasedontsteal(c)AppleComputerInc"
VBoxManage setextradata MacOS10.11 "VBoxInternal/Devices/smc/0/Config/GetKeyFromRealSMC" 1
```
3. 接下来就是仿照[这篇教程](https://blog.csdn.net/chy555chy/article/details/51407410)的第六步及之后的几个步骤。

打开虚拟机后，默认的分辨率有点小，这个苹果用起来有点憋屈。可以通过一下命令来调整分辨率。
```shell
VBoxManage setextradata "MacOS10.11" "VBoxInternal2/EfiGraphicsResolution" 你要设置的分辨率
```
** 注意`你要设置的分辨率`是要设置成以下格式`数字x数字`，中间的x是小写字母x。**
参考例子：将苹果的分辨率设置为1366*768
```shell
VBoxManage setextradata "MacOS10.11" "VBoxInternal2/EfiGraphicsResolution" 1366x768
```