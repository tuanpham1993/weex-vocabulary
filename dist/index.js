// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(1)
)

/* script */
__vue_exports__ = __webpack_require__(2)

/* template */
var __vue_template__ = __webpack_require__(3)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/tuan/Projects/personal/weex-vocabulary/src/components/ListWord.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-c3d9f0e6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
  "list-word": {
    "width": 100
  },
  "list-item": {
    "borderTop": "solid 1px black",
    "width": 100,
    "height": "100",
    "paddingLeft": "20"
  },
  "list-item__text": {
    "marginTop": "22",
    "fontSize": "36"
  }
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var storage = weex.requireModule("storage");
exports.default = {
  data: function data() {
    return {
      group: 1,
      words: []
    };
  },
  mounted: function mounted() {
    this.setWords(this.group);
  },

  watch: {
    group: function group(newGroup) {
      this.setWords(newGroup);
    }
  },
  methods: {
    setGroup: function setGroup(group) {
      this.group = group;
    },
    setWords: function setWords(group) {
      var _this = this;

      var allWords = [];
      storage.getAllKeys(function (data) {
        allWords = data.data;
        var words = allWords.filter(function (x) {
          return parseInt(x.substring(6, 7)) === group;
        }).map(function (x) {
          return x.substring(8);
        });
        _this.words = words;
      });
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["list-word"]
  }, [_c('div', {}, [_c('button', {
    on: {
      "click": function($event) {
        _vm.setGroup()
      }
    }
  }, [_vm._v("NEW")]), _c('button', {
    on: {
      "click": function($event) {
        _vm.setGroup()
      }
    }
  }, [_vm._v("DOING")]), _c('button', {
    on: {
      "click": function($event) {
        _vm.setGroup()
      }
    }
  }, [_vm._v("COMMON")]), _c('button', {
    on: {
      "click": function($event) {
        _vm.setGroup()
      }
    }
  }, [_vm._v("DONE")])], 1), _c('div', _vm._l((_vm.words), function(word) {
    return _c('div', {
      key: word,
      staticClass: ["list-item"]
    }, [_c('span', {
      staticClass: ["list-item__text"]
    }, [_vm._v(_vm._s(word))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/tuan/Projects/personal/weex-vocabulary/src/components/Setting.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cef859ca"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ = __webpack_require__(7);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//

var storage = weex.requireModule("storage");
exports.default = {
  //   mounted() {
  //     storage.getAllKeys(data => {
  //       console.log(data);
  //       data.data.forEach(x => storage.removeItem(x));
  //     });
  //   },
  methods: {
    loadCommonWords: function loadCommonWords() {
      _2.default.forEach(function (words) {
        storage.setItem("GROUP#1#" + words, "EMPTY");
      });
    }
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ["the","be","and","of","in","have","it","that","for","with","on","say","they","but","we","his","not","n't","by","or","what","go","their","can","who","get","if","would","her","all","my","make","about","know","up","one","time","year","so","think","when","them","some","people","take","out","into","him","your","come","could","now","than","like","other","then","its","our","two","these","want","way","look","also","new","day","use","no","find","here","thing","give","many","well","only","those","even","any","good","woman","through","work","down","may","after","should","call","over","school","still","try","ask","need","too","feel","three","state","between","high","really","something","most","much","family","put","old","mean","student","why","let","great","same","group","begin","seem","country","help","talk","where","turn","every","start","hand","might","American","against","place","such","case","week","company","system","each","right","program","hear","question","during","play","government","small","number","off","always","move","night","live","Mr","point","believe","hold","today","bring","happen","next","without","before","large","million","must","home","under","water","write","mother","national","story","young","fact","month","different","lot","study","book","eye","word","though","business","issue","side","four","black","both","little","house","yes","since","provide","service","around","friend","important","father","sit","away","until","power","hour","game","often","line","political","among","ever","stand","bad","lose","however","member","pay","law","meet","car","almost","include","continue","set","later","community","name","five","once","white","least","president","learn","real","change","team","minute","best","several","idea","kid","body","information","nothing","ago","lead","social","whether","watch","together","follow","parent","stop","face","already","others","read","level","add","office","spend","health","person","art","history","party","within","grow","result","morning","walk","low","win","research","girl","guy","early","food","moment","himself","air","teacher","force","offer","enough","across","although","foot","second","toward","able","age","policy","everything","love","process","including","consider","appear","probably","human","wait","serve","market","die","expect","sense","stay","fall","nation","plan","cut","college","interest","death","course","someone","experience","behind","reach","local","six","remain","effect","yeah","suggest","class","control","raise","care","perhaps","late","hard","field","else","former","sell","major","require","along","development","themselves","report","role","better","economic","effort","decide","rate","strong","heart","drug","leader","light","voice","wife","whole","mind","pull","return","military","price","less","according","decision","explain","son","hope","develop","carry","town","road","drive","arm","federal","break","difference","thank","receive","building","action","model","join","season","society","tax","director","position","especially","record","pick","wear","paper","special","space","ground","form","support","event","official","whose","matter","everyone","center","couple","site","project","hit","base","activity","star","table","court","produce","eat","teach","oil","half","situation","easy","cost","industry","figure","street","itself","phone","either","data","cover","quite","clear","practice","piece","land","describe","product","wall","patient","worker","news","test","movie","certain","north","personal","simply","third","technology","catch","step","baby","computer","type","attention","draw","film","Republican","source","red","nearly","organization","choose","cause","hair","century","evidence","window","difficult","listen","soon","culture","billion","chance","energy","period","summer","realize","hundred","plant","likely","opportunity","term","short","letter","condition","choice","single","rule","daughter","administration","south","husband","Congress","floor","campaign","material","population","economy","medical","hospital","church","close","thousand","risk","current","fire","involve","defense","anyone","increase","security","myself","certainly","west","sport","board","seek","per","subject","officer","private","rest","behavior","deal","performance","fight","throw","top","quickly","past","goal","order","author","fill","represent","focus","foreign","upon","agency","push","nature","recently","store","reduce","note","fine","near","movement","page","enter","common","poor","natural","race","concern","series","significant","similar","hot","language","usually","response","rise","factor","decade","article","shoot","east","save","seven","artist","scene","stock","career","despite","central","eight","thus","treatment","beyond","protect","approach","lie","size","dog","fund","serious","occur","media","ready","sign","thought","list","individual","simple","quality","pressure","accept","answer","resource","identify","left","meeting","prepare","disease","success","argue","cup","particularly","amount","ability","staff","recognize","indicate","character","growth","loss","degree","wonder","attack","television","box","training","pretty","trade","election","everybody","physical","lay","general","feeling","standard","bill","message","fail","outside","arrive","analysis","benefit","forward","lawyer","present","section","environmental","glass","skill","sister","PM","professor","operation","financial","crime","stage","compare","authority","miss","design","sort","act","knowledge","station","blue","clearly","discuss","indeed","truth","democratic","check","environment","leg","dark","various","rather","laugh","guess","executive","prove","hang","entire","rock","forget","claim","remove","manager","network","legal","religious","cold","final","main","science","green","memory","above","seat","cell","establish","nice","trial","expert","spring","firm","Democrat","radio","visit","management","avoid","imagine","tonight","huge","finish","theory","impact","respond","statement","maintain","charge","popular","traditional","onto","reveal","direction","employee","cultural","contain","peace","pain","apply","measure","wide","shake","fly","interview","manage","chair","fish","particular","structure","politics","perform","bit","weight","suddenly","discover","candidate","production","treat","trip","evening","affect","inside","conference","unit","style","adult","worry","range","mention","deep","edge","specific","writer","trouble","necessary","throughout","challenge","fear","shoulder","institution","middle","sea","dream","bar","beautiful","property","instead","improve","stuff","detail","method","hotel","soldier","reflect","heavy","sexual","heat","marriage","tough","sing","surface","purpose","exist","pattern","whom","skin","agent","machine","gas","ahead","generation","commercial","cancer","item","coach","yard","beat","violence","total","tend","investment","discussion","finger","notice","collection","modern","task","partner","positive","civil","kitchen","consumer","shot","budget","wish","painting","scientist","safe","agreement","capital","mouth","nor","victim","newspaper","threat","responsibility","smile","attorney","score","account","interesting","audience","rich","dinner","western","relate","travel","debate","prevent","citizen","majority","front","born","admit","senior","assume","wind","key","professional","mission","fast","alone","customer","suffer","speech","successful","option","participant","southern","fresh","eventually","forest","global","Senate","reform","restaurant","judge","publish","relation","release","bird","opinion","credit","critical","corner","concerned","recall","stare","safety","effective","neighborhood","original","troop","income","directly","hurt","species","immediately","track","basic","strike","sky","freedom","absolutely","plane","nobody","achieve","object","attitude","labor","refer","concept","client","powerful","nine","therefore","conduct","announce","conversation","examine","touch","please","attend","completely","variety","involved","investigation","nuclear","researcher","press","conflict","spirit","replace","British","encourage","argument","camp","brain","afternoon","AM","weekend","dozen","possibility","insurance","department","battle","beginning","date","generally","African","sorry","crisis","complete","stick","define","hole","element","vision","status","normal","Chinese","ship","solution","stone","slowly","scale","introduce","driver","attempt","park","spot","lack","ice","boat","drink","sun","distance","wood","handle","truck","mountain","survey","supposed","tradition","winter","village","Soviet","refuse","sales","roll","communication","screen","gain","resident","hide","club","farm","potential","presence","independent","district","shape","reader","contract","crowd","Christian","express","apartment","willing","strength","previous","band","obviously","horse","interested","target","prison","ride","guard","terms","demand","reporter","deliver","text","tool","wild","vehicle","observe","flight","facility","understanding","average","emerge","advantage","quick","leadership","earn","pound","basis","bright","operate","guest","sample","contribute","tiny","block","protection","settle","feed","collect","additional","highly","identity","title","mostly","lesson","faith","river","promote","living","count","unless","marry","tomorrow","technique","path","ear","shop","folk","principle","survive","lift","border","competition","jump","gather","limit","fit","cry","equipment","worth","associate","critic","warm","aspect","insist","failure","annual","Christmas","responsible","affair","procedure","regular","spread","chairman","baseball","soft","ignore","egg","belief","demonstrate","anybody","murder","gift","religion","review","editor","engage","speed","cross","influence","anyway","threaten","commit","female","youth","wave","afraid","quarter","background","native","broad","wonderful","deny","apparently","slightly","reaction","twice","suit","perspective","growing","blow","construction","intelligence","destroy","connection","burn","shoe","grade","context","committee","hey","mistake","location","clothes","Indian","dress","promise","aware","neighbor","function","bone","active","extend","chief","combine","wine","below","cool","voter","learning","bus","hell","dangerous","remind","moral","United","category","relatively","victory","academic","Internet","healthy","negative","following","historical","medicine","tour","depend","photo","finding","grab","direct","contact","justice","participate","daily","fair","pair","famous","exercise","knee","flower","tape","hire","familiar","appropriate","supply","fully","actor","birth","tie","democracy","eastern","primary","yesterday","circle","device","progress","bottom","island","exchange","studio","train","lady","colleague","application","neck","lean","damage","plastic","tall","plate","hate","otherwise","writing","male","alive","expression","football","intend","chicken","army","abuse","theater","shut","map","extra","session","danger","welcome","domestic","lots","literature","rain","desire","assessment","injury","respect","northern","nod","paint","fuel","leaf","dry","Russian","instruction","pool","climb","sweet","engine","fourth","salt","expand","importance","metal","fat","ticket","software","disappear","corporate","strange","lip","reading","urban","mental","increasingly","lunch","educational","somewhere","farmer","sugar","planet","favorite","explore","obtain","greatest","complex","surround","athlete","repeat","soul","scientific","impossible","panel","meaning","mom","instrument","predict","weather","presidential","emotional","commitment","Supreme","bear","pocket","thin","temperature","surprise","poll","proposal","consequence","breath","sight","balance","adopt","minority","straight","connect","works","teaching","belong","aid","okay","photograph","empty","regional","trail","novel","code","somehow","organize","jury","breast","Iraqi","acknowledge","theme","storm","union","desk","thanks","fruit","expensive","yellow","conclusion","prime","shadow","struggle","conclude","analyst","regulation","being","largely","shift","revenue","mark","locate","county","package","difficulty","bridge","recommend","obvious","basically","generate","anymore","propose","thinking","possibly","trend","visitor","loan","currently","comfortable","investor","profit","angry","crew","accident","meal","hearing","traffic","muscle","notion","capture","prefer","truly","earth","Japanese","chest","thick","cash","museum","emergency","unique","internal","ethnic","link","content","select","root","nose","declare","appreciate","actual","bottle","hardly","setting","launch","file","sick","outcome","defend","duty","sheet","ought","ensure","Catholic","extremely","extent","component","mix","long-term","slow","contrast","airport","shirt","pilot","warn","ultimately","cat","contribution","capacity","ourselves","estate","circumstance","English","politician","steal","pursue","slip","percentage","meat","funny","neither","soil","surgery","correct","Jewish","blame","estimate","due","basketball","golf","investigate","crazy","significantly","chain","branch","combination","frequently","governor","relief","user","dad","kick","manner","ancient","silence","rating","golden","motion","German","gender","solve","fee","landscape","bowl","equal","forth","frame","typical","except","conservative","eliminate","hall","trust","ocean","row","producer","afford","meanwhile","regime","division","confirm","fix","appeal","mirror","tooth","smart","length","entirely","rely","topic","variable","perception","attract","confidence","debt","rare","nurse","coverage","opposition","aside","anywhere","bond","pleasure","master","era","requirement","expectation","wing","separate","somewhat","pour","stir","judgment","beer","reference","tear","doubt","grant","seriously","minister","totally","industrial","cloud","stretch","winner","volume","seed","surprised","fashion","pepper","busy","intervention","copy","tip","cheap","aim","cite","welfare","vegetable","gray","dish","beach","improvement","everywhere","opening","overall","divide","initial","terrible","oppose","contemporary","route","multiple","essential","league","criminal","careful","core","upper","rush","necessarily","specifically","tired","employ","holiday","vast","resolution","household","fewer","abortion","apart","witness","match","barely","sector","representative","beneath","beside","incident","limited","proud","flow","faculty","increased","waste","merely","mass","emphasize","experiment","definitely","bomb","enormous","tone","liberal","massive","engineer","wheel","decline","invest","cable","towards","expose","rural","AIDS","Jew","narrow","cream","secretary","gate","solid","hill","typically","noise","grass","unfortunately","hat","legislation","succeed","celebrate","fishing","accuse","reject","talent","taste","characteristic","milk","escape","cast","sentence","unusual","closely","convince","height","physician","assess","plenty","virtually","addition","sharp","creative","lower","approve","explanation","gay","campus","proper","guilty","acquire","technical","plus","immigrant","weak","illegal","alternative","interaction","column","personality","signal","curriculum","honor","passenger","assistance","forever","regard","Israeli","association","twenty","knock","wrap","lab","display","criticism","asset","depression","spiritual","musical","journalist","prayer","suspect","scholar","warning","climate","cheese","observation","childhood","payment","sir","permit","cigarette","definition","priority","bread","creation","graduate","emotion","scream","dramatic","universe","gap","excellent","deeply","prosecutor","lucky","drag","airline","agenda","recover","factory","selection","primarily","roof","unable","expense","initiative","diet","arrest","funding","therapy","wash","schedule","brief","housing","post","purchase","existing","steel","regarding","shout","remaining","visual","fairly","chip","violent","silent","suppose","self","bike","tea","perceive","comparison","settlement","layer","planning","description","slide","widely","wedding","inform","portion","territory","immediate","opponent","abandon","lake","transform","tension","leading","bother","consist","alcohol","enable","bend","saving","desert","shall","error","cop","Arab","double","sand","Spanish","preserve","passage","formal","transition","existence","album","participation","arrange","atmosphere","joint","reply","cycle","opposite","lock","deserve","consistent","resistance","discovery","exposure","pose","stream","sale","pot","grand","mine","hello","coalition","tale","resolve","racial","phase","joke","coat","Mexican","symptom","manufacturer","philosophy","potato","foundation","quote","online","negotiation","urge","occasion","dust","breathe","elect","investigator","jacket","glad","ordinary","reduction","rarely","pack","suicide","numerous","substance","discipline","elsewhere","practical","moreover","passion","volunteer","implement","essentially","gene","enforcement","vs","sauce","independence","priest","amazing","intense","advance","employer","shock","inspire","adjust","retire","visible","kiss","illness","cap","habit","competitive","juice","congressional","involvement","dominate","previously","whenever","transfer","analyze","attach","disaster","parking","prospect","boss","complaint","championship","fundamental","severe","enhance","mystery","impose","poverty","entry","spending","king","evaluate","symbol","maker","mood","accomplish","emphasis","illustrate","boot","monitor","Asian","entertainment","bean","evaluation","creature","commander","digital","arrangement","concentrate","usual","anger","psychological","heavily","peak","approximately","increasing","disorder","missile","equally","vary","wire","round","distribution","transportation","holy","twin","command","commission","interpretation","breakfast","strongly","engineering","luck","so-called","constant","clinic","veteran","smell","tablespoon","capable","nervous","tourist","toss","crucial","bury","pray","tomato","exception","butter","deficit","objective","electronic","ally","journey","reputation","mixture","surely","tower","smoke","confront","pure","glance","dimension","toy","prisoner","fellow","smooth","nearby","peer","designer","personnel","educator","relative","immigration","teaspoon","birthday","implication","perfectly","coast","supporter","accompany","silver","teenager","recognition","retirement","flag","recovery","whisper","gentleman","corn","moon","inner","junior","throat","salary","swing","observer","publication","crop","dig","permanent","phenomenon","anxiety","unlike","wet","literally","resist","convention","embrace","assist","exhibition","construct","viewer","pan","consultant","administrator","occasionally","mayor","consideration","CEO","secure","pink","buck","historic","poem","grandmother","bind","fifth","constantly","enterprise","favor","testing","stomach","apparent","weigh","install","sensitive","suggestion","mail","recipe","reasonable","preparation","wooden","elementary","concert","aggressive","false","intention","channel","extreme","tube","drawing","protein","rapidly","jail","diversity","honest","Palestinian","pace","employment","speaker","impression","essay","respondent","giant","cake","historian","negotiate","restore","substantial","pop","specialist","origin","approval","advise","conventional","depth","wealth","disability","shell","criticize","effectively","biological","onion","deputy","flat","brand","assure","mad","award","criteria","dealer","via","utility","precisely","arise","armed","nevertheless","highway","clinical","routine","wage","normally","phrase","ingredient","stake","Muslim","fiber","activist","Islamic","snap","terrorism","refugee","incorporate","hip","switch","corporation","valuable","assumption","gear","barrier","minor","provision","killer","assign","gang","developing","chemical","label","teen","index","vacation","advocate","draft","extraordinary","heaven","rough","yell","pregnant","distant","drama","satellite","personally","clock","chocolate","Italian","Canadian","ceiling","sweep","advertising","universal","spin","bell","rank","darkness","clothing","super","yield","fence","portrait","survival","roughly","lawsuit","testimony","bunch","found","burden","react","chamber","furniture","cooperation","string","ceremony","communicate","cheek","lost","profile","mechanism","disagree","penalty","resort","destruction","unlikely","tissue","constitutional","pant","stranger","infection","cabinet","broken","apple","electric","proceed","bet","literary","virus","stupid","dispute","fortune","strategic","overcome","remarkable","occupy","statistics","shopping","cousin","encounter","wipe","initially","blind","port","electricity","genetic","adviser","spokesman","retain","latter","incentive","slave","accurate","whereas","terror","expansion","elite","Olympic","dirt","odd","bullet","tight","Bible","chart","solar","square","concentration","complicated","gently","champion","scenario","telescope","reflection","revolution","strip","interpret","friendly","tournament","fiction","detect","tremendous","lifetime","recommendation","senator","hunting","guarantee","innocent","boundary","pause","remote","satisfaction","journal","bench","lover","raw","awareness","surprising","withdraw","deck","similarly","newly","pole","testify","mode","dialogue","imply","naturally","mutual","founder","advanced","pride","dismiss","aircraft","delivery","mainly","bake","freeze","platform","finance","sink","attractive","diverse","relevant","ideal","joy","regularly","working","singer","evolve","shooting","partly","offense","counter","DNA","potentially","thirty","justify","protest","crash","craft","treaty","terrorist","insight","possess","politically","tap","extensive","episode","swim","tire","fault","loose","shortly","originally","considerable","prior","intellectual","assault","relax","stair","adventure","external","proof","confident","headquarters","sudden","dirty","violation","tongue","license","shelter","rub","controversy","entrance","properly","fade","defensive","tragedy","net","characterize","funeral","profession","alter","constitute","establishment","squeeze","imagination","mask","convert","comprehensive","prominent","presentation","regardless","load","stable","pretend","elderly","representation","deer","split","violate","partnership","pollution","emission","steady","vital","fate","earnings","oven","distinction","segment","nowhere","poet","mere","exciting","variation","comfort","radical","adapt","Irish","honey","correspondent","pale","musician","significance","vessel","storage","flee","leather","distribute","evolution","ill","tribe","shelf","lawn","buyer","dining","wisdom","council","vulnerable","instance","garlic","capability","poetry","celebrity","gradually","stability","fantasy","plot","framework","gesture","ongoing","psychology","counselor","chapter","divorce","owe","pipe","athletic","slight","math","shade","tail","sustain","mount","obligation","angle","palm","differ","custom","economist","soup","celebration","efficient","composition","satisfy","pile","briefly","carbon","closer","consume","scheme","crack","frequency","tobacco","survivor","besides","psychologist","wealthy","galaxy","given","ski","limitation","OK","trace","appointment","preference","meter","explosion","publicly","incredible","fighter","rapid","admission","educate","painful","friendship","aide","infant","calculate","rid","porch","tendency","uniform","formation","scholarship","reservation","efficiency","qualify","mall","derive","scandal","helpful","impress","heel","resemble","privacy","fabric","contest","proportion","guideline","rifle","maintenance","conviction","trick","organic","tent","examination","publisher","strengthen","proposed","myth","sophisticated","cow","etc","standing","asleep","nerve","barrel","bombing","membership","ratio","menu","controversial","desperate","lifestyle","humor","loud","glove","sufficient","narrative","photographer","modest","delay","agricultural","explode","stroke","scope","punishment","handful","horizon","curious","downtown","girlfriend","prompt","absorb","adjustment","taxpayer","eager","principal","detailed","motivation","assignment","restriction","laboratory","workshop","differently","auto","romantic","motor","sue","flavor","overlook","float","undergo","sequence","demonstration","jet","orange","consumption","assert","blade","temporary","medication","cabin","bite","edition","valley","yours","pitch","pine","brilliant","versus","manufacturing","absolute","chef","discrimination","offensive","boom","register","appoint","heritage","dominant","successfully","shit","hungry","wander","submit","economics","anticipate","nut","legacy","extension","shrug","battery","arrival","legitimate","orientation","inflation","cope","flame","cluster","wound","dependent","shower","institutional","depict","operating","flesh","garage","operator","instructor","collapse","borrow","furthermore","comedy","mortgage","sanction","civilian","twelve","weekly","habitat","grain","brush","consciousness","devote","measurement","province","ease","seize","ethics","nomination","permission","wise","actress","summit","acid","odds","gifted","frustration","physically","distinguish","shore","repeatedly","lung","distinct","artistic","discourse","basket","impressive","competitor","ugly","worried","portray","powder","ghost","persuade","moderate","subsequent","continued","cookie","carrier","cooking","frequent","ban","awful","admire","pet","miracle","exceed","rhythm","widespread","killing","lovely","sin","charity","script","tactic","identification","transformation","everyday","headline","venture","invasion","nonetheless","adequate","grocery","intensity","exhibit","blanket","margin","quarterback","rope","concrete","prescription","African-American","chase","brick","recruit","patch","consensus","horror","recording","changing","painter","colonial","pie","sake","gaze","courage","pregnancy","swear","defeat","clue","reinforce","confusion","slice","occupation","dear","coal","sacred","formula","cognitive","collective","exact","uncle","captain","sigh","attribute","dare","homeless","gallery","soccer","defendant","tunnel","fitness","lap","grave","toe","container","virtue","abroad","architect","dramatically","makeup","inquiry","rose","surprisingly","highlight","decrease","indication","rail","anniversary","couch","alliance","hypothesis","compose","mess","legend","regulate","adolescent","shine","norm","upset","remark","resign","reward","gentle","related","organ","lightly","concerning","invent","laughter","northwest","counseling","receiver","ritual","insect","interrupt","salmon","trading","superior","combat","stem","surgeon","physics","rape","counsel","jeans","hunt","continuous","log","echo","pill","excited","sculpture","compound","integrate","flour","bitter","bare","slope","rent","presidency","serving","subtle","greatly","bishop","drinking","acceptance","pump","candy","evil","pleased","medal","beg","sponsor","ethical","secondary","slam","export","experimental","melt","midnight","curve","integrity","entitle","evident","essence","exclude","harsh","closet","suburban","greet","interior","corridor","retail","pitcher","march","snake","excuse","weakness","pig","classical","estimated","unemployment","civilization","fold","reverse","missing","correlation","humanity","flash","reliable","excitement","beef","Islam","Roman","architecture","occasional","administrative","elbow","deadly","Hispanic","allegation","confuse","airplane","monthly","duck","dose","Korean","plead","initiate","lecture","van","sixth","bay","mainstream","suburb","sandwich","trunk","rumor","implementation","swallow","motivate","render","longtime","trap","restrict","cloth","seemingly","legislative","effectiveness","enforce","lens","inspector","lend","plain","fraud","companion","contend","nail","array","strict","assemble","frankly","rat","burst","hallway","cave","inevitable","southwest","monster","unexpected","obstacle","facilitate","rip","herb","overwhelming","integration","crystal","recession","written","motive","flood","pen","ownership","nightmare","inspection","supervisor","consult","arena","diagnosis","possession","forgive","consistently","basement","drift","drain","prosecution","maximum","announcement","warrior","prediction","bacteria","questionnaire","mud","infrastructure","hurry","privilege","temple","suck","broadcast","re","leap","random","wrist","curtain","pond","domain","guilt","cattle","walking","playoff","minimum","fiscal","skirt","dump","hence","uncomfortable","execute","limb","ideology","tune","continuing","harm","railroad","endure","radiation","horn","chronic","peaceful","innovation","strain","guitar","behave","administer","simultaneously","dancer","amendment","pad","transmission","await","retired","trigger","spill","grateful","grace","virtual","colony","adoption","indigenous","closed","convict","towel","particle","prize","landing","boost","bat","alarm","festival","grip","weird","undermine","freshman","sweat","outer","drunk","separation","traditionally","govern","southeast","intelligent","wherever","ballot","rhetoric","convinced","driving","vitamin","enthusiasm","accommodate","praise","injure","wilderness","endless","mandate","respectively","uncertainty","chaos","mechanical","canvas","forty","lobby","profound","format","trait","currency","turkey","reserve","beam","astronomer","corruption","contractor","apologize","doctrine","genuine","thumb","unity","compromise","horrible","behavioral","exclusive","scatter","convey","twist","complexity","fork","disk","relieve","suspicion","residence","shame","meaningful","sidewalk","Olympics","technological","signature","pleasant","wow","suspend","rebel","frozen","spouse","fluid","pension","resume","theoretical","sodium","promotion","delicate","forehead","rebuild","bounce","electrical","hook","detective","traveler","compensation","exit","attraction","dedicate","altogether","pickup","carve","needle","belly","scare","portfolio","shuttle","invisible","timing","engagement","ankle","transaction","rescue","counterpart","historically","firmly","mild","rider","doll","noon","amid","identical","precise","anxious","structural","residential","diagnose","carbohydrate","liberty","poster","theology","nonprofit","crawl","oxygen","handsome","sum","provided","businessman","promising","conscious","donor","hers","pastor","jazz","opera","acquisition","pit","hug","wildlife","punish","equity","doorway","departure","elevator","teenage","guidance","happiness","statue","pursuit","repair","decent","oral","clerk","envelope","reporting","destination","fist","endorse","exploration","generous","bath","thereby","indicator","sunlight","feedback","spectrum","purple","laser","bold","reluctant","starting","expertise","practically","eating","hint","sharply","parade","realm","cancel","blend","therapist","peel","recipient","hesitate","flip","accounting","bias","huh","metaphor","candle","judicial","entity","suffering","lamp","garbage","servant","regulatory","diplomatic","elegant","reception","vanish","chin","necessity","confess","racism","starter","banking","casual","gravity","enroll","diminish","prevention","minimize","chop","performer","intent","isolate","inventory","productive","assembly","civic","silk","magnitude","steep","hostage","collector","popularity","alien","dynamic","scary","equation","angel","offering","rage","photography","toilet","disappointed","precious","prohibit","realistic","hidden","tender","gathering","outstanding","stumble","lonely","automobile","artificial","dawn","abstract","descend","silly","tide","shared","hopefully","readily","cooperate","revolutionary","romance","hardware","pillow","kit","continent","seal","circuit","ruling","shortage","scan","fool","deadline","rear","processing","ranch","coastal","undertake","softly","burning","verbal","tribal","ridiculous","diamond","credibility","import","sexually","divine","sentiment","cart","oversee","elder","pro","inspiration","Dutch","quantity","trailer","mate","Greek","genius","monument","bid","quest","sacrifice","invitation","accuracy","juror","officially","broker","treasure","loyalty","talented","gasoline","stiff","output","nominee","extended","diabetes","slap","toxic","alleged","jaw","grief","mysterious","rocket","donate","inmate","tackle","dynamics","bow","ours","dignity","carpet","parental","bubble","buddy","barn","sword","glory","tightly","protective","tuck","drum","faint","queen","dilemma","specialize","northeast","shallow","liability","sail","merchant","stadium","improved","bloody","associated","withdrawal","refrigerator","nest","thoroughly","lane","ancestor","condemn","steam","accent","optimistic","unite","cage","equip","shrimp","homeland","rack","costume","wolf","courtroom","statute","cartoon","productivity","grin","symbolic","bug","bless","aunt","agriculture","hostile","conceive","combined","instantly","bankruptcy","vaccine","bonus","collaboration","mixed","opposed","orbit","grasp","patience","spite","tropical","voting","patrol","willingness","revelation","calm","jewelry","Cuban","haul","concede","wagon","afterward","spectacular","ruin","sheer","immune","reliability","ass","alongside","bush","exotic","fascinating","clip","thigh","hay","drawer","sheep","discourage","coordinator","ideological","runner","secular","intimate","empire","cab","exam","documentary","neutral","biology","flexible","progressive","web","conspiracy","casualty","republic","execution","terrific","whale","functional","instinct","aluminum","whoever","ministry","verdict","instruct","skull","self-esteem","cooperative","manipulate","bee","practitioner","loop","whip","puzzle","mushroom","subsidy","boil","tragic","mathematics","mechanic","jar","earthquake","pork","creativity","safely","underlying","dessert","sympathy","fisherman","incredibly","isolation","sock","eleven","sexy","entrepreneur","syndrome","bureau","workplace","ambition","touchdown","utilize","breeze","costly","ambitious","Christianity","presumably","influential","translation","uncertain","dissolve","statistical","gut","metropolitan","rolling","aesthetic","spell","booth","helmet","waist","expected","lion","accomplishment","royal","panic","crush","actively","cliff","minimal","cord","fortunately","cocaine","illusion","anonymous","tolerate","appreciation","commissioner","flexibility","instructional","scramble","casino","tumor","decorate","pulse","equivalent","fixed","experienced","donation","diary","sibling","irony","spoon","midst","alley","interact","soap","rival","short-term","punch","pin","hockey","passing","persist","supplier","known","momentum","purse","shed","liquid","elephant","consequently","legislature","franchise","correctly","mentally","foster","bicycle","encouraging","heal","fever","filter","rabbit","coin","exploit","accessible","organism","sensation","partially","upstairs","dried","conservation","shove","backyard","charter","stove","consent","comprise","reminder","alike","placement","dough","grandchild","dam","reportedly","well-known","surrounding","ecological","outfit","unprecedented","columnist","workout","preliminary","patent","shy","trash","disabled","gross","damn","hormone","texture","frontier","spray","disclose","custody","banker","beast","interfere","oak","eighth","notebook","outline","attendance","speculation","uncover","behalf","innovative","shark","mill","installation","stimulate","vertical","fleet","catalog","outsider","desperately","stance","compel","sensitivity","instant","debut","proclaim","worldwide","hike","required","confrontation","colorful","constitution","trainer","Thanksgiving","scent","stack","eyebrow","sack","cease","inherit","tray","pioneer","organizational","textbook","uh","nasty","shrink","emerging","dot","wheat","fierce","envision","rational","kingdom","aisle","weaken","protocol","exclusively","vocal","marketplace","openly","unfair","terrain","deploy","risky","pasta","genre","distract","merit","planner","depressed","chunk","closest","discount","ladder","jungle","migration","breathing","invade","hurricane","retailer","classify","coup","ambassador","density","supportive","curiosity","skip","aggression","stimulus","journalism","robot","dip","likewise","informal","Persian","feather","sphere","tighten","boast","pat","perceived","sole","publicity","unfold","well-being","validity","ecosystem","strictly","partial","collar","weed","compliance","streak","supposedly","added","builder","glimpse","premise","specialty","deem","artifact","sneak","monkey","mentor","two-thirds","listener","lightning","legally","sleeve","disappointment","disturb","rib","excessive","high-tech","debris","rod","logical","ash","socially","parish","slavery","blank","commodity","cure","mineral","hunger","dying","developmental","faster","spare","halfway","equality","cemetery","harassment","deliberately","fame","regret","striking","likelihood","carrot","atop","toll","rim","embarrassed","fucking","cling","isolated","blink","suspicious","wheelchair","squad","eligible","processor","plunge","demographic","chill","refuge","steer","legislator","rally","programming","cheer","outlet","intact","vendor","thrive","peanut","chew","elaborate","conception","auction","steak","comply","triumph","shareholder","comparable","transport","conscience","considerably","interval","scratch","awake","jurisdiction","inevitably","feminist","constraint","emotionally","expedition","allegedly","similarity","butt","lid","dumb","bulk","sprinkle","mortality","philosophical","conversion","patron","municipal","liver","harmony","solely","tolerance","goat","blessing","palace","formerly","peasant","neat","grandparent","lawmaker","cruise","mobile","calendar","widow","deposit","beard","brake","screening","impulse","forbid","fur","brutal","predator","poke","opt","voluntary","valid","forum","dancing","soar","autonomy","enact","thread","landmark","offender","coming","privately","fraction","distinctive","tourism","threshold","routinely","suite","regulator","straw","theological","exhaust","globe","fragile","objection","chemistry","old-fashioned","crowded","blast","prevail","overnight","denial","rental","fantastic","fragment","screw","warmth","undergraduate","headache","projection","suitable","graduation","drill","cruel","mansion","grape","authorize","cottage","driveway","charm","sexuality","loyal","clay","balloon","invention","ego","fare","homework","sofa","availability","radar","frown","regain","sweater","rehabilitation","rubber","retreat","molecule","freely","favorable","steadily","integrated","youngster","premium","accountability","overwhelm","one-third","contemplate","update","spark","ironically","fatigue","speculate","marker","preach","bucket","blond","confession","provoke","marble","substantially","defender","explicit","disturbing","surveillance","magnetic","technician","mutter","devastating","depart","trauma","neighboring","soak","ribbon","meantime","transmit","harvest","consecutive","republican","coordinate","spy","slot","riot","nutrient","citizenship","severely","sovereignty","ridge","brave","lighting","specify","contributor","frustrate","articulate","importantly","transit","dense","seminar","electronics","sunny","shorts","swell","accusation","soften","straighten","terribly","cue","bride","biography","hazard","compelling","seldom","tile","economically","honestly","troubled","twentieth","balanced","foreigner","convenience","delight","weave","timber","till","accurately","plea","bulb","sustainable","devil","bolt","cargo","spine","seller","skilled","managing","marine","dock","organized","fog","diplomat","boring","sometime","summary","missionary","epidemic","fatal","trim","warehouse","accelerate","bronze","drown","inherent","nationwide","spit","kneel","vacuum","selected","dictate","stereotype","sensor","laundry","manual","pistol","naval","plaintiff","middle-class","apology","obey","occupied","occur to","o’clock","October","oddly","offence","offend","one another","open up","opposing","ought to","outdoors","own up","pace 1","packaging","packet","pack up","pan 1","pants","parallel","parliament","pass away","pass by","pass on","pass out","passport","pass round","pass through","pay back","pay out","pay up","penny","pension 1","per cent","permanently","petrol","photocopy","pick up","pile up","pint","pity","play about","play with","pleasantly","pleasing","plug","plug in","plus 1","p.m.","pointed","point out","poison","poisonous","polish","polite","politely","post office","practise","premises","prepared","prime minister","prince","princess","printer","printing","print off","probable","process 1","programme","promptly","pronounce","pronunciation","proudly","providing","pub","publishing","pull apart","pull down","pull in","pull off","pull out","pull over","pull through","pull up","pull together","pupil","purely","push about","push forward","put away","put back","put down","put forward","put in","put off","put on","put out","put through","put together","put up","put up with","qualification","qualified","racing","railway","re-","read out","read over","reasonably","receipt","reckon","reckon on","refer to","refusal","refuse 1","relate to","relaxed","relaxing","rely on","remains","remarkably","remind of","rented","repeated","reproduce","resort to","restricted","result in","revise","revision","riding","rightly","ring 1","ring 2","ring back","rob","rounded","row 1","rubbish","rude","rudely","ruined","rule out","ruler","rumour","run after","run away","run out","run over","run through","tablet","take away","take back","take down","take in","take off","take on","take over","take up","taxi","tear 1","tear 2","tear up","tell off","temporarily","tenth","thank you","theatre","theirs","thickly","thickness","thief","think about","think of","think of as","think over","think up","thirsty","thirteen","thirteenth","thirtieth","thorough","thousandth","threatening","throw away","throw out","Thursday","tidy","tie up","timetable","tin","tip over","tire out","tiring","ton","tonne","transparent","traveller","triangle","trousers","try on","try out","Tuesday","turn back","turn down","turn into","turn off","turn on","turn out","turn over","turn round","turn to","turn up","twelfth","twisted","tyre","the unemployed","the unexpected","sadly","sadness","sailing","sailor","salty","satisfied","satisfying","Saturday","scare off","scissors","seal off","second 1","secretly","see about","see to","self-","sell off","sell out","senate","send for","send off","sensible","separated","separately","September","set off","set out","settle down","set up","seventeen","seventieth","seventy","sew","sewing","shaped","shave","shiny","shocked","shocking","shoot down","show off","show round","show up","shut down","shut in","shut out","shut up","sideways","sincere","sincerely","singing","sit down","sixteen","sixtieth","sixty","skilful","skilfully","smash","smoking","smoothly","sore","sort out","sour","speak out","speak up","specially","speed up","spelling","spice","spicy","spider","split up","spoil","spoken","spread out","stamp","stand back","stand by","stand for","stand out","stand up","stand up for","start off","start out","start up","stay away","stay out of","steeply","stick out","stick to","stick up","sticky","stiffly","sting","strangely","stressed","stripe","striped","substitute","sufficiently","suitcase","suited","sum up","Sunday","surname","surroundings","swearing","swelling","swimming pool","switch off","swollen","sympathetic","labour","lacking","last 1","latest","laugh at","lazy","lead 1","leading 1","leave out","let down","let off","licence","lie 1","lie 2","lie around","lie down","limit to","litre","live 1","live 2","lively","live on","live through","live together","locally","located","lock up","look after","look at","look down on","look forward to","look into","look on","look on with","look out","look out for","look round","look through","look up","look up to","loosely","lord","lorry","loudly","luggage","lump","machinery","make into","make up","make-up","make up for","manufacture","March","matching","match up","May","means","meet up","meet with","metre","mid-","midday","mile","milligram","millimetre","millionth","minute 1","miss out","mistake for","mistaken","mix up","mobile phone","Monday","morally","motorbike","motorcycle","move in","move out","move over","movie theater","moving","multiply","mum","navy","neatly","neighbour","neighbourhood","nephew","nervously","next to","nicely","niece","nineteen","nineteenth","ninetieth","ninety","ninth","noisily","noisy","non-","nonsense","no one","note down","noticeable","November","hairdresser","hammer","hand back","hand down","hand in","hand out","hand over","hand round","hang about","hang about with","hang around","hang around with","hang on","hang on to","hang up","happen to","harmful","harmless","hatred","have back","have on","have to","hear from","hear of","heating","heat up","help out","hire out","hobby","hold back","hold on","hold on to","hold out","hold up","hollow","honour","horizontal","humorous","humour","hundredth","hurry up","ice cream","identify with","i.e.","illegally","imaginary","immoral","impatient","impressed","inability","inch","independently","indirect","indirectly","indoor","indoors","infect","infected","infectious","injured","ink","insist on","insist on doing","instead of","institute","insult","insulting","intended","interruption","irritate","irritated","irritating","jam","January","jealous","jelly","jewellery","join in","jointly","judgement","July","June","justified","keen","keep out","keep out of","keep up","keep up with","keyboard","kilogram","kilometre","kindly","kindness","knit","knitted","knitting","knock down","knock out","knot","each other","eat out","eat up","educated","efficiently","e.g.","eighteen","eighteenth","eightieth","eighty","eleventh","email","embarrass","embarrassing","embarrassment","encouragement","end in","ending","end up","engaged","enjoyable","enjoyment","enquiry","entertain","entertainer","entertaining","enthusiastic","enthusiastically","entrance 1","etc.","euro","ex-","exaggerate","exaggerated","excite","excluding","face up to","faintly","faithful","faithfully","fancy","farming","farther","farthest","fashionable","fasten","faucet","favour","favourite","February","fetch","fifteenth","fiftieth","figure out","fill in","fill out","fill up","find out","finely","finished","finish off","fit in","flavour","flooded","flooding","flu","folding","follow up","forecast","formally","fortieth","fourteen","fourteenth","freshly","Friday","fridge","frighten","frighten away/off","frightened","frightening","fry","function as","further","gallon","gamble","gambling","generously","genuinely","geography","get away","get away with","get back","get by","get in","get into","get off","get on","get on with","get out of","get over","get round","get round to","get through","get up","give away","give back","give in","give off","give out","give up","glue","go ahead","go away","go back","go back to","go by","god","go down","go into","goodbye","goods","go off","go on","go on doing","go out","go out with","go over","go round","go through","go through with","go to","go up","go with","go without","gradual","gram","grammar","granddaughter","grandson","grave 1","gravely","grey","grow up","call back","called","call for","call off","call up","calm down","calmly","camping","can 1","can 2","cannot","cardboard","care for","careless","carelessly","carry on","carry out","castle","catch up","CD","cell phone","cent","centimetre","centre","certificate","chairwoman","change round","chase away","chat","cheaply","cheat of","check in","check into","check on","check out","check over","check up on","cheerful","cheerfully","chemist","cheque","chop down","chop off","cinema","clap","clean up","clear out","clear up","clever","climbing","close 1","close 2","coldly","colour","coloured","come across","come down","come from","come in","come off","come on","come out","come round","come to","come up","come up to","comfortably","complicate","concentrate on","confidently","confine","confined","confused","confusing","congratulate","congratulation","congress","connected","consist of","content 1","continuously","contrasting","controlled","convenient","cooker","cool down","cough","coughing","count on","countryside","covered","covering","cover up","cracked","credit card","crisp","criterion","cross out","crown","cry out","cupboard","curb","curiously","curl","curl up","curly","curved","customs","cut back","cut down","cut off","cut out","cut up","cycling","damp","date back","deaf","deal in","deal with","decay","December","decide on","decoration","decorative","defence","definite","deliberate","delighted","dentist","depend on","depress","depressing","derive from","deserted","determined","devoted","devote to","diagram","dictionary","die away","die out","disadvantage","disagreement","disagree with doing","disappoint","disappointing","disapproval","disapprove","disapproving","disgust","disgusted","disgusting","dishonest","dishonestly","dislike","divorced","do 1","dollar","do up","do with","do without","downstairs","downward","downwards","dressed","dress up","drive away","drive off","drop out","drugstore","dry off","dry up","dull","DVD","abandoned","absent","accidental","accidentally","accommodation","according to","account for","a couple","add on","add up","add up to","adequately","admiration","advert","advertise","advertisement","affection","afterwards","aged","alarmed","alarming","alcoholic","allied","allow for","all right","aloud","alphabet","alphabetical","alphabetically","alternatively","a.m.","amaze","amazed","ambulance","amount to","amuse","amused","amusing","analyse","angrily","annoy","annoyed","annoying","anti-","anxiously","apart from","approving","approximate","April","arms","arrive at","artificially","artistically","ashamed","aside from","atom","attached","attempted","attend to","August","autumn","awfully","awkward","awkwardly","back up","backward","backwards","bad-tempered","baggage","bandage","bargain","based","base on","beak","beat up","beautifully","because of","behaviour","be left over","believe in","belong to","bent","betting","bid 1","bin","biscuit","bitterly","blonde","blow out","blow up","bore","bored","bound","break down","break in","break into","break off","break out","break up","breathe in","breathe out","breed","brightly","bring back","bring down","bring forward","bring out","bring up","broadly","build up","burn down","burnt","burst into","burst out","bye","appearance","job","T-shirt","God","boyfriend","click","doctor","print","international","finally","modify","telephone","calculation","TV","create","back","quietly","build","hi","brother","database","video","comment","seventh","e-mail","library","rice","which","player","salad","swimming","she","easily","vote","full","running","city","child","gym","beauty","me","garden","tree","ok","show","us","again","flying","Ms","agree","as","kill","enjoy","piano","fan","tennis","hero","address","open","sad","a","o'clock","edit","to","door","quiet","very","bedroom","remember","carefully","speak","run","automatic","music","will","room","search","allow","ten","document","insert","there","ultimate","butterfly","marketing","classic","dance","fifty","war","access","absence","region","happy","supermarket","understand","mouse","area","free","PC","brown","world","leave","recent","annually","available","while","assistant","sometimes","advice","few","automatically","strategy","none","first","scared","drop","secret","gun","Latin","button","married","anything","icon","example","ball","mm-hmm","stress","animal","university","oh","Mrs","translate","sound","maybe","useful","view","another","just","money","keep","medium","fighting","ha","commonly","cute","yourself","long","bed","request","never","how","problem","lemon","send","perfect","future","ad","removal","disc","zone","wrong","somebody","unhappy","card","pass","actually","cholesterol","version","end","helicopter","logic","magic","from","pencil","classroom","used","sure","iron","at","possible","public","whatever","gold","ring","grandfather","dead","do","bank","full-time","yet","someday","policeman","weapon","buy","replacement","cook","fifteen","arrow","banana","police","value","tell","teammate","he","wake","input","invite","picture","cheat","I","quit","naked","ah","hunter","tag","head","badly","bag","acceptable","unknown","camera","reality","life","bathroom","kind","you","image","lately","determine","belt","magazine","guide","ie","far","achievement","European","this","developer","coffee","outdoor","pizza","own","song","clean","education","complain","snow","cotton","herself","part","feature","happily","blood","see","enemy","become","relationship","owner","share","more","and/or","big","provider","boy","knife","compete","determination","reason","fun","depending","last","tank","sex","sleep","because","host","introduction","color","true","French","man","exactly"]

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('button', {
    on: {
      "click": function($event) {
        _vm.loadCommonWords()
      }
    }
  }, [_vm._v("Load 5000")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(12);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(13)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(15)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/home/tuan/Projects/personal/weex-vocabulary/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cf1279c4"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41b883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ListWord = __webpack_require__(0);

var _ListWord2 = _interopRequireDefault(_ListWord);

var _Setting = __webpack_require__(4);

var _Setting2 = _interopRequireDefault(_Setting);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//

exports.default = {
  name: "App",
  components: {
    ListWord: _ListWord2.default,
    Setting: _Setting2.default
  },
  data: function data() {
    return {
      logo: "https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png",
      stage: "HOME"
    };
  },

  methods: {
    toSetting: function toSetting() {
      this.stage = "SETTING";
    }
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('button', {
    on: {
      "click": function($event) {
        _vm.toSetting()
      }
    }
  }, [_vm._v("Setting")]), (_vm.stage === 'HOME') ? _c('list-word') : _vm._e(), (_vm.stage === 'SETTING') ? _c('setting') : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);