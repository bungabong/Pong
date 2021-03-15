//Global variable..
let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");
let myPlayer;
let enemyPlayer;
let ball;
 

//ball properties..
const ball_radius = 2.5;
let ball_x = canvas.width / 2 - ball_radius / 2;
let ball_y = canvas.height / 2 - ball_radius / 2;
let ball_xv = 3;
let ball_yv = 0;
let score = 0;
