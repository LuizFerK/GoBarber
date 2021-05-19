<br />

<p align="center">
  <img alt="Logo" src="./.github/logo.png" width="200px" />
</p>

<h1 align="center" style="text-align: center;">GoBarber</h1>

<p align="center">
	<a href="https://github.com/LuizFerK">
		<img alt="Author" src="https://img.shields.io/badge/author-Luiz%20Fernando-8E54E9?style=flat" />
	</a>
	<a href="#">
		<img alt="Languages" src="https://img.shields.io/github/languages/count/LuizFerK/GoBarber?color=8E54E9&style=flat" />
	</a>
	<a href="hhttps://github.com/LuizFerK/GoBarber/stargazers">
		<img alt="Stars" src="https://img.shields.io/github/stars/LuizFerK/GoBarber?color=8E54E9&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/GoBarber/network/members">
		<img alt="Forks" src="https://img.shields.io/github/forks/LuizFerK/GoBarber?color=8E54E9&style=flat" />
	</a>
	<a href="https://github.com/LuizFerK/GoBarber/graphs/contributors">
		<img alt="Contributors" src="https://img.shields.io/github/contributors/LuizFerK/GoBarber?color=8E54E9&style=flat" />
	</a>
</p>

<p align="center">
	<b>Create an appointment with your favorite barber in one click!</b><br />
	<span>Created with Node.js, ReactJS and React Native, all with Typescript.</span><br />
	<sub>Made with ❤️</sub>
</p>

<br />

<p align="center">
  <img alt="Signin" src="./.github/signin.png" />
  <img alt="Dashboard" src="./.github/dashboard.png" />
  <img alt="Profile" src="./.github/profile.png" />
  <img alt="MobileSignin" src="./.github/mobilesignin.png" width="250px" />
  <img alt="MobileSignUp" src="./.github/mobilesignup.png" width="250px" />
  <img alt="MobileProfile" src="./.github/mobileprofile.png" width="250px" />
  <img alt="Providers" src="./.github/providers.png" width="250px" />
  <img alt="Appointment" src="./.github/appointment.png" width="250px" />
  <img alt="Finish" src="./.github/finish.png" width="250px" />
</p>

<br />

> # :warning: Note
> This project was made in 2020 with portfolio and study purposes and is no longer in maintenance. The code is under the [MIT license](https://github.com/LuizFerK/GoRestaurant/blob/master/LICENSE), so feel free to clone it and use it the way you want but keep in mind that you probably will need to update some dependencies.
<br />

# :pushpin: Contents

- [Features](#rocket-features)
- [Installation](#wrench-installation)
- [Getting started](#bulb-getting-started)
- [Techs](#fire-techs)
- [Issues](#bug-issues)
- [License](#book-license)

# :rocket: Features

### Web

- See all the clients appointments with you
- Display the appointments every day of the week
- Update your profile

### Mobile

- See all barbers
- See the barber disponibility on the day/weak
- Create an appointment with a barber
- Update your profile

# :wrench: Installation

### Required :warning:
- Node.js
- Yarn
- MongoDB database
- Postgres database
- Redis database

### SSH

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have an SSH key registered in your GitHub account, clone the project using this command:

```git clone git@github.com:LuizFerK/GoBarber.git```

### HTTPS

In case you don't have an SSH key on your GitHub account, you can clone the project using the HTTPS URL, run this command:

```git clone https://github.com/LuizFerK/GoBarber.git```

**Both of these commands will generate a folder called GoBarber, with all the project**

# :bulb: Getting started

### Server

1. Open the **server** folder and run ```yarn``` to install the dependencies
2. Rename the ```.env.example``` to ```.env``` and set a secret to your app
3. Rename the ```ormconfig.example.json``` to ```ormconfig.json``` and add your postgres **port**, **user** and **password** in the archive
4. Create a postgres database named ```gobarber```
5. Run ```yarn typeorm migration:run``` to run the migrations to your database
6. Create a mongoDB database named ```gobarber```
7. If you don't use the default port to mongoDB, you'll need to set the port on your ```ormconfig.json```
8. You don't need to configure the redis since you use the default port and don't have an password. If you have a password or use a diferent port, you'll need to set them on ```.env```
9. If all goes well, run ```yarn dev:server``` to open the development server on port 3333
10. **Extra:** if you want to use AWS SES, change the maildriver to ```ses``` on ```.env``` file (you'll also need to set your AWS keys to use the service)
11. **Extra:** if you want to use AWS S3, change the storagedriver to ```s3``` on ```.env``` file (you'll also need to set your AWS keys to use the service)

### Web

1. Open the **web** folder an run ```yarn``` to install the dependencies
2. Rename the ```.env.example``` to ```.env```
3. Run ```yarn start``` to open the web application on port 3000. (the app will open in your browser automatically)


### Mobile

1. Open the folder and run ```yarn``` to install the dependencies
2. In ```src/services/api.ts``` change the baseURL for your IPv4 address: ```baseURL: 'http://YOUR-IPV4-ADDRESS:3333'```
3. Connect your device to your computer and enable the [debugger mode](https://developer.android.com/studio/debug/dev-options) on the developer tools
4. Run ```yarn start``` to open the metro-bundler and get access to the server app on mobile
5. Run ```yarn android``` to install the app on your **Android** or ```yarn ios``` to install on your **IOS**
> If you create only one user, any date will appear on the app

# :fire: Techs

### Typescript (language)

### Node.js (server)
- AWS (S3 and SES)
- Celebrate
- CORS
- Express
- Nodemailer
- TypeORM

### React.js (web)
- Axios
- React Day Picker
- Styled Components
- Unform
- Yup

### React Native (mobile)
- Axios
- React Navigation
- Styled Components
- Unform

# :bug: Issues

Find a bug or error on the project? Please, feel free to send me the issue on the [GoBarber issues area](https://github.com/LuizFerK/GoBarber/issues), with a title and a description of your found!

If you know the origin of the error and know how to resolve it, please, send me a pull request, I will love to review it!

# :book: License

Released in 2020.

This project is under the [MIT license](https://github.com/LuizFerK/GoBarber/blob/master/LICENSE).

<p align="center">
	< keep coding /> :rocket: :heart:
</p>
