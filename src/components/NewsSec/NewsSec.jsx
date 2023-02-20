import costaRicaBag from '../../assets/coffe/costaRicaBag.png'
import colombiaBag from '../../assets/coffe/colombiaBag.png'
import laosBag from '../../assets/coffe/laosBag.png'
import etiopiaBag from '../../assets/coffe/etiopiaBag.png'
import rightArrow from '../../assets/icons/rightArrow.png'
import { CoffeCard } from '../CoffeCard/CoffeCard'
import { ExtraLink } from '../ExtraLink/ExtraLink'
import { CoffeList } from '../CoffeList/CoffeList'

export const NewsSec = () => {
    return (
        <section className="flex flex-col p-10 gap-10 justify-center " id="news">
            <h2 className="text-2xl font-medium text-green text-center">Novedades</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">




                <CoffeList quantity={4}/>
                {/* <CoffeCard img={costaRicaBag} name='Costa Rica Tarrazú' price='9,00€' />
                <CoffeCard img={colombiaBag} name='Colombia Los Naranjos' price='9,00€' />
                <CoffeCard img={laosBag} name='Laos Amanecer' price='9,00€' />
                <CoffeCard img={etiopiaBag} name='Etiopía Yrgacheff' price='9,00€' /> */}
            </div>
            <ExtraLink text='Ver todo' color='' url='/store' />
        </section>
    )
}
