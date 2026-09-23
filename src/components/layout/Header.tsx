import { Menu, X, Instagram } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Store } from '../../lib/types'
export default function Header({store}:{store:Store}){
 const [open,setOpen]=useState(false)
 const nav=[['Início','/'],['Sobre','/#sobre'],['Serviços','/#servicos'],['TEA','/tea'],['Avaliações','/avaliacoes'],['FAQ','/#faq']]
 return <header className="header">
  <div className="container nav">
   <Link to="/" className="brand"><span>EP</span><div><b>{store.settings.professionalName}</b><small>{store.settings.subtitle}</small></div></Link>
   <nav className={open?'navlinks open':'navlinks'}>{nav.map(([n,u])=><a key={n} href={u} onClick={()=>setOpen(false)}>{n}</a>)}<a href={`https://instagram.com/${store.settings.instagram.replace('@','')}`} target="_blank"><Instagram size={18}/></a></nav>
   <div className="nav-actions"><Link className="btn btn-primary" to="/agendar">Agendar horário</Link><button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  </div>
 </header>
}