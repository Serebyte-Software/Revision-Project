//chemical analysis questions.js

//set questions 
var questions = [
	//question 1 
	["A chemically ____ substance is one substance (an element or compound) that is not mixed with anything else.","","Pure"],
	
	//question 2
	["Chemically pure substances only melt or boil at o__ specific temperature. You can test if a substance is pure by melting/boiling it. While it changes state, the temperature will remain c_______ if it's pure but will continue to rise slowly if the substance isn't pure. This is because different components of the not-pure substance will melt/boil at slightly different ____________.","","One constant temepratures"],
	
	//question 3
	["A ___________ is a useful mixture where each of its components have been carefully measured out.","","Formulation"],
	
	//question 4 
	["_____________ is the process used to separate dyes in a mixture.","","Chromatography"],
	
	//question 5
	["In paper chromatography, the paper is the _________ phase and the solvent is the ______ phase.","","Stationary mobile"],
	
	//question 6
	["You can easily carry out paper chromatography. First you set a piece of ______________ paper. The you draw a _______ line across the width, near the bottom of the sheet. The place down dots of your dyes spaced out along the line. After that, you put the paper in a _______ of you choice, making sure that it is below the line, so the inks don't just dissolve straight into it. The _______ will move up the page, dissolving the dyes and moving them up too. Thy dyes made up of multiple dyes will from m_______ spots, whereas the dyes that are pure will only form one spot.","","Chromatography pencil solvent solvent multiple"],
	
	//question 7
	["Chromatography works because the chemicals are all attracted to the __________ and mobile phases to different e______. Chemicals that are strongly attracted to the stationary phase _____ move very far.","","Stationary extents won't","Stationary extents wont"],
	
	//question 8
	["On a chromatogram, you can calculate the RF value: distance travelled by ___ / distance travelled by _______.","","Dye solvent","Solute solvent","Chemical solvent"],
	
	//question 9
	["Solutes will have _______nt RF values in different solvents.","","Different"],
	
	//question 10 
	["You can use paper chromatography to figure out what colours a food colouring is made of. We call this unknown mixture US. The first step involves gathering U and ____ known food colourings. We should label these with the letters _ to _.","","Four A D"],
	
	//question 11
	["You can use paper chromatography to figure out what colours a food colouring is made of. The second step involves gathering the _____________ paper and drawing a line in _______ (do not use pen, as this will dissolve in the solvent, ruining the results). You should put your dyes on this line using a _________ ____. Make sure to equally space these out, leaving about _ cm between them.","","Chromatography pencil capillary tube 1","","Chromatography pencil capillary tube one"],
	
	//question 12
	["You can use paper chromatography to figure out what colours a food colouring is made of. The third step involves pouring the _______. Water is good for this. It should be about o__ cm deep and therefore below the pencil line on the paper. Put the paper (the __________ phase) in the water (you may want to attach it to a rod of some kind, and maybe even a ___ to stop the solvent from evaporating) and watch as the ______ (i.e. _______ phase) moves up the paper, carrying with it all the dyes.","","Solvent one stationary lid solvent mobile"],
	
	//question 13
	["You can use paper chromatography to figure out what colours a food colouring is made of. The fourth step involves waiting until the solvent has stopped moving up the page, or has moved about _____ quarters up the page. The result on the paper is called a ___________. You should see that each of the dyes will leave specific d____ of their colours on the page, as they will have moved up the paper different amounts (this is based on their RF values). Impure dyes (i.e. _________) will have multiple dots of d________ colours. You should be able to see which colours make up the unknown mixture, as the unknown mixture will separate out into each of its components, so long as they have different __ values. If you are uncertain, you may want to calculate these values for every dye. You can use these to identify the c________s the dyes actually are via a d_______.","","Three chromatogram mixtures different RF chemicals database"],
	
	//question 14
	["You can use paper chromatography to figure out what colours a food colouring is made of. The fifth step involves repeating the experiment using a different _______. Chemicals have different __ values in different solvents, and some chemicals have similar __ values in one particular solvent, but different ones in others. Repeating the experiemnt therefore allows us to ensure that we know what the chemicals used actually are.","","Solvent RF RF"],
	
	//question 15 
	["____ ______ ___________ (TLC) produces better chromatograms than paper chromatography. TLC uses ______ on a flat _____ plate for the stationary phase. It usually shows a greater s__________ of the chemicals being tested. The ______ phase also moves more quickly and evenly through the __________ phase.","","Thin layer chromatography silica glass separation stationary"],
	
	//question 16
	["The distance that a sample travels up the stationary phase in chromatography depends on the _______ and the s___ of the molecules. L_____ molecules will take longer to move up it. P_____ molecules will be more attracted to _____ solvents, so would move further up the page if one of these is used, as opposed to a non-polar one.","","Polarity size larger polar polar"],
	
	//question 17
	["You can test for hydrogen gas by putting a lit s_____ into a test tube. If there is hydrogen in the test tube, the gas will burn rapidly to produce a s______ p__ sound.","","Splint squeaky pop"],
	
	//question 18
	["You can test for oxygen gas by puttin a ____ing splint into a test tube. If there is oxygen in the tube, the splint will _______.","","Glowing relight"],
	
	//question 19
	["You can test for carbon dioxide by putting limewater (aqueous _______ _________) in a test tube. You should put the gas you're testing into a plastic ______ and pump it into the limewater. After a few pumps, if carbon dioxide is present, the limewater will turn _______.","","Caclium hydroxide pipette cloudy"],
	
	//question 20
	["You can test for chlorine gas by putting damp ______ paper into the test tube that you want to test for chlorine. If chlorine gas is pleasant, the paper will be ________ so that it turns _____ in colour.","","Litmus bleached white"],
	
	//question 21
	["You can test for metal ions using ______ tests. These involve putting a small amount of the chemical onto some ____ attached to a handle. You should then put this into a ____ Bunsen-burner flame. Different metal ions will give off different colour flames.","","Flame wire blue"],
	
	//question 22
	["In a flame test: lithium will produce a _______ flame, sodium will produce a ______ flame, potassium a _____ flame, calcium an _________ flame and copper a _____ flame.","","Crimson yellow lilac orange-red green","Crimson yellow lilac orange red green","Crimson yellow lilac orangered green"],
	
	//question 23
	["There are problems with using flame tests to detect metal ions. The colour can be difficult to d________sh, especially if there's a low c_________ion of the metal compound. If there's more than one type of metal ion, the colours will be m______, making them unreliable.","","Distinguish concentration masked"],
	
	//question 24  
	["______ ________ ___________ is a more reliable alternative to a standard flame test. A sample including one or more metal ions in a ________ should be passed into a flame. The light outputted should then be passed through a ___________. This will create a line _________. Different metal ions will have different ____ spectra. We can therefore use the machine to tell which ions are in a sample.","","Flame emission spectroscopy solution spectroscope spectrum line"],
	
	//question 25
	["A sepctroscope can tell you the exact c_______ons of metal ions in a solution. This is because a higher c_________ion will produce a more i____se line spectrum.","","Concentrations concentration intense"],
	
	//question 26
	["Flame emission spectroscopy is an exampel of an ____________ method of analysing a chemical sample.","","Instrumental"],
	
	//question 27 
	["There are three main benefits to using instrumental methods of chemical analysis. They are very f___ compared to non-instrumental methods. They are very ________, only requiring a tiny sample. They are very ________ - their answers are much more likely to be correct.","","Fast sensitive accurate"],
	
	//question 28 
	["You can use _______ _________ solution to identify some metal ions.","",""],
	
	//question 29
	["When mixed with sodium hydroxide, c______, m_________ and _________ ions will all form a white precipitate. If excess sodium hydroxide solution is added, the _________ precipitate will redissolve. A flame test can then be used to determine which one is _______. They all do this because they will be ____________ by the sodium, and will therefore form a solid h_______ precipitate..","","Calcium magnesium aluminium aluminium calcium displaced hydroxide"],
	
	//question 30 
	["Calcium nitrate (aq) + sodium hydroxide (aq) → sodium _______ (__) + calcium _________ (_). A similar thing will happen for other calcium compounds. We can tell that _______ _________ is a precipitate because of its state symbol.","","Nitrate aq hydroxide s caclium hydroxide"],
	
	//question 31 
	["Copper (II) ions react with sodium hydroxide to form a ____ precipitate of ______ (II) _________.","","Blue copper hydroxide"],
	
	//question  32
	["Iron (II) ions react with sodium hydroxide to form a _____ precipitate of ______ (II) _________.","","Green iron hydroxide"],
	
	//question 33 
	["Iron (III) ions react with sodium hydroxide to form a _____ precipitate of ______ (III) _________.","","Brown iron hydroxide"],
	
	//question 34 
	["You can test for carbonate ions by mixing the sample with ______ acid (any type). If carbonates are present, you will see e____________. You can bubble the produced gas through __________, which will turn ______ if carbon dioxide is present.","","Dilute effervescence limewater cloudy"],
	
	//question 35
	["You can test for halide ions (idodide, chloride and bromide) by adding dilute ______ acid to the samle. You can then add _______ _______ solution. Halide ions will produce a precipitate of the ______ ______. Chloride ions produce a _____ precipitate of silver chloride, bromide a _____ of silver bromide and iodide a _______ precipitate of silver iodide.","","Nitric silver nitrate sliver halide white cream yellow"],

	//question 36
	["You can test for sulfate ions by adding dilute ____________ acid to the sample. You can then add ______ _______ solution. A _____ precipitate will form if there are sulfate ions.","","Hydrochloric barium chloride white"],

	//question 37
	["Remember that all the tests carried out work on ________ of the ion, not just the ion in isolation. This is because the compound is i______ or reacts with something in most of the tests.","","Compounds ionised"],

	//question 38
	["A compound produced an orange-red flame in a flame test, effervesced with acid and the gass produced turned limewater cloudy. What was the compound?","","Calcium carbonate"],
	
	//question 39
	["A compound produced a blue precipitate when reacted with sodium hydroxide solution. It also produced a white precipitate when mixed with barium chloride solution and hydrochloric acid. What was the compound? Include the charge on the metal ion in brackets.","","Copper (II) Sulfate"],
	
	//question 40
	["A compound produced a lilac flame in a flame tet and a yellow precipitate when reacted with silver nitrate solution and dilute nitric acid. What was the compound?","","Potassium iodide"],
];

//set title
var title = "Chemical Analysis";