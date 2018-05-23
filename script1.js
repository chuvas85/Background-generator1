var database =[
	{
		username : "Alejandro",
		password : "123456",
	}
];


var newfeeds =[
	{
		username : "Bobby",
		timeline : "Muy cansado de todo lo aprendido",
	},
	{
		username : "Sally",
		timeline : "JavaScript esta muy  chido ",
	}
]

var UserNamePrompt = prompt("¿Cual es tu Nombre?");
var passwordPrompt = prompt("¿Cual es tu contraseña?");


function SingIn(user, pass)
{
	if(user === database[0].username && 
		pass === database[0].password)
		console.log(newfeeds);
	else 
		alert("Lo siento Usuario y contrasena incorrectas");
}

SingIn(UserNamePrompt, passwordPrompt);