import { Link } from 'react-router-dom'
import type { Store } from '../../lib/types'
export default function Footer({store}:{store:Store}){return <footer className="footer"><div className="container footer-grid">
 <div><div className="brand footer-brand"><span>EP</span><div><b>{store.settings.professionalName}</b><small>{store.settings.subtitle}</small></div></div><p>Educação Física com acompanhamento individual, clareza e consistência.</p></div>
 <div><b>Navegação</b><Link to="/agendar">Agendar</Link><Link to="/tea">Atendimento adaptado — TEA</Link><Link to="/avaliacoes">Avaliações</Link></div>
 <div><b>Contato</b><p>{store.settings.instagram}</p><p>{store.settings.whatsapp||'WhatsApp a configurar'}</p><p>{store.settings.email||'E-mail a configurar'}</p></div>
 </div><div className="container footer-bottom">© 2026 {store.settings.professionalName}. Conteúdo demonstrativo editável no painel. <Link to="/admin">Admin</Link></div></footer>}
