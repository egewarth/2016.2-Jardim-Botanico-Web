var matterTrail;

var matterTrailContentString =
    '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Trilha Matter</h1>'+
    '<div id="bodyContent">'+
    '<p>A <b>Trilha Matter</b> é a primeira trilha do JBB,  ' +
    'asfaltada e com acessibilidade para portadores de necessidades especiais.  '+
    'Começa na portaria principal atravessando vários tipos de vegetação de Cerrado (denso, típico e ralo). '+
    '<p>Leia mais em: <a href="http://www.jardimbotanico.df.gov.br/espacos-jbb/trilhas/">'+
    'Trilhas</a> '+
    '</div>'+
    '</div>';

var matterTrailCoordinates = [
    {lat: -15.863455119200005, lng: -47.83678572624922},
    {lat: -15.86360992270291, lng: -47.837086133658886},
    {lat: -15.863744085642619, lng: -47.8373221680522},
    {lat: -15.86390920913818, lng: -47.83753674477339},
    {lat: -15.864053692085848, lng: -47.83769767731428},
    {lat: -15.864177534530006, lng: -47.837890796363354},
    {lat: -15.86431169709202, lng: -47.837957348674536},
    {lat: -15.864533581133283, lng: -47.83812364563346},
    {lat: -15.864755464930333, lng: -47.83830603584647},
    {lat: -15.865075389975262, lng: -47.83855816349387},
    {lat: -15.865235352307339, lng: -47.83862253651023},
    {lat: -15.865457235332046, lng: -47.838708367198706},
    {lat: -15.865746198905061, lng: -47.83879419788718},
    {lat: -15.870694635806508, lng: -47.84029087051749},
    {lat: -15.872872115948125, lng: -47.840961422771215},
    {lat: -15.873001112848614, lng: -47.840977516025305},
    {lat: -15.87308883069375, lng: -47.84089168533683},
    {lat: -15.87313526953749, lng: -47.84076612442732},
    {lat: -15.873155909020161, lng: -47.84048717468977},
    {lat: -15.87313526953749, lng: -47.84019749611616},
    {lat: -15.873186868240204, lng: -47.84001510590315},
    {lat: -15.87322814719286, lng: -47.839854173362255},
    {lat: -15.87322814719286, lng: -47.83966105431318},
    {lat: -15.873269426137057, lng: -47.83953448757529},
    {lat: -15.873290065605987, lng: -47.83934673294425},
    {lat: -15.87331586493917, lng: -47.8390677832067},
    {lat: -15.873321024805408, lng: -47.83884784206748},
    {lat: -15.873321024805408, lng: -47.838713731616735},
    {lat: -15.87331586493917, lng: -47.83857962116599},
    {lat: -15.873362303730584, lng: -47.838488426059484},
    {lat: -15.873455181281303, lng: -47.83842405304313},
    {lat: -15.873532579207533, lng: -47.83838650211692},
    {lat: -15.873640936254304, lng: -47.8383650444448},
    {lat: -15.873728653820915, lng: -47.83830603584647},
    {lat: -15.873798311861309, lng: -47.838264210149646},
    {lat: -15.87388602935941, lng: -47.83820788376033},
    {lat: -15.873932468019417, lng: -47.83811668865383},
    {lat: -15.873963427120138, lng: -47.83803622238338},
    {lat: -15.873984066517975, lng: -47.83791015855968},
    {lat: -15.874017605534965, lng: -47.837792141363025},
    {lat: -15.874043404774994, lng: -47.83766339533031},
    {lat: -15.874076943782088, lng: -47.83755878917873},
    {lat: -15.874105322937584, lng: -47.83743808977306},
    {lat: -15.874164661158881, lng: -47.83733348362148},
    {lat: -15.874249798576303, lng: -47.83718596212566},
    {lat: -15.874275597786616, lng: -47.837129635736346},
    {lat: -15.874319456436538, lng: -47.83705453388393},
    {lat: -15.874358155237376, lng: -47.8369955252856},
    {lat: -15.87439427411145, lng: -47.83694724552333},
    {lat: -15.874443292573034, lng: -47.83688019029796},
    {lat: -15.874520690119695, lng: -47.83685336820781},
    {lat: -15.874626466718706, lng: -47.836815817281604},
    {lat: -15.874715473813895, lng: -47.83680563326925},
    {lat: -15.874728373389637, lng: -47.83680563326925},
    {lat: -15.874702574237313, lng: -47.8367063915357},
    {lat: -15.874669035334353, lng: -47.83657630439848},
    {lat: -15.874621306885901, lng: -47.83637484535575},
    {lat: -15.874559388881885, lng: -47.83614417538047},
    {lat: -15.874518110201953, lng: -47.835956420749426},
    {lat: -15.874481991350079, lng: -47.8357901237905},
    {lat: -15.874420073303238, lng: -47.83560773357749},
    {lat: -15.87433235603765, lng: -47.83539852127433},
    {lat: -15.87426011826084, lng: -47.835242953151464},
    {lat: -15.874115642629501, lng: -47.83507129177451},
    {lat: -15.873971166894576, lng: -47.83488353714347},
    {lat: -15.873821531202758, lng: -47.83477088436484},
    {lat: -15.873749293242799, lng: -47.834717240184546},
    {lat: -15.873635776396249, lng: -47.83466896042228},
    {lat: -15.873496460178986, lng: -47.83457776531577},
    {lat: -15.873393262918912, lng: -47.834513392299414},
    {lat: -15.873248786666014, lng: -47.83442219719291},
    {lat: -15.87300369278577, lng: -47.834289176389575},
    {lat: -15.872910815026945, lng: -47.83423285000026},
    {lat: -15.872815357285768, lng: -47.834141654893756},
    {lat: -15.872712159676851, lng: -47.834031684324145},
    {lat: -15.87260380213063, lng: -47.83388148061931},
    {lat: -15.872552203278607, lng: -47.833806378766894},
    {lat: -15.872464485199853, lng: -47.83366363495588},
    {lat: -15.872320008281013, lng: -47.83343832939863},
    {lat: -15.872196170839562, lng: -47.8332344815135},
    {lat: -15.872072333322008, lng: -47.833095006644726},
    {lat: -15.871938175925445, lng: -47.83292334526777},
    {lat: -15.871814338249347, lng: -47.832783870399},
    {lat: -15.871700820312732, lng: -47.832622937858105},
    {lat: -15.871597622133045, lng: -47.83249419182539},
    {lat: -15.871422185106288, lng: -47.83231180161238},
    {lat: -15.871246747926806, lng: -47.832107953727245},
    {lat: -15.871081630441894, lng: -47.83197920769453},
    {lat: -15.870906192965933, lng: -47.83181827515364},
    {lat: -15.870751395066199, lng: -47.8316680714488},
    {lat: -15.870544997681602, lng: -47.83153932541609},
    {lat: -15.870390199504422, lng: -47.83143203705549},
    {lat: -15.870297320541042, lng: -47.831335477530956},
    {lat: -15.87012188238233, lng: -47.83126037567854},
    {lat: -15.869946444070884, lng: -47.831153087317944},
    {lat: -15.869750365777385, lng: -47.831088714301586},
    {lat: -15.869616206835058, lng: -47.83100288361311},
    {lat: -15.869523327515, lng: -47.83093851059675},
    {lat: -15.869337568746449, lng: -47.83080976456404},
    {lat: -15.869131169913937, lng: -47.83068101853132},
    {lat: -15.868997010559449, lng: -47.83057373017073},
    {lat: -15.86875965148277, lng: -47.83044498413801},
    {lat: -15.868615171907937, lng: -47.830337695777416},
    {lat: -15.86841909231929, lng: -47.83024113625288},
    {lat: -15.868264292509304, lng: -47.8301553055644},
    {lat: -15.868109492580425, lng: -47.83006947487593},
    {lat: -15.867985652551734, lng: -47.83003728836775},
    {lat: -15.867779252334829, lng: -47.829897813498974},
    {lat: -15.867655412103245, lng: -47.829844169318676},
    {lat: -15.867593491958916, lng: -47.82979052513838},
    {lat: -15.867459331580951, lng: -47.82969396561384},
    {lat: -15.86725293082512, lng: -47.82957594841719},
    {lat: -15.867118770220483, lng: -47.82953303307295},
    {lat: -15.867025889749597, lng: -47.82943647354841},
    {lat: -15.86689172899386, lng: -47.829339914023876},
    {lat: -15.866742088045587, lng: -47.829272355884314},
    {lat: -15.866587286947732, lng: -47.829207982867956},
    {lat: -15.866478926108488, lng: -47.82915542833507},
    {lat: -15.866375725255061, lng: -47.82911251299083},
    {lat: -15.866231243971509, lng: -47.82907227985561},
    {lat: -15.866122882940873, lng: -47.829037411138415},
    {lat: -15.865880360423178, lng: -47.82896440476179},
    {lat: -15.865725558663588, lng: -47.828900031745434},
    {lat: -15.865539796395167, lng: -47.82881420105696},
    {lat: -15.865354033955581, lng: -47.82873909920454},
    {lat: -15.865157951194764, lng: -47.82867472618818},
    {lat: -15.865044429509231, lng: -47.828610353171825},
    {lat: -15.864889627107752, lng: -47.82854598015547},
    {lat: -15.864755464930333, lng: -47.82848160713911},
    {lat: -15.864631622841149, lng: -47.828374318778515},
    {lat: -15.864507780675915, lng: -47.82830994576216},
    {lat: -15.864404578813424, lng: -47.8282455727458},
    {lat: -15.864365878101365, lng: -47.82822122331709},
    {lat: -15.864316857188783, lng: -47.82819171901792},
    {lat: -15.864270416313229, lng: -47.82816221471876},
    {lat: -15.864224620439355, lng: -47.828126947861165},
    {lat: -15.864185919692757, lng: -47.828094761352986},
    {lat: -15.8641446388882, lng: -47.82806793926284},
    {lat: -15.864100133011314, lng: -47.82803843496367},
    {lat: -15.86407433249849, lng: -47.828022341709584},
    {lat: -15.864057562163387, lng: -47.82801027176902},
    {lat: -15.864035631723048, lng: -47.82799619017169},
    {lat: -15.864018861384729, lng: -47.82798613188788},
    {lat: -15.86396339025569, lng: -47.82796184532344},
    {lat: -15.86390920913818, lng: -47.8279537986964},
    {lat: -15.863842127734417, lng: -47.82796184532344},
    {lat: -15.863754405865052, lng: -47.82800476066768},
    {lat: -15.863679584240439, lng: -47.828028900548816},
    {lat: -15.86356864178042, lng: -47.8280798625201},
    {lat: -15.862802363122215, lng: -47.828302485868335},
    {lat: -15.862237327498786, lng: -47.82848487608135},
    {lat: -15.862054142093784, lng: -47.828543884679675},
    {lat: -15.861932878424279, lng: -47.82858948223293},
    {lat: -15.861775493552994, lng: -47.82865117304027},
    {lat: -15.861753562864457, lng: -47.82865976449102},
    {lat: -15.861731632173543, lng: -47.82867049332708},
    {lat: -15.861705831357636, lng: -47.828678539954126},
    {lat: -15.861703251275879, lng: -47.82867747126147},
    {lat: -15.861698091112219, lng: -47.82869021175429},
    {lat: -15.861698091112219, lng: -47.828719716053456},
    {lat: -15.861696801071291, lng: -47.828743185382336},
    {lat: -15.861696801071291, lng: -47.82877134857699},
    {lat: -15.861689705846027, lng: -47.828827674966305},
    {lat: -15.86167358033312, lng: -47.82903018174693},
    {lat: -15.861669065189274, lng: -47.8290697443299},
    {lat: -15.861671000250931, lng: -47.82912646885961},
    {lat: -15.861668420168714, lng: -47.829119763337076},
    {lat: -15.861682610620496, lng: -47.82918681856245},
    {lat: -15.861700671194054, lng: -47.82930215355009},
    {lat: -15.861725181969872, lng: -47.82941748853773},
    {lat: -15.861753562864457, lng: -47.82950063701719},
    {lat: -15.861772913472112, lng: -47.82958110328764},
    {lat: -15.86178194375505, lng: -47.829645476303995},
    {lat: -15.861801294359996, lng: -47.82970180269331},
    {lat: -15.861811614681852, lng: -47.82975142356008},
    {lat: -15.8618219350032, lng: -47.829823843203485},
    {lat: -15.861999960463237, lng: -47.830648832023144},
    {lat: -15.86214444477902, lng: -47.83120673149824},
    {lat: -15.862288928991266, lng: -47.83180754631758},
    {lat: -15.86241277251938, lng: -47.832354716956615},
    {lat: -15.862510815258522, lng: -47.83280214294791},
    {lat: -15.8626707796253, lng: -47.833488788455725},
    {lat: -15.86276882223899, lng: -47.833987679332495},
    {lat: -15.862908145871181, lng: -47.834465112537146},
    {lat: -15.863016508629672, lng: -47.834980096668005},
    {lat: -15.863088750436296, lng: -47.83530732616782},
    {lat: -15.863439638843177, lng: -47.83677181228995},
];

var matterTrailColor = '#ff533d';

function addMatterTrail(){
    //create the river
    matterTrail = createTrail(matterTrailCoordinates, matterTrailColor);

    //set the river on map
    matterTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(matterTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, matterTrailContentString);
    });
}
