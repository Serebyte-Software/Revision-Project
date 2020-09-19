//waves questions.js 

//set questions 
var questions = [
	//question 1
	["Transverse waves have oscillations p------------ to the direction of ------ transfer. Examples of transverse waves include electromagnetic waves, water waves and - waves (a type of seismic wave).","","Perpendicular energy S"],

	//question 2
	["Longitudinal waves have oscillations p------- to the direction of ------ transfer. Examples of longitudinal waves include sound waves, waves travelling through a spring and - waves (a type of seismic wave). ","","parallel energy P"],

	//question 3
	["Waves transfer ------ and not ----.","","Energy mass"],
	
	//question 4
	["----- waves travel as particles move through the air and collide with each other. As this happens, air will compress (giving a ---- pressure) and r------- (giving a --- pressure).","","Sound high rarefact low"],

	//question 5
	["What is the word for the thing a wave travels through?","","Medium","A medium"],

	//question 6
	["What letter represents the amplitude?","waveProperties.png","D"],
	
	//question 7
	["What letter represents the wavelength?","waveProperties.png","A"],
	
	//question 8
	["What letter represents the trough?","waveProperties.png","E"],
	
	//question 9
	["What letter represents the crest?","waveProperties.png","F"],
	
	//question 10
	["What is the name for the maximum displacement from the undisturbed position?","","Amplitude"],

	//question 11
	["What is the name for the distance from one point on one wave to the same point on the adjacent wave.","","Wavelength"],

	//question 12
	["What is the name for the number of waves passing a point per second?","","Frequency"],
	
	//question 13
	["Frequency is measured in -----, where 1 -- = - wave per second.","","Hertz Hz 1"],

	//question 14
	["What is the name for the time taken (in seconds) for one wave to pass a point?","","Period"],

	//question 15
	["Period (s) = - / --------- (Hz)","","1 frequency"],
	
	//question 16
	["The wave equation states: ---- ----- (m/s) = -------- (Hz) - --------- (m). (Use * as a multiplication symbol and / as a division symbol if either are necessary).","","wave speed frequency wavelength"],

	//question 17
	["You can measure the speed of ----- in air with the following experiment. Have 1 person stand with cymbals and another, on a flat surface, a long distance away (500m is sufficient). Person 2 uses a t---- to start timing when they s-- person A hit the cymbals together and stops it when they hear the cymbals. Then use speed = ------- / time to calculate the speed. -------- time and having a human start the timer can make this fairly innacurate. You can use a lot of observers with timers and calculate a ---- for more -------- results.","","Sound timer see distance reaction mean accurate"],

	//question 18
	["You can investigate wavelength and frequency using a ripple tank (a shallow water tank with a t--------- bottom and a v-------- arm). The first step involves gathering the equipment. You will need a ripple tank, a piece of paper with a r---- along it's lanscape edge, a l--- and a camera.","","transparent vibrating ruler lamp"],

	//question 19
	["You can investigate wavelength and frequency using a ripple tank. The second step involves setting the ---- up above the ripple tank and putting the piece of paper b---- it, then starting up the tank's vibrating arm.","","Lamp below"],

	//question 20
	["You can investigate wavelength and frequency using a ripple tank. The third step involves recording the ------- of the waves on the piece of paper and using the ruler on camera to find the ----------.","","Shadows wavelength"],

	//question 21
	["You can investigate wavelength and frequency using a ripple tank. The fourth step involves using a timer and/or slow-motion to count the number of waves that pass a point per s-----. This will give you the --------- of the wave. It may be easier to count the number of waves that pass a point in 10 seconds and ------ your result by 10.","","Second frequency divide"],

	//question 22
	["You can investigate wavelength and frequency using a ripple tank: the fith step involves using the ---- equation to calculate the wave speed. You could instead measure the ---- taken for a wave to travel from one end of the tank to the other and use speed = -------- / time. You also may wish to experiment how changing the speed/frequency of the vibrating arm afftects the waves produced.","","Wave time distance"],

	//question 23
	["You can perform an experiment to see waves on a string. The first step involves setting up the equipment. You will need a v-------- generator, with an accompanying s----- generator with a string attached to one end. The string should be resting on a wooden b----- and attached to a pulley on a c---- and a mass to keep it ----.","","Vibration signal bridge clamp taut"],

	//question 24
	["You can perform an experiment to see waves on a string. The second step involves setting the --------- generator to a certain -------- with the ------ generator. At a certain frequency you will get a s------- wave that doesn't appear to be moving. This is because of an effect called ---------.","","Vibration frequency signal standing resonance"],

	//question 25
	["You can perform an experiment to see waves on a string. The third step involves measuring the total l----- of the standing wave from the bridge to the vibration generator. You should divide this number by the number of ---------- and multiply by - to get the full wave length of the wave. You can then calculate the wavespeed using the ---- equation.","","Length half-waves 2 wave"],

	//question 26
	["When they reach a boundary between two different materials/mediums, waves can either be r--------, a------ or t----------.","","Reflected absorbed transmitted"],
	
	//question 27
	["When looking at reflection or refraction, the i------- ray is the ray that hit's surface.","","incident"],

	//question 28
	["When looking at reflection or refraction, the normal is an imaginary line p------------ to the surface.","","Perpendicular"],

	//question 29
	["In a reflection, the angle of incidence - the angle of reflection. The angles are between the rays and the ------.","","= normal"],

	//question 30
	["You can calculate where an image will appear behind a mirror by drawing a ray diagram. You can draw multiple rays emerging from a s----- point on the object. When they hit the mirror, we know where they will reflect because the i------- angle = the r-------- angle. We can then trace the reflected rays back to a single point behind the mirror, where the image will s--- to come from.","reflection.png","Single incident reflected seem"],

	//question 31 
	["You can investigate reflection and refraction with an experiment. The first step involves: setting up a --- box with a lens and slit inside (a laser can be used, but they are often dangerous). You should also set up an A3 piece of paper with a straight line down the centre, and a ------ line in the middle. You should put a g---- block on the paper in the middle. You may wish to draw around this.","","Ray normal glass"],

	//question 32
	["You can investigate reflection and refraction with an experiment. The second step involves shining the -------- ray at the ------. You should angle it so that you can see some light being t--------- (and refracted) and some being reflected. Then mark the incident, reflected and transmitted rays' paths.","","Incident normal transmitted"],

	//question 33 
	["You can investigate reflection and refraction with an experiment. The third step involves m-------- the angle of i-------- and the angle of refraction. You should then repeat the experiment with a different material, e.g. plastic/p------ and record the results again.","","Measuring incidence Perspex"],

	//question 34 
	["In the previously described experiment, you should find that the angles of i-------- and r--------- are the ---- for both glass and Perspex. These do not depend on the m-------. The angle of r--------- will be different, as this depends on the --------.","","Incidence reflection same material refraction material"],

	//question 35 
	["Sound can travel through all three states of matter. It travels ------- in solids (because the particles are ------ together) and ------ in gases.","","Fastest closer slowest","Quickest closer slowest"],

	//question 36
	["When sound waves enter the ear, they hit the --- ----. This causes the parts of the ----- ear to vibrate, causing the sensation of sound.","","Ear drum inner"],
	
	//question 37 
	["Humans can hear between the frequencies --Hz and -----Hz. Thiz is partially because sound waves in air can only cause vibrations in solds over a l------ range of frequencies.","","20 20000 limsited","20 20,000 limited"],
	
	//question 38
	["You can use a ------ --- ------------, when a micophone is connected, to show the properties of a sound waves (they are drawn as longitudinal waves).","","Cathode ray oscilliscope"],

	//question 39 
	["In a sound wave, --------- is directly proportional to pitch.","","Frequency"],

	//question 40 
	["In a sound wave, -------- is directly proportional to volume.","","Amplitude"],

	//question 41 
	["Sound waves cannot pass through a ------.","","Vacuum"],
	
	//question 42 
	["------ are reflected sound waves.","","Echoes"],
	
	//question 43 
	["What speed does sound travel at in air?","","343 m/s","343m/s","343"],
	
	//question 44 
	["U--------- is sound with a --------- above the human hearing range.","","Ultrasound frequency"],

	//question 45 
	["Ultrasound p------- reflects when it crosses a boundary between two materials. This means that it can be used to detect and view structures inside the body. You can count the t--- it takes for the r-------- wave to hit a probe, and use the speed of sound to calculate the distance and even form an image.","","Partially time reflected"],

	//question 46 
	["Ultrasound can be used to produce images of any organ not surrounded by ----. It can also be used to view a ------.","","Bone foetus"],

	//question 47 
	["Ultrasound is not i------- and is therefore is much ----- than X-rays.","","Ionising safer"],

	//question 48 
	["Ultrasound can be used in i--------- i------ to detect h----- d------ in a structure or weld.","","Industrial imaging hidden defects"],
	
	//question 49 
	["One use of ultrasound is to measure the d---- of water bodies. You emit ultrasound towards the bottom of the body and time how long it takes to get a reflected wave. Make sure to ----- the time, as a wave has both gone down and reflected back up. Then use the formula speed = distance / ---- to calculate the distance.","","Depth halve time"],

	//question 50 
	["The Earth is made up of the ----- (which is comparitively thin -- km thick), beneath that is the ------ which is ----- but parts of it may flow very slowly. Beneath that is the ----- ----, which is ------. Beneath that is the ----- ---, which is solid.","","Crust 50 mantle solid outer core liquid inner core"],

	//question 51 
	["----------- occur when there is a sudden movement between -------- plates in the Earth's crust.","","Earthquakes tectonic"],
	
	//question 52 
	["Earthquakes produce ------- waves which can be detected by ------------.","","Seismic seismometers"],

	//question 53 
	["P waves are ------------ seismic waves that can pass through s----- and l------. They travel ------ than S waves.","","Longitudinal solids liquids faster","Longitudinal solids liquids quicker"],

	//question 54 
	["S waves are ---------- seismic waves. They can only travel through ------.","","Transverse solids"],

	//question 55 
	["Seismic waves travel in ------ paths because of ------- changes in the Earth.","","Curved density"],

	//question 56
	["- waves will not travel through the inner core, but - waves will, meaning that it must be a -----.","","S P liquid"],

	//question 57 
	["- waves travel faster in solids than in liquid, causing - wave ------ zones to appear. - wave ------ zones occur because - waves cannot travel through the ------ inner core.","","P P shadow S shadow S liquid"],

	//question 58 
	["Scientists discovered the solid ------ ---- when faint - waves were found in their shadow zones.","","inner core P"],

	//question 59 
	["The -------------- spectrum is a continous spectrum of -------------- waves based on their wavelength and frequency.","",""],

	//question 60
	["What are the parts of the electromagnetic spectrum in ascending order of frequency? (leave one space after each one and do not include the word waves or rays)","","Radio micro infrared light ultraviolet x gamma","Radio micro infrared light ultra-violet x gamma"],

	//question 61 
	["Please list the 7 colours in ascending order of frequency.","","Red orange yellow green blue indigo violet"],

	//question 62 
	["An object will appear a certain colour because it only ------- that colour/set of wavelengths of light.","","Reflects"],

	//question 63 
	["Colour filters only allow a c------ colour to ---- through them.","","Certain pass"],

	//question 64 
	["When light passes from air to glass, it's speed ---------. This causes it to turn ------- the normal.","","Decreases towards"],
	
	//question 65 
	["When light passes from glass to air, it's speed ---------. This causes it to turn ---- from the normal.","","Increases away"],

	//question 66 
	["Light will not refract if it is travelling -------- to the normal.","","Parallel"],

	//question 67 
	["--------- diagrams can be used to explain refraction. Refraction occurs because one side of the wavefront will change m----- first, causing it to change speed. This means that the other side travels at a d-------- speed until it too enters the new m-----. Because the wave's speed changes, it's ---------- also changes (it will decrease if the wave's speed decreases and vice versa).","waveFrontDiagram.png","Wavefront medium different medium wavelength"],

	//question 68
	["You can use a -------- cube to see how much infrared radiation is emitted from different surfaces. You will also need an i-------- d-------.","","Leslie's infrared detector","Leslies infrared detector"],

	//question 69 
	["A Leslie's cube is a h----- cube with 4 main faces. One is shiny m-------, one is -----, one is matt ----- and one is ----- black.","","Hollow metallic white black shiny"],
	
	//question 70
	["You can use a Leslie's cube to see how much infrared radiation is emitted from different surfaces. After gathering your equipment, you should fill the cube with h-- w---- and use the infrared detector to m------ the amount of infrared radiation emitted at each surface. You should keep the -------- the same each time because of the ------- square law and it is therefore a ------- variable.","","Hot water measure distance inverse control"],

	//question 71
	["After carrying out the Leslie's cube experiment, you should find that the ---- ----- side emitted the most radiation, followed by the ----- ----- surface, the ----- surface and finally the ----- -------- surface.","","Matt black shiny black white shiny metallic"],

	//question 72
	["When looking at a scientific measuring instrument, --------- is the smallest detectable change.","","resolution"],

	//question 73
	["An alternative to an infrared detector in the Leslie's cube experiment is a ----------- with the bulb/end painted -----..","","Thermometer black"],

	//question 74 
	["When it comes to infrared radiation, the best a-------- are als othe best e--------.","","Absorbers emitters"],

	//question 75
	["You can investiage how different surfaces absorb infrared radiation with an experiment. The first step involves setting up the equipment: an -------- heater, a two ----- plates (one painted matt ----- and one shiny metallic), some Vaseline and two drawing pins. You should s---- the pins to the metal plates in the same spot on each with Vaseline.","","Infrared metal black stick"],

	//question 76
	["You can investigate how different surfaces absorb infrared radiation with an experiment. The second step involves turning the heater on and checking which d------ p-- falls first (because the Vaseline melts). It should be the one on the ---- ----- surface.","","Drawing pin matt black"],

	//question 77
	["When EM waves are generated or absorbed, c------ take place in atoms' ------- shells or ------.","","Changes electron nuclei"],
	
	//question 78
	["When lithium is heated in a flame, it will produce ------ light. This is because when its atoms are heated, its electrons can jump from one electron shell to a h----- one. When they go back to their o------- shell, they are l----- their energy in the form of an EM wave.","","Crimson higher original losing","Red higher original losing"],
	
	//question 79
	["----- rays are emitted from the ------ of radioactive atoms.","","Gamma nucleus"],

	//question 80
	["When EM waves are a------, it can cause changes to electrons' e----- levels.","","Absorbed energy"],
	
	//question 81
	["Ultraviolet, X-rays and Gamma rays are all ------- because of their high frequencies. They carry a lot of e----. This means that they can cause t---- damage and m--------, which may result in cancer.","","Ionising energy tissue mutations"],

	//question 82
	["What is the unit of radiation dose?","","Sieverts"],
	
	//question 83 
	["The d--- and t--- of radiation determines how much damage it does.","","Dose type"],
	
	//question 84
	["Radio waves are produced when electrons o------- in electrical circuit. Aerials ------ these waves, causing e--------- to also o-------- with the same frequency as the wave. This means that radio waves can be used to transmit a---------- current.","","Oscillate aerials electrons oscillate alternating"],

	//question 85
	["What is the name for a circuit that produces radio waves?","","Transmitter","A transmitter"],

	//question 86
	["Radio waves are used to transmit ----- broadcasts and --------- (non-satellite) TV signals. This is because they can travel a ---- way before being ------- by something. ---- wavelength ones can also diffract (spread out) around and between hills. They can also ------- off of the ------- (a layer of charged particles in the atmosphere). They can therefore travel a very long way.","","Radio terrestrial long absorbed long reflect ionosphere"],
	
	//question 87
	["Microwaves are used for ------- food. This is because the waves are absorbed by ----- molecules, which gain thermal energy. They are used to communicate with ----------, as they can pass through the ---------- without experiencing reflection or refraction.","","Heating water satellites atmosphere"],
	
	//question 88
	["Infrared waves are given out by electrical h------ to warm things up and o---- to cook food. IR radiation is easily a------- by the surface of objects. It is also used in infrared ------- to check buildings for heat losses.","","Heaters ovens absorbed cameras"],

	//question 89
	["Visible light is used in ----- optic cables to transmit data at the speed of light. These are made up of very thin cables. Because of light's sh--- wavelength, these cable can carry a lot of information very quickly.","","Fibre short"],

	//question 90
	["Ultraviolet light is used in energy efficient ---------. UV light is emitted, the absorbed by ----------- material and re-emitted as visible light. These require much ---- energy than their standard variants because so much energy is carried by UV light. UV light is also used in ------- beds, although prolonged use may cause skin a----- or cancer.","","Lightbulbs fluorescent less tanning ageing"],
	
	//question 91
	["X-rays and gamma rays are both used for ------- imaging. X-rays are used to view broken ----- as they pass through ---- tissue but not hard tissue. Gamma rays are used to detect c------. This is because both X-rays and gamma rays are very p----------. They can both be used to treat cancer by c----------- sources from multiple directions onto a tumour.","","Medical bones soft cancers penetrative concentrating"],

	//question 92
	["What is this the symbol for?","convex lens.png","Convex lens","A convex lens"],
	
	//question 93
	["------ lenses focus light onto a single point. This is called the ----- point, also called the ------ focus. The distance from the lens to this point is the ----- length.","","Convex focal principal focal"],
	
	//question 94
	["What is the specific term for the normal at the centre of a lens?","","Principle axis","The principle axis"],

	//question 95
	["If a light ray travels along the -------- axis, it w---- be refracted.","","Principle won't","Principle wont"],

	//question 96
	["---- images will appear on a screen because light actually meets there.","","Real"],

	//question 97 
	["When drawing a ray diagram, you draw one line from the top of the image that is -------- to the principle axis and one line from the same point that passes through the ------ of the lens. The first line will refract, meet at the priciple ----- and continue in a straight line. The second line will --- be refracted. An ----- will be formed at the point where the lines c-------.","convexLensRayDiagram1.png","Parallel centre","Parallel center focus not image converge"],
	
	//question 97 
	["Imagine a ray diagram including an object and a convex lens. If the object is at 2F the image will be ---- (a type) and -------- (an orientation). If the object is between F and 2F, the image will be ---- (a type), -------- (an orientation) and -------- (a size difference). If the objects is more than 2F away, the image is ----, ------- and ----------. If the object is at -, there will not be an image. If the object is closer than F, the image will be ------- (a type), ------- (an orientation) and -------- (a size difference).","","Real inverted real inverted enlarged real inverted diminished F virtual upright enlarged"],

	//question 98
	["Magnifying glasses use a ------ lens to magnify images. They do this if you position the object less than a focal length away from the lens, as a ------ image is created. This image is enlarged and u------.","","Convex virtual upright"],

	//question 99
	["Magnification = ----- height - ------ height","","Image / object"],
	
	//question 100
	["------- lenses cause light to spread out.","","Concave"],
	
	//question 101
	["The principle focus for a concave lens will apear b----- the lens (if we assume the light is moving forward). It doesn't really exist, but is where the light seems to d------ from.","","Behind diverge"],

	//question 102
	["When drawing a ray diagram for a concave lens, you should draw one line from the top of the object, straight through the center of the lens. This will go straight without being ---------. Then you should draw a line going from the top of the object to the lens. You should then extend this --------- until it reaches the principle ----- and then forward after that. The image will always be d---------, u------ and v------.","concaveLensDiagram.png","Refracted backwards focus diminished upright virtual"],

	//question 103
	["-------- reflection is when all light rays are reflected in the same direction (e.g. a mirror). ------- reflection is when the light is scattered (e.g. paper).","","Specular diffuse"],

	//question 104
	["-------- reflection takes place on smoother surfaces and produces an image.","","Specular"],
	
	//question 105
	["----- light is made up of all the colours. If you pass it through a -----, it will disperse into it's component colours.","","White prism"],

	//question 106
	["An object will appear the colour of all the wavelengths of light it --------.","","Reflects"],

	//question 107
	["Black objects ------ all visible light that hits them.","","Absorb"],

	//question 108
	["Colour filters work by allowing their colour of light through and a------- all other visible light.","","Absorbing"],

	//question 109
	["----------- objects allow light through. ----------- objects allow light through but also scatter it, so they cannot be clearly seen through.","","Transparent translucent"],
	
	//question 110
	["------ objects do not transmit light at all.","","Opaque"],
	
	//question 111
	["All objects, even relatively cold ones, absorb and emit --------- radiation. Hot objects will give out ---- than cold ones.","","Infrared more"],

	//question 112
	["The hotter the object, the ------- the wavelength of the radiation it emits.","","Shorter","Smaller"],

	//question 113
	["A ------- ----- ---- absorbs all the radiation that hits it.","","Perfect black body"],
	
	//question 114
	["Perfect black bodies are both the best possible a-------- and the best possible e-------.","","Absorbers emitters"],

	//question 115
	["If an object is ------ than its surroundings it will emit more radiation than it absorbs and c--- down.","","Hotter cool"],
	
	//question 116
	["If an object is ------ than its surroundings it will absorb more radiation than it emits. It will ---- up.","","Cooler heat"],

	//question 117
	["Objects at a constant temperature are absorbing radiation at an ----- rate to the rate at which it is emitting it.","","Equal"],

	//question 118
	["The Earth gains and loses energy by a--------- and e------- energy. the sun emits ----- wavelength radiation (i.e. visible and UV light). Some of this is reflected by ------. The rest is absorbed by Earth and re-emitted as ---- wavelength radiation. This increases the temperature of Earth. Some of the radiation is trapped by ---------- gases. Humans are increasing the amount of these, causing ------ warming to occur. Eventually the radiation escapes into space, although it may reflect off of ------ and back to Earth first.","","Absorbing emitting short clouds long greenhouse global clouds"],
];

//set title 
var title = "Waves";