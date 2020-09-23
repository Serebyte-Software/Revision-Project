//ratesOfReaction.js

//questions
var questions = [
	//question 1
	["You can use graphs to see how much _______ is formed or ________ is used (Y-axis) with time (X-axis) in a chemical reaction.","","Product reactant"],

	//question 2
	["The gradient of a product formed (or reactant used) against time graph represents the r____ __ r_______.","","Rate of reaction"],

	//question 3
	["The s_____ the gradient on a reaction graph, the faster the rate of _______.","","Steeper reaction"],

	//question 4
	["The rate of reaction will ________ with time, as there will be fewer molecules still left to react.","","Decrease"],

	//question 5
	["On a product-formed / time graph, the product formed may be measured in g____ (for solids and liquids), cm<sup>3</sup> (for _____) or _____ (for any substance).","","Grams gases moles"],

	//question 6
	["You can calculate the mean rate of reaction with the equation: amount of ______ formed or reactant used (there are different possible units for this) _ ____ (s). Use a * to represent multiply and a / to represent divide.","","Product / time"],

	//question 7
	["You can calculate the rate of reaction at a specified time by drawing a ______ line (a line with the same gradient that branches off from that point of the graph) at that point of the graph and finding the _______ of this line (change in _ / change in _). This is useful for c_____ lines.","tangentOfRateOfReactionGraph.png","Tangent gradient Y X curved"],

	//question 8
	["C________ Theory states that reactions can only take place when reacting particles c______ with each other with s_________ energy.","","Collision collide sufficient"],

	//question 9
	["The higher the c____________s of reacting solutions, the h______ the rate of reaction. This is because the reacting particles are c_____ together and therefore will collide more frequently. The same is true for the ________ of a gas. This explains why the rate of reaction will d_______ as the reaction goes on.","","Concentrations higher closer pressure decrease"],

	//question 10
	["The c_____________ of two reacting solutions (or ________ of a gas) are directly proportional to the ____ of reaction.","","Cocnentrations pressure rate"],

	//question 11
	["You can perform an experiment to investiage how different factors effect rate of reaction. The first step involves setting up the equipment. You will need some sodium ___________ solution and some ___________ acid. You must know the concentrations of both. You will also need a _______ flask and a piece of paper with a black cross on it to put under it. To measure the time taken for the reaction, you will use a stopclock.","","Thiosulfate hydrochloric conical"],

	//question 12
	["You can perform an experiment to investigate how different factors effect rate of reaction. The second step involves mixing the sodium ___________ solution (use __ cm<sup>3</sup>) with ____________ acid (the same volume) and stirring the solution. This will produce _____, which will turn the solution cloudy. The scientific term for this cloudiness produced is ________. Time how long it takes for the cross to become i________ due to the cloudiness and record this value.","","Thiosulfate 10 hydrochloric sulfur turbidity invisible"],
	
	//question 13
	["You can perform an experiment to investigate how different factors effect rate of reaction. The third step involves repeating the experiment but changing o__ factor (e.g. c_____________ of o__ solution - keep all the other factors, such as temperature the same). You should then write up a table of your results and repeat the whole thing again to calculate a set of ____ times. Make sure to exclude a________ results.","","One concentration one mean anomalous"],

	//question 14
	["One problem with the disappearing cross experiment is that the time recorded depends on the observer's e_______. It also does not allow us to calculate a ____ of reaction.","","Eyesight rate"],
	
	//question 15
	["You can easily calculate the rate of reaction when the product is a gas using a mass balance. The first step of this involves setting up a conical _____, filling it with __cm<sup>3</sup> hydrochloric acid, putting some ______ ____ in the top (to allow gas to leave the flask but not any spitting acid) and putting it on a mass balance. You will need a strip of m________ of known mass. You should record the starting mass of the solution and ___ the mass of the m________ onto it. You will also need a _________ or stopwatch to record the time taken.","","Flask 50 cotton wool magnesium add magnesium"],

	//question 16
	["You can easily calculate the rate of reaction when the product is a gas using a mass balance. The second step involves putting the m________ in the hydrochloric acid (you may have to quickly remove and replace the cotton wool). Every __ seconds, record the ____ of the apparatus, until the reaction stops (you can tell when this has happened because there will be no fizzing in the acid and the mass will stop decreasing). The hydrogen will leave the conical flask.","","Magnesium 10 mass"],

	//question 17
	["You can easily calculate the rate of reaction when the product is a gas using a mass balance. The third step involves repeating the experiment and changing the _____________ of the hydrocholric acid. Keep all the other factors that could potenitally influence the result (e.g. volume, amount of magnesium or t_________) constant. Then, you can calculate the mass of gas formed against time.  After that, you can repeat the experiment and calculate a ____, excluding _________. You can then draw a set of graphs of _______ (i.e. hydrogen gas) formed (in grams) against time (seconds) for each of the concentrations. The rate of reaction will be equal to the ________ at any specified time.","","Concentration temperature mean anomalies product gradient"],

	//question 18
	["You can conduct an experiment to calculate the rate of reaction using a gas syringe. This will only work if the product is a ___. You can set up a conical flask and filling it with __cm<sup>3</sup> of ____________ acid. Add a known mass of m________ (keep this the same for all repeats) and attach a b___ connected to the gas syringe. Start a stopclock.","","Gas 50 magnesium bung"],

	//question 19
	["You can conduct an experiment to calculate the rate of reaction using a gas syringe. The second step involves timing how long it takes for the magnesium to completely react (i.e. stop f______) and then recording the ______ of gas in the gas syringe. You can then calculate the rate of reaction in cm<sup>3</sup>/s. You can then repeat this with a different c____________ of hydrochloric acid and then repeat the whole experiment to calculate the mean, making sure to discard _________. You can then plot a graph of product formed (cm<sup>3</sup>) against time (s). Finding the ________ will give you the rate of reaction at a specific time.","","Fizzing volume concentration anomalies gradient"],
	
	//question 20
	["Any experiments to do with proving that concentration is _______ proportional to rate of reaction must be ____________. This means that you must be able to get the same results when different people perform the experiment with different equipment.","","directly reproducible"],
	
	//question 21
	["The higher the surface area of a solid reactant, the h_____ its rate of reaction will be. You can test this by performing either of the two previously mentioned experiments, but replacing the magnesium with c______ c________ (i.e. marble chips). This will react with the hydrochloric acid to produce carbon dioxide gas. You should use a big clump of them (which will react slower) and then use crushed up chips (which will react faster). Make sure to keep the m___ of marble chips, the c____________ of the acid and the temperature the same.","","Higher calcium carbonate mass concentration"],
	
	//question 22
	["Increasing temperature will i_______ the rate of reaction. In a solution, different particles will have different amounts of e_____. If they do not have sufficient energy, they will not react. Increasing the temperature will increase the a______ e_____ of the particles, also increasing their s___, making successful collisions more frequent.","","Increase energy average energy speed"],
	
	//question 23
	["Catalysts increase the rate of reaction and ______ used up in the reaction. They can therefore save a lot of m____ in industry. They provide a different p______ for a reaction with a l____ activation energy. This means that colliding particles require less energy to react, and successful collisions will therefore become more f_______.","","Aren't money pathway lower frequent","Arent money pathway lower frequent"],
	
	//question 24
	["________ are not included in chemical equations because they a_____ used up.","","Catalysts aren't","Catalysts arent"],

	//question 25
	["Enzymes are __________ catalysts.","","Biological"],
	
	//question 26
	["Some reactions are _________, and will have the symbol: ⇌, as opposed to →. One example of this is n<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>","","Reversible"],

	//question 27
	["One well-known reversible reaction is: ________ copper sulfate (blue) ⇌ ________ copper sulfate (white) + water. Heating it will increase the yield of the forwards reaction and cooling it will increase the yield of the backwards reaction. This tells us that the forward reaction is ___________ because adding energy increases the amount of _________ copper suflate and water formed.","","Hydrated anhydrous endothermic anhydrous"],
	
	//question 28
	["If a reversible reaction is endothermic in one direction, it is __________ in the other direction. The amount of energy transferred in both directions will be _____.","","Exothermic equal"],
	
	//question 29
	["When a reversible reaction happens, it will go both ways simultaneously until a position of ___________ is found, where the rate of the forwards reaction equals that of the backwards direction.","","Equilibrium"],

	//question 30
	["Le __________ Principle states that: if a system is at equilibrium and a change is made to the c_________, then the system responds to ______ the change.","","Chatelier's conditions oppose","Chaterliers conditions oppose"],
	
	//question 31
	["When the concentration of the reactant (left) of a reversible reaction at equilibrium is increased, the position of equilibrium will move to the _____ (making more _______s) to reduce the concentration of the reactants. If you increase the concentration of the products (or decrease the concentration of the reactants), then the position of equilibrium will move to the ____ to compensate.","","Right products left"],
	
	//question 32
	["Increasing the temperature of a reversible reaction at equilibrium will stop it from being at equilibrium. If the forwards reaction is ___________, the position of equilibrium will move to the right, in favour of creating more product. If it is __________, it will move to the left, in favour of creating more reactant. This will ______se the temperature, counteracting the change. The opposite will happen if the temperature is d________d instead.","","Endothermic exothermic decrease decreased"],
	
	//question 33
	["Increasing the pressure on a reversible reaction at equilibrium (if the chemicals are _____) will cause the position of equilibrium to move to the side with the ____er number of molecules, creating more of these and decreasing the pressure. Decreasing the pressure will result in the position of equilibrium moving to the side with the l___st number of molecules, increasing the pressure and counteracting the change.","","Gases fewer largest"],
	
	//question 34
	["When the pressure is increased on the reaction N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, the position of equilibrium will move to the _____. This means that more _______ will be present when equilibrium is reached again.","","Right ammonia"],

	//question 35
	["When the pressure is decreased on the reaction N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, the position of equilibrium will move to the _____. This means that more n_______ and ________ will be present when ___________ is reached again.","","Left nitrogen hydrogen equilibrium"],
	
	//question 36
	["If the pressure is increased on a reversible reaction at equilibrium and both sides have the same number of molecules, there w_____ be change to the position of equilibrium.","","Won't","Wont"],
	
	//question 37
	["When the temperature is increased on the reaction N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, the position of equilibrium will move to the _____. This means that more n_______ and h_______ will be present when equilibrium is reached again, lowering the temperature.","","Left nitrogen hydrogen"],
	
	//question 38
	["When the temperature is decreased on the reaction N<sub>2</sub> + 3H<sub>2</sub> ⇌ 2NH<sub>3</sub>, the position of equilibrium will move to the _____. This means that more ________ will be present when equilibrium is reached again, increasing the temperature.","","Right ammonia"],
	
	//question 39
	["If the concentration of 2NO<sub>2</sub> is increased at equilibrium in the reaction 2NO<sub>2</sub> ⇌ N<sub>2</sub>O<sub>4</sub>, the we would expect the position of equilibrium to move to the _____, favouring the ________ reaction.","","Right forwards"],

	//question 40
	["If the concentration of N<sub>2</sub>O<sub>4</sub> is increased at equilibrium in the reaction 2NO<sub>2</sub> ⇌ N<sub>2</sub>O<sub>4</sub>, the we would expect the position of equilibrium to move to the ____, favouring the r______ reaction.","","Left reverse"],
];

//title 
var title = "Rates of Reaction";