import { ConditionCard } from '../ConditionCard/ConditionCard'

export const ThreeCardsSec = () => {
    return (
        <section className="three-card flex flex-col justify-center items-center gap-6 p-12 bg-backgroundImg bg-cover bg-center">
            <h4 className=" font-medium text-2xl text-white">Café con las mejores condiciones</h4>
            <div className="hold-cards flex gap-6 ">
                <ConditionCard img='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/taskCard.png?alt=media&token=41ad89f8-9751-4483-8d55-3c91cf3c7f8e' text0='Recibe tu pedido sin preocuparte' text1='Tienes cosas mas importantes en la cabeza, por eso con nuestra suscripción de café, nunca te quedarás sin tu taza de la mañana' />
                <ConditionCard img='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/truckCard.png?alt=media&token=1c7f03e4-8c90-4a03-9d69-7a9915516403' text0='Envío en 24/48h' text1='Pide tu café antes de las 12h y lo recibirás al dia siguiente.' />
                <ConditionCard img='https://firebasestorage.googleapis.com/v0/b/cafe-de-altura-react.appspot.com/o/giftCard.png?alt=media&token=1b783e72-7b35-4dd4-8073-0fd7cb6cb05d' text0='Descuentos y beneficios' text1='Cada dos meses, te regalamos una bolsa de un nuevo origen sorpresa, para que lo descubras junto a nosotros.' />
            </div>
        </section>
    )
}
