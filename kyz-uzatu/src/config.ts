// ВСЁ, что нужно менять — здесь. Тексты можно переписать на русский или любой язык.
export const config={
 bride:'Камила', brideGen:'Камиланың',            // демо; brideGen — имя в родительном падеже («…ның/…нің»)
 hosts:'СЕРІК - НҰРЖАМАЛ',
 eventISO:'2026-12-05T16:00:00+05:00', timeZone:'Asia/Almaty',   // дата, время, часовой пояс
 city:'КӨКШЕТАУ ҚАЛАСЫ', address:'Нұрсұлтан Назарбаев даңғылы, 1 д', venue:'«Aq Mol» мейрамханасы',
 lat:null as number|null, lng:null as number|null,   // точные координаты (необязательно): если заданы, карты откроют именно их
 link2gis:'', linkGoogle:'',                          // или вставьте готовые ссылки на заведение из 2GIS / Google Maps
 guestsLine:'АҒАЙЫН-ТУЫС, БАУЫРЛАР, ҚҰДА-ЖЕКЖАТ, НАҒАШЫ-ЖИЕН, БӨЛЕЛЕР, ҚҰРБЫ-ҚҰРДАС, ДОС-ЖАРАНДАР, ӘРІПТЕСТЕР, КӨРШІЛЕР!',
 invite:['СІЗДЕРДІ АЯУЛЫ ҚЫЗЫМЫЗ','{GEN}','ҚЫЗ ҰЗАТУ ТОЙЫНА АРНАЛҒАН АҚ ДАСТАРХАНЫМЫЗДЫҢ ҚАДІРЛІ ҚОНАҒЫ БОЛУҒА ШАҚЫРАМЫЗ!'],
 closing:'КЕЛІҢІЗДЕР, ҚУАНЫШЫМЫЗДЫҢ ҚАДІРМЕНДІ ҚОНАҒЫ БОЛЫҢЫЗДАР!',
 schedule:[['15:00','ҚОНАҚТАРДЫҢ ЖИНАЛУЫ'],['15:30','ФУРШЕТ'],['16:00','ТОЙДЫҢ БАСТАЛУЫ']],
 photos:{hero:'/images/hero.jpg',bg1:'/images/bg-1.jpg',bg2:'/images/bg-2.jpg',bg3:'/images/bg-3.jpg',bg4:'/images/bg-4.jpg',bg5:'/images/bg-5.jpg',bg6:'/images/bg-6.jpg',flowers:'/images/flowers.png'},  // файлы в public/images
 music:'/music/moldanazar-mahabbatym_vhL5KnMe.mp3.mp3',
 contacts:[['Отбасы','+7 000 000 00 00 (демо)']],
 // Google Forms: заполните formId и entry-идентификаторы (см. README). Пока пусто — форма честно сообщит, что не настроена.
 rsvp:{formId:'1FAIpQLSdUwy9HL2TpdYYKZbIrPUIsEDYq3JDmiH-QoTc6tp01cR_GDA',entries:{name:'entry.237180448',attending:'entry.124821364'},options:['Иә, келемін','Жұбайыммен келемін','Өкінішке орай қатыса алмаймын']}
}
const parts=new Intl.DateTimeFormat('en-CA',{timeZone:config.timeZone,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(config.eventISO)).split('-')
export const dateNum=`${parts[2]} | ${parts[1]} | ${parts[0]}`
export const timeStart=new Intl.DateTimeFormat('ru',{timeZone:config.timeZone,hour:'2-digit',minute:'2-digit'}).format(new Date(config.eventISO))
