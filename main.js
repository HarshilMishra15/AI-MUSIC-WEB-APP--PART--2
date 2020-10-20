song = "";
song_1 = "";

function preload()
{
    song = loadSound("glory_or_nothinng.mp3");
    song_1 = loadSound("the_beast_three.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function modelLoaded()
{
    console.log('Posenet is Initialized!');
}
function draw()
{
    image(video,0,0,600,500);
}