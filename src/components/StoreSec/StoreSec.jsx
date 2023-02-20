import { CoffeList } from "../CoffeList/CoffeList"


export const StoreSec = () => {


  return (
    <section className="flex flex-col p-10 gap-10 justify-center" id="news">
        <h2 className="text-2xl font-medium text-green text-center">Últimos orígenes</h2>
        <div className="flex justify-center items-center flex-wrap gap-6">
            
            
            
            <CoffeList quantity={8} />
            
            
            
            
        </div>
    </section>
  )
}
