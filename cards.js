// 粤语卡片数据。字段：hk=粤语, jy=粤拼Jyutping, cn=普通话/意思, a=音频名(默认=hk)
// 音频在 audio/<a>.mp3。来源：PhD_OS/粤语 笔记（粤拼经 words.hk 校验）。
const DECKS = [

// ★ 第一课重点：九声调表（特殊网格视图）
{
  id:'chart', type:'chart', num:'★', name:'九声调表（第一课重点）', desc:'点任意格听 · 先背熟这张',
  tones:[
    {col:'1', nm:'阴平', tp:'高平', val:'55'},
    {col:'2', nm:'阴上', tp:'高升', val:'35'},
    {col:'3', nm:'阴去', tp:'中平', val:'33'},
    {col:'4', nm:'阳平', tp:'低平', val:'11'},
    {col:'5', nm:'阳上', tp:'低升', val:'13'},
    {col:'6', nm:'阳去', tp:'低平', val:'22'},
    {col:'入1', nm:'阴入', tp:'高切', val:'5'},
    {col:'入3', nm:'中入', tp:'中切', val:'3'},
    {col:'入6', nm:'阳入', tp:'低切', val:'2'},
  ],
  rows:[
    {label:'fan 系', rowAudio:'row_fan', cells:[
      {hk:'分',jy:'fan1'},{hk:'粉',jy:'fan2'},{hk:'訓',jy:'fan3'},{hk:'焚',jy:'fan4'},{hk:'奮',jy:'fan5'},{hk:'份',jy:'fan6'},{hk:'忽',jy:'fat1'},{hk:'發',jy:'faat3'},{hk:'佛',jy:'fat6'} ]},
    {label:'si 系', rowAudio:'row_si', cells:[
      {hk:'詩',jy:'si1'},{hk:'史',jy:'si2'},{hk:'試',jy:'si3'},{hk:'時',jy:'si4'},{hk:'市',jy:'si5'},{hk:'事',jy:'si6'},{hk:'色',jy:'sik1'},{hk:'錫',jy:'sek3'},{hk:'食',jy:'sik6'} ]},
    {label:'数字', rowAudio:'row_num', cells:[
      {hk:'三',jy:'saam1'},{hk:'九',jy:'gau2'},{hk:'四',jy:'sei3'},{hk:'零',jy:'ling4'},{hk:'五',jy:'ng5'},{hk:'二',jy:'ji6'},{hk:'七',jy:'cat1'},{hk:'八',jy:'baat3'},{hk:'六',jy:'luk6'} ]},
    {label:'口诀 番茄酱牛腩面一百碟', rowAudio:'row_mnem', cells:[
      {hk:'番',jy:'faan1'},{hk:'茄',jy:'ke2'},{hk:'醬',jy:'zoeng3'},{hk:'牛',jy:'ngau4'},{hk:'腩',jy:'naam5'},{hk:'麵',jy:'min6'},{hk:'一',jy:'jat1'},{hk:'百',jy:'baak3'},{hk:'碟',jy:'dip6'} ]},
  ],
},

// ① 六声调（si 系逐字精练）
{ id:'tones', num:'①', name:'六声调 · 精练', desc:'同一个 si 走完 1→6',
  cards:[
    {hk:'詩',jy:'si1',cn:'① 阴平·高平 — 拉最高、平住'},
    {hk:'史',jy:'si2',cn:'② 阴上·高升 — 像普通话二声往上挑'},
    {hk:'試',jy:'si3',cn:'③ 阴去·中平 — 普通话没有，中音放平'},
    {hk:'時',jy:'si4',cn:'④ 阳平·低降 — 压到最低、像叹气'},
    {hk:'市',jy:'si5',cn:'⑤ 阳上·低升 — 从低再往上升'},
    {hk:'事',jy:'si6',cn:'⑥ 阳去·低平 — 低音放平'},
  ]},

// ② 入声 -p/-t/-k
{ id:'rusheng', num:'②', name:'入声 -p / -t / -k', desc:'短促、收得住，别拖长',
  cards:[
    {hk:'十',jy:'sap6',cn:'十（-p 收唇）'},{hk:'急',jy:'gap1',cn:'急（-p）'},{hk:'濕',jy:'sap1',cn:'湿（-p）'},{hk:'入',jy:'jap6',cn:'进/入（-p）'},
    {hk:'一',jy:'jat1',cn:'一（-t 收舌尖）'},{hk:'七',jy:'cat1',cn:'七（-t）'},{hk:'八',jy:'baat3',cn:'八（-t）'},{hk:'熱',jy:'jit6',cn:'热（-t）'},{hk:'發',jy:'faat3',cn:'发（-t）'},
    {hk:'六',jy:'luk6',cn:'六（-k 收喉）'},{hk:'食',jy:'sik6',cn:'吃（-k）'},{hk:'學',jy:'hok6',cn:'学（-k）'},{hk:'國',jy:'gwok3',cn:'国（-k）'},{hk:'白',jy:'baak6',cn:'白（-k）'},
  ]},

// ③ 鼻音类
{ id:'nasal', num:'③', name:'鼻音类 -m / ng- / 成音节', desc:'-m 闭嘴；ng- 鼻头；唔=纯鼻音',
  cards:[
    {hk:'三',jy:'saam1',cn:'三（-m 闭嘴收音）'},{hk:'心',jy:'sam1',cn:'心（-m）'},{hk:'點',jy:'dim2',cn:'点/怎么（-m）'},{hk:'啱',jy:'ngaam1',cn:'对/刚好（-m）'},{hk:'男',jy:'naam4',cn:'男（-m）'},{hk:'飲',jy:'jam2',cn:'喝（-m）'},{hk:'噉',jy:'gam2',cn:'这么/那（-m）'},
    {hk:'我',jy:'ngo5',cn:'我（ng- 字头）'},{hk:'牛',jy:'ngau4',cn:'牛（ng-）'},{hk:'藝',jy:'ngai6',cn:'艺（ng-）'},{hk:'銀',jy:'ngan4',cn:'银（ng-）'},
    {hk:'唔',jy:'m4',cn:'不（纯鼻音，无元音）'},{hk:'五',jy:'ng5',cn:'五（纯鼻音）'},{hk:'吳',jy:'ng4',cn:'吴/姓（纯鼻音）'},
  ]},

// ④ 圆唇元音 + 声母
{ id:'vowel', num:'④', name:'圆唇元音 oe/eo + 声母', desc:'普通话没有的 oe/eo；z·c·s/j/gw·kw',
  cards:[
    {hk:'靴',jy:'hoe1',cn:'靴（oe 圆唇）'},{hk:'香',jy:'hoeng1',cn:'香/香港（oe）'},{hk:'兩',jy:'loeng5',cn:'两（oe）'},{hk:'想',jy:'soeng2',cn:'想（oe）'},
    {hk:'出',jy:'ceot1',cn:'出（eo）'},{hk:'春',jy:'ceon1',cn:'春（eo）'},{hk:'信',jy:'seon3',cn:'信（eo）'},{hk:'律',jy:'leot6',cn:'律（eo）'},
    {hk:'知',jy:'zi1',cn:'知（z/c/s 一套）'},{hk:'痴',jy:'ci1',cn:'痴'},{hk:'思',jy:'si1',cn:'思'},
    {hk:'也',jy:'jaa5',cn:'也（j = 普通话 y）'},{hk:'油',jy:'jau4',cn:'油'},
    {hk:'廣',jy:'gwong2',cn:'广（gw 圆唇）'},{hk:'規',jy:'kwai1',cn:'规（kw）'},
  ]},

// ⑤ 茶餐厅
{ id:'cha', num:'⑤', name:'茶餐厅点餐', desc:'走X=去掉X；唔該/多謝别用错',
  cards:[
    {hk:'菠蘿包，唔該',jy:'bo1 lo4 baau1, m4 goi1',cn:'菠萝包，劳驾',a:'c01_bolobaau'},
    {hk:'凍檸茶，走冰',jy:'dung3 ning4 caa4, zau2 bing1',cn:'冻柠檬茶，去冰',a:'c01_lingcaa'},
    {hk:'埋單，幾錢？',jy:'maai4 daan1, gei2 cin4',cn:'买单，多少钱',a:'c01_maaidaan'},
    {hk:'唔該',jy:'m4 goi1',cn:'劳驾/谢谢（服务、让路、上菜）',a:'c01_mgoi'},
    {hk:'多謝',jy:'do1 ze6',cn:'谢谢（收礼物、大恩、请客）',a:'c01_doze'},
    {hk:'食咩好？',jy:'sik6 me1 hou2',cn:'吃什么好',a:'c01_sikme'},
  ]},

// ⑥ 数字钱
{ id:'money', num:'⑥', name:'数字 & 钱（俚语）', desc:'蚊=元；舊水/支嘢/皮嘢',
  cards:[
    {hk:'廿三',jy:'jaa6 saam1',cn:'23（廿=二十连读）'},
    {hk:'一舊水',jy:'jat1 gau6 seoi2',cn:'$100（俚语）'},
    {hk:'一支嘢',jy:'jat1 zi1 je5',cn:'$1000（俚语）'},
    {hk:'一皮嘢',jy:'jat1 pei4 je5',cn:'$10000（俚语）'},
  ]},

// ⑦ 问路坐车
{ id:'road', num:'⑦', name:'问路 · 坐车', desc:'落=下车；有落=提醒司机停',
  cards:[
    {hk:'請問香港大學行邊邊？',jy:'cing2 man6 hoeng1 gong2 daai6 hok6 haang4 bin1 bin1',cn:'请问港大怎么走',a:'c01_lou1'},
    {hk:'前面右轉就到',jy:'cin4 min6 jau6 zyun3 zau6 dou3',cn:'前面右转就到',a:'c01_lou2'},
    {hk:'搭屯馬線，喺紅磡轉車',jy:'daap3 tyun4 maa5 sin3, hai2 hung4 ham3 zyun3 ce1',cn:'坐屯马线，在红磡转车',a:'c01_lou3'},
    {hk:'司機，水圍邨有落',jy:'si1 gei1, seoi2 wai4 cyun1 jau5 lok6',cn:'司机，到水围邨我下车',a:'c01_hw1'},
    {hk:'麻煩去光明學校',jy:'maa4 faan4 heoi3 gwong1 ming4 hok6 haau6',cn:'麻烦去光明学校',a:'c01_hw2'},
    {hk:'呢架車去唔去元朗？',jy:'ni1 gaa3 ce1 heoi3 m4 heoi3 jyun4 long5',cn:'这辆车去不去元朗',a:'c01_hw3'},
    {hk:'邊個站落？',jy:'bin1 go3 zaam6 lok6',cn:'在哪一站下',a:'c01_hw4'},
  ]},

// ⑧ 疑问指示代词
{ id:'cy01', num:'⑧', name:'疑问/指示代词 咩邊點', desc:'呢/嗰/邊 + 個/度/啲',
  cards:[
    {hk:'我哋食咪啊',jy:'ngo5 dei6 sik6 me1 aa3',cn:'我们吃什么啊',a:'cy01_1'},
    {hk:'你哋做緊咩啊',jy:'nei5 dei6 zou6 gan2 me1 aa3',cn:'你们在做什么',a:'cy01_2'},
    {hk:'佢哋去做咩啊',jy:'keoi5 dei6 heoi3 zou6 me1 aa3',cn:'他们去做什么',a:'cy01_3'},
    {hk:'呢個係咩啊',jy:'ni1 go3 hai6 me1 aa3',cn:'这个是什么',a:'cy01_4'},
    {hk:'你係呢度做咩啊',jy:'nei5 hai2 ni1 dou6 zou6 me1 aa3',cn:'你在这里做什么',a:'cy01_5'},
    {hk:'嗰個人係邊個',jy:'go2 go3 jan4 hai6 bin1 go3',cn:'那个人是谁',a:'cy01_6'},
    {hk:'嗰啲嘢係邊個嘅',jy:'go2 di1 je5 hai6 bin1 go3 ge3',cn:'那些东西是谁的',a:'cy01_7'},
    {hk:'你喺邊度',jy:'nei5 hai2 bin1 dou6',cn:'你在哪里',a:'cy01_8'},
    {hk:'呢個係乜嘢',jy:'ni1 go3 hai6 mat1 je5',cn:'这个是什么（书面些）',a:'cy01_9'},
    {hk:'你點樣啊',jy:'nei5 dim2 joeng2 aa3',cn:'你怎么样',a:'cy01_10'},
    {hk:'你點解噉講嘅',jy:'nei5 dim2 gaai2 gam2 gong2 ge3',cn:'你为什么这么说',a:'cy01_11'},
    {hk:'呢啲係咩啊',jy:'ni1 di1 hai6 me1 aa3',cn:'这些是什么',a:'c02_1'},
    {hk:'嗰度有個人',jy:'go2 dou6 jau5 go3 jan4',cn:'那里有个人',a:'c02_2'},
    {hk:'你係邊個',jy:'nei5 hai6 bin1 go3',cn:'你是谁',a:'c02_3'},
    {hk:'邊啲嘢係我嘅',jy:'bin1 di1 je5 hai6 ngo5 ge3',cn:'哪些东西是我的',a:'c02_4'},
  ]},

// ⑨ 定係/仲
{ id:'cy02', num:'⑨', name:'定係（还是）/ 仲（还）', desc:'选择用定係；仲=还',
  cards:[
    {hk:'你要去呢間店定係去嗰間店啊',jy:'nei5 jiu3 heoi3 ni1 gaan1 dim3 ding6 hai6 heoi3 go2 gaan1 dim3 aa3',cn:'你去这间店还是那间店',a:'cy02_1'},
    {hk:'仲係去呢間店啦',jy:'zung6 hai6 heoi3 ni1 gaan1 dim3 laa1',cn:'还是去这间店吧',a:'cy02_2'},
    {hk:'你仲未食飯啊',jy:'nei5 zung6 mei6 sik6 faan6 aa3',cn:'你还没吃饭啊',a:'cy02_3'},
  ]},

// ⑩ 搵
{ id:'cy03', num:'⑩', name:'搵 wan2（找）', desc:'搵=找；邊位=哪位（礼貌）',
  cards:[
    {hk:'你搵到部手機未',jy:'nei5 wan2 dou2 bou6 sau2 gei1 mei6',cn:'你找到手机没',a:'cy03_1'},
    {hk:'你喺度搵緊咩',jy:'nei5 hai2 dou6 wan2 gan2 me1',cn:'你在找什么',a:'cy03_2'},
    {hk:'你搵邊個',jy:'nei5 wan2 bin1 go3',cn:'你找谁',a:'cy03_3'},
  ]},

// ⑪ 喺度 vs 緊
{ id:'cy04', num:'⑪', name:'喺度 vs 緊（正在）', desc:'緊=正在；喺X度=强调在哪',
  cards:[
    {hk:'你喺度做緊咩啊',jy:'nei5 hai2 dou6 zou6 gan2 me1 aa3',cn:'你在干嘛',a:'cy04_1'},
    {hk:'我喺香港讀緊書',jy:'ngo5 hai2 hoeng1 gong2 duk6 gan2 syu1',cn:'我在香港读书',a:'cy04_2'},
    {hk:'你喺度做緊乜嘢',jy:'nei5 hai2 dou6 zou6 gan2 mat1 je5',cn:'你现在在干嘛',a:'cy04_3'},
    {hk:'我喺度食緊飯',jy:'ngo5 hai2 dou6 sik6 gan2 faan6',cn:'我正在吃饭',a:'cy04_4'},
  ]},

// ⑫ 畀
{ id:'cy05', num:'⑫', name:'畀 bei2（给，双宾）', desc:'语序：畀+物+人（和普通话反）',
  cards:[
    {hk:'畀本書我',jy:'bei2 bun2 syu1 ngo5',cn:'给我（一本）书',a:'cy05_1'},
    {hk:'畀部手機佢',jy:'bei2 bou6 sau2 gei1 keoi5',cn:'把手机给他',a:'cy05_2'},
    {hk:'畀錢我買嘢',jy:'bei2 cin2 ngo5 maai5 je5',cn:'给我钱买东西',a:'cy05_3'},
  ]},

// ⑬ 企
{ id:'cy06', num:'⑬', name:'企 kei5（站）+ 趋向', desc:'企=站；出/入 趋向',
  cards:[
    {hk:'稍為企出啲',jy:'saau2 wai4 kei5 ceot1 di1',cn:'稍微往外站一点',a:'cy06_1'},
    {hk:'危險，企入啲',jy:'ngai4 him2, kei5 jap6 di1',cn:'危险，往里站点',a:'cy06_2'},
    {hk:'定啲嚟',jy:'ding6 di1 lai4',cn:'稳着点 / 镇定点',a:'cy06_3'},
  ]},

// ⑭ 想三兄弟
{ id:'think', num:'⑭', name:'想的三种 諗住/想/掛住', desc:'打算 / 想要 / 思念',
  cards:[
    {hk:'諗住',jy:'nam2 zyu6',cn:'打算 / 觉得（think）'},
    {hk:'想',jy:'soeng2',cn:'想要（want）'},
    {hk:'掛住',jy:'gwaa3 zyu6',cn:'思念 / 惦记'},
  ]},

// ⑮ 形容词
{ id:'adj', num:'⑮', name:'形容词 平靓正啱掂', desc:'便宜/漂亮/棒/合适/搞定',
  cards:[
    {hk:'平',jy:'peng4',cn:'便宜'},{hk:'靚',jy:'leng3',cn:'漂亮/好'},{hk:'正',jy:'zeng3',cn:'棒/地道好'},{hk:'啱',jy:'ngaam1',cn:'对/合适/刚好'},{hk:'掂',jy:'dim6',cn:'搞定/顺利/行'},
    {hk:'呢件衫好平啊',jy:'ni1 gin6 saam1 hou2 peng4 aa3',cn:'这件衣服好便宜',a:'cy08_1'},
    {hk:'嗰個女仔好靚啊',jy:'go2 go3 neoi5 zai2 hou2 leng3 aa3',cn:'那个女孩好漂亮',a:'cy08_2'},
    {hk:'老火靚湯好出名',jy:'lou5 fo2 leng3 tong1 hou2 ceot1 meng2',cn:'老火靓汤很出名',a:'cy08_3'},
    {hk:'呢度啲嘢好正',jy:'ni1 dou6 di1 je5 hou2 zeng3',cn:'这里的东西很棒',a:'cy08_4'},
    {hk:'呢度啲嘢食真係平靚正',jy:'ni1 dou6 di1 je5 sik6 zan1 hai6 peng4 leng3 zeng3',cn:'这里吃的又便宜又好',a:'cy08_5'},
    {hk:'你咁做係唔啱嘅',jy:'nei5 gam2 zou6 hai6 m4 ngaam1 ge3',cn:'你这么做是不对的',a:'cy08_6'},
    {hk:'呢件衫唔啱你',jy:'ni1 gin6 saam1 m4 ngaam1 nei5',cn:'这件衣服不适合你',a:'cy08_7'},
    {hk:'個晒士啱啱好',jy:'go3 saai1 si2 ngaam1 ngaam1 hou2',cn:'尺码刚刚好',a:'cy08_8'},
    {hk:'你搞掂未啊',jy:'nei5 gaau2 dim6 mei6 aa3',cn:'你搞定没',a:'cy08_9'},
    {hk:'終於搞掂喇',jy:'zung1 jyu1 gaau2 dim6 laa3',cn:'终于搞定了',a:'cy08_10'},
    {hk:'呢次實掂',jy:'ni1 ci3 sat6 dim6',cn:'这次肯定行',a:'cy08_11'},
    {hk:'嗰個人真係唔掂',jy:'go2 go3 jan4 zan1 hai6 m4 dim6',cn:'那个人真不行',a:'cy08_12'},
  ]},

// ⑯ 嘅
{ id:'cy09', num:'⑯', name:'嘅 ge3（的，所属）', desc:'……嘅 = ……的',
  cards:[
    {hk:'呢個係我嘅',jy:'ni1 go3 hai6 ngo5 ge3',cn:'这个是我的',a:'cy09_1'},
    {hk:'呢支筆唔係你嘅',jy:'ni1 zi1 bat1 m4 hai6 nei5 ge3',cn:'这支笔不是你的',a:'cy09_2'},
    {hk:'噉，支筆係邊個嘅',jy:'gam2, zi1 bat1 hai6 bin1 go3 ge3',cn:'那这笔是谁的',a:'cy09_3'},
  ]},

// ⑰ 喺
{ id:'cy10', num:'⑰', name:'喺 hai2（在，地点）', desc:'喺=在某处',
  cards:[
    {hk:'你喺邊度',jy:'nei5 hai2 bin1 dou6',cn:'你在哪',a:'cy10_1'},
    {hk:'佢喺唔喺嗰度',jy:'keoi5 hai2 m4 hai2 go2 dou6',cn:'他在不在那',a:'cy10_2'},
    {hk:'我喺呢度',jy:'ngo5 hai2 ni1 dou6',cn:'我在这',a:'cy10_3'},
  ]},

// ⑱ 量词
{ id:'cy11', num:'⑱', name:'量词 舊 / 蚊', desc:'舊=块（团状）；蚊=元（钱）',
  cards:[
    {hk:'舊',jy:'gau6',cn:'块（团状量词）'},{hk:'蚊',jy:'man1',cn:'元（钱量词）'},
    {hk:'一舊瘦肉',jy:'jat1 gau6 sau3 juk6',cn:'一块瘦肉',a:'cy11_1'},
    {hk:'切幾舊蛋糕食',jy:'cit3 gei2 gau6 daan6 gou1 sik6',cn:'切几块蛋糕吃',a:'cy11_2'},
    {hk:'一蚊雞咩都買唔到',jy:'jat1 man1 gai1 me1 dou1 maai5 m4 dou2',cn:'一块钱啥都买不到',a:'cy11_3'},
    {hk:'呢件衫要三百蚊',jy:'ni1 gin6 saam1 jiu3 saam1 baak3 man1',cn:'这件衣服要三百块',a:'cy11_4'},
  ]},

// ⑲ 时间词
{ id:'time', num:'⑲', name:'时间词', desc:'天→日；上午下午用「晝」',
  cards:[
    {hk:'今日',jy:'gam1 jat6',cn:'今天'},{hk:'聽日',jy:'ting1 jat6',cn:'明天'},{hk:'琴日',jy:'kam4 jat6',cn:'昨天'},
    {hk:'朝早',jy:'ziu1 zou2',cn:'早上'},{hk:'上晝',jy:'soeng6 zau3',cn:'上午'},{hk:'晏晝',jy:'aan3 zau3',cn:'中午'},{hk:'下晝',jy:'haa6 zau3',cn:'下午'},{hk:'晚黑',jy:'maan5 hak1',cn:'晚上'},
    {hk:'而家',jy:'ji4 gaa1',cn:'现在'},{hk:'頭先',jy:'tau4 sin1',cn:'刚才'},{hk:'前一排',jy:'cin4 jat1 paai4',cn:'前阵子'},{hk:'呢排',jy:'ni1 paai4',cn:'这阵子'},{hk:'嗰陣',jy:'go2 zan2',cn:'那时候'},{hk:'啱啱',jy:'ngaam1 ngaam1',cn:'刚刚'},
  ]},

// ⑳ 时间例句
{ id:'cy12', num:'⑳', name:'时间例句', desc:'把时间词用进句子',
  cards:[
    {hk:'我哋係今日定係聽日去食飯啊',jy:'ngo5 dei6 hai6 gam1 jat6 ding6 hai6 ting1 jat6 heoi3 sik6 faan6 aa3',cn:'我们今天还是明天去吃饭',a:'cy12_1'},
    {hk:'我而家上緊堂',jy:'ngo5 ji4 gaa1 soeng5 gan2 tong4',cn:'我在上课',a:'cy12_2'},
    {hk:'我啱啱食完早餐',jy:'ngo5 ngaam1 ngaam1 sik6 jyun4 zou2 caan1',cn:'我刚吃完早餐',a:'cy12_3'},
    {hk:'你頭先喺度做緊咩啊',jy:'nei5 tau4 sin1 hai2 dou6 zou6 gan2 me1 aa3',cn:'你刚才在干嘛',a:'cy12_4'},
    {hk:'你前一排忙緊啲咩',jy:'nei5 cin4 jat1 paai4 mong4 gan2 di1 me1',cn:'你前阵子在忙啥',a:'cy12_5'},
    {hk:'我哋嗰陣經常去公園玩',jy:'ngo5 dei6 go2 zan2 ging1 soeng4 heoi3 gung1 jyun2 waan2',cn:'我们那时候常去公园玩',a:'cy12_6'},
    {hk:'我以前好鍾意食麵㗎',jy:'ngo5 ji5 cin4 hou2 zung1 ji3 sik6 min6 gaa3',cn:'我以前很喜欢吃面（鍾意=喜欢）',a:'cy12_7'},
  ]},

// ㉑ 方位词
{ id:'cy13', num:'㉑', name:'方位词（便）', desc:'上/下/出/入/前/后 + 便（口语最常用）',
  cards:[
    {hk:'我本書擺咗喺上便，又好似喺下便',jy:'ngo5 bun2 syu1 baai2 zo2 hai2 soeng6 bin6, jau6 hou2 ci5 hai2 haa6 bin6',cn:'我的书放在上边，又好像在下边',a:'cy13_1'},
    {hk:'出便點解咁嘈嘅',jy:'ceot1 bin6 dim2 gaai2 gam3 cou4 ge3',cn:'外面为什么这么吵',a:'cy13_2'},
    {hk:'我唔想同你嘈',jy:'ngo5 m4 soeng2 tung4 nei5 cou4',cn:'我不想跟你吵',a:'cy13_3'},
    {hk:'可樂喺冰箱入邊',jy:'ho2 lok6 hai2 bing1 soeng1 jap6 bin6',cn:'可乐在冰箱里面',a:'cy13_4'},
    {hk:'前便好多人排隊',jy:'cin4 bin6 hou2 do1 jan4 paai4 deoi2',cn:'前面好多人排队',a:'cy13_5'},
    {hk:'後便有一架車',jy:'hau6 bin6 jau5 jat1 gaa3 ce1',cn:'后面有一辆车',a:'cy13_6'},
    {hk:'本書喺我左手邊定係右手邊',jy:'bun2 syu1 hai2 ngo5 zo2 sau2 bin1 ding6 hai6 jau6 sau2 bin1',cn:'书在我左手边还是右手边',a:'cy13_7'},
  ]},

// ㉒ 代词系统（第二课重点）
{ id:'pron', num:'㉒', name:'代词系统（课02）', desc:'人称/指示/疑问 三套搭法',
  cards:[
    {hk:'我哋',jy:'ngo5 dei6',cn:'我们（+哋 dei6=们）'},
    {hk:'你哋',jy:'nei5 dei6',cn:'你们'},
    {hk:'佢哋',jy:'keoi5 dei6',cn:'他们'},
    {hk:'呢個',jy:'ni1 go3',cn:'这个'},
    {hk:'呢度',jy:'ni1 dou6',cn:'这里'},
    {hk:'呢啲',jy:'ni1 di1',cn:'这些'},
    {hk:'嗰個',jy:'go2 go3',cn:'那个'},
    {hk:'嗰度',jy:'go2 dou6',cn:'那里'},
    {hk:'嗰啲',jy:'go2 di1',cn:'那些'},
    {hk:'邊個',jy:'bin1 go3',cn:'哪个 / 谁'},
    {hk:'邊度',jy:'bin1 dou6',cn:'哪里'},
    {hk:'邊啲',jy:'bin1 di1',cn:'哪些'},
    {hk:'乜嘢',jy:'mat1 je5',cn:'什么（=咩）'},
    {hk:'咩',jy:'me1',cn:'什么（口语最常用）'},
    {hk:'點樣',jy:'dim2 joeng2',cn:'怎么样'},
    {hk:'點解',jy:'dim2 gaai2',cn:'为什么'},
  ]},

];
