//OrganicChemistryQuestions.js

//create questions 
var questions = [
	//question 1 
	["Crude oil is a f_____ resource that is found in ____s. It is formed over _______ of years from the remains of _______ buried in mud.","","Finite rocks millions plankton"],

	//question 2
	["Hydrocarbons are compounds made up of only h_______ and c_____ atoms only. Crude oil is mostly made up of a wide variety of ___________.","","Hydrogen carbon hydrocarbons"],
	
	//question 3
	["Alkanes are hydrocarbons with the formula C<sub>n</sub>H<sub>____</sub> (please do not include spaces here). They form a _________ series (a series of chemicals linked by a pattern showing trends and similarities). The first four alkanes are: ________, ______, _______ and ______. Because every carbon is bonded to 4 other atoms, we say that alkanes are ________ hydrocarbons.","","2n+2 homologous methane ethane propane butane saturated"],
	
	//question 4
	["You can draw the structure of an alkane. The carbons link together (with a ______ bond) to form a chain. The rest of the free electrons in the valence shell are bonded to ________ atoms.","propane.png","Single hydrogen"],
	
	//question 5
	["The larger a hydrocarbon molecule is, the more v______ (gloopy) it is, the less f________ it is and higher its b______ _____ is.","","Viscous flammable boiling point"],
	
	//question 6
	["The complete combustion of a hydrocarbon will result in the production of ______ ________ and _____ only. The number of _______ _______ molecules will be _____ to the carbon chain length of the hydrocarbon, allowing you to balance the equation. This only occurs when oxygen is not the ________ reactant. Otherwise ___________ combustion will occur, producing a mix of the previous two products, as well as carbon ________ and carbon particulates. The exact amount of each product depends on how much oxygen was reacted.","","Carbon dioxide water carbon dixoide equal limiting incomplete monoxide"],
	
	//question 7
	["__________ ____________ is used to separate the different fractions (groups of hydrocarbons with a similar number of carbon atoms and therefore _______ points) in crude oil. This process takes place in a tall column, where the temperature _____ses with height. The hydrocarbons are boiled and float up the column until they reach a height where the temperature is lower than their _______ ______. They will then c_______ and can be collected with pipes. Especially ____ carbon-chain hydrocarbons do not boil and are collected from the bottom of the column. Very _____ ones do not condense and are collected from the top.","","Fractional distillation boiling decreases boiling point condense long short"],
	
	//question 8 
	["The different fractions of crude oil (in order of d________ chain-length) include: _______ (this doesn't boil in the column and is used to surface roads), ____ ____ ____ (used to fuel ships), _______ (jet fuel), _____ (truck fuel and used for some cars), ______ (standard car fuel) and ________ _________ ___ (this is tapped off from the very top of the column and is used to fuel stoves and many other things).","","Decreasing bitumen heavy fuel oil kerosene diesel petrol liquefied petroleum gas"],
	
	//question 9
	["Some fractions of crude oil are used as __________ (a chemical used to make other chemicals). They can be used to make s_______, l_________, d________ ans p_______.","","Feedstocks solvents lubricants detergents polymers"],

	//question 10
	["_______ is used to break long-chain hydrocarbons (which are not very flammable and in low demand) into ____-chain hydrocarbons (which are flammable and in high demand). It will also produce an _______. There are two types _________ (using a catalyst to speed up the reaction) and ____ (which uses steam). Both use very ____ temperatures. ","","Cracking short alkene catalytic steam high"],
	
	//question 11
	["Please balance this cracking equation: C<sub>16</sub>H<sub>34</sub> → C<sub>10</sub>H<sub>22</sub> + C<sub>_</sub>H<sub>_</sub>.","","6 12"],
	
	//question 12
	["Alkenes have the general formula: C<sub>x</sub>H<sub>__</sub>. They have at least one carbon-carbon ______ bond, which is why they have fewer hydrogen atoms. We say that they are __________ molecules because not every carbon is bonded to 4 other atoms and have two less hydrogen atoms than their respective alkane.","","2x double unsaturated"],
	
	//question 13
	["________ are much more reactive than alkanes, and will react in d________ ways. They will turn bromine water _________ (it is usually orange). Alkanes will not do this meaning that we can test for ______s.","","Alkenes different colourless alkenes"],
	
	//question 14
	["You can draw the structure of alkenes. They have a similar structure to ______s but one carbon atom on the end is ______ bonded to its adjacent carbon. The below image shows: _______. Larger alkenes will often be able to form slightly different structures.","propene.png","Alkanes double propene"],
	
	//question 15
	["Alkenes form a __________ series. The first four are: ______, ______, ______ and _______.","","Homologous ethene propene butene pentene"],
	
	//question 16
	["The __________ ____ is the part of a molecule that determines how it reacts.","","Functional group"],

	//question 17
	["Members of a __________ series will all have the same _________ _____.","","Homologous functional group","Homologous functional groups"],

	//question 18
	["Alkenes usually combust _________ly, producing unburnt carbon ______les and therefore a ____ flame (at least in air).","","Incompletely particles smoky"],

	//question 19
	["Alkenes react with hydrogen to form their respective _______. This process is called ____________. This usually takes place at around ___ degrees Celsius and uses an _____ catalyst.","","Alkane hydrogenation 150 nickel","Alkanes hydrogenation 150 nickel"],
	
	//question 20
	["Alkenes react with water (in the form of ____) to produce their respective _______. This is called _________ and occurs at ___ degrees Celsius and at __atm of pressure. The reaction is _________, hence the specific conditions. ________ acid is used as a catalyst. The C=C functional group is replaced with a __ one.","","Steam alcohol hydration 300 70 reversible phosphoric OH"],

	//question 21
	["Alkenes react rapidly with halogens. The double bond will break, and each of the carbon atoms in it will bond with a ______ atom (remember that these usually form ________ molecules). The resulting chemical should have the name di[_______ name][corresponding _____ name]. One example is: ethene + chlorine → ______________. Another is Propene + iodine → _____________. The structure for this is shown below:","diiodopropane.png","Halogen diamtoic halogen alkane dichloroethane diiodopropane"],

	//question 22
	["Alcohols form a __________ series. They all have the functional group: __.","","Homologous OH"],
	
	//question 23
	["Alcohols can be used as/in f_____, s_______ and b________.","","Fuels solvents beverages"],
	
	//question 24
	["_______ is the alcohol most commonly found in alcoholic drinks.","","Ethanol"],
	
	//question 25
	["The first four alcohols are: _________, _______, ________ and _______.","","Methanol ethanol propanol butanol"],
	
	//question 26
	["Ethanol can be made from ethene via hydration, but this requires a lot of ______, and therefore money, and ethene (when sourced from crude oil) is a ______ resource. It is often more industrially efficient to make it via the ____________ of _____. This happens when _____ respires ___________. The yeast uses glucose and converts it to _______ and _______ _______ at about __ degrees Celsius. You can write an equation for this, putting yeast above the arrow and the temperature below it. There must not be enough available ______ for the yeast.","","Energy finite fermentation sugar yeast anaerobically ethanol carbon dixoide 30 oxygen"],
	
	//question 27
	["Producing ethanol via fermentation has multiple benefits. it does not require anywhere near as much ______ as hydration does. The resources are all _________ (e.g. the glucose comes from plants).","","Energy renewable"],

	//question 28
	["When ethanol is produced via fermentation, it is produced as part of a _______. It can be separated therefore via ___________, which requires substantial energy.","","Solution distillation"],
	
	//question 29
	["Alcohols are _______ in water. They form _______ solutions. As the number of carbon atoms increases, the solubility ______ses.","","Soluble neutral increases"],
	
	//question 30
	["When alcohols react with sodium, the hydrogen atom in their __________ group (OH) is ____________.","","Functional displaced"],
	
	//question 31
	["Methanol + Sodium → Sodium _________ + ________","","Methoxide hydrogen"],
	
	//question 32
	["Propanol + Sodium → Sodium _________ + ________","","Propoxide hydrogen"],
	
	//question 33
	["When alcohols react with an _________ agent, they produce their corresponding __________ acid and _____..","","Oxidising carboxylic water"],
	
	//question 34
	["When alcohols react with an _________ agent, oxygen is added to their _________ group, between the ______ atom and the hydroxide.","","Oxidising functional carbon"],
	
	//question 35
	["Fill in the blanks for this reaction. (Fill in the two blanks above the arrow first).","oxidationOfAnAlcohol.png","Oxidising agent butanoic water"],
	
	//question 36
	["Alcohols burn in air to produce ______ _______ and _____.","","Carbon dioxide water"],
	
	//question 37
	["What chemical is this?","propanol.png","Propanol"],
	
	//question 38
	["The __________ acids form a __________ series.","","Carboxylic homologous"],
	
	//question 39
	["What functional group do the carboxylic acids have?","","COOH"],
	
	//question 40
	["What chemical is this?","ethanoicAcid.png","Ethanoic acid"],
	
	//question 41
	["What is the structural formula for methanoic acid? (Write the subscript numbers as regualr numbers)","","HCOOH"],
	
	//question 42
	["What is the structural formula for ethanoic acid? (Write the subscript numbers as regular numbers)","","CH3COOH"],
	
	//question 43
	["What is the structural formula for propanoic acid? (Write the subscript numbers as regualr numbers)","","CH3CH2COOH"],
	
	//question 44
	["What is the structural formula for butanoic acid? (Write the subscript numbers as regualr numbers)","","CH3CH2CH2COOH"],
	
	//question 45
	["Carboxyllic acids only _________ ionise and therefore produce ____ acids. This is because the reaction through which they ionise is _________, so not all the acid molecules at any given time will be ionised.","","Partially weak reversible"],
	
	//question 46
	["Ethanoic acid ⇌ _________ ion<sup>-</sup> + hydrogen<sup>+</sup>. This can be written as: ______ ⇌ _______ + __. (Write the subscript and superscript as normal characters)","","Ethanoate CH3COOH CH3COO- h+"],
	
	//question 47
	["Carboxylic acids react with metal __________ to produce a ____, ______ _______ and water.","","Carbonates salt carbon dioxide"],
	
	//question 48
	["Carboxylic acids react with alcohols to produce an ______ (with the functional group ___) and _____.","","Ester COO water","Ester -COO- water"],
	
	//question 49
	["______ have pleasant, fruity, smells and are often used in foods.","","Esters"],
	
	//question 50
	["Ethanoic acid reacts with ethanol to produce  the ___er: _____ ________ and _____. This process requires _________ acid as a ________.","","Ester ethyl ethanoate water sulfuric catalyst"],
	
	//question 51
	["What chemical is this?","ethylEthanoate.png","Ethyl ethanote"],
	
	//question 52
	["________ are made by joining together many identical molecules called ________.","","Polymers monomers"],
	
	//question 53
	["________ _________ have alkenes as their monomers. They are simply added onto each other and the _____ bond is b______.","","Addition polymers double broken"],
	
	//question 54
	["One example of addition polymerisation is the addition of ______ monomers to make polyethene.","","Ethene"],
	
	//question 55
	["To get the repeating unit of polyethene (an addition polymer), you simply draw out ___ carbon atoms bonded together with their hydrogen atoms attached. Put normal brackets around them, so that the bond lines after each carbon go through the brackets. Then write a small letter _ to the bottom right of the brackets","","Two n"],
	
	//question 56
	["In addition polymerisation, the _______ has the ____ number of atoms as the repeating unit, as no other molecules are formed. The repeating unit d______ contain a double bond.","","Monomer same doesn't","Monomer same doesnt"],
	
	//question 57
	["What polymer is this the repeating unit of?","polypropene.png","Polypropene","Poly(propene)","Poly-propene"],
	
	//question 58
	["____________ polymerisation uses two different monomers, each with ___ of the same ___________ groups. When the monomers join, small molecules, such as _____, are produced.","","Condensation two functional diol water"],
	
	//question 59
	["One example of condensation polymers uses ethane ____ and ________ acid. The first has two _______ groups and the second has two ________ ____ groups. When these react, they form an _____ and _____. The _____ will have an alcohol goup on one end and a carboxylic acid one on the other, allowing you to add on even more molecules of the monomers in a r_________ fashion.","","Diol hexanedioic alcohol carboxylic acid ester water repeating"],
	
	//question 60
	["When looking at a condensation polymer, it is not necessary to draw the whole molecules of the monomers. You can simply draw a b__ with the two __________ groups emerging from either end.","","Box functional"],
	
	//question 61
	["You can draw the __________ unit for condesation polymerisation . You do this by drawing two adjacent __________ groups (e.g. OOC and COO for an ester), with boxes (representing the rest of the molecule) in between.","condensationPolymerisation","Repeating functional"],
	
	//question 62
	["Amino acids have two _________ functional groups.","","Different"],
	
	//question 63
	["What is the name of this amino acid?","glycine.png","Glycine"],
	
	//question 64
	["What is the structural formula for Glycine? (Use normal numbers for the subscript).","","H2NCH2COOH"],

	//question 65
	["What are the two functional groups of glycine? Write the subscript as normal numbers.","","H2N COOH","COOH H2N"],

	//question 66
	["You can polymerise amino acids. One example is glycine. When glycine molecules react together via ____________ polymerisation, they form ___________ and water.","","Condensation polyglycine"],

	//question 67
	["A ___________ is a polymer made from only one type of amino acid.","","Polypeptide"],
	
	//question 68
	["All amino acids have two functional group: the _____ group (___ - write the subscript as normal script) and the _________ acid group (____).","","Amine NH2 carboxylic COOH","Amine H2N carboxylic COOH"],
	
	//question 69
	["A polymer made from multiple different amino acids is called a _______.","","Protein"],
	
	//question 70
	["DNA, or _________________ acid is a polymer in almost all living organisms. It consists of t__ polymer chains made from monomers called ___________.","","Deoxyribonucleic two nucleotides"],

	//question 71
	["The nucleotide monomers (in alphabetic order) are: _, _,  c_ and _.","","A C G T"],

	//question 72
	["What nucleotide monomer pairs with A?","","T"],
	
	//question 73
	["What nucleotide monomer pairs with C?","","G"],
	
	//question 74
	["In DNA, the two polymer chains wrap around each other to form a ______ _____.","","Double Helix"],

	//question 75
	["Starch and cellulose are both polymers made from _______. Their molecules are arranged in different ways, however.","","Glucose"],
];

//title 
var title = "Organic Chemistry";