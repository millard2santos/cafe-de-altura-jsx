import giftCard from '../../assets/icons/giftCard.png'
import truckCard from '../../assets/icons/truckCard.png'
import taskCard from '../../assets/icons/taskCard.png'
import { ConditionCard } from '../ConditionCard/ConditionCard'

export const ThreeCardsSec = () => {
    return (
        <section className="three-card flex flex-col justify-center items-center gap-6 p-12 bg-backgroundImg bg-cover bg-center">
            <h4 className=" font-medium text-2xl text-white">Café con las mejores condiciones</h4>
            <div className="hold-cards flex gap-6 ">
                <ConditionCard img={taskCard} text0='Recibe tu pedido sin preocuparte' text1='Tienes cosas mas importantes en la cabeza, por eso con nuestra
                    suscripción de café, nunca te
                    quedarás sin tu taza de la mañana' />
                <ConditionCard img={truckCard} text0='Envío en 24/48h' text1='Pide tu café antes de las 12h y lo recibirás al dia siguiente.' />
                <ConditionCard img={giftCard} text0='Descuentos y beneficios' text1='Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para
                        que lo descubras junto a
                        nosotros.' />
            </div>
        </section>
    )
}
