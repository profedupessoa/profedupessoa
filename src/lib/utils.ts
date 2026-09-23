import type { Store } from './types'
export const serviceName=(store:Store,id:string)=>store.services.find(s=>s.id===id)?.name||id
export const ptDate=(date:string)=>date?new Date(date+'T12:00:00').toLocaleDateString('pt-BR'):''
export const fillTemplate=(tpl:string,data:Record<string,string>)=>Object.entries(data).reduce((s,[k,v])=>s.replaceAll(`{${k}}`,v||''),tpl)
export const whatsappUrl=(phone:string,msg:string)=>{
 const digits=(phone||'').replace(/\D/g,'')
 const normalized=digits.startsWith('55')?digits:`55${digits}`
 return `https://wa.me/${normalized}?text=${encodeURIComponent(msg)}`
}
export const downloadCSV=(filename:string, rows:any[])=>{
 if(!rows.length)return
 const headers=Object.keys(rows[0])
 const esc=(v:any)=>`"${String(v??'').replaceAll('"','""')}"`
 const csv=[headers.join(','),...rows.map(r=>headers.map(h=>esc(r[h])).join(','))].join('\n')
 const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'})
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();URL.revokeObjectURL(a.href)
}

export async function exportWorkbook(filename:string, store:any){
  const XLSX = await import('xlsx')
  const wb = XLSX.utils.book_new()
  const clients = store.clients.map((c:any)=>({ID:c.id,Nome:c.name,Idade:c.age??'',Nascimento:c.birthDate??'',WhatsApp:c.phone,Email:c.email??'',Endereço:c.address??'',Bairro:c.neighborhood??'',Profissão:c.profession??'',Status:c.status??'',Origem:c.source,Tags:(c.tags||[]).join(' | '),'Data de início':c.startDate??'','Contato emergência':c.emergencyContact??'',Observações:c.notes??''}))
  const ana = store.anamneses.map((a:any)=>({ID:a.id,'Aluno ID':a.clientId,Aluno:store.clients.find((c:any)=>c.id===a.clientId)?.name??'',Status:a.status,Versão:a.version,'Criada em':a.createdAt,'Atualizada em':a.updatedAt,Objetivo:a.objective,'Histórico de atividade':a.activityHistory,Lesões:a.injuries,Cirurgias:a.surgeries,Dores:a.pain,Medicamentos:a.medications,Sono:a.sleep,Rotina:a.routine,'Disponibilidade semanal':a.weeklyAvailability,Observações:a.observations,'PAR-Q / Notas':a.parqNotes,'Status Google':a.googleSyncStatus,'Última sincronização':a.lastGoogleSync??''}))
  const assessments = store.physicalAssessments.map((a:any)=>({ID:a.id,'Aluno ID':a.clientId,Aluno:store.clients.find((c:any)=>c.id===a.clientId)?.name??'',Data:a.date,Peso:a.weight??'',Altura:a.height??'',IMC:a.bmi??'','% gordura':a.bodyFat??'',Cintura:a.waist??'',Quadril:a.hip??'',Tórax:a.chest??'','Braço D':a.armRight??'','Braço E':a.armLeft??'','Coxa D':a.thighRight??'','Coxa E':a.thighLeft??'','FC repouso':a.restingHr??'','Pressão arterial':a.bloodPressure??'',Observações:a.notes??''}))
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(clients),'Alunos')
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(ana),'Anamneses')
  XLSX.utils.book_append_sheet(wb,XLSX.utils.json_to_sheet(assessments),'Avaliações Físicas')
  XLSX.writeFile(wb,filename)
}
export function downloadJSON(filename:string,data:any){
  const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'})
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;a.click();URL.revokeObjectURL(a.href)
}

export function fileToDataUrl(file:File){return new Promise<string>((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(String(r.result||''));r.onerror=()=>reject(r.error);r.readAsDataURL(file)})}
