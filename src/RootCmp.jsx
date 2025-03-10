import { AppHeader } from './cmps/AppHeader.jsx'
import { Introduction } from './cmps/Introduction.jsx'
import { CustomersCritique } from './cmps/CustomersCritique.jsx'
import { BeforeAfter } from './cmps/BeforeAfter.jsx'
import { HowItWorks } from './cmps/HowItWorks.jsx'

export function RootCmp() {
  return (
    <main className='main-layout main'>
      <AppHeader />
      <section className='content'>
        <Introduction />
        {/* Add your child components or routes here */}
        <BeforeAfter />
        <HowItWorks />
        <CustomersCritique />
      </section>
    </main>
  )
}
