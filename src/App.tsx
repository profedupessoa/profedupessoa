import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Booking from './pages/Booking'
import Tea from './pages/Tea'
import Reviews from './pages/Reviews'
import Admin from './pages/Admin'
import { useEffect, useState } from 'react'
import { getStore } from './lib/storage'
import type { Store } from './lib/types'

export default function App(){
 const [store,setStoreState]=useState<Store>(getStore())
 useEffect(()=>{const fn=()=>setStoreState(getStore());window.addEventListener('edu-store-change',fn);window.addEventListener('storage',fn);return()=>{window.removeEventListener('edu-store-change',fn);window.removeEventListener('storage',fn)}},[])
 return <Routes>
   <Route path="/" element={<Home store={store}/>}/>
   <Route path="/agendar" element={<Booking store={store}/>}/>
   <Route path="/tea" element={<Tea store={store}/>}/>
   <Route path="/avaliacoes" element={<Reviews store={store}/>}/>
   <Route path="/admin" element={<Admin store={store} refresh={()=>setStoreState(getStore())}/>}/>
   <Route path="*" element={<Home store={store}/>}/>
 </Routes>
}
