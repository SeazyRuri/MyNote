# git和github 使用笔记

这是我对git和github的使用的总结

## 远程仓库的使用
1. 创建ssh key ：<br/>

	在用户目录下，创建SSH Key
    ```shell
    $ ssh-keygen -t rsa -C "your-email-address"
    ```
	然后按照默认一路回车，会发现在用户目录下多了以下两个文件：
    - id_rsa
    - id_rsa.pub

2. 登录GitHub，点击 用户头像->Settings->SSH and GPG keys->New SSH key,填写Title，将第一步生成的id_rsa.pub文件中的内容复制粘贴到Key文本框内，点击Add SSH key。之后应该能看到已经添加的Key。

3. 从远程仓库中克隆
使用`git clone`命令来讲远程仓库克隆到本地仓库
```shell
$ git clone your-git-address.git
```

