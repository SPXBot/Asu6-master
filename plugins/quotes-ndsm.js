let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.send3Button(m.chat, `${pickRandom(global.ndsm)}`, '@irwan_x_yans', 'NdasMu✨😊', '#ndsm', '😊😊😊😊😊', '.y', '😤😤😤😤', 'kuntul', m)
}
handler.help = ['ndsm']
handler.tags = ['premium', 'update']
handler.command = /^(ndsm)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.ndsm= [
"Kabeh-kabeh dicacati , koyo koe wes oke , mbok ngoco-ngoco kono sek to su jingan !",
"Sengojo randue pacar , ben iso belajar tegar~",
"Sengojo randue pacar ben dikiro jual mahal, padahal cen raono sek nyeraki. Asuasu",
"Nk tekomu gur mamper ngombe tok wong edan kwe yo iso",
"Nek mung gawe nyaman terus di tinggal lungo , tukang pijet kae yo iso !",
"Di kurangi le delok potone mantan , ben beban ingatan tentang de'e iso rodo berkurang~",
"Nk mung mbaleni mulai dari 0 ae kang pom bengsin yo iso kok",
"Akeh saingane? Ojo kaget , raono critane perang tanpo ono lawane , ojo mundur! SING PENTING YAKIN !",
"Untung kangen koe ki gratis , cobo nek bayar po ra wes dadi gelandang aku.",
"Pengen ngidoni raine , tapi kok iseh konco dewe.",
"Sing nglarani malah sing tak sayangi.",
"Untung mencintai mu Ki gratis, ja lek bayar pora mengkis² aku",
"Gaweane rebahan , arang upload story , arang dolan , konco yo sitik. \nKiro-kiro iki nemu jodohe lewat jalur opo yo?",
"Cah elek-elek wes do pacaran , aku sing baguse nganti sundul langit kok rapayu-payu !",
"Aku ndes , nek difitnah ngerebut pacare uwong , yo tak rebut tenanan , la mosok wes entok fitnah raentok menungsone , kan yo rugi.",
"Aku di arani seneng Karo yang e.. Yo tak jawab (sepurane mbak, aku lebih mencintai duit daripada yang mu seng ganteng e ra sepiro iku)",
"Sok sok an pamer poto nikah muda , padahal asline meteng ndisek~",
"Akeh wong milih nyekso atine , mung mergo (Aku rawani ngomong)",
"Iso-isone makku ngandani nek dolan rausah mendem-mendeman , padahal aku seng bagian kulak.",
"Pengen kangen tapi raono sing di kangeni , kangen koe wae oleh ra?",
"Bayangke aku dadi yangmu , bayangke sek wae , nek pengen tenan chat wae siji-siji ojo rebutan.",
"Kadang mung butuh konco ngobrol seng koyo asu , tetep enjoy walaupun saben ndino diundang asu.",
"Guyonan karo konco bahas topik sing saru kui marahi seru~",
"Wong wedok sing dikepruk nganggo tabong gas ora nesu , idamanku banget.",
"Kesel yo?\nMatio ae rasah sambat , ngrepoti.",
"Bekerja keraslah , sampe koncomu ngomong (nyileh duite cuk)~",
"Tulung yo ndes seng rabi ojo kroyokan , lek wani siji-siji , disini saya sebagai penyumbang mengaku kewalahan mobat mabit golek silihan duit.",
"Selain rung turu , aku yo durung ndue pacar lo yahene.",
"Aku pernah nduwe pacar blasteran, setengah indonesia setengah bajingan !",
"Pacaran sing sehat ki sing kepiye? Rutin minum susu langsung seko pentile ngono po pie?",
"Wes lah , kesel aku cuk !",
"Dek , kangen?",
"Aku mung bocah wingi sore , seng dipekso gede mergo kahanan urip~",
"Ono koe Aku semangat dek",
"Tetep dadi uwong sing penakan ,  ditengah akeh e uwong seng sak penake dewe~",
"Ojo pengen dadi wong pinter yen akhire dadi keminter , ora popo dadi wong bodho sing penting akhlake dinggo~",
"Nek aku moco koran sarungan , terus koe blonjo dasteran , ngko sing kerjo sopo?",
"Sing dewasa sitik , ojo gampang nesunan , sido rabi ora iki?",
"Kere-kere ngene wes tau nulungi koe pas susah , bajingan koyo dapuranmu opo yo kelingan.",
"Seng pas cilik pengen cepet-cepet gede , pie kabare mumet ora ndase?",
"Pengen dadi bojomu ae , ben ora kongan-kangen~",
"Selingkuh? Yo sori , anak ketelu roto-roto setia kabeh.",
"Semenjak ono corona , masa enomku ngroso gur sio-sio.",
"Apapun masalahmu dino iki , ojo semangat , tetep lungkrah karo mletre.",
"Wong liyo opo ngerti , betapa montang mantinge awakmu meskipun ketoke prengas prenges koyo wong edan.",
"Ono ora wong wedok seng mikir ngene (ohh yo aku kan wes ndue de.e , ngopo iseh ngresponi wong liyo)",
"Nek de'e tiba-tiba berubah , elingo omongane mbak kasir.",
"trima kasih kakak, selamat datang kembali\n\nTrima kasih ndasmu !\nIki urusan ati, ora cukup mung terima kasih.",
"Ojo wedi nek dee lungo , wedio nek dee iseh ro koe , tapi atine kanggo wong liyo~",
"Teruntuk seng lahiran 2000 , koe lahir opo mbayar parkir !",
"Aku rapopo , mung kahanane wae seng rodo njarag , bajingan kesel tenan aku.",
"Sedang kepontang panting keadaan , yang datang secara ujug-ujug dan mak jegagik~",
"Prinsipe wong lanang kui gur siji , gemati ngayomi ro setia.",
"Wes bokonge tepos , susune gur sak sego angkringan , sok sokan nglarani aku bajingan !",
"Berhubung member grup e wes ono wong akeh , nek misal do iuran 5000 an nggo modal aku rabi pie?",
"Nutup dalan tok , ra nanggap dangdutan. Yo lemes no pak !",
"Aku kerjo rekoso udu mergo aku ngoyak ndonyo , tapi aku reti rasane loro disepeleke mergo ora ndue duet.",
"Teruntuk kowe wong sing hobi ngrasani aku neng mburi , tulung rodok maju sitik aku ora krungu suu !",
"Ojo meneh aku , ultramen wae nek diserang atine yo ketip-ketip dodone ndes !",
"Lagi males kakean cangkem , nek koe ngomong dinosaurus iseh urip , iyo koe bener , aku wes males mikir !",
"Ra chattingan kangen , chattingan terus bosen. Ayo rabi wae wes !",
"Koyone corona iki helm e cargloss ndes , la kabeh dilarani lo pie karepe !",
"Wong lanang ganteng akeh dek , tapi wong lanang seng pas wedok e nesu ora mbales nesu kui limited edition~",
"Lak aku ra mesakne wong tuoku , aku yo iso koyo rai-raimu !",
"Seng mbyen ngomong (awadewe rasah pacaran , awadewe komitmen ae) piye endinge?",
"Indonesia luas ndes , rugi nek yangmu siji.",
"Lungo o rapopo , aku tak golek neh.",
"Simbok : pacarmu endi le? Simbok pengen weruh. \nAku : podo mbok , aku yo pengen weruh.",
"Wong koyo aku ngene ki , nek ra modal niat karo semangat , sing arep tak ndel ndel ke yo opo?",
"Mandang kok fisik , mandang ki nganggo sego !",
"Nek dichat kui dibales ndes , aku iki kancamu , udu fansmu !",
"Aku disindir ora mati , dilokne ora wedi , ditantang yo wani !",
"Selain matahari , aku yo iso gawe koe kringetan.",
"Nek ora jodo yorapopo , mugo wae iso dadi tonggo , malah luwih penak liwat jendelo.",
"Pesene simbok (rapopo nduwe pacar omahe adoh , mbesok nek besanan sisan jalan-jalan)",
"Awak pegel tak kiro njaluk dipijet , jebule njaluk dipeluk~",
"Imajinasi terliarku adalah (turu karo pacare konco)",
"Kesehatanmu lo rasah dijogo , ndang matio wae , sengit aku nyawang raimu !",
"Rapopo elek , jare mbahku nek kontole gedi oleh bojo seng ayu.",
"Raentok lemah , semangat mbokan , mbyen pas cilik jare arep dadi ultramen.",
"Elek-elek ngene , cilikanku diambungi wong akeh masamu.",
"Endi seng ngomong sudahi sadboymu ayo dadi yangku , cangkeman tok asu !",
"Dek , rasah macak ayu-ayu , wong lanang ki seneng seng natural.",
"Resiko dadi wong ra kepenakan , nek remuk remuk tenan , nek ajur ajur tenan.",
"Ketika wetengku mules , pas wes tekan wc mung ngentut dan mak klutik saja , disitu saya rodo gelo.",
"Pesene simbok: Rausah mandang bondo , seng terpenting dee ngerti kekuranganmu tapi dee ra lungo~",
"Meskipun aku elek , goblok , anak e wong ra ndue. Tapi aku ngerti carane ngajeni uwong.",
"Pamer tok ra dikentu , yo rugi ndes !",
"Di kei seng pinter golek duit , malah milih seng pinter nglarani~",
"Nek ngerti akhire bakal koyo ngene , ngertio mbiyen adewe rasah kenal , rasah ketemuan , wes pokoke rasah jingan !",
"Dek , dolan yo mumpung prei.",
"Meneng-meneng difoto yangku , terus digawe story dee , sumpah aku rung pernah.",
"Lemes ndes , ndelok koncoku ndue yang kabeh !",
"Rabi wae yo , masalah mangan muleh ngomahe dewe-dewe.",
"Ambekno mbendinone guya-guyu , jane yo rodo mumet~",
"Arep diculne ki eman , yo sayang , yo kadung jeru , arep di pertahanke kok bojone uwong. Wes angel !",
"Sumpah angel banget lo , nemokno wong wedok sing durung dikapak-kapakno mantane.",
"Iso-isone aku seng biasane semangat , dadi rodo aras-arasen ngene.",
"Bayangno yangmu ngajak koe neng ngomahe , terus mbokne ngomong (seng koyo ngene iki diajak neng ngomah!)",
"Dek , kancani aku ngasi keturon yo.",
"Pacar raono kabar , mantan nakoki kabar. Duh gusti , iki ujian opo ulangan.",
"Raono alesan golek liyane , apikmu tak syukuri , elekmu tak tutupi~",
"Sing moco njero ati dadi pacarku titik.",
"Opo bener (memek) kui bahasa jawane (memanjat) ndes?",
"Salahku ra sepiro , tegelmu ra kiro-kiro~",
"Gawe seng pacaran tetep langgeng yo , seng jomblo? Kenalan ro aku po piye.",
"Ikhlas ora segampang ijolan posisi kenthu~",
"Mung pas riyoyo tok , wong wedok gelem ngakoni salah.",
"Aku meh dolan ro yangku , koe ojo telpon opo wa , ngko nek wes bali tak kabari.",
"Ngopo si wong lanang nek pas ketemu karo pacare , mesti ngelus-ngelus rambute pacare , kok ora ngelus-ngelus jembute.",
"Yangmu di pek konco? Kekno , ojo koyo wong susah.",
"Kok iso yo , wajahe glowing , kulite putih , tapi pentile ireng.",
"Aku asline wegah tuku paketan , lha piye yangku akeh kok.",
"Ngantuk to? Yowes turuo tapi telpone ojo mbok peteni , ben mati dewe !",
"Ganteng ora , ireng iyo , lucu yo ora , sugeh opo meneh , ncen dasare ra mbangkat disayang~",
"Mosok poso-poso behelan ngemot wesi , ora batal po?",
"Sesok kan wes poso , mengko seng nganggo masker sering-sering dipantau , sopo ngerti wonge karo ngunyah bakwan.",
"Bajingan mandang fisik kabeh maine !",
"Cita-citaku sederhana , mugo taiku ro taimu iso sak wc suatu hari nanti.",
"Seng biasane di ajaki neng omah , piye saiki? Sido di rabi ora?",
"Dadi pengen mangan sego goreng , tapi seng ra nganggo sego enek ora?",
"Cidro to , salahe ora ro aku.",
"Ngaceng kuat , mosok jumatan sambat.",
"Demi ketenangan , aku milih rangerti , rapengen ngerti , lan ra arep ngurusi !",
"Meh Poso, sepurane yo ndes nek aku nduwe salah , tapi nek raimu panggah gateli ayo gelud ae , gae penutupan los.",
"Wes gede ojo sambat perkoro cinta , eling wes jembuten !",
"Piye dek? Sido dadi mantune mbokku ra.",
"Janjimu koyo peli , dipenakke malah ngidoni.",
"Sak setia-setiane wong wedok , nek enek wong lanang seng luwe ganteng , yo ndase mlintir !",
"Koe ayu dek , nek ra ndue pacar.",
"Lemah-lemah teles , wong ngalah kakean apes~",
"Pilih ndi? kowe dadi bojoku , opo aku dadi bojomu.",
"Dek , keloni.",
"Jane akui wonge mageran , tapi nek dikongkon mencintaimu , semangate rakaruan.",
"Wong aku bobrok koyo ngene , mosok arep dadi pujaan hatimu~",
"Cie meh ngechat aku tapi gengsi.",
"Tak kandani dek , wong setia koyo aku ki rabakal teko pindo.",
"Ojo mung kenal cinta tok , ciu yo enak lo ndes.",
"Sengit rapopo , neng rasah ngajak bolo su !",
"Conda canda matamui !",
"Gengsi kok di gedekne , mending nggedekne susumu sing isih cilik kui dek.",
"Manut welinge wong tuo , keterbatasan udu hambatan selagi niat iseh ono~",
"Suwun nggo siji jeneng , seng mbyen wes tau tak gawe password~",
"Rai pas-pasan , sok-sokan gawe status (iri bilang bos) , seng di irini ki opo? mbok seng genah sitik su !",
"Selingkuh? sepurane ono 8 ati , 9 simpenan , 26 cadangan seng kudu tak jogo.",
"Sok-sokan arep goodlooking , ados wae sedino pisan , ngenteni rodo magrib sisan.",
"Soyo gede soyo akrab karo kata-kata (sabar yo , bersyukur yo , yoweslah arep piye neh)",
"Mili koyo banyu , tegar koyo watu , sabar koyo bapak ro ibu~",
"Aku ngetan koe ngulon , aku wes tenanan jebul koe mung guyon~",
"Aku mau nyileh hpne koncoku , terus mantane wa ngajak balen , wa ne langsung tak hapus , Ben podo-podo jomblo.",
"Milih torabika moka , torabika susu , opo torabika roaku dek.",
"Aku ndes! nek kadung gabut , kabeh tak anggep pacarku.",
"Soyo ayu pacarmu , soyo ra tenang awakmu~",
"Ndes , misal mantanmu rabi amplope arep mbok iseni opo?",
"Dadi ngene ndes ! Soyo awak dewe sayang karo uwong , soyo awak dewe radihargai~",
"Wong lanang njaluk pap kui ra mergo mandang fisik dek , tapi di duduhno neng wong tuone , wes cocok opo durung.",
"Jane sepiro si enake susune pacarmu , sampe wes ratau ngopi karo konco-koncomu.",
"Aku lanang ndes!! Tapi aku kerep ngomong (yowes iyo , aku seng salah , aku njaluk ngapuro)",
"Sabar loro , meneng nyikso , ngomong yo percuma , pokoke jancok tenan !",
"Yo misuh , yo istighfar , yo solawatan , yo dangdutan , yo menengan , yo cangkeman , uripku tak setel manut kahanan.",
"Yogabut , yomager , yomumet , yowes , yotoibaa.",
"Seng semangat raoleh sambat dek , awamu kerjo aku yo kerjo , bar kui rabi yo.",
"Boro-boro ndue pikiran arep selingkuh , koe nesu ae aku bingung~",
"Rodo loro , neng rapopo lah wes jancok !",
"Rabi wae yo dek , soal beras enek PKH.",
"Rindu kui gratis , nyewo kamare seng mbayar~",
"Mangan mie ayam karo krupuk , mantan lewat langsung tak kepruk~",
"Opo aku kudu dadi dora , ben koe iso tak bengoki (katakan peka , katakan peka).",
"Ayo pisan-pisan nglarani wae , mosok dilarani terus , yo kesel to su !",
"Rasah insecure dek , aku tetep ngaceng kok weruh awakmu~",
"Penampilan oke , gaya josss. Rokok njaluk~",
"Aku wes kapok ngopi neng starbak , mosok cafe gedene semono raono gedhang gorenge.",
"Dek , opo koe ra kangen , numpak motor karo aku , terus tanganmu mbok lebokne neng kantong jaketku."
]