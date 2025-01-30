// Team Members: Justin Suiter & Ethan Condon
// Date: 1.24.24
// Programmer: Maze
// Hardware: Bolt #SB-33DF

// Begin Program
async function startProgram() {
  // Start & Say Start
  // Bolt will say Start Across the LED's + Say it out loud
  // Driver: Ethan Condon
  // Navigator: Justin Suiter
  await speak("Start", true);
  await scrollMatrixText("START", { r: 0, g: 0, b: 255 }, 15, true);

  // Green Checkpoint
  // LED's turn Green
  // Driver: Justin Suiter
  // Navigator: Ethan Condon
  await setSpeed(60);
  await delay(2.5);
  await setSpeed(0);
  await delay(1);
  await setMainLed({ r: 0, g: 255, b: 0 });

  // Sound #1 Checkpoint
  // Bolt makes sound of choice
  // Driver: Ethan Condon
  // Navigator: Justin Suiter
  await delay(.5);
  await roll(90,60,1.8);
  await delay(.5)
  await spin(90,1);
  await roll(180,60,1.1);
  await Sound.Animal.Monkey.play(true);

  // Red Checkpoint
  // LED's turn Red
  // Driver: Justin Suiter
  // Navigator: Ethan Condon
  await roll(-140,60,1.4);
  await setMainLed({ r: 255, g: 0, b: 0 });
  await setHeading(0, true);


  // Sound #2 Checkpoint
  // Driver: Ethan Condon
  // Navigator: Justin Suiter
	await (.5);
	await roll(-230,60,.8);
	await delay(.5);
	await roll(-320,60,.8);
  // Purple Checkpoint
  // LED's turn Purple
  // Driver: Justin Suiter
  // Navigator: Ethan Condon

  // Sound #3 Checkpoint
  // Driver: Ethan Condon
  // Navigator: Justin Suiter


  // Blue Checkpoint
  // LED's turn Blue
  // Driver: Justin Suiter
  // Navigator: Ethan Condon

  // Finish & Say Finish
  // Bolt will say Finish Across the LED's
  // Driver: Ethan Condon
  // Navigator: Justin Suiter
  await speak("Finish", true);
  await scrollMatrixText("FINISH", { r: 255, g: 255, b: 0 }, 15, true);
}

// End Program
