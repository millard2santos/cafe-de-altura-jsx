import { ExtraLink } from '../ExtraLink/ExtraLink'
import { CoffeList } from '../CoffeList/CoffeList'

export const NewsSec = () => {
    
    return (
        <section className="flex flex-col p-10 gap-10 justify-center " id="news">
            <h2 className="text-2xl font-medium text-green text-center">Novedades</h2>
            <div className="flex justify-center items-center flex-wrap gap-6">
                <CoffeList quantity={4}/>
            </div>
            <ExtraLink text='Ver todo' color='' url='/store' />
        </section>
    )
}
