var ecologicTrail;

var ecologicTrailContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Trilha Ecológica</h1>'+
    '<div id="bodyContent">'+
    '<p>A <b>Trilha Ecológica</b>,' +
    ' Aberta no meio do cerrado, estimula a interpretação e o visitante '+
    'tem oportunidade de verificar a complexidade e a grandeza de diversidade '+
    'vegetal da região, em 3,5 km de percurso. '+
    'Passa por diversos tipos fisionômicos, como cerrado denso, '+
    'cerrado sentido restrito, campo limpo, campo sujo e mata de galeria, '+
    'onde há uma das nascentes do córrego Cabeça de Veado, '+
    'importante manancial de abastecimento hídrico de Brasília. '+
    'Em seu último trecho abriga a trilha da Fauna, propícia a conhecer '+
    'as características de alguns animais do Cerrado. '+
    'Com bastante atenção, e um pouco de sorte, pode-se avistar um tamanduá, '+
    'tatu ou outro representante da nossa fauna. '+
    '<p>Leia mais em: <a href="/trails/ecologic_trail">'+
    'Trilha Ecológica</a> '+
    '</div>'+
    '</div>';


var ecologicTrailCoordinates = [
    {lat: -15.876003105387605, lng: -47.835300922524766},
    {lat: -15.875977306398507, lng: -47.83523118509038},
    {lat: -15.875977306398507, lng: -47.83520972741826},
    {lat: -15.875982466196604, lng: -47.83515876544698},
    {lat: -15.875977306398507, lng: -47.83512389672978},
    {lat: -15.87596956670115, lng: -47.835080981385545},
    {lat: -15.875956667204873, lng: -47.83503806604131},
    {lat: -15.875928288310154, lng: -47.8350005151151},
    {lat: -15.875917968711086, lng: -47.83498442186101},
    {lat: -15.875894749611247, lng: -47.83496832860692},
    {lat: -15.875861210906741, lng: -47.834954917561845},
    {lat: -15.875863016809582, lng: -47.8349417746108},
    {lat: -15.875839797703396, lng: -47.83486533165387},
    {lat: -15.875848827356124, lng: -47.834847897295276},
    {lat: -15.875838507752983, lng: -47.83481839299611},
    {lat: -15.875750791104943, lng: -47.834775477651874},
    {lat: -15.875683713642436, lng: -47.8347446322482},
    {lat: -15.875657914612448, lng: -47.834721833471576},
    {lat: -15.875628245723874, lng: -47.834690988067905},
    {lat: -15.875605026590652, lng: -47.83464807272367},
    {lat: -15.875577937598496, lng: -47.83460515737943},
    {lat: -15.875574067742185, lng: -47.83456760645322},
    {lat: -15.875570197925162, lng: -47.83451932668709},
    {lat: -15.875567618020852, lng: -47.834477752447356},
    {lat: -15.875566328068698, lng: -47.83443349599861},
    {lat: -15.875566328068698, lng: -47.834403991699446},
    {lat: -15.875549558689798, lng: -47.83436509966873},
    {lat: -15.875541818975993, lng: -47.834323525429},
    {lat: -15.875483771112997, lng: -47.834178686142195},
    {lat: -15.875478611262777, lng: -47.83416393399648},
    {lat: -15.875452812206516, lng: -47.83414113521985},
    {lat: -15.875406373896944, lng: -47.834123700861255},
    {lat: -15.875376704971336, lng: -47.83409956098012},
    {lat: -15.87535567876553, lng: -47.834075555204834},
    {lat: -15.875268606884319, lng: -47.834018558263836},
    {lat: -15.875238937938406, lng: -47.834007158874954},
    {lat: -15.87518733976122, lng: -47.83399978280016},
    {lat: -15.875060924151574, lng: -47.83406348526478},
    {lat: -15.875037704952959, lng: -47.83408091962286},
    {lat: -15.87500997090667, lng: -47.83408695459315},
    {lat: -15.874927413722988, lng: -47.834082931279625},
    {lat: -15.874880330314026, lng: -47.83411914110388},
    {lat: -15.874849371354205, lng: -47.834133893253465},
    {lat: -15.874810027669215, lng: -47.83416943252291},
    {lat: -15.874782035623761, lng: -47.83418405056409},
    {lat: -15.87476010635033, lng: -47.83420014381818},
    {lat: -15.874729147372033, lng: -47.83419075608663},
    {lat: -15.874708508050515, lng: -47.83415722847394},
    {lat: -15.874665939443213, lng: -47.834161251787464},
    {lat: -15.87461176120273, lng: -47.83419477940015},
    {lat: -15.874481475374317, lng: -47.83423233032636},
    {lat: -15.874437100783767, lng: -47.83421730995997},
    {lat: -15.874333904005471, lng: -47.83420389891489},
    {lat: -15.874292625279343, lng: -47.834182441242774},
    {lat: -15.874266826071223, lng: -47.834155619152625},
    {lat: -15.874223483376436, lng: -47.8341491818469},
    {lat: -15.87416672509473, lng: -47.83416661620549},
    {lat: -15.874160275288984, lng: -47.83411565423421},
    {lat: -15.874129316218502, lng: -47.83403652906827},
    {lat: -15.874108676835549, lng: -47.83391717076711},
    {lat: -15.874108676835549, lng: -47.83387425542287},
    {lat: -15.874094487258532, lng: -47.83383268118314},
    {lat: -15.874093197296938, lng: -47.83373209834508},
    {lat: -15.874108676835549, lng: -47.83367979526929},
    {lat: -15.874144795754328, lng: -47.8336449265521},
    {lat: -15.874186074510746, lng: -47.83363151550702},
    {lat: -15.874259086288463, lng: -47.833624541767676},
    {lat: -15.874413881493581, lng: -47.83358430863245},
    {lat: -15.874460320031911, lng: -47.83355480433329},
    {lat: -15.874535137654508, lng: -47.833546757706245},
    {lat: -15.874586735998735, lng: -47.833546757706245},
    {lat: -15.87479570915769, lng: -47.83347165585383},
    {lat: -15.874875686482165, lng: -47.83345824480875},
    {lat: -15.875097558893538, lng: -47.83339118958338},
    {lat: -15.875172376279501, lng: -47.83338046074732},
    {lat: -15.875549042697077, lng: -47.83327049017771},
    {lat: -15.875672878077806, lng: -47.833251714714606},
    {lat: -15.87584057170121, lng: -47.833184659489234},
    {lat: -15.875930868209833, lng: -47.83318197728022},
    {lat: -15.87601084508369, lng: -47.83313906193598},
    {lat: -15.875579227580117, lng: -47.83136370778493},
    {lat: -15.87561147637968, lng: -47.83128055930547},
    {lat: -15.875664364399771, lng: -47.83122691512517},
    {lat: -15.875685777592253, lng: -47.83118104935511},
    {lat: -15.875773494268586, lng: -47.83111131192072},
    {lat: -15.875752855054062, lng: -47.83106571436747},
    {lat: -15.875745115348082, lng: -47.83103352785929},
    {lat: -15.875737375641794, lng: -47.831009387978156},
    {lat: -15.875737891624174, lng: -47.830972105268756},
    {lat: -15.875767560496605, lng: -47.83091846108846},
    {lat: -15.875777880103369, lng: -47.830878227953235},
    {lat: -15.875816578624077, lng: -47.83083799481801},
    {lat: -15.87582173842627, lng: -47.83079507947377},
    {lat: -15.875794649463248, lng: -47.830736070875446},
    {lat: -15.875794133481012, lng: -47.83063387871607},
    {lat: -15.87581735259244, lng: -47.83052927256449},
    {lat: -15.87582251239462, lng: -47.83043003083094},
    {lat: -15.87579671338242, lng: -47.830384433277686},
    {lat: -15.8757812339735, lng: -47.830312013634284},
    {lat: -15.87578897368303, lng: -47.830274462708076},
    {lat: -15.875770914371811, lng: -47.83022618294581},
    {lat: -15.875778654076809, lng: -47.83018326760157},
    {lat: -15.87579155358449, lng: -47.830148398884376},
    {lat: -15.875794133485922, lng: -47.8301162123762},
    {lat: -15.875817352597364, lng: -47.830065250404914},
    {lat: -15.875812192795056, lng: -47.83002501726969},
    {lat: -15.875843151606933, lng: -47.829933822163184},
    {lat: -15.8758328320035, lng: -47.82989895344599},
    {lat: -15.875840571706123, lng: -47.82982116938456},
    {lat: -15.875853471209844, lng: -47.82974338532313},
    {lat: -15.875870756550409, lng: -47.829719513653686},
    {lat: -15.875872046500618, lng: -47.829667210577895},
    {lat: -15.875879786201738, lng: -47.829636365174224},
    {lat: -15.875875916351216, lng: -47.82958674430745},
    {lat: -15.87588881585266, lng: -47.82956394553082},
    {lat: -15.875870756550409, lng: -47.82952639460461},
    {lat: -15.875872046500618, lng: -47.82950225472348},
    {lat: -15.875879786201738, lng: -47.82947543263333},
    {lat: -15.875878496251568, lng: -47.8293802142133},
    {lat: -15.875890105802767, lng: -47.82935339212315},
    {lat: -15.875886235952436, lng: -47.82933461666005},
    {lat: -15.875896555544522, lng: -47.829289019132375},
    {lat: -15.875883656043573, lng: -47.82923269274306},
    {lat: -15.875899135444618, lng: -47.82916161420417},
    {lat: -15.875882366093428, lng: -47.82910931112838},
    {lat: -15.875882366093428, lng: -47.82909321787429},
    {lat: -15.875873336442213, lng: -47.82907176020217},
    {lat: -15.875873336442213, lng: -47.82905432584357},
    {lat: -15.87588881584406, lng: -47.82897520067763},
    {lat: -15.875878496242956, lng: -47.82894435527396},
    {lat: -15.875873336442213, lng: -47.828921556497335},
    {lat: -15.875893975644395, lng: -47.828878641153096},
    {lat: -15.875888815842814, lng: -47.82885450124127},
    {lat: -15.875888815842814, lng: -47.828834384673655},
    {lat: -15.87590816509344, lng: -47.82880488037449},
    {lat: -15.875891395743013, lng: -47.828735142940104},
    {lat: -15.875901715343444, lng: -47.828697592013896},
    {lat: -15.875899135443385, lng: -47.82867076992375},
    {lat: -15.87590300529346, lng: -47.82866004108769},
    {lat: -15.875913324893293, lng: -47.82864663004261},
    {lat: -15.875912034943351, lng: -47.82861176132542},
    {lat: -15.87593396409138, lng: -47.82857421039921},
    {lat: -15.87592751434221, lng: -47.82853263615948},
    {lat: -15.875942993739873, lng: -47.828492403014025},
    {lat: -15.875939123890571, lng: -47.82843607662471},
    {lat: -15.875949443488558, lng: -47.828402549012026},
    {lat: -15.875961053035661, lng: -47.828377068026384},
    {lat: -15.875957183186703, lng: -47.82834890483173},
    {lat: -15.875967502783777, lng: -47.82832744715961},
    {lat: -15.875966212834165, lng: -47.82827782629283},
    {lat: -15.87598040227934, lng: -47.82824698088916},
    {lat: -15.875997171622364, lng: -47.82822552321704},
    {lat: -15.876002331419953, lng: -47.828204065544924},
    {lat: -15.875998461571772, lng: -47.82817322014125},
    {lat: -15.876005169314459, lng: -47.828161954871575},
    {lat: -15.87602322860466, lng: -47.82813915609495},
    {lat: -15.87603096829998, lng: -47.82809758185522},
    {lat: -15.876020648706167, lng: -47.828077465287606},
    {lat: -15.876024518553905, lng: -47.828017786137025},
    {lat: -15.876018713782267, lng: -47.82800102233068},
    {lat: -15.876018713782267, lng: -47.82798492907659},
    {lat: -15.876022583630055, lng: -47.82796816527025},
    {lat: -15.8760212936808, lng: -47.82792323826925},
    {lat: -15.876031613274575, lng: -47.82787294680929},
    {lat: -15.876031613274575, lng: -47.82783070201731},
    {lat: -15.876039352969554, lng: -47.827812597147386},
    {lat: -15.876030323325374, lng: -47.827771022907655},
    {lat: -15.876031613274575, lng: -47.82774621247427},
    {lat: -15.876033548198349, lng: -47.82772676645891},
    {lat: -15.87604128789325, lng: -47.827697262159745},
    {lat: -15.87608192128666, lng: -47.82766239344255},
    {lat: -15.876089016005299, lng: -47.82763355969564},
    {lat: -15.87608514615881, lng: -47.827607408157746},
    {lat: -15.876092885851739, lng: -47.8275718688883},
    {lat: -15.876092240877334, lng: -47.82756181060449},
    {lat: -15.876099335595617, lng: -47.827545717350404},
    {lat: -15.876099980589677, lng: -47.82752828295088},
    {lat: -15.87611030017942, lng: -47.82750548417425},
    {lat: -15.876121909717261, lng: -47.82746323938227},
    {lat: -15.876122554691548, lng: -47.82743641729212},
    {lat: -15.876132229305883, lng: -47.82742434735155},
    {lat: -15.876136744125747, lng: -47.82740020747042},
    {lat: -15.876137389099998, lng: -47.827376067589285},
    {lat: -15.876140613971243, lng: -47.827349245499136},
    {lat: -15.87616318806859, lng: -47.82728286082602},
    {lat: -15.876172217706815, lng: -47.82722385222769},
    {lat: -15.876168992836051, lng: -47.827203065107824},
    {lat: -15.876206401304033, lng: -47.82714472711035},
    {lat: -15.876208336226128, lng: -47.827105835079635},
    {lat: -15.87619995156358, lng: -47.82708370685526},
    {lat: -15.876197371667336, lng: -47.82706694304892},
    {lat: -15.876201241511687, lng: -47.827050179242576},
    {lat: -15.876212851044272, lng: -47.827013969420875},
    {lat: -15.876205756329998, lng: -47.826990500091995},
    {lat: -15.87620511135595, lng: -47.82696636021086},
    {lat: -15.876212851044272, lng: -47.826952949165786},
    {lat: -15.876213496018284, lng: -47.82693015038916},
    {lat: -15.87623220026378, lng: -47.82689997553774},
    {lat: -15.876235425138436, lng: -47.82687985897269},
    {lat: -15.87622381560715, lng: -47.82686510682311},
    {lat: -15.87622252565918, lng: -47.82684968412127},
    {lat: -15.87623284524265, lng: -47.82682487368788},
    {lat: -15.876230265346841, lng: -47.82679000497069},
    {lat: -15.87622252565918, lng: -47.82677525282111},
    {lat: -15.876220590737226, lng: -47.82675915956702},
    {lat: -15.876225105555092, lng: -47.82672563195433},
    {lat: -15.87622252565918, lng: -47.82669143378939},
    {lat: -15.876238005034196, lng: -47.82666058838572},
    {lat: -15.87623736006025, lng: -47.82663644850459},
    {lat: -15.87623026535175, lng: -47.82661566137449},
    {lat: -15.876227685455902, lng: -47.8265995681204},
    {lat: -15.876227685455902, lng: -47.82657073437349},
    {lat: -15.876232845247575, lng: -47.82655128835813},
    {lat: -15.876231555299668, lng: -47.82653787731306},
    {lat: -15.876243164830525, lng: -47.8264909386553},
    {lat: -15.876243164830525, lng: -47.82639974354879},
    {lat: -15.876245744726157, lng: -47.8263836502947},
    {lat: -15.876262514047108, lng: -47.82633805274145},
    {lat: -15.87627670347142, lng: -47.826321288935105},
    {lat: -15.876278638392838, lng: -47.82630385457651},
    {lat: -15.87627670347142, lng: -47.82628373796797},
    {lat: -15.876272833628532, lng: -47.826270326922895},
    {lat: -15.876287023052106, lng: -47.82622405881739},
    {lat: -15.87629992252724, lng: -47.826203942249776},
    {lat: -15.876319271738378, lng: -47.8260906189189},
    {lat: -15.876313466975228, lng: -47.82604837412691},
    {lat: -15.87631669184366, lng: -47.82603161032057},
    {lat: -15.876347650578019, lng: -47.82596187288618},
    {lat: -15.876344425710071, lng: -47.825942426870824},
    {lat: -15.876365709837524, lng: -47.825904875944616},
    {lat: -15.876368289731607, lng: -47.82588408882475},
    {lat: -15.876365709837524, lng: -47.82585324346201},
    {lat: -15.876364419890471, lng: -47.825838491312425},
    {lat: -15.876394088670628, lng: -47.82579289375917},
    {lat: -15.876383124121938, lng: -47.82577680050508},
    {lat: -15.876381189201524, lng: -47.825757354489724},
    {lat: -15.876388928883078, lng: -47.82574394344465},
    {lat: -15.876392153750317, lng: -47.82568225263731},
    {lat: -15.876411244967173, lng: -47.82565194366725},
    {lat: -15.87640866507364, lng: -47.825630485995134},
    {lat: -15.876464132777324, lng: -47.82561171053203},
    {lat: -15.876510570843074, lng: -47.825609028323015},
    {lat: -15.876531467955395, lng: -47.82563799618856},
    {lat: -15.87655275206308, lng: -47.82564000784532},
    {lat: -15.87661015464532, lng: -47.82565408944265},
    {lat: -15.876635308580703, lng: -47.82567688821928},
    {lat: -15.876654012791942, lng: -47.82571376859835},
    {lat: -15.876667557216138, lng: -47.825727850195676},
    {lat: -15.87667723180429, lng: -47.82572650909117},
    {lat: -15.876714640207403, lng: -47.825699016448766},
    {lat: -15.876728184627517, lng: -47.8256782293289},
    {lat: -15.876750113686716, lng: -47.82567152380636},
    {lat: -15.87676817291014, lng: -47.82567286491087},
    {lat: -15.876795906719313, lng: -47.82568292318956},
    {lat: -15.876823640519758, lng: -47.82570974527971},
    {lat: -15.876841699736591, lng: -47.82573656736986},
    {lat: -15.876893297480215, lng: -47.82577680050508},
    {lat: -15.876938445509818, lng: -47.82584653793947},
    {lat: -15.876968114205425, lng: -47.82589012383596},
    {lat: -15.876991333181554, lng: -47.825919628135125},
    {lat: -15.877006812497486, lng: -47.825930356971185},
    {lat: -15.87701842198365, lng: -47.82595248519556},
    {lat: -15.877057120266056, lng: -47.825969919554154},
    {lat: -15.87707453449439, lng: -47.82597327231542},
    {lat: -15.877137741657677, lng: -47.82599741215563},
    {lat: -15.877145481310173, lng: -47.82601216430521},
    {lat: -15.87716160558522, lng: -47.82602624590254},
    {lat: -15.877200303840121, lng: -47.82603764529085},
    {lat: -15.877222877823614, lng: -47.82607117290354},
    {lat: -15.877282215126696, lng: -47.826110064934255},
    {lat: -15.87729898436135, lng: -47.82612884039736},
    {lat: -15.877330587915171, lng: -47.82614828641272},
    {lat: -15.877365416315694, lng: -47.82618717844343},
    {lat: -15.87738218554343, lng: -47.82623210544443},
    {lat: -15.87739959973997, lng: -47.82624819869852},
    {lat: -15.877410564139836, lng: -47.82627703252729},
    {lat: -15.877449907316942, lng: -47.826332688364346},
    {lat: -15.877478930967268, lng: -47.82634945217069},
    {lat: -15.877528593648128, lng: -47.82640846076902},
    {lat: -15.87761437461349, lng: -47.82645472887452},
    {lat: -15.877645978117833, lng: -47.82649697366651},
    {lat: -15.877666617138408, lng: -47.82654257121976},
    {lat: -15.877705315296275, lng: -47.82657878104146},
    {lat: -15.87771240995774, lng: -47.826606273683865},
    {lat: -15.877713699896168, lng: -47.826640471848805},
    {lat: -15.877752398123715, lng: -47.82666327062543},
    {lat: -15.87777110224109, lng: -47.826684728215696},
    {lat: -15.877796901000448, lng: -47.82673770184374},
    {lat: -15.877798190938327, lng: -47.82677055890417},
    {lat: -15.877804640627602, lng: -47.82679671044207},
    {lat: -15.877822699756498, lng: -47.82683090860701},
    {lat: -15.87786913750907, lng: -47.82688052947378},
    {lat: -15.877882036887794, lng: -47.82691405708647},
    {lat: -15.877898161103912, lng: -47.82692478592253},
    {lat: -15.877920735004292, lng: -47.82698044175959},
    {lat: -15.877943953870615, lng: -47.82699318225241},
    {lat: -15.877961368018594, lng: -47.826999887774946},
    {lat: -15.877974912345033, lng: -47.82701531047678},
    {lat: -15.877981362028656, lng: -47.827034085939886},
    {lat: -15.878014900380172, lng: -47.8270542025075},
    {lat: -15.878024574903607, lng: -47.82708035404539},
    {lat: -15.878026509808246, lng: -47.827105835031034},
    {lat: -15.878051018598631, lng: -47.82716417307711},
    {lat: -15.878071012609638, lng: -47.82718294854021},
    {lat: -15.878075527390966, lng: -47.8272023945965},
    {lat: -15.878094231463557, lng: -47.82722854613439},
    {lat: -15.878123255021048, lng: -47.82723189889566},
    {lat: -15.878134219475008, lng: -47.82726006209032},
    {lat: -15.878154213480213, lng: -47.82727615530348},
    {lat: -15.878168402771285, lng: -47.82730834181166},
    {lat: -15.878196781350415, lng: -47.82735393936491},
    {lat: -15.87822258005526, lng: -47.82738076145506},
    {lat: -15.878239349211636, lng: -47.82743172342634},
    {lat: -15.878275467389855, lng: -47.82748670871115},
    {lat: -15.878296106348381, lng: -47.82750682527876},
    {lat: -15.878311585564052, lng: -47.82752694184637},
    {lat: -15.87831803523689, lng: -47.82754772896624},
    {lat: -15.878333514450869, lng: -47.82756315166807},
    {lat: -15.87834576882776, lng: -47.82760941981451},
    {lat: -15.878361893006742, lng: -47.82762484251634},
    {lat: -15.878361893006742, lng: -47.827653005711},
    {lat: -15.878369632612205, lng: -47.82766976951734},
    {lat: -15.878382531953974, lng: -47.827684521666924},
    {lat: -15.878390271558633, lng: -47.82772341369764},
    {lat: -15.878418005139558, lng: -47.82773816584722},
    {lat: -15.878448963550962, lng: -47.827797844997804},
    {lat: -15.878448963550962, lng: -47.82782064377443},
    {lat: -15.878457993086721, lng: -47.827832713715},
    {lat: -15.878481856877553, lng: -47.827844783665796},
    {lat: -15.878527004544967, lng: -47.827913179995676},
    {lat: -15.878554738107063, lng: -47.82793396711554},
    {lat: -15.878574732068056, lng: -47.82795408368315},
    {lat: -15.878600530724496, lng: -47.82797285914626},
    {lat: -15.878629554209036, lng: -47.82800973952021},
    {lat: -15.878641808567915, lng: -47.828023821115494},
    {lat: -15.878675346809459, lng: -47.82805332541466},
    {lat: -15.878698565588786, lng: -47.82805734872818},
    {lat: -15.878708885045404, lng: -47.82806941866875},
    {lat: -15.878739843412117, lng: -47.82810898125172},
    {lat: -15.878783056104668, lng: -47.82812239224768},
    {lat: -15.87880369500872, lng: -47.82813647384501},
    {lat: -15.8788120795629, lng: -47.82815726096487},
    {lat: -15.878810789631508, lng: -47.82817871863699},
    {lat: -15.878815949357012, lng: -47.82823236281729},
    {lat: -15.878829493635832, lng: -47.828258514355184},
    {lat: -15.878839168120145, lng: -47.82829874749041},
    {lat: -15.878850132535138, lng: -47.828321546267034},
    {lat: -15.878969451120435, lng: -47.82837720210409},
    {lat: -15.878976545737386, lng: -47.828389942596914},
    {lat: -15.87899331483099, lng: -47.82840134198523},
    {lat: -15.879015243643595, lng: -47.82840871806002},
    {lat: -15.879026853013997, lng: -47.828426152418615},
    {lat: -15.879028787909006, lng: -47.8284683972106},
    {lat: -15.879026853013997, lng: -47.82848449046469},
    {lat: -15.879030077839, lng: -47.82853679354048},
    {lat: -15.87904749189801, lng: -47.82856495677606},
    {lat: -15.879066195880352, lng: -47.82861994206087},
    {lat: -15.879089414614631, lng: -47.828682303420464},
    {lat: -15.879089414614631, lng: -47.828703761092584},
    {lat: -15.879097799156916, lng: -47.828721866003434},
    {lat: -15.879153911089622, lng: -47.82873326539175},
    {lat: -15.879181644565408, lng: -47.82872454821245},
    {lat: -15.879233241719497, lng: -47.828741982571046},
    {lat: -15.879293868358646, lng: -47.8287513703026},
    {lat: -15.879302897856533, lng: -47.82877215742246},
    {lat: -15.879338370880037, lng: -47.82881306110994},
    {lat: -15.879338370880037, lng: -47.82883653043882},
    {lat: -15.879360944619007, lng: -47.828849941483895},
    {lat: -15.879379648591922, lng: -47.82889017461912},
    {lat: -15.879435760441194, lng: -47.82898539303915},
    {lat: -15.879459624096508, lng: -47.82899612187521},
    {lat: -15.87946607373259, lng: -47.82902428506986},
    {lat: -15.879495742055905, lng: -47.829065859309594},
    {lat: -15.879514445996618, lng: -47.8290846347727},
    {lat: -15.879548629056199, lng: -47.82909536360876},
    {lat: -15.879578942330596, lng: -47.82911413907186},
    {lat: -15.879589261742103, lng: -47.82912822066919},
    {lat: -15.879627959530593, lng: -47.82914297281877},
    {lat: -15.87968020153325, lng: -47.82918857038226},
    {lat: -15.879760821881154, lng: -47.82929585874285},
    {lat: -15.879773721133814, lng: -47.82933340966906},
    {lat: -15.879802099486769, lng: -47.829364255021574},
    {lat: -15.879824028211326, lng: -47.82939107711172},
    {lat: -15.879844022046331, lng: -47.829402476500036},
    {lat: -15.87984724685824, lng: -47.829416558097364},
    {lat: -15.879878850012252, lng: -47.82946483785963},
    {lat: -15.879876915125411, lng: -47.82955066854811},
    {lat: -15.879889169408402, lng: -47.82958017284727},
    {lat: -15.879905293463837, lng: -47.82958821947432},
    {lat: -15.879923352404383, lng: -47.829586207817556},
    {lat: -15.879931091910471, lng: -47.82959224282877},
    {lat: -15.879967209785317, lng: -47.82962577044145},
    {lat: -15.87999429818721, lng: -47.829637169829766},
    {lat: -15.880013647043475, lng: -47.829651251427094},
    {lat: -15.880075563371022, lng: -47.8297149538912},
    {lat: -15.880083302910624, lng: -47.829743117085854},
    {lat: -15.880085237795479, lng: -47.829761221996705},
    {lat: -15.880095557181056, lng: -47.82978200911657},
    {lat: -15.880128450219056, lng: -47.82982894777433},
    {lat: -15.880134899833715, lng: -47.829856440416734},
    {lat: -15.880134899833715, lng: -47.82987923919336},
    {lat: -15.880146509139601, lng: -47.82989935576097},
    {lat: -15.88016263319411, lng: -47.82991209625379},
    {lat: -15.880167792884984, lng: -47.829942941657464},
    {lat: -15.880196171182417, lng: -47.83000932633058},
    {lat: -15.880211650252065, lng: -47.83003748952524},
    {lat: -15.880221969631165, lng: -47.83007034658567},
    {lat: -15.880225839398191, lng: -47.83010454475061},
    {lat: -15.880227129320524, lng: -47.83013673125879},
    {lat: -15.880222614592338, lng: -47.83015349506513},
    {lat: -15.880219389786435, lng: -47.830168247214715},
    {lat: -15.880221969631165, lng: -47.83019775151388},
    {lat: -15.880222614592338, lng: -47.83021183311121},
    {lat: -15.88019681614368, lng: -47.830262124530236},
    {lat: -15.880209070407204, lng: -47.830288946620385},
    {lat: -15.880211005290839, lng: -47.8303278386511},
    {lat: -15.880200685911179, lng: -47.830355331293504},
    {lat: -15.880185206840705, lng: -47.83038014172689},
    {lat: -15.880171017691701, lng: -47.830391541115205},
    {lat: -15.880151668850564, lng: -47.83044987916128},
    {lat: -15.880143284352158, lng: -47.83049011230469},
    {lat: -15.880134254891944, lng: -47.83051760494709},
    {lat: -15.880125225431332, lng: -47.83053369820118},
    {lat: -15.880125225451014, lng: -47.83056253196037},
    {lat: -15.880116195989995, lng: -47.830600082886576},
    {lat: -15.880106521567017, lng: -47.83062422276771},
    {lat: -15.88010716652857, lng: -47.83065104485786},
    {lat: -15.880099426989876, lng: -47.83067987860477},
    {lat: -15.880098782028307, lng: -47.8307127356652},
    {lat: -15.880091042489292, lng: -47.83072681726253},
    {lat: -15.880101361874576, lng: -47.830752968800425},
    {lat: -15.880104586682378, lng: -47.83077375592029},
    {lat: -15.880090397527699, lng: -47.83080191911495},
    {lat: -15.880085237834843, lng: -47.830832093966364},
    {lat: -15.880094267297258, lng: -47.83086763323581},
    {lat: -15.880112326220857, lng: -47.83087836205141},
    {lat: -15.880129095219896, lng: -47.830935358992974},
    {lat: -15.880143929333268, lng: -47.83095949887411},
    {lat: -15.880145219256123, lng: -47.831013143054406},
    {lat: -15.880152958793051, lng: -47.83102990686075},
    {lat: -15.880138124680343, lng: -47.831061422816674},
    {lat: -15.880135544834543, lng: -47.83107818662302},
    {lat: -15.880144574294695, lng: -47.831102997056405},
    {lat: -15.880169082827356, lng: -47.83112579583303},
    {lat: -15.880180047145354, lng: -47.83115932344572},
    {lat: -15.880171662648129, lng: -47.83119888602869},
    {lat: -15.880170372725452, lng: -47.831261247388284},
    {lat: -15.880163278150551, lng: -47.831292092791955},
    {lat: -15.88013618977139, lng: -47.83134104310648},
    {lat: -15.880138124655751, lng: -47.83137390016691},
    {lat: -15.8801329649641, lng: -47.83139334618227},
    {lat: -15.88011813084993, lng: -47.83141681551115},
    {lat: -15.880120065734454, lng: -47.83145704864637},
    {lat: -15.880096202157405, lng: -47.831526115528504},
    {lat: -15.880081368040512, lng: -47.83153416215555},
    {lat: -15.880077498270712, lng: -47.83155830203668},
    {lat: -15.88008459284863, lng: -47.8316246867098},
    {lat: -15.880101361849972, lng: -47.83168369530813},
    {lat: -15.880110391311664, lng: -47.831746056667725},
    {lat: -15.88011748588841, lng: -47.831764161578576},
    {lat: -15.880113616119312, lng: -47.831807747515995},
    {lat: -15.880124580464917, lng: -47.831863403353054},
    {lat: -15.880112326196253, lng: -47.83192442360814},
    {lat: -15.880115551003874, lng: -47.831955269011814},
    {lat: -15.880096847118988, lng: -47.83201025429662},
    {lat: -15.880052344765176, lng: -47.83208200334684},
    {lat: -15.880048474994815, lng: -47.832116872064034},
    {lat: -15.880060729267374, lng: -47.83220605551378},
    {lat: -15.880054924612043, lng: -47.832228854290406},
    {lat: -15.88006395407582, lng: -47.83230529724733},
    {lat: -15.880069113769215, lng: -47.832324072710435},
    {lat: -15.880072983539192, lng: -47.832352906457345},
    {lat: -15.880055569573763, lng: -47.832397833458344},
    {lat: -15.880058794382288, lng: -47.83249640463964},
    {lat: -15.880035575759749, lng: -47.83252523838655},
    {lat: -15.880035575759749, lng: -47.832561448218485},
    {lat: -15.88004073545388, lng: -47.83257687092032},
    {lat: -15.880027836218316, lng: -47.83262515068259},
    {lat: -15.880037510645062, lng: -47.832642585041185},
    {lat: -15.880029771103693, lng: -47.83267812431063},
    {lat: -15.880032350950854, lng: -47.83270628750529},
    {lat: -15.880033640874425, lng: -47.83274585008826},
    {lat: -15.880028481180114, lng: -47.832772001626154},
    {lat: -15.880022676523842, lng: -47.832831680776735},
    {lat: -15.880024611409295, lng: -47.832867890598436},
    {lat: -15.880038155606833, lng: -47.83288063109126},
    {lat: -15.880051699803454, lng: -47.832907453171174},
    {lat: -15.880056214535458, lng: -47.83293159305231},
    {lat: -15.88004073545388, lng: -47.832983225575845},
    {lat: -15.880043960262633, lng: -47.833017423740785},
    {lat: -15.880016871867431, lng: -47.8330925255932},
    {lat: -15.880013647058233, lng: -47.833156228057305},
    {lat: -15.880025256371106, lng: -47.83318573235647},
    {lat: -15.88003041606549, lng: -47.83323065935747},
    {lat: -15.880028481180114, lng: -47.83325815199987},
    {lat: -15.879999457897155, lng: -47.83331246673242},
    {lat: -15.880000102859041, lng: -47.83340500294344},
    {lat: -15.880006552477822, lng: -47.83342511951105},
    {lat: -15.880023321485679, lng: -47.833445906630914},
    {lat: -15.880020741638402, lng: -47.833474069830686},
    {lat: -15.880006552477822, lng: -47.833488151428014},
    {lat: -15.880006552477822, lng: -47.833527714010984},
    {lat: -15.880018806752924, lng: -47.83356727659395},
    {lat: -15.880014292020066, lng: -47.833592757579595},
    {lat: -15.880022031562033, lng: -47.83362829684904},
    {lat: -15.880029771103693, lng: -47.83365444838694},
    {lat: -15.880029771103693, lng: -47.83369401096991},
    {lat: -15.880025256376015, lng: -47.83372418581621},
    {lat: -15.880023321490588, lng: -47.83376643060819},
    {lat: -15.880013647063155, lng: -47.83379995822088},
    {lat: -15.880015581948685, lng: -47.833831474176804},
    {lat: -15.879998167978297, lng: -47.83384488522188},
    {lat: -15.879987203625793, lng: -47.83387170731203},
    {lat: -15.87998462377806, lng: -47.833905234924714},
    {lat: -15.87997430438681, lng: -47.83394949137346},
    {lat: -15.879955600488804, lng: -47.83397631346361},
    {lat: -15.879919482611863, lng: -47.83398570119516},
    {lat: -15.879896908931794, lng: -47.833999112240235},
    {lat: -15.879873690290603, lng: -47.83402727543489},
    {lat: -15.879853696458536, lng: -47.83404135703222},
    {lat: -15.87984273209695, lng: -47.83407689631065},
    {lat: -15.879813708787237, lng: -47.834092319012484},
    {lat: -15.87980403434973, lng: -47.8341137766846},
    {lat: -15.87979500487431, lng: -47.83414529264053},
    {lat: -15.879764691632428, lng: -47.83421771228393},
    {lat: -15.879736958236933, lng: -47.834249228239855},
    {lat: -15.87971309461448, lng: -47.83433640003284},
    {lat: -15.87971309461448, lng: -47.83438467979511},
    {lat: -15.879765981582318, lng: -47.83444167672769},
    {lat: -15.879777590909455, lng: -47.834476545444886},
    {lat: -15.879797584749067, lng: -47.83450470863954},
    {lat: -15.879817578586705, lng: -47.83458383380548},
    {lat: -15.879829832873307, lng: -47.83461602031366},
    {lat: -15.8798607910677, lng: -47.83465491234438},
    {lat: -15.879868530615568, lng: -47.83469715713636},
    {lat: -15.879893039181828, lng: -47.83475683628694},
    {lat: -15.879893039181828, lng: -47.83478164672033},
    {lat: -15.87988400971039, lng: -47.834805786601464},
    {lat: -15.879893039181828, lng: -47.83484266697542},
    {lat: -15.879908518274766, lng: -47.83486948906557},
    {lat: -15.879951085774218, lng: -47.8348916172979},
    {lat: -15.879984623797753, lng: -47.83490234613396},
    {lat: -15.88002203158664, lng: -47.83489966392494},
    {lat: -15.880055569598355, lng: -47.83488826453663},
    {lat: -15.88011426106607, lng: -47.83490033447691},
    {lat: -15.880159408367572, lng: -47.83487954735705},
    {lat: -15.880191011472588, lng: -47.83487954735705},
    {lat: -15.880240028523632, lng: -47.83484065532633},
    {lat: -15.880263247122599, lng: -47.83484534919211},
    {lat: -15.880277436304452, lng: -47.83485540742731},
    {lat: -15.88030323474278, lng: -47.834857419084074},
    {lat: -15.880323873491085, lng: -47.834861442397596},
    {lat: -15.880338707590106, lng: -47.83487351233816},
    {lat: -15.880396109093425, lng: -47.83488759393549},
    {lat: -15.880430936963878, lng: -47.834880888412954},
    {lat: -15.880451575699079, lng: -47.83485473687506},
    {lat: -15.880489628361557, lng: -47.83486412460661},
    {lat: -15.880514781812478, lng: -47.83487820620394},
    {lat: -15.880543805021166, lng: -47.83488155896521},
    {lat: -15.880564443744802, lng: -47.83486948902464},
    {lat: -15.880598626626169, lng: -47.83486948902464},
    {lat: -15.880628939742532, lng: -47.834864795158865},
    {lat: -15.880659897814102, lng: -47.834846690248014},
    {lat: -15.880685051243752, lng: -47.834823220919134},
    {lat: -15.88071665426629, lng: -47.83477628226137},
    {lat: -15.880742452608999, lng: -47.834754824589254},
    {lat: -15.880773410663128, lng: -47.834740742991926},
    {lat: -15.88080888342763, lng: -47.834754824589254},
    {lat: -15.880867574715161, lng: -47.834793046067716},
    {lat: -15.880904982340068, lng: -47.83479237551546},
    {lat: -15.88092562103653, lng: -47.83478701114859},
    {lat: -15.880958513938948, lng: -47.83478432893958},
    {lat: -15.880991406836014, lng: -47.834800422193666},
    {lat: -15.88102300981049, lng: -47.83479975164141},
    {lat: -15.881053322867885, lng: -47.83478365838732},
    {lat: -15.881102339709065, lng: -47.83476555347647},
    {lat: -15.881117173750745, lng: -47.83476689458098},
    {lat: -15.881150066621892, lng: -47.83475951850619},
    {lat: -15.88118295948767, lng: -47.834733366968294},
    {lat: -15.881209402772953, lng: -47.83470721542784},
    {lat: -15.881226171680636, lng: -47.8346817344422},
    {lat: -15.881243585544834, lng: -47.83467234671065},
    {lat: -15.881267448985929, lng: -47.83467100560614},
    {lat: -15.881300986790263, lng: -47.83465088903853},
    {lat: -15.881370642231852, lng: -47.83464217185667},
    {lat: -15.881406114891156, lng: -47.83459992706469},
    {lat: -15.88141127455016, lng: -47.83457109331778},
    {lat: -15.881426753526425, lng: -47.83454963564566},
    {lat: -15.881484154719628, lng: -47.83453689515284},
    {lat: -15.8815067282181, lng: -47.83452683686903},
    {lat: -15.881522852144025, lng: -47.83450873195818},
    {lat: -15.88154349072796, lng: -47.83450135588595},
    {lat: -15.881567999090384, lng: -47.83449934422919},
    {lat: -15.881595087276967, lng: -47.834510073065246},
    {lat: -15.881616370849578, lng: -47.83452348411032},
    {lat: -15.881629269983389, lng: -47.83453957736441},
    {lat: -15.881644748942886, lng: -47.834574446081604},
    {lat: -15.881647328769361, lng: -47.83458450436541},
    {lat: -15.881665387553703, lng: -47.83462741970965},
    {lat: -15.881675061901786, lng: -47.834657594561065},
    {lat: -15.881673127032197, lng: -47.834689781069244},
    {lat: -15.881680866510427, lng: -47.83471928536841},
    {lat: -15.881691185814237, lng: -47.83473806083151},
    {lat: -15.881688605988336, lng: -47.83478634059378},
    {lat: -15.881675061901786, lng: -47.834810480474914},
    {lat: -15.881675706858317, lng: -47.83483663201281},
    {lat: -15.881681511466917, lng: -47.834848701953376},
    {lat: -15.881680221553909, lng: -47.83494794369972},
    {lat: -15.881676351814832, lng: -47.8349626958493},
    {lat: -15.881689895901292, lng: -47.83500963450706},
    {lat: -15.881700860161073, lng: -47.83503109217918},
    {lat: -15.881720853829457, lng: -47.83505053819454},
    {lat: -15.88175116676705, lng: -47.83507199584619},
    {lat: -15.881767290673405, lng: -47.835088759652535},
    {lat: -15.881793088920887, lng: -47.835099488488595},
    {lat: -15.88182017707719, lng: -47.83513838051931},
    {lat: -15.881828561505792, lng: -47.835167884818475},
    {lat: -15.881826626637679, lng: -47.83521884678976},
    {lat: -15.881849845053724, lng: -47.83527383207456},
    {lat: -15.881851134965636, lng: -47.83530870079176},
    {lat: -15.881859519392954, lng: -47.835335522881905},
    {lat: -15.881880802937614, lng: -47.8353616744198},
    {lat: -15.881894347010308, lng: -47.83539587258474},
    {lat: -15.881894347010308, lng: -47.83542470633165},
    {lat: -15.881906601170556, lng: -47.835445493451516},
    {lat: -15.881940138874587, lng: -47.83547835051195},
    {lat: -15.881950458165116, lng: -47.835522606960694},
    {lat: -15.881954972854563, lng: -47.83557423948423},
    {lat: -15.881923370026342, lng: -47.835609108201425},
    {lat: -15.881916275513206, lng: -47.83563190697805},
    {lat: -15.8819246599378, lng: -47.83565470575468},
    {lat: -15.881917565424713, lng: -47.83567281066553},
    {lat: -15.881885962590616, lng: -47.83569426833765},
    {lat: -15.881862744182433, lng: -47.83572310208456},
    {lat: -15.881836945943869, lng: -47.83574724196569},
    {lat: -15.881824046823354, lng: -47.83576869963781},
    {lat: -15.88181243761418, lng: -47.83579552172796},
    {lat: -15.881806633009344, lng: -47.83583307265417},
    {lat: -15.881805343097138, lng: -47.835881352416436},
    {lat: -15.881704084960491, lng: -47.83590146898405},
    {lat: -15.881626690173912, lng: -47.83594371377603},
    {lat: -15.881550585268995, lng: -47.83601881562845},
    {lat: -15.881504793322291, lng: -47.836107999078195},
    {lat: -15.881419658976101, lng: -47.83628301322153},
    {lat: -15.880372632470397, lng: -47.83969196716498},
    {lat: -15.880358443334611, lng: -47.83981803098868},
    {lat: -15.88029652709402, lng: -47.83997628132056},
    {lat: -15.880242350367903, lng: -47.840067476427066},
    {lat: -15.880132706949006, lng: -47.84015062490653},
    {lat: -15.879411122818675, lng: -47.84031665325983},
    {lat: -15.879359525690475, lng: -47.840075254571275},
    {lat: -15.879284709859652, lng: -47.83977216495259},
    {lat: -15.879189255138591, lng: -47.839461028706864},
    {lat: -15.879078321216745, lng: -47.839230358567875},
    {lat: -15.87877131771916, lng: -47.83878779408042},
    {lat: -15.878745519084607, lng: -47.838747560945194},
];

var ecologicTrailColor = '#15317e';

function addEcologicTrail(){
    //create the river
    ecologicTrail = createTrail(ecologicTrailCoordinates, ecologicTrailColor);

    //set the river on map
    ecologicTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(ecologicTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, ecologicTrailContentString);
    });
}
