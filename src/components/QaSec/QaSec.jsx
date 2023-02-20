
import { ExtraLink } from '../ExtraLink/ExtraLink'
import { QaCard } from '../QaCard/QaCard'

export const QaSec = () => {
    return (
        <section className="qa bg-green py-12 px-[306px]">
            <div className="flex flex-col justify-center items-center gap-4 text-white">
                <h2 className="font-semibold mb-8 text-2xl">Preguntas frecuentes</h2>
                <QaCard text0='¿Cómo hago el pedido?' text1='Selecciona el café que desees probar y completa el proceso de compra. Si lo
                        prefieres, te
                        preguntaremos cada cuanto quieres que te lo mandemos a casa y asi nunca te quedarás sin café.' />
                <QaCard text0='¿Por qué los precios son tan bajos?' text1='Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                        exigentes. Si
                        podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                        intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos
                        de
                        café recibe el mayor beneficio posible' />
                <QaCard text0='¿Es posible enviar café a mi oficina?' text1='Viajamos constantemente para encontrar los mejores granos y a los agricultores más
                        exigentes. Si
                        podemos ofrecerte estos precios es porque tratamos directamente con los productores de café, sin
                        intermediarios. Así obtenemos el mejor precio para ti y la persona que está detrás de los granos
                        de
                        café recibe el mayor beneficio posible.' />
                
                <ExtraLink text='Resolvemos tus dudas' color='text-white' url='/' />
            </div>
        </section>
    )
}
