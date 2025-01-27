//Team Members: Justin Suiter & Ethan Condon
//Date: 1.24.24
//Programmer: Maze
//Hardware: Bolt #SB-33DF

//Begin Program
async function startProgram() {

//Start & Say Start
//Bolt will say Start Across the LED's + Say it out loud
//Driver: Ethan Condon
//Navigator: Justin Suiter
	await speak("Start", true);
	await scrollMatrixText("START", { r: 0, g: 0, b: 255 }, 15, true);
//Green Checkpoint
//LED's turn Green
//Driver: Justin Suiter
//Navigator: Ethan Condon
	setSpeed(60);
	await delay(2.6);
	setSpeed(0);
	await delay(.5);
	setMainLed({ r: 0, g: 255, b: 0});
//Sound #1 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Ethan Condon
//Navigator: Justin Suiter
	await delay(.5);
	await roll((getHeading() + 90), 0, 1);
	setSpeed(60);
	await delay(2);
	setSpeed(0);
	await delay(.5);
	await roll((getHeading() + 90), 0, 1);
	await delay(.5);
	setSpeed(60);
	await delay(.7);
	setSpeed(0);
	await Sound.Animal.play(true);
//Red Checkpoint
//LED's turn Red
//Driver: Justin Suiter
//Navigator: Ethan Condon
	await roll((getHeading() + 45), 0, 1);
	setSpeed(60);
	await delay(1);
	setSpeed(0);
	await roll((getHeading() - 90), 0, 1);
	setSpeed(60);
	await delay(.3);
	setSpeed(0);
//Sound #2 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Ethan Condon
//Navigator: Justin Suiter

//Purple Checkpoint
//LED's turn Purple
//Driver: Justin Suiter
//Navigator: Ethan Condon

//Sound #3 Checkpoint
//Bolt makes sound of choice - Update Sound
//Driver: Ethan Condon
//Navigator: Justin Suiter

//Blue Checkpoint
//LED's turn Blue
//Driver: Justin Suiter
//Navigator: Ethan Condon

//Finish & Say Finish + Say it out loud
//Bolt will say Finish Across the LED's
//Driver: Ethan Condon
//Navigator: Justin Suiter

//End Program
}
