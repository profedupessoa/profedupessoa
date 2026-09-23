import { seed } from '../data/seed'
import type { Store } from './types'
const KEY='edu-pessoa-performance-v6'
const clone=<T,>(v:T):T=>JSON.parse(JSON.stringify(v))
function migrate(data:any):Store{
  const base=clone(seed) as any
  const merged={...base,...data}
  merged.settings={...base.settings,...(data?.settings||{})}
  merged.whatsappTemplates={...base.whatsappTemplates,...(data?.whatsappTemplates||{})}
  merged.anamneses=Array.isArray(data?.anamneses)?data.anamneses:base.anamneses
  merged.physicalAssessments=Array.isArray(data?.physicalAssessments)?data.physicalAssessments:base.physicalAssessments
  merged.clients=Array.isArray(data?.clients)?data.clients:base.clients
  merged.services=Array.isArray(data?.services)?data.services:base.services
  merged.appointments=Array.isArray(data?.appointments)?data.appointments:base.appointments
  merged.reviews=Array.isArray(data?.reviews)?data.reviews:base.reviews
  merged.workouts=Array.isArray(data?.workouts)?data.workouts:base.workouts
  merged.attendances=Array.isArray(data?.attendances)?data.attendances:base.attendances
  merged.plans=Array.isArray(data?.plans)?data.plans:base.plans
  merged.payments=Array.isArray(data?.payments)?data.payments:base.payments
  merged.faqs=Array.isArray(data?.faqs)?data.faqs:base.faqs
  merged.results=Array.isArray(data?.results)?data.results:base.results
  return merged as Store
}
export function getStore():Store{
  const raw=localStorage.getItem(KEY)
  if(!raw){localStorage.setItem(KEY,JSON.stringify(seed));return clone(seed)}
  try{const upgraded=migrate(JSON.parse(raw));localStorage.setItem(KEY,JSON.stringify(upgraded));return upgraded}catch{return clone(seed)}
}
export function setStore(store:Store){localStorage.setItem(KEY,JSON.stringify(store));window.dispatchEvent(new Event('edu-store-change'))}
export function resetStore(){localStorage.setItem(KEY,JSON.stringify(seed));window.dispatchEvent(new Event('edu-store-change'))}
export function uid(prefix='id'){return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}
