//Electromagnetism questions.js 

//set questions 
var questions = [
	//question 1
	["Magnets have two poles: n____ and s____.","","North South"],
	
	//question 2
	["________ poles attract, ____ poles repel.","","Opposite like","Unlike like"],
	 
	//question 3
	["Magnetic attraction and repulsion are ___________ forces.","","Non_contact","Non contact","Not contact","Not_contact","Noncontact","Notcontact"],

	//question 4
	["_________ magnets produce their own magnetic fields, e.g. a b__ magnet.","","Permanent bar"],
	
	//question 5
	["________ magnets are objects that become magnetic when placed inside a m_______ field.","","Induced magnetic"],

	//question 6
	["Induced magnetism always causes a force of __________.","","Attraction"],
	
	//question 7
	["Induced magnets ____ their magnetism if taken away from the ________ field.","","Lose magnetic"],

	//question 8
	["The four magnetic materials are: i___, s____, c_____ and n_____.","","Iron stell cobalt nickel"],

	//question 9
	["All the ________ materials will become _______ magnets in the magnetic field of another magnet.","","Magnetic induced"],

	//question 10
	["A m_______ f____ is an area around a magnet where a f____ will act on another magnet or magnetic material.","","Magnetic field force"],

	//question 11
	["The f____ that acts on a magnetic material or magnet in a magnetic field depends on the d_______ from the magnet.","","Force distance"],
	
	//question 12
	["A c______ can be used to find the direction of a magnetic field. It contains a tiny b__ magnet that will align itself with an external magnetic field.","","Compass bar"],
	
	//question 13
	["A compass will always point North (the Earth's ____ magnetic pole) when not disturbed by an artifical magnetic field. This means that the Earth has its own ________ field.","","South magnetic"],

	//question 14
	["The arrows on a magnetic field diagram flow from _____ to _____. The areas where lines are c_____ together are where the field is the strongest.","barMagnet.png","North south closer"],
	
	//question 15
	["When an electrical _______ flows through a wire, a ________ field is produced. This field will have a _________ circle(s) shape You can use the Right Thumb Rule to calculate the direction of the field. Put your right hand in a thumbs up position. Your right thumb represents the ____________ current and your fingers represent the direction of the field (i.e. the direciton of the ______ in a diagram).","","Current magnetic concentric conventional arrows"],

	//question 16
	["You can prove the _____ Thumb Rule by putting a _______ around a current_carrying wire. The needle will a____ with the produced magnetic field.","","Right compass align"],

	//question 17
	["A magnetic field is produced around a current_carrying wire. The strength of this field (when it is acting on an object) depends on how c____ the object is to the wire and the _______ travelling through the wire.","","Close current"],

	//question 18
	["Changing the __________ of current flow in a wire will change the direction of the ________ field produced by it.","","Direction magnetic"],

	//question 19
	["A ________ is a coil of wire. Because of the shape, when current flows through it, it will produce a _________ field similar to that of a ___ magnet (butterfly wings shape).","","Solenoid magnetic bar"],

	//question 20
	["The amount of ______ flowing and the number of _____ of wire effect the strength of the magnetic field produced by a solenoid. You can also increase the strength by adding a core made of i___ or s____.","","Current turns iron steel"],

	//question 21
	["An ____________ is a solenoid with an iron core. They are very useful because their s_______ can be changed and they can be turned on or off.","","Electromagnet strength"],
	
	//question 22
	["Relays are electrically controlled ________. They are made up of two circuits (one low voltage and one high). The low voltage circuit includes a link to the power supply and an e____________. The high voltage circuit connects to the main circuit of the appliance. It has a s_____, an iron block and two contacts. When the power turns on in the lower voltage circuit, the e____________ attracts the iron block, c______ the contacts and thus the circuit. The block will spring back once the power in the lower voltage circuit is cut.","","Switches electromagnet spring electromagnet closing"],

	//question 23
	["Electric doorbells work by using an electromagnet to attract an iron _______ on a spring. This contact is connected to a c______, which strikes a bell. This b_____ the circuit, turning the circuit off until the contact springs back to its original place, turning the electromagnet on again.","","Contact clapper breaks"],

	//question 24
	["The _____ Effect means that a current_carrying wire inside a magnetic field will experience a force. You can calculate the force with the equation: Force (Newtons) = ________ ____ Density (_____) x _______ (Amps) x ______ of wire (m). The wire must be ____________ to the magnetic field.","","Motor magnetic flux Tesla current length perpendicular"],

	//question 25
	["You can use _________ Left Hand Rule for the motor effect. Put your hand in the position shown below. The _____ represents the direction of the force. The _____ ______ represents the direction of the magnetic field (North to South) and the ______ ______ represents the direction of conventional current.","flemmingsLeftHandRule.png","Fleming's thumb first finger second finger","Flemings thumb first finger second finger"],

	//question 26
	["Electric motors are perhaps the most useful application of the motor effect. When a loop of current carrying wire is put between a north and south pole, if able to, it will rotate until it reaches an u______ position and the forces on it will balance out. A device called a __________ __________ will change the _________ of current flow when the loop reaches this point, this causes it to resume rotating in the correct direction. At an exactly vertical position, the loop of wire breaks the circuit, but i______ carries it forward.","dcMotor.png","Upright split_ring commutator direction inertia","Upright split ring commutator direction inertia"],

	//question 27
	["Moving coil loudspeakers work by placing a c___ around one pole of a p________ magnet, and connecting it to an A.C. supply. You should also place a paper c___ in front of the coil. When an A.C. current flows, the changing c_______ direction will produce a magnetic field around the coil, which will interact with the permanent magnetic poles. The changing d_______ of the current will change the d________ of the magnetic force acting on the coil. This will cause it, and therefore the cone, to o________, producing sound waves. The frequency of the A.C. supply is ________ proportional to the frequency of the sound waves produced, and therefore the pitch. Current is ________ proportional to a_________ and therefore volume.","loudSpeaker.png","Coil permanent cone current direction direction oscillate directly directly amplitude"],

	//question 28
	["The _________ Effect states that if a wire or coil of wire moves r_______ to a magnetic field (or vice_versa), then a p_______ d_________ will be induced, causing an electric c______ to flow. If the direction of movement or the direction of the magnetic field changes, the _________ of current will change. This will only happen if the wire p_____ t______ the magnetic field.","","Generator relative potential difference current direction passes through"],

	//question 29
	["When making use of the Generator Effect, a larger potential difference will be induced if a ________ magnetic field is used, the wire/magnet is moved f_____ or if the a ____ is used instead of a single loop of wire (i__________ the number of turns on this will further increase the induced potential difference).","","Stronger faster coil increasing"],
	
	//question 30
	["When a magnet is moved within a coil, a _______ will be induced in the coil, which will then produce a magnetic field that o______ the original magnetic field, making it harder to push in.","","Current opposes"],

	//question 31
	["___________ are A.C. generators. They work by r_______ a c___ that is between two opposing m_______ poles (or rotating these poles instead). This will cause a _________ difference and therefore an electric _______ will flow. This will change direction every half turn, as the sides of the wire face a different magnetic ____. These generators have ____ rings and b_______ instead of a split_ring commutator. This means that the contacts will not switch and an A.C. current will be outputted.","alternator.png","Alternators rotators coil magnetic potential current pole slip brushes"],
	
	//question 32
	["_______ are D.C. generators. They are made of a ____ of wire, between two ________ magnetic poles. The wire is attached to a __________ __________. This means that, when the direction of c______ reverses (because of the wire facing different magnetic poles), the c_______ will swap, allowing a D.C. current to flow.","dynamo.png","Dynamos coil opposing split_ring commutator current contacts"],
	
	//question 33
	["You can use an ____________ to view the potential difference generated by a generator. It will show it as graph, with voltage on the _ axis. An A.C. current would show a s___ wave type going from pattern p_______ to n_______. A D.C. current would also be a ____ wave completely a____ the X_axis. A battery will produce a constant D.C. voltage _i.e. a __________ line.","","Oscilloscope y sine positive negative sine above horizontal"],

	//question 34
	["Increasing the number of revolutions per unit time of a generator will increase the __________ of the current (including for D.C, as the P.D. of this will increase and decrease cyclicly) produced and increase the net v______.","","Frequency voltage"],

	//question 35
	["Microphones work like ____________ in reverse. When sound waves hit the paper ____ (or diaphragm), they cause it and the coil to o________ within the magnetic field. This generates an a__________ c______. Louder sounds will cause the coil to move further (allowing the _________ of the sound wave to be retrieved). The frequency of the sound wave will be d_______ p___________ to the frequency of the _______.","","Loudspeakers cone oscillate alternating current amplitude directly proportional current"],

	//question 36
	["Transformers change the v______ of an a__________ current. They are made with two coils of wire joined by an ____ core. When current flows through the first, it will induce an alternating magnetic field in the coil and iron core, which will induce. The ratio of turns of wire between the coils is the same as the ratio of _______s between them.","","Voltage alternating iron voltages"],
	
	//question 37
	["_______ transformers increase voltage and ________ current. _________ transformers decrease voltage and ________ current.","","Step_up decrease step_down increase"],
	
	//question 38
	["P____ is conserved through tranformers. This is because they are almost 100% energy efficient (although some, of course, won't be). This means that the p______ of voltage and _______ in the first coil will equal that of the second coil.","","Power product current"],

	//question 39
	["When looking at transformers, we can use the equation: (input _______ (V) / output _______ (V)) = (number of _____ on first coil / number of _____ on second coil). This equation is still true if you swap the numerators with their corresponding d----------s.","","Voltage voltage turns turns denominators"],

	//question 40
	["When looking at transfomers, we can use the equation: primary v______ * primary c______ = secondary v______ * secondary c______.","","Voltage current voltage current"],
];

//set title 
var title = "Electromagnetism";