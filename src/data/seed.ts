import type { Store } from '../lib/types'

export const seed: Store = {
  services: [
    {id:'personal',name:'Personal Trainer',description:'Acompanhamento individual com planejamento progressivo e foco nos seus objetivos.',duration:60,price:0,showPrice:false,active:true},
    {id:'avaliacao',name:'Avaliação inicial',description:'Primeiro encontro para entender rotina, objetivos, histórico de movimento e próximos passos.',duration:60,price:0,showPrice:false,active:true},
    {id:'condicionamento',name:'Condicionamento & Mobilidade',description:'Treino orientado para capacidade física, mobilidade, força e qualidade de movimento.',duration:60,price:0,showPrice:false,active:true},
    {id:'tea',name:'Atividade Física Adaptada — TEA',description:'Acompanhamento de Educação Física individualizado para crianças no espectro autista, com abordagem acolhedora e respeitosa.',duration:50,price:0,showPrice:false,active:true,tea:true}
  ],
  anamneses: [
    {id:'ana-demo-1',clientId:'c1',createdAt:'2026-09-03T18:00:00',updatedAt:'2026-09-03T18:30:00',status:'Finalizada',objective:'Melhorar condicionamento e ganhar constância.',activityHistory:'Praticou musculação de forma irregular.',injuries:'Nenhuma relatada.',surgeries:'Nenhuma relatada.',pain:'Sem dor no momento.',medications:'Não informado.',sleep:'6 a 7 horas por noite.',routine:'Trabalho em horário comercial.',weeklyAvailability:'3x por semana.',observations:'Ficha demonstrativa.',parqNotes:'Exemplo para teste local.',syncedToGoogle:false,googleSyncStatus:'Não configurado',version:1}
  ],
  physicalAssessments: [
    {id:'pa-demo-1',clientId:'c1',date:'2026-09-03',weight:78,height:1.76,bmi:25.18,waist:88,hip:100,chest:102,armRight:34,armLeft:33.5,thighRight:57,thighLeft:56.5,notes:'Avaliação demonstrativa.'}
  ],
  appointments: [
    {id:'demo-1',client:'Cliente exemplo 01',phone:'21999990001',serviceId:'personal',date:'2026-09-04',time:'14:00',status:'Pendente',source:'Instagram',goal:'Condicionamento',createdAt:'2026-09-03T20:00:00'},
    {id:'demo-2',client:'Cliente exemplo 02',phone:'21999990002',serviceId:'avaliacao',date:'2026-09-05',time:'10:00',status:'Aprovado',source:'Indicação',createdAt:'2026-09-02T19:00:00'},
    {id:'demo-3',client:'Responsável exemplo',phone:'21999990003',serviceId:'tea',date:'2026-09-06',time:'09:00',status:'Pendente',source:'Instagram',guardian:'Responsável exemplo',child:'Criança exemplo',childAge:'7',createdAt:'2026-09-03T18:00:00'}
  ],
  reviews: [
    {id:'rev-1',name:'Avaliação demonstrativa',rating:5,comment:'Este é um depoimento de demonstração do layout. Substitua por uma avaliação real aprovada.',status:'Aprovada',featured:true,demo:true,createdAt:'2026-09-01'},
    {id:'rev-2',name:'Avaliação demonstrativa',rating:5,comment:'Exemplo visual para mostrar como as avaliações aparecerão no site.',status:'Aprovada',featured:true,demo:true,createdAt:'2026-09-02'}
  ],
  clients: [
    {id:'c1',name:'Cliente exemplo 01',phone:'21999990001',email:'cliente01@exemplo.local',source:'Instagram',tags:['Novo'],notes:'',birthDate:'1993-05-18',age:33,address:'Endereço demonstrativo',neighborhood:'Bairro exemplo',profession:'Profissão exemplo',status:'Ativo',startDate:'2026-09-01',emergencyContact:'Contato exemplo'},
    {id:'c2',name:'Cliente exemplo 02',phone:'21999990002',source:'Indicação',tags:['Recorrente'],notes:'',age:29,status:'Ativo',startDate:'2026-08-10'},
    {id:'c3',name:'Responsável exemplo',phone:'21999990003',source:'Instagram',tags:['Responsável TEA'],notes:'',status:'Ativo',startDate:'2026-09-02'}
  ],

  workouts:[{id:'wk1',clientId:'c1',title:'Treino Full Body',label:'A',createdAt:'2026-09-03T12:00:00',updatedAt:'2026-09-03T12:00:00',active:true,version:1,notes:'Treino demonstrativo.',exercises:[{id:'e1',name:'Agachamento',muscle:'Pernas',sets:'3',reps:'10',load:'20 kg',rest:'60s',cadence:'Controlada',order:1}]}],
  attendances:[{id:'at1',clientId:'c1',date:'2026-09-02',status:'Compareceu'}],
  plans:[{id:'pl1',name:'Plano Start',sessions:8,price:249.90,durationDays:30,active:true,published:true,featured:false,description:'Ideal para começar com acompanhamento próximo.',promoText:'8 aulas por mês',ctaText:'Quero este plano'},{id:'pl2',name:'Plano Performance',sessions:12,price:349.90,durationDays:30,active:true,published:true,featured:true,description:'Mais frequência, ajustes e constância.',promoText:'Mais escolhido',ctaText:'Quero evoluir'}],
  payments:[{id:'pay1',clientId:'c1',planId:'pl1',dueDate:'2026-09-10',amount:0,status:'Pendente'}],
  availability: {
    'Segunda':{enabled:true,start:'08:00',end:'20:00',interval:60},
    'Terça':{enabled:true,start:'08:00',end:'20:00',interval:60},
    'Quarta':{enabled:true,start:'08:00',end:'20:00',interval:60},
    'Quinta':{enabled:true,start:'08:00',end:'20:00',interval:60},
    'Sexta':{enabled:true,start:'08:00',end:'20:00',interval:60},
    'Sábado':{enabled:true,start:'08:00',end:'13:00',interval:60},
    'Domingo':{enabled:false,start:'08:00',end:'12:00',interval:60}
  },
  blockedDates: [],
  settings: {
    professionalName:'Edu Pessoa',subtitle:'Performance • Saúde • Movimento',
    heroTitle:'Treino personalizado para evoluir com segurança, constância e propósito.',
    heroText:'Acompanhamento individual, planejamento inteligente e uma experiência de treino construída ao redor de você.',
    bio:'Conte aqui a história profissional, filosofia de trabalho e forma de atendimento do Edu. Este texto é editável pelo painel administrativo.',
    education:'Preencher formação e especializações',cref:'CREF 000000-G/RJ — DEMONSTRATIVO',instagram:'@profedupessoa',whatsapp:'',email:'',address:'',
    showPrices:false,pendingAlertHours:12,googleCalendarConnected:false,googleSheetsConnected:false,googleDocsConnected:false,cancellationHours:12,accent:'#90f000',signatureName:'Eduardo Pessoa',heroImage:'',aboutImage:'',teaImage:'',documentLogo:'',documentSignature:''
  },
  whatsappTemplates:{
    approved:'Olá, {nome}! Tudo bem? Seu horário para {servico} foi confirmado para {data}, às {hora}. Qualquer imprevisto, me avise por aqui. Te espero! 💪',
    rejected:'Olá, {nome}! Obrigado pelo contato. Não vou conseguir atender no horário de {data}, às {hora}. Posso te ajudar a encontrar outro horário.',
    reschedule:'Olá, {nome}! Preciso ajustar o horário de {servico}. Podemos combinar uma nova data/horário?',
    documentReady:'Oi, {nome}! Tudo bem? Sua {documento} já está pronta. Estou te enviando por aqui. Qualquer dúvida, me chama.',
    workoutReady:'Oi, {nome}! Tudo bem? Sua série de treino já está pronta. Estou te enviando por aqui. Se precisar de algum ajuste, me chama.'
  },
  faqs:[
    {id:'f1',q:'Preciso já ter experiência com treino?',a:'Não. O planejamento pode ser adaptado ao seu nível atual e evolui de forma progressiva.'},
    {id:'f2',q:'Como funciona o primeiro encontro?',a:'O primeiro contato serve para entender objetivos, rotina, histórico de movimento e definir o plano de acompanhamento.'},
    {id:'f3',q:'O atendimento para crianças com TEA é terapia?',a:'Não. É um acompanhamento de Educação Física e atividade física adaptada. Não substitui atendimento médico, psicológico, fisioterapêutico ou outras terapias.',tea:true}
  ],
  results:[
    {id:'r1',title:'História de evolução — exemplo',text:'Área demonstrativa para apresentar evolução autorizada de alunos sem criar resultados falsos.',consent:true,demo:true}
  ]
}
