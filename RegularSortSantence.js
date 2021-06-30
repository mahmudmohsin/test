let A = document.getElementById("A");
    	let B = document.getElementById("B");
    	let C = document.getElementById("C");
    	let D = document.getElementById("D");
    	let E = document.getElementById("E");
    	let F = document.getElementById("F");
    	let G = document.getElementById("G");
    	let H = document.getElementById("H");
    	let I = document.getElementById("I");
    	let J = document.getElementById("J");
    	let K = document.getElementById("K");
    	let L = document.getElementById("L");
    	let M = document.getElementById("M");
    	let N = document.getElementById("N");
    	let O = document.getElementById("O");
    	let P = document.getElementById("P");
    	let Q = document.getElementById("Q");
    	let R = document.getElementById("R");
    	let S = document.getElementById("S");
    	let T = document.getElementById("T");
    	let U = document.getElementById("U");
    	let V = document.getElementById("V");
    	let W = document.getElementById("W");
    	let X = document.getElementById("X");
    	let Y = document.getElementById("Y");
    	let Z = document.getElementById("Z");
    	let AA = document.getElementById("AA");
    	let BB = document.getElementById("BB");
    	let CC = document.getElementById("CC");
    	let DD = document.getElementById("DD");
    	let EE = document.getElementById("EE");
    	let FF = document.getElementById("FF");
    	let GG = document.getElementById("GG");
    	let HH = document.getElementById("HH");
    	let II = document.getElementById("II");
    	let JJ = document.getElementById("JJ");
    	let KK = document.getElementById("KK");
    	let LL = document.getElementById("LL");
    	let MM = document.getElementById("MM");
    	let NN = document.getElementById("NN");
    	let OO = document.getElementById("OO");
    	let PP = document.getElementById("PP");
    	let QQ = document.getElementById("QQ");
    	let RR = document.getElementById("RR");
    	let SS = document.getElementById("SS");
    	let TT = document.getElementById("TT");
    	let UU = document.getElementById("UU");
    	let VV = document.getElementById("VV");
    	let WW = document.getElementById("WW");
    	let XX = document.getElementById("XX");
    	let YY = document.getElementById("YY");
    	let ZZ = document.getElementById("ZZ");
    	let AAA = document.getElementById("AAA");
    	let BBB = document.getElementById("BBB");
    	let CCC = document.getElementById("CCC");
    	let DDD = document.getElementById("DDD");
    	let EEE = document.getElementById("EEE");
    	let FFF = document.getElementById("FFF");
    	let GGG = document.getElementById("GGG");
    	let HHH = document.getElementById("HHH");
    	let III = document.getElementById("III");
    	let JJJ = document.getElementById("JJJ");
    	let KKK = document.getElementById("KKK");
    	let LLL = document.getElementById("LLL");
    	let MMM = document.getElementById("MMM");
    	let NNN = document.getElementById("NNN");
    	let OOO = document.getElementById("OOO");
    	let PPP = document.getElementById("PPP");
    	let QQQ = document.getElementById("QQQ");
    	let RRR = document.getElementById("RRR");
    	let SSS = document.getElementById("SSS");
    	let TTT = document.getElementById("TTT");
    	let UUU = document.getElementById("UUU");
    	let VVV = document.getElementById("VVV");
    	let WWW = document.getElementById("WWW");
    	let XXX = document.getElementById("XXX");
    	let YYY = document.getElementById("YYY");
    	let ZZZ = document.getElementById("ZZZ");
    	let AAAA = document.getElementById("AAAA");
    	let BBBB = document.getElementById("BBBB");
    	let CCCC = document.getElementById("CCCC");
    	let DDDD = document.getElementById("DDDD");
    	let EEEE = document.getElementById("EEEE");
    	let FFFF = document.getElementById("FFFF");
    	let GGGG = document.getElementById("GGGG");
    	let HHHH = document.getElementById("HHHH");
    	let IIII = document.getElementById("IIII");
    	let JJJJ = document.getElementById("JJJJ");
    	let KKKK = document.getElementById("KKKK");
    	let LLLL = document.getElementById("LLLL");
    	let MMMM = document.getElementById("MMMM");
    	let NNNN = document.getElementById("NNNN");
    	let OOOO = document.getElementById("OOOO");
    	let PPPP = document.getElementById("PPPP");
    	let QQQQ = document.getElementById("QQQQ");
    	let RRRR = document.getElementById("RRRR");
    	let SSSS = document.getElementById("SSSS");
    	let TTTT = document.getElementById("TTTT");
    	let UUUU = document.getElementById("UUUU");
    	let VVVV = document.getElementById("VVVV");
    	let WWWW = document.getElementById("WWWW");
    	let XXXX = document.getElementById("XXXX");
    	let YYYY = document.getElementById("YYYY");
    	let ZZZZ = document.getElementById("ZZZZ");
    	let AAAAA = document.getElementById("AAAAA");
    	let BBBBB = document.getElementById("BBBBB");
    	let CCCCC = document.getElementById("CCCCC");
    	
    	
    	A.addEventListener("click", function(){
    	A.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What’s up?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	A.style.background='#fff';
    	}
    	})
    	B.addEventListener("click", function(){
    	B.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Carry on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	B.style.background='#fff';
    	}
    	})
    	C.addEventListener("click", function(){
    	C.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Wow";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	C.style.background='#fff';
    	}
    	})
    	D.addEventListener("click", function(){
    	D.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "My goodness!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	D.style.background='#fff';
    	}
    	})
    	E.addEventListener("click", function(){
    	E.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How come";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	E.style.background='#fff';
    	}
    	})
    	F.addEventListener("click", function(){
    	F.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What a mess!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	F.style.background='#fff';
    	}
    	})
    	G.addEventListener("click", function(){
    	G.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Oh shit!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	G.style.background='#fff';
    	}
    	})
    	H.addEventListener("click", function(){
    	H.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Yes, go on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	H.style.background='#fff';
    	}
    	})
    	I.addEventListener("click", function(){
    	I.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Oh dear!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	I.style.background='#fff';
    	}
    	})
    	J.addEventListener("click", function(){
    	J.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Hi guys";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	J.style.background='#fff';
    	}
    	})
    	K.addEventListener("click", function(){
    	K.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Good job!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	K.style.background='#fff';
    	}
    	})
    	L.addEventListener("click", function(){
    	L.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "So what?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	L.style.background='#fff';
    	}
    	})
    	M.addEventListener("click", function(){
    	M.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Oh, no!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	M.style.background='#fff';
    	}
    	})
    	N.addEventListener("click", function(){
    	N.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Pay attention!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	N.style.background='#fff';
    	}
    	})
    	O.addEventListener("click", function(){
    	O.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Definitely";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	O.style.background='#fff';
    	}
    	})
    	P.addEventListener("click", function(){
    	P.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let it pass";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	P.style.background='#fff';
    	}
    	})
    	Q.addEventListener("click", function(){
    	Q.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Obviously";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Q.style.background='#fff';
    	}
    	})
    	R.addEventListener("click", function(){
    	R.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I’m off";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	R.style.background='#fff';
    	}
    	})
    	S.addEventListener("click", function(){
    	S.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "It’s your turn";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	S.style.background='#fff';
    	}
    	})
    	T.addEventListener("click", function(){
    	T.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "As if";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	T.style.background='#fff';
    	}
    	})
    	U.addEventListener("click", function(){
    	U.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Damn it!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	U.style.background='#fff';
    	}
    	})
    	V.addEventListener("click", function(){
    	V.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What a surprise!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	V.style.background='#fff';
    	}
    	})
    	W.addEventListener("click", function(){
    	W.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Go to the devil!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	W.style.background='#fff';
    	}
    	})
    	X.addEventListener("click", function(){
    	X.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What about you?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	X.style.background='#fff';
    	}
    	})
    	Y.addEventListener("click", function(){
    	Y.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "so so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Y.style.background='#fff';
    	}
    	})
    	Z.addEventListener("click", function(){
    	Z.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "So be it";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Z.style.background='#fff';
    	}
    	})
    	AA.addEventListener("click", function(){
    	AA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Who cares!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AA.style.background='#fff';
    	}
    	})
    	BB.addEventListener("click", function(){
    	BB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I’m at a loss";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BB.style.background='#fff';
    	}
    	})
    	CC.addEventListener("click", function(){
    	CC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Heiya! It is you I see";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CC.style.background='#fff';
    	}
    	})
    	DD.addEventListener("click", function(){
    	DD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Oh! come on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DD.style.background='#fff';
    	}
    	})
    	EE.addEventListener("click", function(){
    	EE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Excuse me";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EE.style.background='#fff';
    	}
    	})
    	FF.addEventListener("click", function(){
    	FF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Not a bit";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FF.style.background='#fff';
    	}
    	})
    	GG.addEventListener("click", function(){
    	GG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "That’s fantastic";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GG.style.background='#fff';
    	}
    	})
    	HH.addEventListener("click", function(){
    	HH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Next to nothing";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HH.style.background='#fff';
    	}
    	})
    	II.addEventListener("click", function(){
    	II.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Mind your language";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	II.style.background='#fff';
    	}
    	})
    	JJ.addEventListener("click", function(){
    	JJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Come to the point";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJ.style.background='#fff';
    	}
    	})
    	KK.addEventListener("click", function(){
    	KK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "That’s right";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KK.style.background='#fff';
    	}
    	})
    	LL.addEventListener("click", function(){
    	LL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "To be frank";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LL.style.background='#fff';
    	}
    	})
    	MM.addEventListener("click", function(){
    	MM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Really pleased";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MM.style.background='#fff';
    	}
    	})
    	NN.addEventListener("click", function(){
    	NN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I am delighted";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NN.style.background='#fff';
    	}
    	})
    	OO.addEventListener("click", function(){
    	OO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "So kind of you!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OO.style.background='#fff';
    	}
    	})
    	PP.addEventListener("click", function(){
    	PP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Anybody home?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PP.style.background='#fff';
    	}
    	})
    	QQ.addEventListener("click", function(){
    	QQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Keep quiet";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQ.style.background='#fff';
    	}
    	})
    	RR.addEventListener("click", function(){
    	RR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "No entrance";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RR.style.background='#fff';
    	}
    	})
    	SS.addEventListener("click", function(){
    	SS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "It’s enough";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SS.style.background='#fff';
    	}
    	})
    	TT.addEventListener("click", function(){
    	TT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What happened";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TT.style.background='#fff';
    	}
    	})
    	UU.addEventListener("click", function(){
    	UU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What an idea!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UU.style.background='#fff';
    	}
    	})
    	VV.addEventListener("click", function(){
    	VV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Well done";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VV.style.background='#fff';
    	}
    	})
    	WW.addEventListener("click", function(){
    	WW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Indeed!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WW.style.background='#fff';
    	}
    	})
    	XX.addEventListener("click", function(){
    	XX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How peaceful!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XX.style.background='#fff';
    	}
    	})
    	YY.addEventListener("click", function(){
    	YY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Get lost";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YY.style.background='#fff';
    	}
    	})
    	ZZ.addEventListener("click", function(){
    	ZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let me see";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZ.style.background='#fff';
    	}
    	})
    	AAA.addEventListener("click", function(){
    	AAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Oh sure";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAA.style.background='#fff';
    	}
    	})
    	BBB.addEventListener("click", function(){
    	BBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Who knows!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBB.style.background='#fff';
    	}
    	})
    	CCC.addEventListener("click", function(){
    	CCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Bullshit!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCC.style.background='#fff';
    	}
    	})
    	DDD.addEventListener("click", function(){
    	DDD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "But who cares!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DDD.style.background='#fff';
    	}
    	})
    	EEE.addEventListener("click", function(){
    	EEE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "No more buts";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EEE.style.background='#fff';
    	}
    	})
    	FFF.addEventListener("click", function(){
    	FFF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FFF.style.background='#fff';
    	}
    	})
    	GGG.addEventListener("click", function(){
    	GGG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I think so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GGG.style.background='#fff';
    	}
    	})
    	HHH.addEventListener("click", function(){
    	HHH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Calm down";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HHH.style.background='#fff';
    	}
    	})
    	III.addEventListener("click", function(){
    	III.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let’s have a look";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	III.style.background='#fff';
    	}
    	})
    	JJJ.addEventListener("click", function(){
    	JJJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let’s run away";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJJ.style.background='#fff';
    	}
    	})
    	KKK.addEventListener("click", function(){
    	KKK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I am getting wet";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KKK.style.background='#fff';
    	}
    	})
    	LLL.addEventListener("click", function(){
    	LLL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I don’t care!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LLL.style.background='#fff';
    	}
    	})
    	MMM.addEventListener("click", function(){
    	MMM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MMM.style.background='#fff';
    	}
    	})
    	NNN.addEventListener("click", function(){
    	NNN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Little by little";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NNN.style.background='#fff';
    	}
    	})
    	OOO.addEventListener("click", function(){
    	OOO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Is it so!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OOO.style.background='#fff';
    	}
    	})
    	PPP.addEventListener("click", function(){
    	PPP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "If you do case";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PPP.style.background='#fff';
    	}
    	})
    	QQQ.addEventListener("click", function(){
    	QQQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Have a good day";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQQ.style.background='#fff';
    	}
    	})
    	RRR.addEventListener("click", function(){
    	RRR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let’s sit somewhere";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RRR.style.background='#fff';
    	}
    	})
    	SSS.addEventListener("click", function(){
    	SSS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "So far so good";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SSS.style.background='#fff';
    	}
    	})
    	TTT.addEventListener("click", function(){
    	TTT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I tend to think";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TTT.style.background='#fff';
    	}
    	})
    	UUU.addEventListener("click", function(){
    	UUU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I suppose so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UUU.style.background='#fff';
    	}
    	})
    	VVV.addEventListener("click", function(){
    	VVV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I don’t mind";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VVV.style.background='#fff';
    	}
    	})
    	WWW.addEventListener("click", function(){
    	WWW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "If so, so what";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WWW.style.background='#fff';
    	}
    	})
    	XXX.addEventListener("click", function(){
    	XXX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Keep your word";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XXX.style.background='#fff';
    	}
    	})
    	YYY.addEventListener("click", function(){
    	YYY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Nothing is impossible";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YYY.style.background='#fff';
    	}
    	})
    	ZZZ.addEventListener("click", function(){
    	ZZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Whatever (you want)";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZZ.style.background='#fff';
    	}
    	})
    	AAAA.addEventListener("click", function(){
    	AAAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Whatever you do?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAAA.style.background='#fff';
    	}
    	})
    	BBBB.addEventListener("click", function(){
    	BBBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Why should I care?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBBB.style.background='#fff';
    	}
    	})
    	CCCC.addEventListener("click", function(){
    	CCCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Something else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCCC.style.background='#fff';
    	}
    	})
    	DDDD.addEventListener("click", function(){
    	DDDD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Nothing else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DDDD.style.background='#fff';
    	}
    	})
    	EEEE.addEventListener("click", function(){
    	EEEE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Talk sense";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EEEE.style.background='#fff';
    	}
    	})
    	FFFF.addEventListener("click", function(){
    	FFFF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Don’t say anymore";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FFFF.style.background='#fff';
    	}
    	})
    	GGGG.addEventListener("click", function(){
    	GGGG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Forget it";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GGGG.style.background='#fff';
    	}
    	})
    	HHHH.addEventListener("click", function(){
    	HHHH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "What a pity";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HHHH.style.background='#fff';
    	}
    	})
    	IIII.addEventListener("click", function(){
    	IIII.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Hold on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	IIII.style.background='#fff';
    	}
    	})
    	JJJJ.addEventListener("click", function(){
    	JJJJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Do it at once!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJJJ.style.background='#fff';
    	}
    	})
    	KKKK.addEventListener("click", function(){
    	KKKK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Speak with care";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KKKK.style.background='#fff';
    	}
    	})
    	LLLL.addEventListener("click", function(){
    	LLLL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How strange!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LLLL.style.background='#fff';
    	}
    	})
    	MMMM.addEventListener("click", function(){
    	MMMM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "By the grace of Allah";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MMMM.style.background='#fff';
    	}
    	})
    	NNNN.addEventListener("click", function(){
    	NNNN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "How absurd!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NNNN.style.background='#fff';
    	}
    	})
    	OOOO.addEventListener("click", function(){
    	OOOO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Good riddance!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OOOO.style.background='#fff';
    	}
    	})
    	PPPP.addEventListener("click", function(){
    	PPPP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Just for asking";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PPPP.style.background='#fff';
    	}
    	})
    	QQQQ.addEventListener("click", function(){
    	QQQQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Stand in queue";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQQQ.style.background='#fff';
    	}
    	})
    	RRRR.addEventListener("click", function(){
    	RRRR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "No smoking";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RRRR.style.background='#fff';
    	}
    	})
    	SSSS.addEventListener("click", function(){
    	SSSS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Let me digress";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SSSS.style.background='#fff';
    	}
    	})
    	TTTT.addEventListener("click", function(){
    	TTTT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I swear I will";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TTTT.style.background='#fff';
    	}
    	})
    	UUUU.addEventListener("click", function(){
    	UUUU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "I give up";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UUUU.style.background='#fff';
    	}
    	})
    	VVVV.addEventListener("click", function(){
    	VVVV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Pardon me";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VVVV.style.background='#fff';
    	}
    	})
    	WWWW.addEventListener("click", function(){
    	WWWW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "It’s sound good";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WWWW.style.background='#fff';
    	}
    	})
    	XXXX.addEventListener("click", function(){
    	XXXX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "On the other hand";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XXXX.style.background='#fff';
    	}
    	})
    	YYYY.addEventListener("click", function(){
    	YYYY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Cheap and nasty";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YYYY.style.background='#fff';
    	}
    	})
    	ZZZZ.addEventListener("click", function(){
    	ZZZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Wow, what a sight!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZZZ.style.background='#fff';
    	}
    	})
    	AAAAA.addEventListener("click", function(){
    	AAAAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "Enjoy yourself";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAAAA.style.background='#fff';
    	}
    	})
    	BBBBB.addEventListener("click", function(){
    	BBBBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "On my part";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBBBB.style.background='#fff';
    	}
    	})
    	CCCCC.addEventListener("click", function(){
    	CCCCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	utterance.text = "It’s my pleasure";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCCCC.style.background='#fff';
    	}
    	})
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	
    	A.addEventListener("click", function(){
    	Core.speak("What’s up?");
    	
    	})
    	B.addEventListener("click", function(){
    	B.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	Core.speak("Carry on");
    	
    	})
    	C.addEventListener("click", function(){
    	C.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	Core.speak("Wow");
    	
    	})
    	D.addEventListener("click", function(){
    	D.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	Core.speak("My goodness!");
    	
    	})
    	E.addEventListener("click", function(){
    	E.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	Core.speak = "How come";
    	
    	})
    	F.addEventListener("click", function(){
    	F.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	Core.speak = "What a mess!";
    	
    	})
    	G.addEventListener("click", function(){
    	G.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Oh shit!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	G.style.background='#fff';
    	}
    	})
    	H.addEventListener("click", function(){
    	H.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Yes, go on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	H.style.background='#fff';
    	}
    	})
    	I.addEventListener("click", function(){
    	I.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Oh dear!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	I.style.background='#fff';
    	}
    	})
    	J.addEventListener("click", function(){
    	J.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Hi guys";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	J.style.background='#fff';
    	}
    	})
    	K.addEventListener("click", function(){
    	K.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Good job!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	K.style.background='#fff';
    	}
    	})
    	L.addEventListener("click", function(){
    	L.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "So what?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	L.style.background='#fff';
    	}
    	})
    	M.addEventListener("click", function(){
    	M.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Oh, no!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	M.style.background='#fff';
    	}
    	})
    	N.addEventListener("click", function(){
    	N.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Pay attention!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	N.style.background='#fff';
    	}
    	})
    	O.addEventListener("click", function(){
    	O.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Definitely";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	O.style.background='#fff';
    	}
    	})
    	P.addEventListener("click", function(){
    	P.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let it pass";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	P.style.background='#fff';
    	}
    	})
    	Q.addEventListener("click", function(){
    	Q.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Obviously";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Q.style.background='#fff';
    	}
    	})
    	R.addEventListener("click", function(){
    	R.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I’m off";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	R.style.background='#fff';
    	}
    	})
    	S.addEventListener("click", function(){
    	S.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "It’s your turn";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	S.style.background='#fff';
    	}
    	})
    	T.addEventListener("click", function(){
    	T.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "As if";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	T.style.background='#fff';
    	}
    	})
    	U.addEventListener("click", function(){
    	U.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Damn it!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	U.style.background='#fff';
    	}
    	})
    	V.addEventListener("click", function(){
    	V.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "What a surprise!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	V.style.background='#fff';
    	}
    	})
    	W.addEventListener("click", function(){
    	W.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Go to the devil!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	W.style.background='#fff';
    	}
    	})
    	X.addEventListener("click", function(){
    	X.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "What about you?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	X.style.background='#fff';
    	}
    	})
    	Y.addEventListener("click", function(){
    	Y.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "so so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Y.style.background='#fff';
    	}
    	})
    	Z.addEventListener("click", function(){
    	Z.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "So be it";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	Z.style.background='#fff';
    	}
    	})
    	AA.addEventListener("click", function(){
    	AA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Who cares!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AA.style.background='#fff';
    	}
    	})
    	BB.addEventListener("click", function(){
    	BB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I’m at a loss";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BB.style.background='#fff';
    	}
    	})
    	CC.addEventListener("click", function(){
    	CC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Heiya! It is you I see";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CC.style.background='#fff';
    	}
    	})
    	DD.addEventListener("click", function(){
    	DD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Oh! come on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DD.style.background='#fff';
    	}
    	})
    	EE.addEventListener("click", function(){
    	EE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Excuse me";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EE.style.background='#fff';
    	}
    	})
    	FF.addEventListener("click", function(){
    	FF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Not a bit";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FF.style.background='#fff';
    	}
    	})
    	GG.addEventListener("click", function(){
    	GG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "That’s fantastic";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GG.style.background='#fff';
    	}
    	})
    	HH.addEventListener("click", function(){
    	HH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Next to nothing";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HH.style.background='#fff';
    	}
    	})
    	II.addEventListener("click", function(){
    	II.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Mind your language";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	II.style.background='#fff';
    	}
    	})
    	JJ.addEventListener("click", function(){
    	JJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Come to the point";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJ.style.background='#fff';
    	}
    	})
    	KK.addEventListener("click", function(){
    	KK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "That’s right";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KK.style.background='#fff';
    	}
    	})
    	LL.addEventListener("click", function(){
    	LL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "To be frank";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LL.style.background='#fff';
    	}
    	})
    	MM.addEventListener("click", function(){
    	MM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Really pleased";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MM.style.background='#fff';
    	}
    	})
    	NN.addEventListener("click", function(){
    	NN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I am delighted";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NN.style.background='#fff';
    	}
    	})
    	OO.addEventListener("click", function(){
    	OO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "So kind of you!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OO.style.background='#fff';
    	}
    	})
    	PP.addEventListener("click", function(){
    	PP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Anybody home?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PP.style.background='#fff';
    	}
    	})
    	QQ.addEventListener("click", function(){
    	QQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Keep quiet";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQ.style.background='#fff';
    	}
    	})
    	RR.addEventListener("click", function(){
    	RR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "No entrance";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RR.style.background='#fff';
    	}
    	})
    	SS.addEventListener("click", function(){
    	SS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "It’s enough";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SS.style.background='#fff';
    	}
    	})
    	TT.addEventListener("click", function(){
    	TT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "What happened";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TT.style.background='#fff';
    	}
    	})
    	UU.addEventListener("click", function(){
    	UU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "What an idea!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UU.style.background='#fff';
    	}
    	})
    	VV.addEventListener("click", function(){
    	VV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Well done";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VV.style.background='#fff';
    	}
    	})
    	WW.addEventListener("click", function(){
    	WW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Indeed!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WW.style.background='#fff';
    	}
    	})
    	XX.addEventListener("click", function(){
    	XX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "How peaceful!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XX.style.background='#fff';
    	}
    	})
    	YY.addEventListener("click", function(){
    	YY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Get lost";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YY.style.background='#fff';
    	}
    	})
    	ZZ.addEventListener("click", function(){
    	ZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let me see";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZ.style.background='#fff';
    	}
    	})
    	AAA.addEventListener("click", function(){
    	AAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Oh sure";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAA.style.background='#fff';
    	}
    	})
    	BBB.addEventListener("click", function(){
    	BBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Who knows!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBB.style.background='#fff';
    	}
    	})
    	CCC.addEventListener("click", function(){
    	CCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Bullshit!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCC.style.background='#fff';
    	}
    	})
    	DDD.addEventListener("click", function(){
    	DDD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "But who cares!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DDD.style.background='#fff';
    	}
    	})
    	EEE.addEventListener("click", function(){
    	EEE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "No more buts";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EEE.style.background='#fff';
    	}
    	})
    	FFF.addEventListener("click", function(){
    	FFF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "How so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FFF.style.background='#fff';
    	}
    	})
    	GGG.addEventListener("click", function(){
    	GGG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I think so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GGG.style.background='#fff';
    	}
    	})
    	HHH.addEventListener("click", function(){
    	HHH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Calm down";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HHH.style.background='#fff';
    	}
    	})
    	III.addEventListener("click", function(){
    	III.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let’s have a look";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	III.style.background='#fff';
    	}
    	})
    	JJJ.addEventListener("click", function(){
    	JJJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let’s run away";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJJ.style.background='#fff';
    	}
    	})
    	KKK.addEventListener("click", function(){
    	KKK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I am getting wet";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KKK.style.background='#fff';
    	}
    	})
    	LLL.addEventListener("click", function(){
    	LLL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I don’t care!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LLL.style.background='#fff';
    	}
    	})
    	MMM.addEventListener("click", function(){
    	MMM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "How else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MMM.style.background='#fff';
    	}
    	})
    	NNN.addEventListener("click", function(){
    	NNN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Little by little";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NNN.style.background='#fff';
    	}
    	})
    	OOO.addEventListener("click", function(){
    	OOO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Is it so!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OOO.style.background='#fff';
    	}
    	})
    	PPP.addEventListener("click", function(){
    	PPP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "If you do case";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PPP.style.background='#fff';
    	}
    	})
    	QQQ.addEventListener("click", function(){
    	QQQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Have a good day";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQQ.style.background='#fff';
    	}
    	})
    	RRR.addEventListener("click", function(){
    	RRR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let’s sit somewhere";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RRR.style.background='#fff';
    	}
    	})
    	SSS.addEventListener("click", function(){
    	SSS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "So far so good";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SSS.style.background='#fff';
    	}
    	})
    	TTT.addEventListener("click", function(){
    	TTT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I tend to think";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TTT.style.background='#fff';
    	}
    	})
    	UUU.addEventListener("click", function(){
    	UUU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I suppose so";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UUU.style.background='#fff';
    	}
    	})
    	VVV.addEventListener("click", function(){
    	VVV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I don’t mind";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VVV.style.background='#fff';
    	}
    	})
    	WWW.addEventListener("click", function(){
    	WWW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "If so, so what";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WWW.style.background='#fff';
    	}
    	})
    	XXX.addEventListener("click", function(){
    	XXX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Keep your word";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XXX.style.background='#fff';
    	}
    	})
    	YYY.addEventListener("click", function(){
    	YYY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Nothing is impossible";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YYY.style.background='#fff';
    	}
    	})
    	ZZZ.addEventListener("click", function(){
    	ZZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Whatever (you want)";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZZ.style.background='#fff';
    	}
    	})
    	AAAA.addEventListener("click", function(){
    	AAAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Whatever you do?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAAA.style.background='#fff';
    	}
    	})
    	BBBB.addEventListener("click", function(){
    	BBBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Why should I care?";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBBB.style.background='#fff';
    	}
    	})
    	CCCC.addEventListener("click", function(){
    	CCCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Something else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCCC.style.background='#fff';
    	}
    	})
    	DDDD.addEventListener("click", function(){
    	DDDD.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Nothing else";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	DDDD.style.background='#fff';
    	}
    	})
    	EEEE.addEventListener("click", function(){
    	EEEE.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Talk sense";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	EEEE.style.background='#fff';
    	}
    	})
    	FFFF.addEventListener("click", function(){
    	FFFF.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Don’t say anymore";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	FFFF.style.background='#fff';
    	}
    	})
    	GGGG.addEventListener("click", function(){
    	GGGG.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Forget it";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	GGGG.style.background='#fff';
    	}
    	})
    	HHHH.addEventListener("click", function(){
    	HHHH.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "What a pity";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	HHHH.style.background='#fff';
    	}
    	})
    	IIII.addEventListener("click", function(){
    	IIII.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Hold on";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	IIII.style.background='#fff';
    	}
    	})
    	JJJJ.addEventListener("click", function(){
    	JJJJ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Do it at once!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	JJJJ.style.background='#fff';
    	}
    	})
    	KKKK.addEventListener("click", function(){
    	KKKK.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Speak with care";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	KKKK.style.background='#fff';
    	}
    	})
    	LLLL.addEventListener("click", function(){
    	LLLL.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "How strange!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	LLLL.style.background='#fff';
    	}
    	})
    	MMMM.addEventListener("click", function(){
    	MMMM.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "By the grace of Allah";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	MMMM.style.background='#fff';
    	}
    	})
    	NNNN.addEventListener("click", function(){
    	NNNN.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "How absurd!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	NNNN.style.background='#fff';
    	}
    	})
    	OOOO.addEventListener("click", function(){
    	OOOO.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Good riddance!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	OOOO.style.background='#fff';
    	}
    	})
    	PPPP.addEventListener("click", function(){
    	PPPP.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Just for asking";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	PPPP.style.background='#fff';
    	}
    	})
    	QQQQ.addEventListener("click", function(){
    	QQQQ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Stand in queue";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	QQQQ.style.background='#fff';
    	}
    	})
    	RRRR.addEventListener("click", function(){
    	RRRR.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "No smoking";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	RRRR.style.background='#fff';
    	}
    	})
    	SSSS.addEventListener("click", function(){
    	SSSS.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Let me digress";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	SSSS.style.background='#fff';
    	}
    	})
    	TTTT.addEventListener("click", function(){
    	TTTT.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I swear I will";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	TTTT.style.background='#fff';
    	}
    	})
    	UUUU.addEventListener("click", function(){
    	UUUU.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "I give up";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	UUUU.style.background='#fff';
    	}
    	})
    	VVVV.addEventListener("click", function(){
    	VVVV.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Pardon me";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	VVVV.style.background='#fff';
    	}
    	})
    	WWWW.addEventListener("click", function(){
    	WWWW.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "It’s sound good";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	WWWW.style.background='#fff';
    	}
    	})
    	XXXX.addEventListener("click", function(){
    	XXXX.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "On the other hand";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	XXXX.style.background='#fff';
    	}
    	})
    	YYYY.addEventListener("click", function(){
    	YYYY.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Cheap and nasty";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	YYYY.style.background='#fff';
    	}
    	})
    	ZZZZ.addEventListener("click", function(){
    	ZZZZ.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Wow, what a sight!";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	ZZZZ.style.background='#fff';
    	}
    	})
    	AAAAA.addEventListener("click", function(){
    	AAAAA.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "Enjoy yourself";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	AAAAA.style.background='#fff';
    	}
    	})
    	BBBBB.addEventListener("click", function(){
    	BBBBB.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "On my part";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	BBBBB.style.background='#fff';
    	}
    	})
    	CCCCC.addEventListener("click", function(){
    	CCCCC.style.background='#f0e9ee';
    	document.getElementById('user_input').style.display='none';
    	const utterance = new SpeechSynthesisUtterance();
    	Core.speak = "It’s my pleasure";
    	window.speechSynthesis.speak(utterance);
    	utterance.onend=function(){
    	CCCCC.style.background='#fff';
    	}
    	})
