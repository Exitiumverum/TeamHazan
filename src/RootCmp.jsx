import { AppHeader } from './cmps/AppHeader.jsx'
import { Introduction } from './cmps/Introduction.jsx'
import { CustomersCritique } from './cmps/CustomersCritique.jsx'

export function RootCmp() {
  return (
    <main className='main-layout main'>
      <AppHeader />
      <section className='content'>
        <Introduction />
        {/* Add your child components or routes here */}
        <CustomersCritique />
      </section>
    </main>
  )
}
