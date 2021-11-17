# Welcomer <img src="https://raw.githubusercontent.com/MartinHeinz/MartinHeinz/master/wave.gif" width="30px">
**A discord welcomer bot developed in discord.js v13 that is very simple to use and comes with code and deployment instructions!**
## Links
- ### This Welcomer Bot Was Created by [ZeroSync](https://youtube.com/c/ZeroSync/)
- [Youtube Channel](https://www.youtube.com/c/ZeroSync)
- [Support Server Link](https://discord.gg/ARu4hr6hJw)
## Licensed Under
### Creative Commons Zero v1.0 Universal
[View the license here](https://github.com/ZeroDiscord/Welcomer/blob/master/LICENSE)
#### Copyright 2021 © All Rights are Reserved 

## Hosting

> ⚠  This bot needs a [Node.js v16+](https://nodejs.org/en/blog/release/v16.0.0/)  runtime to function since discord.js version 13 requires said node version to function.

### [Host On Repl.it](https://repl.it/github/ZeroDiscord/Welcomer)
### [Remix On Glitch](https://glitch.com/edit/#!/import/github/ZeroDiscord/Welcomer)

**Aliter**

### Step 1: Install the Dependencies:
Linux 
```sh
apt install nodejs npm -y
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
chmod 777 nodesource_setup.sh
./nodesource_setup.sh
apt install nodejs -y
npm install

```
Windows 
```sh
# https://nodejs.org/en/blog/release/v16.0.0/ get node.js
npm install 
```

### Step 2: Obtain a Bot Token From [Here](https://discord.com/developers) <br> <br>
<b>
  

### Step 3 : Replace the Token in [config.json](https://github.com/ZeroDiscord/Welcomer/blob/master/config.json) <br>
#### That's all! We Are Done! Now Simply host the Bot!

### Run with node
```sh
node index.js
```
### Run with pm2
```sh
npm install -g pm2@latest
pm2 start --name "Welcomer" index.js --watch
```

#### __Note__: Make sure to enable privilleged gateway intents! (Member Intent & Message Content Intent In The Developer Portal)
![alt text](https://zerosnap.000webhostapp.com/x42roq0e.gif)


# Features 
### Custom Channel For Welcoming Per Server
<br>

![](https://zerosnap.000webhostapp.com/1xsi7h07.gif) 

### Custom background image for welcomer per server
<br>

![](https://zerosnap.000webhostapp.com/lfyl5e1w.gif)

### Hassle Free Testing ( Now no more alts! )

![](https://zerosnap.000webhostapp.com/pnb6y14a.gif) 


#  Core Dependencies 
- Discord.js v13.x
- KeyV - Customisable database ( sqlite by default can be connected to any type of database )
- Canvas - For crafting the welcome message 
- Canvas - Constuctor - Making my work easy :P
- Weird-to-normal-chars - To Adjust the fonts present around discord to our available fonts in image.
## Need help? Join the [Support Server](https://discord.gg/ARu4hr6hJw)

### © Zero | 0_0#6666 - 2021
