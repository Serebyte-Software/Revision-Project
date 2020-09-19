//forces quiz questions

//question 
var questions = [
	//question 1
	["Scalar quantities have: magnitude but no d--------.","","direction"],
	
	//question 2
	["Vector quantities have: m-------- and d--------.","","magnitude direction"],

	//question 3
	["Speed, distance, time, energy and mass are all ------ quantities.","","scalar"],
	
	//question 4
	["Velocity, displacement, force, acceleration and momentum are all ------ quantities.","","vector"],
	
	//question 5
	["Vectors can be represented with arrows. The length represents --------- and the arrow should be pointed in the correct ---------.","","magnitude direction"],
	
	//question 6
	["Contact forces require the interacting objects to be t-------.","","touching"],
	
	//question 7
	["Non-contact forces do n-- require interacting objects to be t-------.","","not touching"],

	//question 8
	["Friction, drag, air resistance, normal contact force and tension are all ------- forces.","","contact"],

	//question 9
	["Electrostatic, magnetic and gravitation forces are all -----------.","","non-contact","noncontact","non contact"],

	//question 10
	["m--- is a measure of the amount of stuff something is made of. W----- is the force acting on an object due to g------.","","mass weight gravity"],
	
	//question 11
	["What is the gravitational field strength at the centre of the Earth?","","9.8N/Kg","9.8","9.8 N/Kg"],

	//question 12
	["What is the equation for weight? (Use an * to represent multiply, use the full words and not their symbols and do not include the units)","","weight = mass * gravitational field strength","weight = gravitational field strength * mass"],

	//question 13
	["What tool is used to determine an objects weight? (According to the AQA curriculum)","","calibrated spring balance","calibrated spring scale","newtonmeter","newton meter"],

	//question 14
	["The weight of an object can be considered to act from a single point. What is this point called?","","centre of mass","center of mass","the center of mass","the centre of mass"],

	//question 15
	["The r-------- force is the sum of all the f----- acting on an object.","","resultant forces"],
	 
	//question 16
	["A submarine has 1000N of thrust pushing it forwards. Drag exerts a force of 700N on it in the reverse direction. What is the resultant force acting on the submarine? (Assume the positive direction is the forwards direction)","","300N","300 N"],
	
	//question 17
	["What type of diagram is this?","freeBodyDiagram.png","Free-body diagram","Free body diagram","free body","free-body"],
	
	//question 18
	["What diagrams can be used to represent all the forces acting on an object?","","Free-body diagrams","Free-body","Free body diagrams","Free body"],

	//question 19
	["What is used to represent the object in a free-body diagram?","","A point","point"],

	//question 20 
	["In a free body diagram, the ----- of the arrows represents magnitude. They should be pointed in the correct ---------.","","length direction"],

	//question 21
	["Please calculate the resultant force (to the nearest integer). You may have to draw a vector diagram. Give the magnitude first (in newtons and to 1 D.P. but the symbol is not needed), then the angle (to the nearest integer)","vectorDiagram1.png","10.7 19"],

	//question 22 
	["Please resolve this force into a horizontal and vertical force. Give your answers to 1 D.P. It doesn't matter way round you write the answers.","resolvingForces.png","8.2 7.4","7.4 8.2"],

	//quetsion 23
	["Work done means ----- transfered. Work done (J) = ----- (N) x -------- (m)","","Energy force distance"],

	//question 24
	["When calculating work done, the d------- used must be in the l--- of the action of the f----","","distance line force"],

	//question 25
	["------- deformation is when the deformed object returns to it's original shape and size. I-------- deformation, also called p------ deformation is when it does not.","","Elastic inelastic plastic"],

	//question 26
	["You can calculate the force required to deform a spring using the equation: ----- (N) = ------ -------- (N/m) x e------- (m). This is called ------- law","","force spring constant extension Hooke's","force spring constant extension Hookes"],

	//question 27 
	["Hooke's Law is only true if the spring is ---------- deformed. ","","elastically"],

	//question 28 
	["Hooke's Law is true for c---------- as well as extensions.","","Compressions"],
	
	//question 29
	["Once the force is too great and the l---- of p-------------- is reached or exceeded, Hooke's law is no longer true and the spring can be i------------ deformed.","","limit proportionality inelastically"],
	
	//question 30 
	["You can perform an experiment to show Hooke's Law. The first step involves setting up all the equipment. This includes a c---- stand, a heavy w----- to stop the stand falling over, two clamps one with a s-----, the other with a v------- meter rule. The s----- should have a pointer attached to take accurate readings from the rule. You also need a set of known m----- that can be attached.","","clamp weight spring vertical spring masses"],

	//question 31 
	["You can perform an experiment to show Hooke's Law. The second step involves taking down the unstretched length of the ------. Then slowly adding the masses one by one and recording the force (this is the force of ------ exerted by the the masses) new e-------- each time. Be careful not to exceed the limit of p--------------","","Spring weight extension proportionality"],

	//question 32 
	["You can perform and experiment to show Hooke's Law. The third step involves drawing a graph, calculating the spring constant (with the formula ----- / ---------) and finding the limit of proportionality, where force and extension are no longer d------- proportional.","","force extension directly"],

	//question 33  
	["When investigating Hooke's law, force is the ---------- variable and extension is the --------- variable.","","independent dependent"],
	
	//question 34 
	["On a extension-force graph, the spring constant is the r--------- of the gradient.","","Reciprocal"],
	
	//question 35 
	["A moment, also called t-----, is the turning effect of a force. It is calculated with the formula: f---- (perpendicular to the p----) (N) x d------ from the p---- (m) and is measured in ------------ (Nm). 1Nm = 1 J----.","","Torque force pivot distance pivot newton-metres joule","Torque force pivot distance pivot newton-meters joule"],

	//question 36
	["If a moment is balanced, the c-------- moment = the a------------ moment and the object will not rotate.","","clockwise anticlockise"],

	//question 37
	["If calculate the length of side A: (Assume that the graviational field strength is 10 N/Kg)","moments1.png","30m","30"],

	//question 38
	["Assuming the rectangle is of uniform density and that the red point is it's centre of mass, will the block topple? (Y/N)","moments2.png","N"],

	//question 39
	["Assuming the rectangle is of uniform density and that the red point is it's centre of mass, will the block topple? (Y/N)","moments3.png","Y"],
	
	//question 40
	["Levers are simple machines. They can be used to amplify or reduce f----- depending on the length of each of their sides. If a force is applied to one side, the m----- on that side will be equal to that of the other side.","","forces moment"],

	//question 41
	["Gears are simple machines. They can be thought of as lots of levers arranged in a circle. The greater the d------- from the center to the edge of a tooth, the greater the m-----	as force is passed on from gear to gear. Because energy is conserved, larger gears will turn ------ than smaller one despite their larger moments.","","distance moment smaller"],
	
	//question 42 
	["Pressure on a surface (--) = ----- (N) / ---- (m<sup>2</sup>)","","Pa force area"],
	
	//question 43
	["Atmospheric pressure --------- with an increasing height. This is because the air gets l--- dense and there are fewer particles. These collide l--- frequently with any surface in the air and exert a s------ force.","","Decreases less less small"],

	//question 44
	["You can calculate the pressure on an object in a column of fluid with the formula: Pressure (Pa) = submerged d---- (m) x d------ of fluid (kg/m<sup>3</sup>) x g------------ field strength (N/Kg)","","Depth density gravitational"],

	//question 45
	["When objects are submerged in a fluid, a pressure acts on all faces of the object. The pressure at the top of the object will be s------ than the pressure at the bottom. This means that there is a net pressure and thus force upwards. This is called u-------. It the force of weight is greater than this, then the object will sink, otherwise it will float up until the forces are balanced.","","Smaller upthrust"],
	
	//question 46 
	["The size of the upthrust acting on a submerged object is e---- to the ------ of the water it displaced.","","Equal weight"],

	//question 47
	["If an object is less dense than water, it will -----.","","Float"],
	
	//question 48
	["The formula for speed is: speed (m/s) = -------- (m) / ---- (s). Speed is a s----- quantity.","","distance time scalar"],

	//question 49
	["The average walking speed is: --- m/s, the average running speed is - m/s, the average cycling speed is: - m/s, the average car speed is: -- m/s, the average speed of a fast train is: -- m/s, the average speed of a cruising plane is: --- m/s.","","1.5 3 6 13 50 250"],

	//question 50
	["Velocity is the v----- variant of speed. It has a d--------.","","vector direction"],
	
	//question 51
	["When something moves in a circle, it has a c------- speed, but a c------- velocity. This is because it will be travelling in a straight line (a tangent line of the circle) at any given moment, but is rapidly changing d--------.","","constant changing direction"],
	
	//question 52
	["On a distance-time graph, the gradient represents s----. If the line is curved, you can draw a t------ line to find the gradient.","","speed tangent"],

	//question 53
	["On a velocity-time graph, the gradient represents a---------- and the area under the graph represents the total ------------.","","Acceleration displacement"],

	//question 54
	["The formula for acceleration is: acceleration (m/s<sup>2</sup>) = change in -------- (m/s) / ---- (s).","","Velocity / time"],

	//question 55
	["If an object is accelerating at a constant rate, we can use the formula: v<sup>2</sup> - u<sup>2</sup> = 2as. v = ----- velocity, u = ------- velocity, a = ----------- and s = --------.","","final initial acceleration distance"],

	//question 56 
	["When an object falls towards the surface of Earth, it initially accelerates at --- m/s<sup>2</sup>. This gradually decreases as its velocity and therefore air ---------- increase, until it reaches -------- velocity and stops accelerating.","","9.8 resistance terminal"],

	//question 57
	["Newton's First Law of Motion states that an object will not accelerate or decelerate unless a r------- force is acting on it.","","resultant"],
	
	//question 58
	["Newton's Second Law of Motion states that the acceleration an object experiences is directly proportional to the applied ----- and inversely proportional to its ----. We can say that ----- (N) = ---- (Kg) x ------------ (m/s<sup>2</sup>).","","Force mass force mass acceleration"],

	//question 59
	["Newton's Third Law of Motion states that for every ------ there is an equal and opposite --------. When an object exerts any force on another object, the same force will be exerted back on it. If the objects have different masses, they will experience different a------------.","","Action reaction accelerations"],

	//question 60
	["When a skydiver jumps out of a plane, the only non-negligible force acting on him is his ------. As he accelerates and gains velocity, air resistance will i-------. Eventually, his weight and air resistance will balance out and he will stop accelerating. He has reached -------- velocity. When he opens his parachute, he will rapidly d--------- until he reaches a lower ------- velocity.","","Weight increase terminal decelerate terminal"],

	//question 61
	["You can investigate Newton's Second Law of Motion. The first step involves setting up the equipment. You will need a trolley, a set of known attachable m-----, a surface (as close to frictionless as possible and with appropriate distance markings), a p----- and a s----- (this should be attatched to the trolley at one side). You will also need a t---- of some description, such as a stopclock, a ---- gate (placed at the end of the surface, just before the pulley) and a data ------.","","Masses pulley string timer light logger"],

	//question 62
	["You can investigate Newton's Second Law of Motion. The second step involves putting the trolley at the 0 line on the surface. Putting the ------ on the trolley, except for one which attatches to the opposite end of the string and entering the l----- of the trolley (you may have to put a piece of card or paper on top of it) into the light gate (usually via the data logger).","","Masses length"],
	
	//question 63
	["You can investigate Newton's Second Law of Motion. The third step involves recording how long it takes the trolley to go from it's starting position to the end of the ----- gate. It then involves calculating the acceleration of the trolley. We can do this, as we know that the initial velocity was -, and the light gate will record the velocity of the trolley when it passes through. You should also include the ------ of the masses attached to the pulley and hanging off the edge of the surface, as this is the force causing the trolley to accelerate.","","light 0 weight"],

	//question 64
	["You can investigate Newton's Second Law of Motion. The fourth step involves repeating this, moving the masses from the trolley to the sting hanging off the edge of the surface, increasing the f---- accelerating the trolley, but keeping the ---- of the whole system the same.","","force mass"],

	//question 65
	["You can investigate Newton's Second Law of Motion. The fifth step involves writing up a table of your results and drawing a graph. The force (weight) is the ----------- variable and the acceleration (- axis) is the --------- variable (- axis).","","Independent X dependent Y"],
	
	//question 66
	["The -------- distance is the distance that it takes a car to come to a halt. It is the sum of the t------ distance and the b------ distance.","","thinking braking"],

	//question 67
	["Thinking distance is affected by i----------, t--------, d----------, normal r------- time and -----.","","Intoxicants tiredness distractions reaction speed"],

	//question 68
	["A typical reaction time is between --- and --- seconds.","","0.2 0.9"],
	
	//question 69
	["At 30 mph, a typical car takes about --m to stop. That's - car lengths.","","23 6"],

	//question 70
	["Braking distance is affected by the the q------ of the road (including weather-based hazards), the condition of the t---- and b---- pads and -----.","","Quality tyres brake speed"],

	//question 71
	["You can calculate your reaction time using the ----- drop test. Rest your hand, so that it is ready to grab a ruler, but hanging off a table, p------- to it's surface. When a partner drops the ruler (with the 0 mark between your index finger and thumn), you must catch it. You can take the d------- that the ruler fell and calculate the time it took (v<sup>2</sup> - u<sup>2</sup> = 2as).","","Ruler parallel distance"],

	//question 72
	["When a car brakes, it's brake pads push against the wheel, causing an enormous amount of f-------. The car's kinetic energy is dissipated as t------ and s---- energy.","","Friction thermal sound"],

	//question 73
	["The required braking force -------- with speed. This means that. at high speeds, a lot of kinetic energy is tranferred to mostly ------- energy. This can cause the breaks to -------- and/or the driver to lose ------- of the vehicle. ","","Increases thermal overheat control"],

	//question 74 
	["You can calculate the decelerating force produced by a car's brakes, by using the formula: force (N) = ---- (Kg) * ------------- (m/s<sup>2</sup>). You may have to calculate the change in v-------.","","mass acceleration velocity"],

	//question 75
	["Momentum (Kgm/s) is the product of ---- (Kg) and -------- (m/s). It is always c-------- in collisions and reactions.","","Mass velocity conserved"],

	//question 76
	["If one car travelling at 20 m/s with a mass of 500 Kg collides with a 700 Kg car travelling at 10 m/s in the same direction. The cars stick together - what is their velocity? (to 2 D.P.)","","14.17m/s","14.17 m/s","14.17"],

	//question 77
	["Momentum is conserved in explosions. If a 300 Kg cannon fires a 10 Kg cannonball at 20 m/s, what is the backwards velocity of the cannon? (To 2 D.P.)","","0.67 m/s","0.67m/s","0.67"],

	//question 78
	["Force = rate of change of m-------. This is because force = ---- x acceleration. This can be written as force = ----	x change in velocity / ----, and therefore as force = change in momentum / ----.","","Momentum mass mass time time"],
	
	//question 79
	["A rapid change in momentum can lead to a huge force acting on a person. This can be fatal. That is why cars have a-- b---, c------ z---- and s--------. These all ---- down changes in momentum.","","air bags crumple zones seatblets slow"],

	//question 80
	["C---------, b--- h------ and c-------- s-------- all slow down a change in momentum, leading to a much smaller force being exerted on a person.","","Crashmats bike helmets cushioned surfaces"],
];

//titles 
var title = "Forces";